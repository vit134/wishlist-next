import { connect } from 'react-redux';
import { addWish } from 'domains/root/operations/wish';
import { closeAddWishPopup } from 'domains/root/actions/add-wish-popup';
import { selectIsAddWishPopupOpen } from 'domains/root/selectors/add-wish-popup';
import {
  selectIsAddWishLoading,
  selectIsAddWishStatus,
  selectIsAddWishError,
} from 'domains/root/selectors/wish';

import AddWishDialog from 'components/add-wish-dialog';

const mapStateToProps = state => ({
  isOpen: selectIsAddWishPopupOpen(state),
  isLoading: selectIsAddWishLoading(state),
  status: selectIsAddWishStatus(state),
  error: selectIsAddWishError(state),
});

const mapDispatchToProps = {
  onSubmit: addWish,
  onClose: closeAddWishPopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWishDialog);
