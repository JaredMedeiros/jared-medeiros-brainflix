import './Upload.scss'
import thumbnailPhoto from '../../assets/Images/Upload-video-preview.jpg'
import uploadButton from '../../assets/Icons/upload.svg'
import { NavLink } from 'react-router-dom'



export default function Upload (currentVideo) {
    return (
        <div className = "upload">
        <h1 className = "upload__title">Upload Video</h1>
            <div className = "upload__content">
                <div className = "upload__video-container">
                    <h3>VIDEO THUMBNAIL</h3>
                    <img className = "upload__video" src = {thumbnailPhoto} alt = "video thumbnail photo" />
                </div>
                <div className = "upload__submission-container">
                    <form className = "upload__form">
                        <label htmlFor = "inputTitle" className = "upload__form-label">TITLE YOUR VIDEO</label>
                        <input type = "text" id = "inputTitle" className = "upload__input" placeholder = "Add a title to your video"></input>
                        <label htmlFor = "inputUpload" className = "upload__form-label">ADD A VIDEO DESCRIPTION</label>
                        <textarea id = "inputDescription" className = "upload__text-area" placeholder = "Add a description to your video"></textarea>
                    </form>
                </div>
            </div>
            <div className = "upload__cta-container">
                <NavLink  className = "upload__button-container" to="/">
                    <img src = {uploadButton}/*  onClick = "uploadAlert()"  */alt = "upload button" className = "upload__button-icon"/>
                    <p className = "upload__button-text">UPLOAD</p>
                </NavLink>
            </div>
            <div className = "upload__cancel-container">
                <p className = "upload__cancel-text">CANCEL</p>
            </div>
        </div>

    )
} 