import '../../Components/Video/Video.scss';

    export default function Video ({mainVideo}) {
        return (
            <section className = "video">
                <video className = "video__hero" controls poster={mainVideo.image}>
                </video>
            </section>
        ) 
    }    