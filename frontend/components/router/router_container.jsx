import { connect } from 'react-redux';
import AppRouter from './router';
import * as MEMEACTIONS from '../../actions/meme_actions';
import * as USERACTIONS from '../../actions/user_actions';
import * as SESSIONACTIONS from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.sessions.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllMemes: (sort) => dispatch(MEMEACTIONS.requestAllMemes(sort)),
  requestSingleMeme: (id) => dispatch(MEMEACTIONS.requestSingleMeme(id)),
  requestTaggedMemes: (tag) => dispatch(MEMEACTIONS.requestTaggedMemes(tag)),
  clearMemes: () => dispatch(MEMEACTIONS.clearMemes()),
  requestUser: (id) => dispatch(USERACTIONS.requestUser(id)),
  requestUserMemes: (id) => dispatch(MEMEACTIONS.requestUserMemes(id)),
  clearErrors: () => dispatch(SESSIONACTIONS.clearErrors())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
