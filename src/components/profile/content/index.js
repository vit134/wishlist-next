import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Tabs, Button, Badge } from 'antd';
import {
  selectSelectedWishes,
  selectSelectedWishesCount,
  selectWishesData,
  selectTotalWishesCount,
  selectActiveTab,
} from 'domains/profile/selectors';
import { selectWish, selectAllWish, changeActiveTab } from 'domains/profile/actions';
import WishesTable from '../table';
import { ProfileSettings } from '../settings';

export class Content extends Component {
  render () {
    const { wishesCount, activeTab, onChangeActiveTab } = this.props;

    const WishesTab = (
      <Badge count={wishesCount}>
        <span style={{ paddingRight: '10px' }}>Мои желания</span>
      </Badge>
    );

    const newWishButton = activeTab === '1' && <Button size='small' type='primary'>Добавить</Button>;

    return (
      <Card>
        <Tabs
          defaultActiveKey="1"
          activeKey={String(activeTab)}
          onChange={onChangeActiveTab}
          tabBarExtraContent={newWishButton}
        >
          <Tabs.TabPane tab={WishesTab} key="1">
            <WishesTable />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Настройки профиля" key="2">
            <ProfileSettings />
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
  activeTab: selectActiveTab(state),
});

const mapDispatchToProps = {
  onSelectWish: selectWish,
  onSelectAllWish: selectAllWish,
  onChangeActiveTab: changeActiveTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
