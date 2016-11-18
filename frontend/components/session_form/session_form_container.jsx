import { connect } from 'react-redux';
import SessionForm from './session_form';
import * as SESSIONACTIONS from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.sessions.errors,
  loggedIn: Boolean(state.sessions.currentUser)
});


const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(SESSIONACTIONS.login(user)),
  signup: (user) => dispatch(SESSIONACTIONS.signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
