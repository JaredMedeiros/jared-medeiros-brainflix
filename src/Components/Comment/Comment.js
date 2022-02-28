import '../../Components/Comment/Comment.scss';

export default function Comment ({ name, copy, date}) {
    return (
        <div className = "comment">   
            <div className = "comment__photo"></div>
            <div className = "comment__content">
                <div className = "comment__identity">
                    <h3 className = "comment__name">{name}</h3>
                    <div className = "comment__date">
                        {   ("0" + ((new Date(date)).getMonth() + 1)).slice(-2) +
                            "/" +
                            ("0" + ((new Date(date)).getDate())).slice(-2) +
                            "/" +
                            (new Date(date)).getFullYear() }
                    </div>
                </div>
                <p className = "comment__copy">{copy}</p>
            </div>
        </div>
    );
}