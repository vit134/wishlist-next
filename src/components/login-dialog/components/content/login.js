import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const LoginContent = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Form.Group controlId="login">
      <Form.Label>Логин</Form.Label>
      <Form.Control type="text" name="username" placeholder="Введите ваш логин" />
    </Form.Group>

    <Form.Group controlId="password">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name="password" placeholder="Пароль" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Войти
    </Button>
  </Form>
);
