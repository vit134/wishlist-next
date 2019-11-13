import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import styles from './styles.css';

export const AddWishDialog = ({ isOpen, onSubmit, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal show onHide={onClose} centered>
      <Modal.Body>
        <div className={styles.modal}>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Название</Form.Label>
              <Form.Control type="text" name="name" placeholder="Название" />
            </Form.Group>

            <Form.Group controlId="link">
              <Form.Label>Ссылка</Form.Label>
              <Form.Control type="text" name="link" placeholder="Ссылка" />
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Цена</Form.Label>
              <Form.Control type="number" name="price" placeholder="Цена" />
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Изображение</Form.Label>
              <Form.Control type="file" name="image" placeholder="Изображение" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Создать
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
