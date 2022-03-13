import '../../Components/Comments/Comments.scss';
import Comment from '../Comment/Comment.js'

export default function Comments ({comments}) {
    return (
        <section className = "comments">
            {comments.map((comment, index) => {
                return (
                    <Comment
                    key={index}
                    name={comment.name}
                    comment={comment.comment}
                    date={comment.timestamp}
                    />
                )
            })}
        </section>
    );
}