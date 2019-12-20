import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { Form, Input, DatePicker, Button, Divider } from 'antd';
import MaskInput from 'mask-input';
import moment from 'moment';
import { selectUserData } from 'domains/root/selectors/user-login';
import DynamicFieldSet from './components/dynamic-birthday';
import styles from './styles.module.css';

moment.locale('ru');

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 19 },
  },
};

const handleChangeFormFields = (props, changedFields, allFields) => {
  console.log(allFields);
};

const phoneRegExp = new RegExp(/^((8|\+7)[[ ])([(]\d{3}[)][ ])(\d{3}[-])(\d{2})([-]\d{2})/g);

const birthdays = [];

class ProfilePanelForm extends React.Component {
  componentDidMount () {
    // eslint-disable-next-line no-unused-vars
    const maskedInput = new MaskInput(this.inputNumber.current.input, {
      mask: '+7 (000) 000-00-00',
      alwaysShowMask: false,
      maskChar: '_',
      onChange: this.handleChangePhoneInput,
    });
  }

  render () {
    const { form, user } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div className={styles.form}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label='Логин'>
            {getFieldDecorator('username', {
              initialValue: user.username,
              rules: [{ required: true, whitespace: true }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label='Имя'>
            {getFieldDecorator('firstname', {
              initialValue: user.firstname,
            })(<Input allowClear />)}
          </Form.Item>
          <Form.Item label='Фамилия'>
            {getFieldDecorator('lastname', {
              initialValue: user.lastname,
            })(<Input allowClear />)}
          </Form.Item>
          <Form.Item label="День рождения">
            {getFieldDecorator('date_of_birth', {
              initialValue: user.date_of_birth && moment(user.date_of_birth),
            })(<DatePicker format='DD MMM YYYY' style={{ width: '100%' }}/>)}
          </Form.Item>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              initialValue: user.email,
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
              ],
            })(<Input allowClear />)}
          </Form.Item>
          <Form.Item label="Телефон">
            {getFieldDecorator('phone', {
              initialValue: user.phone,
              rules: [
                {
                  pattern: phoneRegExp, // eslint-disable-line
                  message: 'Неправильный формат номера телефона',
                }
              ],
            })(
              <Input ref={this.inputNumber} name='phone' onChange={this.handleChangePhoneInput}/>
            )}
          </Form.Item>
          <Divider>Праздники</Divider>
          <DynamicFieldSet form={form} initial={birthdays} />
          <Divider />
          <div className={styles['form-footer']}>
            <Button htmlType='submit'>Сохранить</Button>
          </div>
        </Form>
      </div>
    );
  }

  inputNumber = createRef();

  handleChangePhoneInput = ({ target }) => {
    const { form } = this.props;
    const { setFieldsValue } = form;
    const { value } = target;

    setFieldsValue({
      phone: value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const { form } = this.props;

    form.validateFields((err, formData) => {
      if (!err) {
        console.log(form.getFieldsValue());
      }
    });
  }
};

const ProfilePanel = Form.create({
  name: 'profile-settings',
  onFieldsChange: handleChangeFormFields,
})(ProfilePanelForm);

const mapStateToProps = state => ({
  user: selectUserData(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePanel);
