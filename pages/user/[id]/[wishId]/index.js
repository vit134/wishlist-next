import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { Row, Col, Card, Typography } from 'antd';
import { Image } from 'components/image';
import { wishByIdRequest } from 'requests';

const { Title } = Typography;

const SingleWishPage = (props) => {
  const { wish = {}, user = {} } = props;
  const { data } = wish;
  const error = null;

  if (error) {
    return (
      <div>
        Ничего не найдено
      </div>
    );
  }

  return (
    <Row>
      <Card>
        <Row>
          <Col xs={6} md={4}>
            <Image src={data.image} />
          </Col>
          <Col>
            <div>
              <Title level={2}>{ data.name }</Title>
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
      </Card>
    </Row>
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
