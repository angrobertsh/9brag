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
			this.props.router.push("/");
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
	}

  componentDidUpdate() {
    if(this.props.loggedIn){
      this.props.router.push('/');
    }
  }

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  otherAction (formType) {
    if (formType === "login") {
      return (<div className="authgreet">
        <h3>HAY MEMELORD, TIME TO</h3><br/><h1 className="authdemand"> LOG IN</h1> <br/>
        <p className="whisper">(or <Link to="/signup">sign up</Link>)</p>
        </div>);
    } else {
      return (<div className="authgreet">
        <h3>HAY NOOBLORD, TIME TO</h3><br/><h1 className="authdemand"> SIGN UP</h1> <br/>
        <p className="whisper">(or <Link to="/login">log in</Link>)</p>
        </div>);
    }
  }

  render() {
    const formType = this.props.location.pathname.slice(1);
    const otherLink = this.otherAction(formType);
    return (
      <div className="authbox">
				<form onSubmit={this.handleSubmit.bind(this)} className={formType}>
          { otherLink }
          <span className="errors">{ this.renderErrors.bind(this)() }</span>
          <div className="userbox">
            <input type="text" onChange={this.update("name")} value={this.state.name} className="authinput" placeholder="Username"/>
            <br/>
            <input type="password" onChange={this.update("password")} value={this.state.password} className="authinput" placeholder="Password"/>
            <br/>
            <input type="Submit" value="Submit" className="submitbutton" />
          </div>
        </form>
      </div>
    );
  }

}



export default withRouter(SessionForm);
