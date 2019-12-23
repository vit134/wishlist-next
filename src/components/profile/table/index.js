import React from 'react';
import { map } from 'lodash/fp';
import { format, compareAsc } from 'date-fns';
import { Table, Tag, Button, Collapse, Icon, Popconfirm } from 'antd';
import { connect } from 'react-redux';
import Filters from 'components/filters';
import { selectWishesData } from 'domains/user-by-id/selectors';
import { selectSelectedWishes, selectSelectedWishesCount } from 'domains/profile/selectors';
import { selectWish, selectAllWish } from 'domains/profile/actions';
import { deleteWishes } from 'domains/profile/operations/wishes';
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

const RemoveButton = ({ onDelete }) => (
  <Popconfirm
    title="Вы уверены что ходите удалить?"
    onConfirm={onDelete}
    okText="Да"
    cancelText="Нет"
  >
    <Button size='small' type='danger' className={styles.button}>Удалить</Button>
  </Popconfirm>
);

const renderDateColumn = (name, record) => (
  format(new Date(record.createdDate), 'dd MMM yy')
);

const renderFooter = (pageData, selectedWishesCount, onDelete) => {
  if (selectedWishesCount === 0) {
    return null;
  }

  let content = (
    <RemoveButton onDelete={onDelete}/>
  );

  if (selectedWishesCount === 1) {
    content = (
      <>
        <Button size='small' type='primary' className={styles.button} disabled>Изменить</Button>
        <RemoveButton onDelete={onDelete}/>
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
          pagination={{
            pageSizeOptions: ['10, 20, 30, 100'],
          }}
          footer={pageData => renderFooter(pageData, selectedWishesCount, this.handleDeleteWishes)}
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
            defaultSortOrder='descend'
            sorter={(a, b) => {
              const aPrice = a.price ? a.price : 0;
              const bPrice = b.price ? b.price : 0;
              return aPrice - bPrice;
            }}
          />
          <Table.Column
            title="Дата"
            dataIndex="createdDate"
            key="createdDate"
            defaultSortOrder='descend'
            sorter={(a, b) => {
              return compareAsc(new Date(a.createdDate), new Date(b.createdDate));
            }}
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

  handleDeleteWishes = () => {
    const { selectedWishesIds, onDeleteWishes } = this.props;
    onDeleteWishes(selectedWishesIds);
  }
};

const mapStateToProps = state => ({
  wishes: selectWishesData(state),
  selectedWishesIds: selectSelectedWishes(state),
  selectedWishesCount: selectSelectedWishesCount(state),
});

const mapDispatchToProps = {
  onSelectWish: selectWish,
  onSelectAllWish: selectAllWish,
  onDeleteWishes: deleteWishes,
};

export default connect(mapStateToProps, mapDispatchToProps)(WishesTable);
