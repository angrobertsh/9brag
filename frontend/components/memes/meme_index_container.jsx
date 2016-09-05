import { connect } from 'react-redux';
import MemeIndex from './meme_index';
import * as MEMEACTIONS from '../../actions/meme_actions';
import * as SESSIONACTIONS from '../../actions/session_actions';

const mapStateToProps = state => ({
  memes: state.memes.memes,
  currentUser: state.sessions.currentUser
});

const mapDispatchToProps = dispatch => ({
  upvote: (vote, memeId) => dispatch(MEMEACTIONS.upvote(vote, memeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemeIndex);
