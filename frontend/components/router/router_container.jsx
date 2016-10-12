import { connect } from 'react-redux';
import AppRouter from './router';
import * as ACTIONS from '../../actions/meme_actions';
import * as ACTIONS2 from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.sessions.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllMemes: () => dispatch(ACTIONS.requestAllMemes()),
  requestSingleMeme: (id) => dispatch(ACTIONS.requestSingleMeme(id)),
  requestUser: (id) => dispatch(ACTIONS2.requestUser(id))
});


// const mapDispatchToProps = dispatch => ({
//   requestAllMemes: () => dispatch(ACTIONS.requestAllMemes()),
//   requestTaggedMemes: (tag) => dispatch(ACTIONS.requestTaggedMemes(tag)),
//   requestFreshMemes: () => dispatch(ACTIONS.requestFreshMemes()),
//   requestHotMemes: () => dispatch(ACTIONS.requestHotMemes()),
//   requestSingleMeme: (id) => dispatch(ACTIONS.requestSingleMeme(id)),
//   requestUser: (id) => dispatch(ACTIONS2.requestUser(id))
// });


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
