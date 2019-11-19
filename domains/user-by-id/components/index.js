import React from 'react';
import { Layout, Row } from 'antd';
import { WishCard } from '../components/wish-card';
import { Filters } from '../components/filters';
import styles from './styles.module.css';

export const UserPageContent = ({ wishes }) => (
  <main className={styles.root}>
    <Layout.Content>
      <section className={styles.section}>
        <Filters />
      </section>
      <section className={styles.section}>
        <Row gutter={16}>
          {
            wishes.map(({ _id, name, image }) => (
              <WishCard
                id={_id}
                key={_id}
                name={name}
                image={image}
              />
            ))
          }
        </Row>
      </section>
    </Layout.Content>
  </main>
);

UserPageContent.defaultProps = {
  wiishes: []
};
