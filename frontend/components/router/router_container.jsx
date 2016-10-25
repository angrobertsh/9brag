import { connect } from 'react-redux';
import AppRouter from './router';
import * as ACTIONS from '../../actions/meme_actions';
import * as ACTIONS2 from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.sessions.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllMemes: (sort) => dispatch(ACTIONS.requestAllMemes(sort)),
  requestSingleMeme: (id) => dispatch(ACTIONS.requestSingleMeme(id)),
  requestUser: (id) => dispatch(ACTIONS2.requestUser(id)),
  requestTaggedMemes: (tag) => dispatch(ACTIONS.requestTaggedMemes(tag))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
