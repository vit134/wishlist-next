import React from 'react';
import { Table, Tag, Button } from 'antd';
import styles from './styles.module.css';

const renderTagsColumn = tags => (
  <span>
    {tags.map(tag => (
      <Tag color="blue" key={tag}>
        {tag}
      </Tag>
    ))}
  </span>
);

const renderNameColumn = (name, record) => (
  <a href={`/user/${record.userId.username}/${record._id}`}>{name}</a>
);

const renderFooter = (pageData, selectedWishesCount) => {
  if (selectedWishesCount === 0) {
    return null;
  }

  let content = (
    <Button type='danger'>Удалить</Button>
  );

  if (selectedWishesCount === 1) {
    content = (
      <>
        <Button size='small' type='primary' className={styles.button}>Изменить</Button>
        <Button size='small' type='danger' className={styles.button}>Удалить</Button>
      </>
    );
  }

  return <div className={styles.footer}>{content}</div>;
};

export const WishesTable = ({ data, rowSelection, selectedWishesCount }) => (
  <Table
    size='middle'
    dataSource={data}
    rowSelection={rowSelection}
    footer={pageData => renderFooter(pageData, selectedWishesCount)}
  >
    <Table.Column title="Название" dataIndex="name" key="name" render={renderNameColumn} />
    <Table.Column title="Цена" dataIndex="price" key="price" />
    <Table.Column
      title="Тэги"
      dataIndex="tags"
      key="tags"
      render={renderTagsColumn}
    />
  </Table>
);

WishesTable.defaultProps = {
  data: [],
  rowSelection: {},
};
