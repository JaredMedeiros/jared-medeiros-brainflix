import '../../Components/Thumbnail/Thumbnail.scss'
import {Link} from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

export default function Thumbnail({ id, image, title, channel}) {
    
    return (
        <li className="thumbnail">
            <ScrollToTop/>
            <Link 
            to = {`/home/${id}`}
            >  
                <div className = "thumbnail__image-container" >
                    <img className = "thumbnail__image" alt = "thumbnail video preview photo" src={image}/>
                </div>
                <div className = "thumbnail__copy">
                    <h3 className = "thumbnail__title">{title}</h3>
                    <p className = "thumbnail__channel">{channel}</p>
                </div>
            </Link>      
        </li>
    )
}