import React from 'react';
import Link from 'next/link';
import { wishByUserIdRequest, userInfoRequst } from '../../src/requests';
import { getUserName } from '../../src/utils';
import { CardColumns, Card } from 'react-bootstrap';
import './styles.less';

class UserPage extends React.Component {
  static async getInitialProps ({ req, query }) {
    const data = {};
    const userId = query.id;

    console.log(userId);

    if (userId) {
      try {
        const wishesRes = await wishByUserIdRequest(userId);
        const userRes = await userInfoRequst(userId);
        data.wishes = wishesRes.data.data;
        data.user = userRes.data.data;
      } catch (e) {
        data.err = e;
      }
    }

    return { data };
  }

  render () {
    const { wishes = [], user = {} } = this.props.data;

    return (
      <>
        <section>
          <Card>
            <Card.Header>
              {getUserName(user)} ({ wishes.length })
            </Card.Header>
            <Card.Body>
              <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </section>

        <section>
          <CardColumns>
            {
              wishes.map(el => {
                const { _id, image, name, assigned, price } = el;
                return (
                  <Card key={_id}>
                    {image && <Card.Img variant="top" src={image} />}
                    <Card.Body>
                      <Card.Title>{ name }</Card.Title>
                      <Card.Text as='div'>
                        {price && <p>Цена - <b>{ price }</b></p>}
                        {assigned && <p>Бронь - <b>{ assigned.username}</b></p>}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Link href={`/wish/${_id}`}>
                        <a href={`/wish/${_id}`}>Подробнее</a>
                      </Link>
                    </Card.Footer>
                  </Card>
                );
              })
            }
          </CardColumns>
        </section>
      </>
    );
  }
};

export default UserPage;
