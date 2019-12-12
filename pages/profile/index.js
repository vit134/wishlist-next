import React from 'react';
import { connect } from 'react-redux';
import { wishesRequest } from '../../src/requests';
import { SideBar } from 'components/profile/sidebar';
import { Content } from 'components/profile/content';
import styles from './styles.module.css';

class ProfilePage extends React.Component {
  static defaultProps = {
    wishes: {},
  }

  static async getInitialProps ({ req }) {
    const { user } = req;
    let data = {};

    if (user && user._id) {
      try {
        const res = await wishesRequest(user._id);
        data = res.data;
      } catch (e) {
        data.err = e;
      }
    }

    return { wishes: data };
  }

  render () {
    const { wishes } = this.props;
    const { data } = wishes;

    return (
      <div className={styles.root}>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
        <div className={styles.content}>
          <Content wishes={data} />
        </div>
      </div>
    );
  }
};

export default connect(state => state)(ProfilePage);
