import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Card, Icon, Col } from 'antd';
import { Image } from '../../../../src/components/image';
import styles from './styles.module.css';

const { Meta } = Card;

export const WishCard = ({
  router,
  id,
  name,
  image = 'http://res.cloudinary.com/vit134/image/upload/v1574077301/common/no_image.png'
}) => {
  return (
    <Col span={6}>
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
        <Link href={`${router.asPath}/:wishId`} as={`${router.asPath}/${id}`}>
          <a href={`${router.asPath}/${id}`}>{ name }</a>
        </Link>
      </Card>
    </Col>
  );
};

export default withRouter(WishCard);
