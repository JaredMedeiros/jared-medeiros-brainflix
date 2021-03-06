import './Upload.scss'
import thumbnailPhoto from '../../assets/Images/Upload-video-preview.jpg'
import uploadButton from '../../assets/Icons/upload.svg'
import React from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Upload extends React.Component {
    state = {
        redirectHome: false,
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (!event.target.inputTitle.value || !event.target.inputDescription.value) {
            alert("Please be sure to include a title and description for you video!");
        } else {
            alert("Thanks for submitting! Taking you back to the homepage");
            axios
                .post("http://localhost:5500/videos", {
                    title: event.target.inputTitle.value,
                    description: event.target.inputDescription.value,
                })

                .then((response) => {
                    console.log(response.data);
                });
                
            this.setState({ redirectHome: true})    
        }
    }

    render() {
        const redirectToHomePage = this.state.redirectHome;
        if (redirectToHomePage) {
            return <Redirect to="/" />;
        }
        return (
            <div className = "upload">
            <h1 className = "upload__title">Upload Video</h1>
                <form onSubmit={this.handleSubmit} className = "upload__form">
                    <div className = "upload__content">
                        <div className = "upload__video-container">
                            <h3>VIDEO THUMBNAIL</h3>
                            <img className = "upload__video" src = {thumbnailPhoto} alt = "video thumbnail photo" />
                        </div>
                        <div className = "upload__field-container">
                            <label htmlFor = "inputTitle" className = "upload__form-label">TITLE YOUR VIDEO</label>
                            <input type = "text" id = "inputTitle" className = "upload__input" name = "inputTitle" placeholder = "Add a title to your video"
                                onChange={this.handleChange} value={this.state.inputTitle}>         
                            </input>
                            <label htmlFor = "inputUpload" className = "upload__form-label">ADD A VIDEO DESCRIPTION</label>
                            <textarea id = "inputDescription" className = "upload__text-area" name = "inputDescription" placeholder = "Add a description to your video" 
                                onChange={this.handleChange} value={this.state.inputDescription}>
                            </textarea>
                        </div>
                    </div>        
                    <div className = "upload__cta-container">
                        <button className = "upload__button-container">
                            <img src = {uploadButton} alt = "upload button" className = "upload__button-icon"/>
                            <p className = "upload__button-text">PUBLISH</p>
                        </button>
                        <div className = "upload__cancel-container">
                            <p className = "upload__cancel-text">CANCEL</p>
                        </div>
                    </div>
                </form>
            </div>       
        );
    }    
} 