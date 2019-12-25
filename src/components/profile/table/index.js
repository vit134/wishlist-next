import React from 'react';
import { map } from 'lodash/fp';
import moment from 'moment';
import { Table, Tag, Button, Collapse, Icon, Popconfirm, Avatar, Tooltip, Modal } from 'antd';
import { connect } from 'react-redux';
import Filters from 'components/filters';
import { selectWishesData } from 'domains/user-by-id/selectors';
import { selectSelectedWishes, selectSelectedWishesCount, selectImageModal } from 'domains/profile/selectors';
import { selectWish, selectAllWish, showImageModal, hideImageModal } from 'domains/profile/actions';
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

const renderNameColumn = (name, record, onShowImageModal) => {
  const content = (
    <>
      {record.image && (
        <Avatar
          shape="square"
          size={44}
          src={record.image}
          className={styles.image}
          onClick={() => onShowImageModal(record.image)}
        />
      )}
      <a href={`/user/${record.userId.username}/${record._id}`}>{name}</a>
    </>
  );

  if (record.link) {
    const tooltipTitle = (
      <a href={record.link} target='_blank' rel='noopener noreferrer' className={styles['tooltip-link']}>ссылка на товар</a>
    );

    return (
      <Tooltip title={tooltipTitle} placement="right"><span>{content}</span></Tooltip>
    );
  }

  return (
    <div className={styles.name}>
      {content}
    </div>
  );
};

const RemoveButton = ({ onDelete }) => (
  <Popconfirm
    title="Вы уверены что хотите удалить?"
    onConfirm={onDelete}
    okText="Да"
    cancelText="Нет"
  >
    <Button size='small' type='danger' className={styles.button}>Удалить</Button>
  </Popconfirm>
);

const renderDateColumn = (name, { createdDate }) => {
  const date = moment(createdDate);
  const currentMonth = moment().get('month');
  const month = date.get('month');

  if (currentMonth === month) {
    return date.format('DD MMM YYYY HH:mm');
  }

  return date.format('DD MMM YYYY');
};

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
    const { wishes, selectedWishesIds, selectedWishesCount, imageModal, onShowImageModal, onHideImageModal } = this.props;
    const { isOpen, imageUrl } = imageModal;
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
          hove
          rowSelection={rowSelection}
          rowKey="_id"
          pagination={{
            pageSizeOptions: ['10, 20, 30, 100'],
          }}
          footer={pageData => renderFooter(pageData, selectedWishesCount, this.handleDeleteWishes)}
        >
          <Table.Column
            title="Название"
            dataIndex="name"
            key="name"
            render={(name, record) => renderNameColumn(name, record, onShowImageModal)}
          />
          <Table.Column
            title="Тэги"
            dataIndex="tags"
            key="tags"
            render={renderTagsColumn}
          />
          <Table.Column
            title="Цена (₽)"
            dataIndex="price"
            key="price"
            width={100}
            sorter={(a, b) => {
              const aPrice = a.price ? a.price : 0;
              const bPrice = b.price ? b.price : 0;
              return aPrice - bPrice;
            }}
            render={(price) => {
              return price && String(price).replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$& ');
            }}
          />
          <Table.Column
            title="Дата"
            dataIndex="createdDate"
            key="createdDate"
            width={160}
            defaultSortOrder='descend'
            sorter={(a, b) => {
              const aDate = moment(a.createdDate);
              const bDate = moment(b.createdDate);
              return aDate.diff(bDate);
            }}
            render={renderDateColumn}
          />
        </Table>
        <Modal
          footer={null}
          onCancel={onHideImageModal}
          visible={isOpen}
          bodyStyle={{ padding: '40px' }}
        >
          <img src={imageUrl} className={styles['modal-image']} />
        </Modal>
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
  imageModal: selectImageModal(state),
  selectedWishesIds: selectSelectedWishes(state),
  selectedWishesCount: selectSelectedWishesCount(state),
});

const mapDispatchToProps = {
  onSelectWish: selectWish,
  onSelectAllWish: selectAllWish,
  onDeleteWishes: deleteWishes,
  onShowImageModal: showImageModal,
  onHideImageModal: hideImageModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(WishesTable);
