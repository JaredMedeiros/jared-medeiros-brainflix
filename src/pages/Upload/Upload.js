import thumbnailPhoto from '../../assets/Images/Upload-video-preview.jpg'
import uploadButton from '../../assets/Icons/upload.svg'
import { NavLink } from 'react-router-dom'



export default function Upload (currentVideo) {
    return (
        <div className = "upload">
        <h3 className = "upload__title">Upload</h3>
            <div className = "upload__content">
                <div className = "upload__video-container">
                    <h3>VIDEO THUMBNAIL</h3>
                    <img src = {thumbnailPhoto} alt = "video thumbnail photo" />
                </div>
                <div className = "upload__submission-container">
                    <form>
                        <label for = "inputTitle" className = "upload__form-label">TITLE YOUR VIDEO</label>
                        <input type = "text" id = "inputTitle" placeholder = "Add a title to your video"></input>
                        <label for = "inputUpload" className = "upload__form-label">ADD A VIDEO DESCRIPTION</label>
                        <textare id = "inputUpload" placeholder = "Add a description to your video"></textare>
                    </form>
                </div>
            </div>
            <div className = "upload__cta-container">
                <NavLink  className = "upload__button-container" to="/">
                    <img src = {uploadButton} alt = "upload button" className = "header__upload-button-icon"/>
                    <p className = "header__upload-button-text">UPLOAD</p>
                </NavLink>
            </div>
            <div className = "upload__cancel-container">
                <p className = "upload__cancel-text">CANCEL</p>
            </div>
        </div>

    )
} 