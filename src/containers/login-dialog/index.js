import { connect } from 'react-redux';
import { userLogin } from '../../../domains/root/operations/user-login';
import { closeLoginPopup } from '../../../domains/root/actions/login-popup';
import { selectIsLoginPopupOpen } from '../../../domains/root/selectors/login-popup';

import { LoginDialog } from '../../components/login-dialog';

const mapStateToProps = state => ({
  isOpen: selectIsLoginPopupOpen(state),
});

const mapDispatchToProps = {
  userLogin,
  onClose: closeLoginPopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);
