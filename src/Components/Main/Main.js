import '../../Components/Main/Main.scss';
import Video from '../Video/Video.js';
import Next from '../Next/Next.js';
import Info from '../Info/Info.js';
import Comments from '../Comments/Comments.js'
import CommentForm from '../CommentForm/CommentForm.js'

export default function Main({videoData, currentVideo, comments}) {
    return (
        <main className = "videoData" >
            <Video 
            currentVideo = {currentVideo}
            />
            <div className = "content-wrapper">
                <div className = "content-wrapper__inner">
                    <Info
                    currentVideo = {currentVideo}
                    />
                    <CommentForm
                    currentVideo = {currentVideo}
                    comments = {comments}
                    />
                    <Comments
                    currentVideo = {currentVideo}
                    comments = {comments}
                    />
                </div>
                <div>
                <Next
                videoData={videoData}
                currentVideo={currentVideo}
                />
                </div>
            </div>
        </main>
    )
}