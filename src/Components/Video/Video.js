
import '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Video/Video.scss';
import videoMain from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Data/videos.json';

// const videoObj = videoMain[0];

    export default function Video ({currentVideo}) {
        return (
            <section className = "video">
                <video className = "video__hero" controls poster={currentVideo.image}>
                </video>
            </section>
        )
        
    }    