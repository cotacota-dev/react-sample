import './Page404.css';

const image404 = require('../../img/anya-cry.PNG');

export const Page404 = () => {
    return(
        <>
        <div className="not-found">
            <p>ページが存在しません</p>
            <img src={image404} alt="" />
        </div>
        
        </>
        
    )
}