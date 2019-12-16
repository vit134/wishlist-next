import React from 'react';
import SideBar from 'components/profile/sidebar';
import Content from 'components/profile/content';
import { getWishes } from 'domains/user-by-id/operations';
import styles from './styles.module.css';

class ProfilePage extends React.Component {
  static defaultProps = {
    wishes: {},
  }

  static async getInitialProps ({ req, store }) {
    const { user } = req;
    const { dispatch } = store;

    if (user && user._id) {
      try {
        await dispatch(getWishes(user._id));
      } catch (e) {
        console.log(e);
      }
    }

    return {};
  }

  render () {
    return (
      <div className={styles.root}>
        <div className={styles.sidebar}>
          <div className={styles['sidebar-inner']}>
            <SideBar />
          </div>
        </div>
        <div className={styles.content}>
          <Content />
        </div>
      </div>
    );
  }
};

export default ProfilePage;
