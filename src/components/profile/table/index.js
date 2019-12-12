import React from 'react';
import { Table, Tag } from 'antd';

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

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

const renderFooter = (pageData) => {
  return <div>Footer here</div>;
};

export const WishesTable = ({ data }) => (
  <Table
    size='middle'
    dataSource={data}
    rowSelection={rowSelection}
    footer={renderFooter}
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
};
