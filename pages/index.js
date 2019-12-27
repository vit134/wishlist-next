import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import CurrencyFormat from 'react-currency-format';
import { getAllUsers, getAllWishes } from 'requests';
import { Avatar, Row, Col, Card, Typography } from 'antd';
import { getUserName } from '../src/utils';
import { Image } from 'components/image';
import styles from './styles.module.css';

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

    const filteredUsers = users.filter(user => user.firstname && user.lastname);
    const filteredWishes = wishes.filter(wish => wish.image);

    return (
      <>
        <section className={styles.section}>
          <Typography.Title level={3}>Users</Typography.Title>
          <Row gutter={16}>
            {
              filteredUsers.map(({ _id, username, firstname, lastname, count, avatar }) => (
                <Col span={6} key={_id} className={styles.col}>
                  <Card
                    hoverable
                    actions={[(
                      <Link key={'link'} href={`/user/${username}`}>
                        <a href={`/user/${username}`}>
                           Профиль
                        </a>
                      </Link>
                    )]}
                  >
                    <Card.Meta
                      avatar={<Avatar src={avatar} />}
                      title={getUserName({ firstname, lastname, username })}
                      description={`Количество желаний - ${count}`}
                    />
                  </Card>
                </Col>
              ))}
          </Row>
        </section>
        <section className={styles.section}>
          <Typography.Title level={3}>Wishes</Typography.Title>
          <Row gutter={16}>
            {
              filteredWishes.map(({ _id, userId, name, image, price }) => (
                <Col span={6} key={_id} className={styles.col}>
                  <Card
                    hoverable
                    cover={<Image src={image} height={100} crop />}
                  >
                    <Card.Meta
                      avatar={
                        <Link key={'link'} href={`/user/${userId.username}`}>
                          <a href={`/user/${userId.username}`}>
                            <Avatar src={userId.avatar} />
                          </a>
                        </Link>
                      }
                      title={(
                        <Link href={`/user/${userId.username}/${_id}`}>
                          <a href={`/user/${userId.username}/${_id}`}>{name}</a>
                        </Link>
                      )}
                    />
                    {price && <span><CurrencyFormat value={price} displayType='text' suffix=' руб.'/></span>}
                  </Card>
                </Col>
              ))}

          </Row>
        </section>
      </>
    );
  }
};

const mapStateToProps = state => state;

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
