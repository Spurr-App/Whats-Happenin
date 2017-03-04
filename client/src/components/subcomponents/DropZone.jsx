import React from 'react';
import Dropzone from 'react-dropzone';


class FileDrop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(goodFiles, badFiles) {
    if (goodFiles) {
      console.log('Accepted files:', goodFiles);
      this.setState({
        files: goodFiles
      });
      console.log(this.state);
    } else {
      console.log('Rejected files:', badFiles);
    }
  }

  render() {
    return (
      <div>
        <Dropzone className="drop" onDrop={this.onDrop} accept="image/*">
          {this.state.files.length > 0 ?
            <div>
              <div className="center">
                <img alt="" src={this.state.files[0].preview} height="75px" />
                <h2>Uploading {this.state.files.length} image...</h2>
              </div>
            </div> :
            <h1>Drop it hot</h1>}
        </Dropzone>

      </div>
    );
  }

}
export default FileDrop
