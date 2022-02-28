import '../../Components/Main/Main.scss';
import Video from '../../Components/Video/Video.js';
import Next from '../../Components/Next/Next.js';
import Info from '../Info/Info.js';
import Comments from '../../Components/Comments/Comments.js'
import Header from '../../Components/Header/Header.js';
import CommentForm from '../CommentForm/CommentForm.js'

export default function Main({videoData, currentVideo, handleVideoChange}) {
    return (
        <main className = "videoData" >
            <Header/>
            <Video 
            currentVideo={currentVideo}
            />
            <div className = "content-wrapper">
                <div>
                    <Info
                    currentVideo={currentVideo}
                    />
                    <CommentForm
                        currentVideo = {currentVideo}/>
                    <Comments
                    currentVideo={currentVideo}
                    />
                </div>
                <Next
                videoData={videoData}
                currentVideo={currentVideo}
                handleVideoChange={handleVideoChange}
                />
            </div>
        </main>
    )
}