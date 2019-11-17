import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Error } from '../error';
import { handleSetError, hasErrors } from '../../helpers';
import styles from './styles.module.css';

const InputIcon = ({ type }) => (
  <Icon className={styles.icon} type={type} />
);

class LoginContent extends Component {
  state = {
    isLoading: false,
    error: null
  }

  render () {
    const { form } = this.props;
    const { isLoading, error } = this.state;
    const { getFieldDecorator, getFieldsError } = form;

    return (
      <Form onSubmit={this.handleLoginSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Пожалуйста введите имя пользователя' }]
          })(
            <Input
              prefix={<InputIcon type="user" />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Пожалуйста введите пароль' }]
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

    this.setState({
      isLoading: true
    }, () => {
      form.validateFields((err, formData) => {
        if (!err) {
          console.log('Received values of login-form: ', formData);

          onSubmit(formData)
            .then(({ error, data }) => {
              if (error) {
                handleSetError(form, error);
              }

              this.setState({
                error,
                data,
                isLoading: false
              });

              return data;
            })
            .catch(error => {
              this.setState({
                error,
                isLoading: false
              });
            });
        }
      });
    });
  }
};

export default Form.create()(LoginContent);
