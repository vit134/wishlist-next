import React from 'react';
import Link from 'next/link';
import { getAllUsers, getAllWishes } from '../src/requests';
import { CardColumns, Card } from 'react-bootstrap';
import { getUserName } from '../src/utils';

class Home extends React.Component {
  static async getInitialProps ({ req }) {
    const data = {};

    try {
      const res = await getAllUsers();
      const wres = await getAllWishes();
      data.users = res.data.data;
      data.wishes = wres.data.wishes;
    } catch (e) {
      data.err = e;
    }

    return { data };
  }

  render () {
    const { users = [], wishes = [] } = this.props.data;

    return (
      <>
        <section>
          <h3>Users</h3>
          <CardColumns>
            {
              users.reduce((acc, el) => {
                const { _id, username, firstname, lastname, count } = el;
                if (firstname && lastname) {
                  acc.push(
                    <Card key={_id}>
                      <Card.Body>
                        <Card.Title>{ getUserName(el) }</Card.Title>
                        <Card.Text as='div'>
                          <div>Количество желаний - {count}</div>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <Link href={`/user/${username}`}>
                          <a href={`/user/${username}`}>
                          Профиль
                          </a>
                        </Link>
                      </Card.Footer>
                    </Card>
                  );
                }

                return acc;
              }, [])
            }

          </CardColumns>
        </section>
        <section>
          <h3>Wishes</h3>
          <CardColumns>
            {
              wishes.reduce((acc, el) => {
                const { _id, userId, name, image } = el;
                acc.push(
                  <Card key={_id}>
                    {image && <Card.Img src={image}/>}
                    <Card.Body>
                      <Card.Title>{ name }</Card.Title>
                      <Card.Text as='div'>
                        <div>{ getUserName(userId) }</div>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Link href={`/wish/${_id}`}>
                        <a href={`/wish/${_id}`}>
                          Подробнее
                        </a>
                      </Link>
                    </Card.Footer>
                  </Card>
                );

                return acc;
              }, [])
            }

          </CardColumns>
        </section>
      </>
    );
  }
};

export default Home;
