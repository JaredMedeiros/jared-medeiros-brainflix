

export default function Thumbnail({ id, image, title, channel, handleVideoChange }) {
    return (
        <li className="thumbnail">
            <a 
            onClick={() => {
                handleVideoChange(id)
            }}
            href="#root">
            <img src={image} className = "thumbnail__image" />
            <div className = "thumbnail__copy">
                <h3 className = "thumbnail__title">{title}</h3>
                <p className = "thumbnail__channel">{channel}</p>
            </div>
            </a>
        </li>
    )
}