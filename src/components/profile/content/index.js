import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Tabs } from 'antd';
import {
  selectSelectedWishes,
  selectSelectedWishesCount,
  selectWishesData,
  selectTotalWishesCount,
} from 'domains/profile/selectors';
import { selectWish, selectAllWish } from 'domains/profile/actions';
import WishesTable from '../table';

export class Content extends Component {
  render () {
    const { wishesCount } = this.props;
    console.log(this.props);
    return (
      <Card>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab={`Мои желания (${wishesCount})`} key="1">
            <WishesTable />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Настройки профиля" key="2">
            Content of Tab Pane 2
          </Tabs.TabPane>
        </Tabs>,
      </Card>
    );
  }
};

const mapStateToProps = state => ({
  wishes: selectWishesData(state),
  wishesCount: selectTotalWishesCount(state),
  selectedWishesIds: selectSelectedWishes(state),
  selectedWishesCount: selectSelectedWishesCount(state),
});

const mapDispatchToProps = {
  onSelectWish: selectWish,
  onSelectAllWish: selectAllWish,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
