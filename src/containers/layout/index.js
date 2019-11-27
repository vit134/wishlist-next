import { connect } from 'react-redux';
import { openLoginPopup } from '../../../domains/root/actions/login-popup';

import { selectUserIsLogin, selectUserData } from '../../../domains/root/selectors/user-login';

import PageLayout from '../../components/layout/layout';

const mapStateToProps = state => ({
  isLogin: selectUserIsLogin(state),
  userData: selectUserData(state),
});

const mapDispatchToProps = {
  openLoginPopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);
