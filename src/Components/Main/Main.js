import '../../Components/Main/Main.scss';
import Video from '../../Components/Video/Video.js';
import Next from '../../Components/Next/Next.js';
import Info from '../Info/Info.js';
import Comments from '../../Components/Comments/Comments.js'
import PageHeader from '../PageHeader/PageHeader.js';
import CommentForm from '../CommentForm/CommentForm.js'

export default function Main({videoData, currentVideo, comments}) {
    return (
        <main className = "videoData" >
            <Video 
            currentVideo = {currentVideo}
            />
            <div className = "content-wrapper">
                <div>
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
                <Next
                videoData={videoData}
                currentVideo={currentVideo}
                />
            </div>
        </main>
    )
}