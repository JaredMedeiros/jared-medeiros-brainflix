import '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Header/Header.scss';
import logo from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/assets/Logo/BrainFlix-logo.svg';
import search from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/assets/Icons/search.svg';
import profilePhoto from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/assets/Images/Mohan-muruge.jpg';
import uploadButton from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/assets/Icons/upload.svg'

const Header = () => {
    return(   
    <header className = "header">
        <img src = {logo} alt="BrainFlix logo" className = "header__logo"/>
        <div className = "header__container1">
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
    </header>
    )
}

export default Header