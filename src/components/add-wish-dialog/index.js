import React from 'react';
import { Modal, Form, Icon, Input, Button } from 'antd';

import styles from './styles.less';

class AddWishDialog extends React.Component {
  render () {
    if (!this.props.isOpen) {
      return null;
    }

    const { form, onSubmit, onClose } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal
        bodyStyle={{ paddingRight: '60px' }}
        visible
        footer={null}
        onCancel={onClose}
      >
        <div className={styles.modal}>
          <Form onSubmit={onSubmit}>
            <Form.Item>
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
            <Form.Item>
              {getFieldDecorator('link')(
                <Input
                  name='link'
                  prefix={<Icon type="user" />}
                  placeholder="Ссылка"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('price')(
                <Input
                  prefix={<Icon type="user" />}
                  placeholder="Цена"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('upload')(
                <input type="file" name="image" />
              )}
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Создать
            </Button>
          </Form>
        </div>
      </Modal>
    );
  }
};

export default Form.create()(AddWishDialog);
