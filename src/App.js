import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Router } from 'react-router-dom';
import './App.scss';
import Home from '../src/pages/Home/Home'
import PageHeader from '../src/Components/PageHeader/PageHeader'
import Upload from '../src/pages/Upload/Upload'
import { Component } from 'react';
import Main from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Main/Main.js'
import videoData from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Data/video-details.json';

// class App extends React.Component {
//   state = {
//     videoData: videoData,
//     currentVideo: videoData[0] 
//   }

//   handleVideoChange = (id) => {
//     const newVideoId = this.state.videoData.findIndex(videoData => id === videoData.id)
//     this.setState({
//       currentVideo: this.state.videoData[newVideoId]
//     })
//   }

//   render() {
//     return (
//       <Main
//       videoData = {this.state.videoData}
//       currentVideo = {this.state.currentVideo}
//       handleVideoChange = {this.handleVideoChange}
//       />
//       )
//     }  
//   } 

//   export default App;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PageHeader/>
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = '/video/:id' component = {Home} />
          <Route path = "/upload" component = {Upload} />
        </Switch>  
      </BrowserRouter>
    );
  }
}

export default App