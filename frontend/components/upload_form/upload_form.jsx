import React from 'react';
import { Link, withRouter } from 'react-router';

class UploadForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      attribution: "",
      ourTags: ""
    };
    this.upload = this.upload.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  upload () {
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS,
      (error, images) => {
        if(error === null) {
          this.setState({url: images[0].url});
        }
      }
    );
  }

  componentWillMount(){
    this.upload();
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

  handleSubmit(e) {
    e.preventDefault();
		const newMeme = this.state;
		this.props.createMeme(newMeme);
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  render() {
    return (
        <div className="authbox">
          <img src={this.state.url} />
    			<form onSubmit={this.handleSubmit} className="uploadform">
            <div className="userbox">
              <span className="errors">{ this.renderErrors.bind(this)() }</span>
              <input type="text" onChange={this.update("title")} value={this.state.title} className="authinput" placeholder="Title"/>
              <br/>
              <input type="text" onChange={this.update("attribution")} value={this.state.attribution} className="authinput" placeholder="Attribution"/>
              <br/>
              <input type="text" onChange={this.update("ourTags")} value={this.state.ourTags} className="authinput" placeholder="ourTags"/>
              <br/>
              <button className="submitbutton">Submit</button>
            </div>
          </form>
        </div>
      );
  }

}

export default withRouter(UploadForm);
