import { connect } from 'react-redux';
import MemeShow from './meme_show';
import * as MEMEACTIONS from '../../actions/meme_actions';
import * as SESSIONACTIONS from '../../actions/session_actions';

const mapStateToProps = state => ({
  memes: state.memes.memes,
  currentUser: state.sessions.currentUser
});

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(MEMEACTIONS.createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemeShow);
