import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ArticleRegister } from '../components/pages/ArticleRegister';
import { Articles } from '../components/pages/Articles';
import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { Page404 } from '../components/pages/Page404';
import { SignUp } from '../components/pages/SignUp';
import { HeaderLayout } from '../components/templates/HeaderLayout';

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/home" element={<HeaderLayout><Home /></HeaderLayout>}></Route>
            <Route path="/home/article" element={<HeaderLayout><Articles /></HeaderLayout>}></Route>
            <Route path="/home/article/register" element={<HeaderLayout><ArticleRegister /></HeaderLayout>}></Route>
            <Route path="*" element={<Page404 />}></Route>
        </Routes>
    )
}