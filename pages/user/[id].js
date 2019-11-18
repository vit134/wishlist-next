import React from 'react';
import Link from 'next/link';
import { Layout, Card, Icon, Col, Row } from 'antd';
import { wishByUserIdRequest, userInfoRequst } from '../../src/requests';
import { Image } from '../../src/components/image';
import { getUserName } from '../../src/utils';
// import { CardColumns, Card } from 'react-bootstrap';
import styles from './styles.module.css';

const { Content } = Layout;
const { Meta } = Card;

class UserPage extends React.Component {
  static async getInitialProps ({ req, query }) {
    const data = {};

    const userId = query.id;

    if (userId) {
      try {
        const wishesRes = await wishByUserIdRequest(userId);
        const userRes = await userInfoRequst(userId);
        data.wishes = wishesRes.data.data;
        data.user = userRes.data.data;
        data.pageHeader = {
          title: getUserName(userRes.data.data),
          avatar: userRes.data.data.avatar
        };
      } catch (e) {
        data.err = e;
      }
    }

    return { data };
  }

  render () {
    const { wishes = [], user = {} } = this.props.data;
    console.log(this.props.data);

    return (
      <div className={styles.root}>
        <Content>
          <section className={styles.section}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </section>
          <section className={styles.section}>
            <Row gutter={16}>
              {
                wishes.map(wish => {
                  const {
                    _id,
                    name,
                    image = 'http://res.cloudinary.com/vit134/image/upload/v1574077301/common/no_image.png'
                  } = wish;

                  return (
                    <Col span={6} key={_id}>
                      <Card
                        className={styles.card}
                        cover={<Image src={image} width={250} crop='fill'/>}
                        actions={[
                          <Icon type="setting" key="setting" />,
                          <Icon type="edit" key="edit" />,
                          <Icon type="ellipsis" key="ellipsis" />
                        ]}
                      >
                        <Meta
                          title={name}
                          description="This is the description"
                        />
                      </Card>
                    </Col>
                  );
                })
              }
            </Row>
          </section>
        </Content>
      </div>
      // <>
      //   <section>
      //     {/* <Card>
      //       <Card.Header>
      //         {getUserName(user)} ({ wishes.length })
      //       </Card.Header>
      //       <Card.Body>
      //         <Card.Text>
      //             With supporting text below as a natural lead-in to additional content.
      //         </Card.Text>
      //       </Card.Body>
      //     </Card> */}
      //   </section>

    //   <section>
    //     {/* <CardColumns>
    //       {
    //         wishes.map(el => {
    //           const { _id, image, name, assigned, price } = el;
    //           return (
    //             <Card key={_id}>
    //               {image && <Card.Img variant="top" src={image} />}
    //               <Card.Body>
    //                 <Card.Title>{ name }</Card.Title>
    //                 <Card.Text as='div'>
    //                   {price && <p>Цена - <b>{ price }</b></p>}
    //                   {assigned && <p>Бронь - <b>{ assigned.username}</b></p>}
    //                 </Card.Text>
    //               </Card.Body>
    //               <Card.Footer>
    //                 <Link href={`/wish/${_id}`}>
    //                   <a href={`/wish/${_id}`}>Подробнее</a>
    //                 </Link>
    //               </Card.Footer>
    //             </Card>
    //           );
    //         })
    //       }
    //     </CardColumns> */}
    //   </section>
    // </>
    );
  }
};

export default UserPage;
