import { connect } from 'react-redux';
import SessionForm from './session_form';
import * as ACTIONS from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.sessions.errors,
  loggedIn: Boolean(state.sessions.currentUser)
});


const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(ACTIONS.login(user)),
  signup: (user) => dispatch(ACTIONS.signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
