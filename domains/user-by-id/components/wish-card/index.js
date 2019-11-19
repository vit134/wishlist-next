import React from 'react';
import Link from 'next/link';
import { Card, Icon, Col } from 'antd';
import { Image } from '../../../../src/components/image';
import styles from './styles.module.css';

const { Meta } = Card;

export const WishCard = ({
  id,
  name,
  image = 'http://res.cloudinary.com/vit134/image/upload/v1574077301/common/no_image.png'
}) => (
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
      <Link href='/wish/:id' as={`/wish/${id}`}>
        <a href={`/wish/${id}`}>{ name }</a>
      </Link>
    </Card>
  </Col>
);
