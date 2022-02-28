import '../../Components/Comments/Comments.scss';
import Comment from '../../Components/Comment/Comment.js'

export default function Comments ({currentVideo}) {
    return (
        <section className = "comments">
            {currentVideo.comments.map((comment) => {
                return (
                    <Comment
                    name={comment.name}
                    copy={comment.comment}
                    date={comment.timestamp}
                    />
                )
            })}
        </section>
    );
}