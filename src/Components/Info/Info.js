import '../../Components/Info/Info.scss'
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';

    export default function Info ({currentVideo}) {
        return (
            <section className = "info">
                <h1 className = "info__title">
                    { currentVideo.title }
                </h1>
                <div className = "info__data">
                    <div className = "info__data-left">
                        <h3>{  currentVideo.channel  }</h3>
                        <p className = "info__numerical">
                            { ("0" + ((new Date(currentVideo.timestamp)).getMonth() + 1)).slice(-2) +
                            "/" +
                            ("0" + ((new Date(currentVideo.timestamp)).getDate())).slice(-2) +
                            "/" +
                            (new Date(currentVideo.timestamp)).getFullYear()  }
                        </p>
                    </div>
                    <div className = "info__data-right">
                        <div className = "info__views">
                            <img className = "info__icon" alt = "view counter icon" src = { viewsIcon } />
                            <p className = "info__numerical" >{ currentVideo.views }</p>
                        </div>
                        <div className = "info__likes">
                            <img className = "info__icon" alt = "like counter icon" src = { likesIcon }/>
                            <p className = "info__numerical" >{ currentVideo.likes }</p>
                        </div>
                    </div>
                </div>
                <div className = "info__description">
                        <p>{ currentVideo.description }</p>
                </div>
            </section>
        )   
    }          
