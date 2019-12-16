import React, { Component } from 'react';
import { map } from 'lodash/fp';
import { connect } from 'react-redux';
import { Card, Tabs } from 'antd';
import { selectWishesData } from 'domains/user-by-id/selectors';
import { selectSelectedWishes, selectSelectedWishesCount } from 'domains/profile/selectors';
import { selectWish, selectAllWish } from 'domains/profile/actions';
import { WishesTable } from '../table';

export class Content extends Component {
  render () {
    const { wishes, selectedWishesIds, selectedWishesCount } = this.props;

    const rowSelection = {
      selectedWishesIds,
      onChange: this.onSelectChange,
    };

    return (
      <Card>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Мои желания" key="1">
            <WishesTable data={wishes} rowSelection={rowSelection} selectedWishesCount={selectedWishesCount}/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Настройки профиля" key="2">
            Content of Tab Pane 2
          </Tabs.TabPane>
        </Tabs>,
      </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(Content);
