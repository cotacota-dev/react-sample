import axios from "axios";
import { userInfo } from "os";
import { useNavigate } from "react-router-dom";


export const useUserRegister = () => {

    const history = useNavigate();

    type Props = {
        userName:string;
        password:string
    }

    const userRegister = (props:Props) => {
        const {userName, password} = props;
        const loginUser  = {
            username:userName,
            password:password,
        }
        console.log('通過');

        axios
        .post(`http://localhost:4000/users/signup`,loginUser)
        .then(async res => {
            if(res.data.status){
                alert('ログインしました')
                history('/home');
            }else {
                alert('ユーザーもしくはパスワードが異なります')
                console.log(res.data);
            }
        })
    }

    return {useUserRegister, userRegister};
}