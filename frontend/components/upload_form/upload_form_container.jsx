import { connect } from 'react-redux';
import UploadForm from './upload_form';
import * as MEMEACTIONS from '../../actions/meme_actions';

const mapStateToProps = state => ({
  errors: state.memes.errors
});


const mapDispatchToProps = dispatch => ({
  createMeme: (meme) => dispatch(MEMEACTIONS.createMeme(meme))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
