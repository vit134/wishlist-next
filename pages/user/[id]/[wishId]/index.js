import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { wishByIdRequest } from '../../../../src/requests';

const { Title, Body, Img } = Card;

const SingleWishPage = ({ wish, user }) => {
  const { data, error } = wish;
  const router = useRouter();

  if (error) {
    return (
      <div>
        Ничего не найдено
      </div>
    );
  }

  return (
    <Container fluid>
      <Row>
        <Button onClick={() => router.back()}>Назад</Button>
      </Row>
      <Row>
        <Card>
          <Body>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Img src={data.image} />
                </Col>
                <Col>
                  <div>
                    <Title>{ data.name }</Title>
                  </div>
                  { data.link && (
                    <div>
                      <a href={ data.link }>Ссылка на магазин</a>
                    </div>
                  )}
                  { data.price && (
                    <div>
                      Цена -&nbsp;<CurrencyFormat value={data.price} displayType='text' suffix=' руб.'/>
                    </div>
                  )}
                  { user.data && user.data._id === data.userId._id && (
                    <div>
                      Бронь - { data.assigned ? data.assigned : 'никто' }
                    </div>
                  )}
                </Col>
              </Row>
            </Container>
          </Body>
        </Card>
      </Row>
    </Container>

  );
};

SingleWishPage.getInitialProps = async ({ query }) => {
  let data = {};
  const { wishId } = query;

  if (wishId) {
    try {
      const res = await wishByIdRequest(wishId);
      data = res.data;
    } catch (e) {
      data.err = e;
    }
  }

  return { wish: data };
};

export default SingleWishPage;
