// configurando rotas da apllicação
// preciso ter um route por pagina da aplicação
// todo lugar em que se usa um componente se importa o react
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path = "/" exact component = {Login}></Route>
            <Route path = "/dev/:id" component={Main}></Route>
    
        </BrowserRouter>
    );
    
}