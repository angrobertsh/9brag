import { connect } from 'react-redux';
import AppRouter from './router';
import * as ACTIONS from '../../actions/meme_actions';
import * as ACTIONS2 from '../../actions/user_actions';
import * as ACTIONS3 from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.sessions.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllMemes: (sort) => dispatch(ACTIONS.requestAllMemes(sort)),
  requestSingleMeme: (id) => dispatch(ACTIONS.requestSingleMeme(id)),
  requestTaggedMemes: (tag) => dispatch(ACTIONS.requestTaggedMemes(tag)),
  clearMemes: () => dispatch(ACTIONS.clearMemes()),
  requestUser: (id) => dispatch(ACTIONS2.requestUser(id)),
  requestUserMemes: (id) => dispatch(ACTIONS.requestUserMemes(id)),
  clearErrors: () => dispatch(ACTIONS3.clearErrors())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
