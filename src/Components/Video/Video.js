
import '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Video/Video.scss';
import videoMain from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Data/videos.json';

const videoObj = videoMain[0];

    const Video = () => {
        return (
            <section className = "video">
                <video className = "video__hero" controls poster={videoObj.image}></video>
            </section>
        )
        
    }          


export default Video;