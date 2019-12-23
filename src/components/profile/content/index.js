import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Tabs, Button, Badge } from 'antd';
import {
  selectSelectedWishes,
  selectSelectedWishesCount,
  selectWishesData,
  selectTotalWishesCount,
} from 'domains/profile/selectors';
import { selectWish, selectAllWish } from 'domains/profile/actions';
import WishesTable from '../table';
import { ProfileSettings } from '../settings';

const newWishButton = <Button size='default' type='primary'>Добавить</Button>;

export class Content extends Component {
  render () {
    const { wishesCount } = this.props;

    const WishesTab = (
      <Badge count={wishesCount}>
        <span style={{ paddingRight: '10px' }}>Мои желания</span>
      </Badge>
    );

    return (
      <Card>
        <Tabs defaultActiveKey="2" tabBarExtraContent={newWishButton}>
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
});

const mapDispatchToProps = {
  onSelectWish: selectWish,
  onSelectAllWish: selectAllWish,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
