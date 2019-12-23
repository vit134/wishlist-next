import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, DatePicker, Button, Divider, Radio } from 'antd';
import moment from 'moment';
import { userUpdate } from 'domains/root/operations/user';
import { openLoginPopup } from 'domains/root/actions/login-popup';
import { selectUserData } from 'domains/root/selectors/user-login';
import DynamicFieldSet from './components/dynamic-birthday';
import { PhoneInput } from './components/phone-input';
import { getNumbersPhone } from 'helpers';
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

// const handleChangeFormFields = (props, changedFields, allFields) => {
//   console.log(allFields);
// };

// const phoneRegExp = new RegExp(/^((8|\+7)[[ ])([(]\d{3}[)][ ])(\d{3}[-])(\d{2})([-]\d{2})/g);

class ProfilePanelForm extends React.Component {
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
          <Form.Item label='Пол'>
            {getFieldDecorator('gender', {
              initialValue: user.gender,
            })(
              <Radio.Group>
                <Radio.Button value="m">Мужской</Radio.Button>
                <Radio.Button value="w">Женский</Radio.Button>
                <Radio.Button value="n">Не важно</Radio.Button>
              </Radio.Group>
            )}
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
            })(
              <PhoneInput mask="+7 (999) 999-99-99" allowClear />
            )}
          </Form.Item>
          <Divider>Праздники</Divider>
          <DynamicFieldSet form={form} initial={user.holidays} />
          <Divider />
          <div className={styles['form-footer']}>
            <Button htmlType='submit'>Сохранить</Button>
          </div>
        </Form>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form, userUpdate } = this.props;

    form.validateFields((err, formData) => {
      if (!err) {
        const data = form.getFieldsValue();
        data.phone = getNumbersPhone(data.phone);
        data.holidays = data.holidays || [];
        userUpdate(data);
      }
    });
  }
};

const ProfilePanel = Form.create({
  name: 'profile-settings',
  // onFieldsChange: handleChangeFormFields,
})(ProfilePanelForm);

const mapStateToProps = state => ({
  user: selectUserData(state),
});

const mapDispatchToProps = {
  userUpdate: userUpdate,
  openLoginPopup: openLoginPopup,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePanel);
