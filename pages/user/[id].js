import React from 'react';
import { connect } from 'react-redux';
import { UserPageContent } from '../../domains/user-by-id/components';
import { getUserName } from '../../src/utils';
import { selectWishesData, selectUserInfoData } from '../../domains/user-by-id/selectors';
import { getWishes, getUserInfo } from '../../domains/user-by-id/operations';

class UserPage extends React.Component {
  static async getInitialProps ({ query, store }) {
    const { dispatch } = store;
    const userId = query.id;

    await dispatch(getWishes(userId));
    await dispatch(getUserInfo(userId));

    const userInfo = selectUserInfoData(store.getState());

    return {
      pageHeader: {
        title: getUserName(userInfo),
        avatar: userInfo.avatar
      }
    };
  }

  render () {
    return (
      <UserPageContent wishes={this.props.wishes} />
    );
  }
};

const mapStateToProps = state => {
  return {
    wishes: selectWishesData(state),
    userInfo: selectUserInfoData(state)
  };
};

const mapDispatchToProps = {
  getWishes,
  getUserInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
