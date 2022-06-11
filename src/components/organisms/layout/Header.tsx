import { useNavigate } from 'react-router-dom';
import { Link } from "@chakra-ui/react";
import './Header.css';

const gitLogo = require('../../../img/study.png');

export const Header = () => {

    const history = useNavigate();

    const onClickLogo:React.MouseEventHandler<HTMLImageElement> = (event) => {
        history('/home');
    };

    const onClickArticle:React.MouseEventHandler<HTMLAnchorElement>= (event) => {
        history('/home/article');
    }

    const onClickArticleRegister:React.MouseEventHandler<HTMLAnchorElement>= (event) => {
        history('/home/article/register');
    }

    const onClickLogout:React.MouseEventHandler<HTMLAnchorElement>= (event) => {
        history('/');
    }

    return(
        <div className="header-container">
                <img src={gitLogo} className="logo-image" onClick={onClickLogo}/> 
                <p>Study Management</p>
                <div className='link-tab'>
                    <Link onClick={onClickArticle}>記事</Link>
                    <Link onClick={onClickArticleRegister}>記事登録</Link>
                    <Link onClick={onClickLogout}>ログアウト</Link>
                </div>
        </div>
    )
}