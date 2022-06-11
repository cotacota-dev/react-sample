import { Button, Input } from "@chakra-ui/react"
import { memo, useState } from "react"
import { useNavigate } from "react-router-dom";
import {useUserRegister} from '../../hooks/useUserRegister'

export const SignUp = memo(() => {

    const {userRegister} = useUserRegister();
    const navigate = useNavigate();
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRetry, setPasswordRetry] = useState<string>('');

    const onChangeUserName:React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setUserName(event.target.value);
    }

    const onChangePassword:React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event.target.value);
    }

    const onChangePasswordRetry:React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setPasswordRetry(event.target.value);
    }

    const onClickUserRegister:React.MouseEventHandler<HTMLButtonElement> = (event) => {
        userRegister({userName:userName,password:password});
        setUserName('');
        setPassword('');
        setPasswordRetry('');
    }

    return (
        <div className="box">
            <div className="login-container">
                <p className="title">ユーザー登録</p>
                <Input margin={4} placeholder="ユーザー名" onChange={onChangeUserName} value={userName}></Input>
                <Input type="password" margin={4} placeholder="パスワード" onChange={onChangePassword}></Input>
                <Input type="password" marginTop={1} placeholder="パスワード確認用" onChange={onChangePasswordRetry}></Input>
                <div className="login-button-container">
                <Button _hover={{bg:"gray.500"}} bg="teal.600" onClick={onClickUserRegister} disabled={password!==passwordRetry || password===""}>登録</Button>
                </div>
                <a href="/">ログイン画面へ戻る</a>
            </div>
        </div>
    )
})