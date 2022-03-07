import './Upload.scss'
import thumbnailPhoto from '../../assets/Images/Upload-video-preview.jpg'
import uploadButton from '../../assets/Icons/upload.svg'
import { NavLink } from 'react-router-dom'
import React from 'react'

const {uploadAlert} = function uploadAlert () {
    alert("Your video has been uploaded!")
}


export default class Upload extends React.Component {
    state = {
        inputTitle: "",
        inputDescription: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    isTitle = () => {
        if (this.state.inputTitle.length < 1) {
            return false;
        } else {
            return true;
        }
    };

    isDescription = () => {
        if (this.state.inputDescription.length < 1) {
            return false;
        } else {
            return true;
        }
    };

    validForm = () => {
        if (!this.state.inputTitle || !this.state.inputDescription) {
            return false;
        }
        if (!this.isTitle()) {
            return false;
        }
        if (!this.isDescription()) {
            return false;
        } else {
            return true;
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.validForm()) {
            alert("Thanks for uploading! Redirecting back to Homepage");
            this.props.history.push("/");
        } else {
            alert("Your submission must have a valid Title and Description.");
        }    
    };

    render() {
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