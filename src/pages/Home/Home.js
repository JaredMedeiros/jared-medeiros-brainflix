import React from "react";
import Main from '../../Components/Main/Main'
import {Component} from 'react'
import axios from "axios";

const apiUrl = "http://localhost:5500/videos"


export default class Home extends Component {
    state = {
        videoData: [],
        currentVideo: {},
        comments: []
    }

    getVideoById = (id) => {
        axios
            .get(`${apiUrl}/${id}`)
            .then (response => {
                this.setState({
                    currentVideo: response.data,
                    comments: response.data.comments
                })
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        axios
            .get(apiUrl)
            .then( response => {
                this.setState({
                    videoData: response.data
                })
                const videoId = this.props.match.params.videoId || response.data[0].id;
                this.getVideoById(videoId)
            })
            .catch(err => console.log(err))
    }

    componentDidUpdate(prevProps, prevState) {
        const videoId = this.props.match.params.videoId || this.state.videoData[0].id;

        if (prevState.currentVideo && prevState.currentVideo.id !== videoId) {
            this.getVideoById(videoId)
        }
    }

    render() {
        return (
            <>
                <Main
                videoData = {this.state.videoData}
                currentVideo = {this.state.currentVideo}
                comments={this.state.comments}
                />
            </>
        )
    }
}    