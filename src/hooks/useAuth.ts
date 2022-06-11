import axios from "axios";
import { userInfo } from "os";
import { useNavigate } from "react-router-dom";


export const useAuth = () => {

    const history = useNavigate();

    type Props = {
        userName:string;
        password:string
    }

    const login = (props:Props) => {
        const {userName, password} = props;
        const loginUser  = {
            userName:userName,
            password:password,
        }
        console.log('通過')

        axios
        .post(`http://localhost:4000/users/login`,loginUser)
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

    return {useAuth, login};
}