import React from 'react';
import { connect } from 'react-redux';
import UserPageContent from '../../../domains/user-by-id/components';
import { getUserName } from '../../../src/utils';
import { selectUserInfoData } from '../../../domains/user-by-id/selectors';
import { getWishes, getUserInfo } from '../../../domains/user-by-id/operations';

import { normalizedWishes } from '../../../domains/user-by-id/normlize';

class UserPage extends React.Component {
  static async getInitialProps ({ query, store, asPath }) {
    const { dispatch } = store;
    const userId = query.id;

    await dispatch(getWishes(userId));
    await dispatch(getUserInfo(userId));

    const userInfo = selectUserInfoData(store.getState());
    let pageHeader;

    if (userInfo) {
      pageHeader = {
        title: getUserName(userInfo),
        avatar: userInfo.avatar
      };
    }

    return {
      pageHeader,
      asPath
    };
  }

  render () {
    const bla = { wishes: this.props.userPage.wishes.data };

    console.log(normalizedWishes(bla));
    return (
      <UserPageContent />
    );
  }
};

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getWishes,
  getUserInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
