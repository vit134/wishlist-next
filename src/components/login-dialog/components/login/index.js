import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Error } from '../error';
import { getErrors, hasErrors } from '../../helpers';
import styles from './styles.module.css';

const InputIcon = ({ type }) => (
  <Icon className={styles.icon} type={type} />
);

class LoginContent extends Component {
  render () {
    const { form, isLoading, error } = this.props;
    const { getFieldDecorator, getFieldsError } = form;

    const {
      username: userNameErrors,
      password: passwordErrors,
    } = getErrors(error, ['username', 'password']);

    return (
      <Form onSubmit={this.handleLoginSubmit}>
        <Form.Item {...userNameErrors}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Пожалуйста введите имя пользователя' }],
          })(
            <Input
              prefix={<InputIcon type="user" />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item {...passwordErrors}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Пожалуйста введите пароль' }],
          })(
            <Input
              prefix={<InputIcon type="lock" />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          disabled={hasErrors(getFieldsError())}
        >
          Войти
        </Button>
        <Error error={error} />
      </Form>
    );
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    const { form, onSubmit } = this.props;

    form.validateFields((err, formData) => {
      if (!err) {
        console.log('Received values of login-form: ', formData);

        onSubmit(formData);
      }
    });
  }
};

export default Form.create()(LoginContent);
