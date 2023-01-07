import { Link } from "react-router-dom";

import Header from "./Header";

import "./ModelPage.scss"

export default function ModelPage() {
    return (
        <div className="model-page">
            <Header />
            <div className="model-and-photo">
                <h3 className="model-name">Модель "Образец"</h3>
                <div className="creator-name">создана пользователем BookishMrAFK</div>
                <div className="creation-date">23 октября 2022</div>
                <img className="model-photo" src="/model-sample-photo.jpg" alt="Error" />
            </div>
            <div className="model-menu">
                <div className="download-button">
                    <div className="download-button-text">Скачать все файлы</div>
                </div>
                <div className="liked">
                    <img src="icons8-favorite-50.png" alt="Error" className="img-liked" />
                    <div className="liked-text">Понравилось</div>
                </div>
                <div className="comment">
                    <img src="icons8-comments-50.png" alt="Error" className="img-comment" />
                    <div className="comment-text">Комментировать</div>
                </div>
                <div className="copy-link">
                    <img src="icons8-share-24.png" alt="Error" className="img-copy" />
                    <div className="copy-link-text">Копировать ссылку</div>
                </div>
                <Link to="/canvas" className="open3d">
                    <img src="icons8-orthogonal-view-80.png" alt="Error" className="img-open3d" />
                    <div className="open3d-text">Открыть в 3D</div>
                </Link>
            </div>
        </div>
    );
}