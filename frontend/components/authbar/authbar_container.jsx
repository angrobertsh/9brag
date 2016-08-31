import { connect } from 'react-redux';
import Authbar from './authbar';
import * as ACTIONS from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.sessions.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(ACTIONS.logout()),
  loginGuest: () => dispatch(ACTIONS.loginGuest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authbar);
