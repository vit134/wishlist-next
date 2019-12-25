import React from 'react';
import { Modal, Form, Icon, Input, Button, InputNumber } from 'antd';
import classNames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1558650_55pv4zqptd8.js',
});

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

class AddWishDialog extends React.Component {
  state = {
    fileName: null,
  }

  render () {
    if (!this.props.isOpen) {
      return null;
    }

    const { form, isLoading } = this.props;
    const { getFieldDecorator } = form;
    const { fileName } = this.state;

    return (
      <Modal
        bodyStyle={{ paddingRight: '60px' }}
        visible
        footer={null}
        destroyOnClose
        onCancel={this.handleClose}
      >
        <div>
          <Form onSubmit={this.handleSubmit} {...formItemLayout}>
            <Form.Item label='Название'>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Пожалуйста введите название' }],
              })(
                <Input
                  name='name'
                  prefix={<Icon type="user" />}
                  placeholder="Название"
                />
              )}
            </Form.Item>
            <Form.Item label='Ссылка'>
              {getFieldDecorator('link', {
                rules: [{
                  pattern: new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/), // eslint-disable-line
                  message: 'Неправильный формат ссылки',
                }],
              })(
                <Input
                  name='link'
                  prefix={<Icon type="link" />}
                  placeholder="Ссылка"
                />
              )}
            </Form.Item>
            <Form.Item label='Цена'>
              {getFieldDecorator('price')(
                <InputNumber
                  name='price'
                  formatter={value => value.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$& ')}
                  prefix={<IconFont type="icon-price"/>}
                  placeholder="Цена"
                  style={{ width: '100%' }}
                />
              )}
            </Form.Item>
            <Form.Item label="Изображение">
              <div className={styles['image-block']}>
                <span className={cx('image-preload', { 'has-file': Boolean(fileName) })}>
                  {
                    !fileName
                      ? 'jpeg/png'
                      : fileName
                  }
                </span>
                <label htmlFor="upload" className={styles['image-button']}>Выбрать</label>
              </div>
              {getFieldDecorator('upload')(
                <input type="file" name="image" accept="image/*" />
              )}
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Создать
            </Button>
          </Form>
        </div>
      </Modal>
    );
  }

  handleResetFields = () => {
    this.setState({ fileName: null }, this.props.form.resetFields);
  }

  handleClose = () => {
    const { onClose } = this.props;
    this.handleResetFields();
    onClose();
  }

  handleSubmit = e => {
    e.preventDefault();

    const { form, onSubmit } = this.props;

    form.validateFields((err, formData) => {
      if (!err) {
        console.log(formData);
        const { price } = formData;

        const data = new FormData(e.target);
        if (price) {
          data.set('price', price);
        }
        onSubmit(data);
      }
    });
  }

  handleChangeFile = ({ target }) => {
    const fileName = target.files.length > 0
      ? target.files[0].name
      : null;

    this.setState({ fileName });
  }
};

export default Form.create()(AddWishDialog);
