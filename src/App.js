import React from 'react';
import './App.scss';

// import Video from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Video/Video.js';
// import Info from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Info/Info.js'
// import Comments from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Comments/Comments'
import Main from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Main/Main.js'
import videoData from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Data/video-details.json';

class App extends React.Component {
  state = {
    videoData: videoData,
    currentVideo: videoData[0] 
  }

  handleVideoChange = (id) => {
    const newVideoId = this.state.videoData.findIndex(videoData => id === videoData.id)
    this.setState({
      currentVideo: this.state.videoData[newVideoId]
    })
  }

  render() {
    return (
      <Main
      videoData={this.state.videoData}
      currentVideo={this.state.currentVideo}
      handleVideoChange={this.handleVideoChange}
      />
      )
    }  
  } 
export default App;
