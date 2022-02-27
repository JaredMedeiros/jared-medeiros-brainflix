import '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Main/Main.scss';
import Video from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Video/Video.js';
import Next from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Next/Next.js';
import Info from '../Info/Info';
import Comments from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Comments/Comments.js'
import Header from '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Header/Header.js';

export default function Main({videoData, currentVideo, handleVideoChange}) {
    return (
        <main className = "videoData" >
            <Header/>
            <Video 
            currentVideo={currentVideo}
            />
            <div>
                <Info
                currentVideo={currentVideo}
                />
                <Comments
                currentVideo={currentVideo}
                />
            </div>
            <div className = "videoData__list-container">
                <Next
                videoData={videoData}
                currentVideo={currentVideo}
                handleVideoChange={handleVideoChange}
            />
            </div>
        </main>
    )
}