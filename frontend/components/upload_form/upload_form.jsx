import React from 'react';
import { Link, withRouter } from 'react-router';

class UploadForm extends React.Component{

  constructor(props) {
    super(props);
    // this.upload = this.upload.bind(this);
  }


  // upload (e) {
  //   e.preventDefault();
  //   cloudinary.openUploadWidget(
  //     window.cloudinary_options,
  //     (error, images) => {
  //       if(error === null) {
  //         //success
  //         //i should open the form with the other info
  //         //createMeme with images[0].url is the url
  //       } else {
  //         //failure
  //
  //       }
  //     }
  //   );
  // }

  render() {
    return <div>This is where the form will happen</div>;
// (<button className="uploadformbutton" onClick={this.upload}>Upload Image</button>)
  }

}

export default withRouter(UploadForm);
