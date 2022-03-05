import React from "react";
import Main from '../../Components/Main/Main'
import {Component} from 'react'
import axios from "axios";

const apiUrl = "https://project-2-api.herokuapp.com/videos"
const apiKey = "?api_key=<0666ca86-987e-455f-a07c-a31602e04687>"

export default class Home extends Component {
    state = {
        videoData: [],
        currentVideo: {}
    }

    getVideoById = (id) => {
        axios
            .get(apiUrl + "/" + id + apiKey)
            .then (response => {
                console.log(response.data);
                this.setState({
                    currentVideo: response.data
                })
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        axios
            .get(apiUrl + apiKey)
            .then( response => {
                console.log(response);
                this.setState({
                    videoData: response.data
                })
                const videoId = this.props.match.params.videoId || response.data[0].id
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
                />
            </>
        )
    }
}    