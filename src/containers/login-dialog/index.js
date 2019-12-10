import { connect } from 'react-redux';
import { userLogin, userRegistration } from 'domains/root/operations/user';
import { closeLoginPopup } from 'domains/root/actions/login-popup';
import { selectIsLoginPopupOpen } from 'domains/root/selectors/login-popup';
import { selectUserError, selectUserIsLoading } from 'domains/root/selectors/user-login';

import { LoginDialog } from '../../components/login-dialog';

const mapStateToProps = state => ({
  isOpen: selectIsLoginPopupOpen(state),
  error: selectUserError(state),
  isLoading: selectUserIsLoading(state),
});

const mapDispatchToProps = {
  userLogin,
  userRegistration,
  onClose: closeLoginPopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);
