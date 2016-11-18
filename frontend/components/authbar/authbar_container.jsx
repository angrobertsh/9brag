import { connect } from 'react-redux';
import Authbar from './authbar';
import * as SESSIONACTIONS from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.sessions.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SESSIONACTIONS.logout()),
  loginGuest: () => dispatch(SESSIONACTIONS.loginGuest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authbar);
