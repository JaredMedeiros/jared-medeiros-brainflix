import '../../Components/Thumbnail/Thumbnail.scss'

export default function Thumbnail({ id, image, title, channel, handleVideoChange }) {
    return (
        <li className="thumbnail">
            <a 
            onClick={() => {
                handleVideoChange(id)
            }}
            href="#root">    
            <div className = "thumbnail__image-container" ><img className = "thumbnail__image" src={image}/></div>
            <div className = "thumbnail__copy">
                <h3 className = "thumbnail__title">{title}</h3>
                <p className = "thumbnail__channel">{channel}</p>
            </div>
            </a>
        </li>
    )
}