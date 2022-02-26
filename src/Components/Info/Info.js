import '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Info/Info.scss'
import viewsIcon from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/assets/Icons/views.svg';
import likesIcon from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/assets/Icons/likes.svg';
import videoDetails from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Data/video-details.json';

const videoInfo = videoDetails[0];
const videoAuthor = "By" + "" + videoInfo.channel
const videoDate = new Date(videoInfo.timestamp);
const dateStamp = 
    videoDate.getDate() +
    "/" +
    (videoDate.getMonth() + 1) +
    "/" +
    videoDate.getFullYear();
const viewsDisplay = videoInfo.views;  
const likesDisplay = videoInfo.likes;
const videoTitle = videoInfo.title
const videoDescription = videoInfo.description;

    const Info = () => {
        return (
            <section className = "info">
                <h1 className = "info__title">
                    { videoTitle }
                </h1>
                <div className = "info__data">
                    <div className = "info__data-left">
                        <h3>{  videoAuthor  }</h3>
                        <p className = "info__numerical">{ dateStamp }</p>
                    </div>
                    <div className = "info__data-right">
                        <div className = "info__views">
                            <img className = "info__icon" src = { viewsIcon } />
                            <p className = "info__numerical" >{ viewsDisplay }</p>
                        </div>
                        <div className = "info__likes">
                            <img className = "info__icon" src = { likesIcon }/>
                            <p className = "info__numerical" >{ likesDisplay }</p>
                        </div>
                    </div>
                </div>
                <div className = "info__description">
                        <p>{ videoDescription }</p>
                </div>
            </section>
        )
        
    }          


export default Info;