import Thumbnail from '../Thumbnail/Thumbnail.js'
import '../../Components/Next/Next.scss'

export default function Next({ videoData, currentVideo }) {
    return (
        <section className = "video-list">
            <h3 className = "video-list__subtitle">Next Videos</h3>
            <ul className = "video-list__list">
            {videoData
                .filter(video => video.id !== currentVideo.id)
                .map(video => {
                    return (
                        <Thumbnail
                        key={video.id}
                        id={video.id}
                        image={video.image}
                        title={video.title}
                        channel={video.channel}
                        />
                    )
            })}
            </ul>
        </section>
    )
}
