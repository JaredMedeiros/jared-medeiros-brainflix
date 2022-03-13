import '../../Components/CommentForm/CommentForm.scss';
import commentIcon from '../../assets/Icons/add_comment.svg';

const handleSubmit = (event) => {
    event.preventDefault();
  };

export default function CommentForm ({comments}) {
    return (
        <div className = "commentform">
            <h3 className = "commentform__counter" >{comments.length} Comments</h3>
            <div className = "commentform__content">
                <div className = "commentform__picture-section">
                    <div className = "commentform__picture"></div>
                </div>
                <form onSubmit = {handleSubmit} className = "commentform__form">
                    <div className = "commentform__input-container">
                        <label className = "commentform__label" htmlFor="joinConvo">JOIN THE CONVERSATION</label><br/>
                        <textarea className = "commentform__input" id="joinConvo" name="joinConvo" placeholder='Add a new Comment'></textarea><br/>
                    </div>
                    <div className = "commentform__cta">    
                        <button className = "commentform__button">COMMENT</button>
                        <img className = "commentform__icon" alt = "comment icon" src = {commentIcon}/>
                    </div>
                </form>    
            </div>
        </div>
    )
}