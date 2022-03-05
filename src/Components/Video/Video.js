import '../../Components/Video/Video.scss';

    export default function Video ({currentVideo}) {
        return (
            <section className = "video">
                <video className = "video__hero" controls poster={currentVideo.image}>
                </video>
            </section>
        ) 
    }    