import Thumbnail from '../Thumbnail/Thumbnail.js'

export default function Next({ videoData, currentVideo, handleVideoChange }) {
    return (
        <section className="video-list">
            <h3>Next Videos</h3>
            <ul className="video-list__list">
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
                        handleVideoChange={handleVideoChange}
                        />
                    )
            })}
            </ul>
        </section>
    )
}
