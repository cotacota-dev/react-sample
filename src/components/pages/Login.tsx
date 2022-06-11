import { memo, useState } from "react";
import { Input, Button } from "@chakra-ui/react";

import './style.css';
import { useNavigate } from "react-router-dom";
import { isErrored } from "stream";
import { useAuth } from "../../hooks/useAuth";

const backImage = require('../../img/study.png');


export const Login = memo(() => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const {login} = useAuth();

    const onChangeUserName:React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setUserName(event.target.value);
    }

    const onChangePassword:React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event.target.value);
    }

    const onClickLogin:React.MouseEventHandler<HTMLButtonElement> = (event) => {
        console.log(userName, password);
        // データベースへ登録情報の照会
        login({userName:userName,password:password})
        // navigate('/home');
    }

    return (
        <>
        <div className="box">
            <div className="login-container">
                <p className="title">ログイン画面</p>
                <Input margin={4} placeholder="ユーザー名" onChange={onChangeUserName} value={userName}></Input>
                <Input type="password" margin={4} placeholder="パスワード" onChange={onChangePassword}></Input>
                <div className="login-button-container">
                    <Button _hover={{bg:"gray.500"}} bg="teal.600" onClick={onClickLogin}>ログイン</Button>
                    <img className="sample-image" src={backImage}  />
                </div>
                <a href="/signup">ユーザー登録はこちら</a>
            </div>
        </div>
        </>
        
    )
})