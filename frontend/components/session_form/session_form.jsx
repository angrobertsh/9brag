import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: "",
      password: ""
    };
    this.update = this.update.bind(this);
  }

  redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

  renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`} className="errorcode">
						{error}
					</li>
				))}
			</ul>
		);
	}

  handleSubmit(e){
		e.preventDefault();
    const formType = this.props.location.pathname.slice(1)
    const processForm = (formType === 'login') ? this.props.login : this.props.signup;
		const user = this.state;
		processForm({user});
    this.props.router.push('/');
	}


  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  otherAction (formType) {
    if (formType === "login") {
      return <Link to="/signup">sign up</Link>;
    } else {
      return <Link to="/login">log in</Link>;
    }
  }

  render() {
    const formType = this.props.location.pathname.slice(1);
    const otherLink = this.otherAction(formType);
    return (
      <div className="authbox">
				<form onSubmit={this.handleSubmit.bind(this)} className="loginform">
					<h2> { formType } </h2> <br/>
          <h4> or { otherLink } </h4> <br/>
          <span className="errors">{ this.renderErrors.bind(this) }</span>
          <div className="userbox">
            <label> Username:
              <input type="text" onChange={this.update("name")} value={this.state.name} className="authinput" />
            </label>
            <label> Password:
              <input type="text" onChange={this.update("password")} value={this.state.password} className="authinput" />
            </label>
            <input type="Submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }

}



export default withRouter(SessionForm);
