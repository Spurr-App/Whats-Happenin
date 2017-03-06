import React from 'react';
import Dropzone from 'react-dropzone';
import colors from './Colors.jsx';

class FileDrop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onDrop = this.onDrop.bind(this);
    this.style = {
      height: '200px',
      marginBottom: '15px',
      border: `2px dashed ${colors.accent}`,
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  }

  onDrop(goodFiles, badFiles) {
    if (goodFiles) {
      console.log('Accepted files:', goodFiles);
      this.props.handleImage(goodFiles[0]);
      this.setState({
        file: goodFiles[0],
      });
    } else {
      console.log('Rejected files:', badFiles);
    }
  }

  render() {
    return (
      <div>
        <Dropzone
          name="picLink"
          // style={this.style}
          onDrop={this.onDrop}
          accept="image/*"
          maxSize={null}
          minSize={null}
        >
          {this.state.file ?
            <div>
              <div className="center">
                <img alt="" src={this.state.file} height="75px" />
                {/* <h2>Uploading {this.state.files.length} image...</h2> */}
              </div>
            </div> :
            <h1>Drop it hot</h1>}
        </Dropzone>
      </div>
    );
  }

}

FileDrop.propTypes = {
  handleImage: React.PropTypes.func.isRequired,
};

export default FileDrop;

{ /* <DropZone
  value={this.props.eventDetails.picLink}
  handleImage={this.props.handleImage}
/> */ }
