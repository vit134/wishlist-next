import React from 'react';
import { Form, Button } from 'react-bootstrap';

const errorMessagesLookup = {
  UserExistsError: 'Пользователь с данным именем пользователя уже зарегистрирован',
  MissingUsernameError: 'Имя пользователя не указано'
};

export const RegContent = ({ onSubmit, formErorrs = {} }) => {
  const isUsernameInvalid = formErorrs.UserExistsError || formErorrs.MissingUsernameError;

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="login">
        <Form.Label>Логин</Form.Label>
        <Form.Control isInvalid={isUsernameInvalid} type="text" name="username" placeholder="Придумайте имя пользователя" />
        <Form.Control.Feedback type="invalid">
          {errorMessagesLookup.UserExistsError || errorMessagesLookup.MissingUsernameError}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" name="email" placeholder="E-mail" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Отправить
      </Button>
    </Form>
  );
};
