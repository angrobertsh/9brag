import { connect } from 'react-redux';
import UploadForm from './upload_form';
import * as ACTIONS from '../../actions/meme_actions';

const mapStateToProps = state => ({
  errors: state.memes.errors
});


const mapDispatchToProps = dispatch => ({
  createMeme: (meme) => dispatch(ACTIONS.createMeme(meme))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
