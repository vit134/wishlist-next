import React from 'react';
import { map } from 'lodash/fp';
import { format, compareAsc } from 'date-fns';
import { Table, Tag, Button, Collapse, Icon } from 'antd';
import { connect } from 'react-redux';
import Filters from 'components/filters';
import { selectWishesData } from 'domains/user-by-id/selectors';
import { selectSelectedWishes, selectSelectedWishesCount } from 'domains/profile/selectors';
import { selectWish, selectAllWish } from 'domains/profile/actions';
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

const renderDateColumn = (name, record) => (
  format(new Date(record.createdDate), 'dd MMM yy')
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

const FiltersHeader = (
  <span className={styles['filters-title']}>
    Фильтры
  </span>
);

const customPanelStyle = {
  border: 0,
  overflow: 'hidden',
  margin: '0 -16px',
};

export class WishesTable extends React.Component {
  render () {
    const { wishes, selectedWishesIds, selectedWishesCount } = this.props;
    const rowSelection = {
      selectedWishesIds,
      onChange: this.onSelectChange,
    };

    return (
      <>
        <div className={styles.filters}>
          <Collapse
            bordered={false}
            expandIcon={({ isActive }) => <Icon type="filter" style={{ fontSize: 14 }} rotate={isActive ? 90 : 0} />}
          >
            <Collapse.Panel key={1} header={FiltersHeader} style={customPanelStyle}>
              <Filters />
            </Collapse.Panel>
          </Collapse>
        </div>
        <Table
          size='middle'
          dataSource={wishes}
          rowSelection={rowSelection}
          rowKey="_id"
          footer={pageData => renderFooter(pageData, selectedWishesCount)}
        >
          <Table.Column title="Название" dataIndex="name" key="name" render={renderNameColumn} />
          <Table.Column
            title="Тэги"
            dataIndex="tags"
            key="tags"
            render={renderTagsColumn}
          />
          <Table.Column
            title="Цена"
            dataIndex="price"
            key="price"
            sorter={(a, b) => a.price - b.price}
          />
          <Table.Column
            title="Дата"
            dataIndex="createdDate"
            key="createdDate"
            sorter={(a, b) => compareAsc(new Date(a.createdDate), new Date(b.createdDate))}
            render={renderDateColumn}
          />
        </Table>
      </>
    );
  }

  onSelectChange = (selectedRowKeys, selectedRows) => {
    const { onSelectWish } = this.props;

    onSelectWish(map('_id', selectedRows));
  };
};

const mapStateToProps = state => ({
  wishes: selectWishesData(state),
  selectedWishesIds: selectSelectedWishes(state),
  selectedWishesCount: selectSelectedWishesCount(state),
});

const mapDispatchToProps = {
  onSelectWish: selectWish,
  onSelectAllWish: selectAllWish,
};

export default connect(mapStateToProps, mapDispatchToProps)(WishesTable);
