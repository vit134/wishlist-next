import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { Card, Tabs, Button, Badge } from 'antd';
import {
  selectSelectedWishes,
  selectSelectedWishesCount,
  selectWishesData,
  selectTotalWishesCount,
  selectActiveTab,
} from 'domains/profile/selectors';
import { openAddWishPopup } from 'domains/root/actions/add-wish-popup';
import { selectWish, selectAllWish, changeActiveTab } from 'domains/profile/actions';
import WishesTable from '../table';
import { ProfileSettings } from '../settings';

const WishesTab = React.memo(({ count }) => (
  <Badge count={count}>
    <span style={{ paddingRight: '10px' }}>Мои желания</span>
  </Badge>
));

const AddWishButton = ({ onClick }) => (
  <Button
    onClick={onClick}
    size='small'
    type='primary'
  >
      Добавить
  </Button>
);

export class Content extends Component {
  render () {
    const { wishesCount, activeTab, onChangeActiveTab, onOpenAddWishPopup } = this.props;
    const newWishButton = activeTab === '1' && <AddWishButton onClick={onOpenAddWishPopup} />;

    return (
      <Card>
        <Tabs
          activeKey={String(activeTab)}
          onChange={onChangeActiveTab}
          tabBarExtraContent={newWishButton}
        >
          <Tabs.TabPane tab={<WishesTab count={wishesCount} />} key="1">
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

const mapStateToProps = (state, ownProps) => ({
  wishes: selectWishesData(state),
  wishesCount: selectTotalWishesCount(state),
  selectedWishesIds: selectSelectedWishes(state),
  selectedWishesCount: selectSelectedWishesCount(state),
  activeTab: selectActiveTab(state, ownProps),
});

const mapDispatchToProps = {
  onSelectWish: selectWish,
  onSelectAllWish: selectAllWish,
  onChangeActiveTab: changeActiveTab,
  onOpenAddWishPopup: openAddWishPopup,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)
);
