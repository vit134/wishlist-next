import { connect } from 'react-redux';
import { userLogout } from 'domains/root/operations/user';
import { openLoginPopup } from 'domains/root/actions/login-popup';
import { openAddWishPopup } from 'domains/root/actions/add-wish-popup';
import { selectUserIsLogin, selectUserData } from 'domains/root/selectors/user-login';
import { UserInfo } from 'components/user-info';

const mapStateToProps = state => ({
  isLogin: selectUserIsLogin(state),
  userData: selectUserData(state),
});

const mapDispatchToProps = {
  userLogout,
  openLoginPopup,
  openAddWishPopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
