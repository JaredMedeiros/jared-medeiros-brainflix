import '/Users/jaredmedeiros/Desktop/jared-medeiros-brainflix/src/Components/Comment/Comment.scss';

export default function Comment ({ name, copy, date}) {
    return (
        <>
        <div> //image </div>
        <div>
            <ul>
                <li>{name}</li>
                <li>
                    { (new Date(date)).getDate() +
                        "/" +
                        ((new Date(date)).getMonth() + 1) +
                        "/" +
                        (new Date(date)).getFullYear() }
                </li>
            </ul>
            <p>{copy}</p>
        </div>
        </>

    );
}