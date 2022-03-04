import React from "react";
import Video from "../../Components/Video/Video"
import Info from '../Info/Info.js';
import Comments from '../../Components/Comments/Comments.js';
import CommentForm from '../CommentForm/CommentForm.js';
import Next from '../../Components/Next/Next.js';
import {Component} from 'react'
import axios from "axios";

const apiUrl = "https://project-2-api.herokuapp.com/videos"
const apiKey = "?api_key=<0666ca86-987e-455f-a07c-a31602e04687>"

class Home extends Component {
    state = {
        nextVideos: [],
        mainVideo: [],
        comments: [],
        allVideos: []
    };

    componentDidMount() {
        axios
            .get(
                apiUrl  + apiKey
            )
            .then(response => {
                const allVideos = response.data;
                axios
                    .get(
                        apiUrl + "/1af0jruup5gu" + apiKey
                    )
                    .then(response => {
                        let nextVideos = allVideos.filter(
                            video => video.id !=="1af0jruup5gu"
                        );
                        const mainVideo = response.data;
                        const comments = response.data.comments;
                        this.setState({ nextVideos, mainVideo: [mainVideo], comments, allVideos});
                    });
            });        
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match !== this.props.match) {
            axios
            .get (
                `${apiUrl}${this.props.match.params.id}${apiKey}`
            )
            .then(response => {
                const main = response.data;
                const comments = response.data.comments;
                let nextVideos = this.state.sideVideos.filter(
                    video => video.id !== this.props.match.params.id
                );
                this.setState({ nextVideos, mainVideo: [mainVideo], comments});
            });
        }
    }

    render() {
        return (
            <div>
            <Video 
            currentVideo={this.state.mainVideo[0].image}
            />
            <div className = "content-wrapper">
                <div>
                    <Info
                    currentVideo={this.state.mainVideo}
                    />
                    <CommentForm
                        currentVideo = {this.state.comments}/>
                    <Comments
                    currentVideo={this.state.mainVideo}
                    />
                </div>
                <Next
                nextVideo={this.state.nextVideos}
                />
            </div>
        </div>
        )
    }
}

export default Home;