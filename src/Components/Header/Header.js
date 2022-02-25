import '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Header/Header.scss';
import logo from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/assets/Logo/BrainFlix-logo.svg';
import search from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/assets/Icons/search.svg';
import profilePhoto from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/assets/Images/Mohan-muruge.jpg';
import uploadButton from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/assets/Icons/upload.svg'

const Header = () => {
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
            <div  className = "header__upload-button">
                <img src = {uploadButton} alt = "upload button" className = "header__upload-button-icon"/>
                <p className = "header__upload-button-text">UPLOAD</p>
            </div>
            <img src = {profilePhoto} alt = "Profile photo" className = "header__profile-photo--tablet"/>
        </div>
    </header>
    )
}

export default Header