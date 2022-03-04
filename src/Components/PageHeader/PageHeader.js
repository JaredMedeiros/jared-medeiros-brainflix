import './PageHeader.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import search from '../../assets/Icons/search.svg';
import profilePhoto from '../../assets/Images/Mohan-muruge.jpg';
import uploadButton from '../../assets/Icons/upload.svg'
import {NavLink} from 'react-router-dom';

export default function PageHeader () {
    return(   
    <header className = "header">
        <div className = "header_logo-container">
            <img src = {logo} alt="BrainFlix logo" className = "header__logo"/>
        </div>
        <div className = "header__search-and-upload">
            <div className = "header__inner-container">
                <div className = "header__search-bar">
                    <img src = {search} alt = "search bar" className = "header__search-bar-icon"/>
                    <p>Search</p>
                </div>
                <img src = {profilePhoto} alt = "Profile photo" className = "header__profile-photo--mobile"/>
            </div>
            <NavLink  className = "header__upload-button" to="/upload">
                <img src = {uploadButton} alt = "upload button" className = "header__upload-button-icon"/>
                <p className = "header__upload-button-text">UPLOAD</p>
            </NavLink>
            <img src = {profilePhoto} alt = "Profile photo" className = "header__profile-photo--tablet"/>
        </div>
    </header>
    )
}
