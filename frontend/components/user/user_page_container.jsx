import { connect } from 'react-redux';
import UserPage from './user_page';
import * as ACTIONS from '../../actions/user_actions';
import * as MEMEACTIONS from '../../actions/meme_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.users[parseInt(ownProps.params.userId)],
  currentUser: state.sessions.currentUser,
  memes: state.memes.memes
});


const mapDispatchToProps = dispatch => ({
  upvote: (vote, memeId) => dispatch(MEMEACTIONS.upvote(vote, memeId)),
  updateUser: (user) => dispatch(ACTIONS.updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
