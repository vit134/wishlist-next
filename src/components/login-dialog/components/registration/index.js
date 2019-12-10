import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { getErrors, hasErrors } from '../../helpers';
import { Error } from '../error';
import styles from './styles.module.css';

const InputIcon = ({ type }) => (
  <Icon className={styles.icon} type={type} />
);

class RegContent extends Component {
  render () {
    const { form, isLoading, error } = this.props;
    const { getFieldDecorator, getFieldsError } = form;

    const {
      username: userNameErrors,
      password: emailErrors,
    } = getErrors(error, ['username', 'password']);

    return (
      <Form onSubmit={this.handleLoginSubmit}>
        <Form.Item {...userNameErrors}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Пожалуйста введите имя пользователя' }],
          })(
            <Input
              autoComplete="off"
              prefix={<InputIcon type="user" />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item {...emailErrors}>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Пожалуйста укажите адрес электронной почты' }],
          })(
            <Input
              autoComplete="off"
              type='email'
              prefix={<InputIcon type="mail" />}
              placeholder="Email"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Пожалуйста введите пароль' }],
          })(
            <Input.Password
              prefix={<InputIcon type="lock" />}
              autoComplete="off"
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
          Зарегистрироваться
        </Button>
        <Error error={error} />
      </Form>
    );
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    const { form, onSubmit } = this.props;

    this.setState({
      isLoading: true,
    }, () => {
      form.validateFields((err, formData) => {
        if (!err) {
          console.log('Received values of login-form: ', formData);

          onSubmit(formData);
        }
      });
    });
  }
}

export default Form.create()(RegContent);
