// este é um componente
// html com mais de uma linha se coloca parenteses por volta
// estado: toda informação que o componente vai manipular
// react : componente, estado e propriedades

import React, {useState} from 'react';
import logo from '../assets/logo.svg';
import './Login.css';
import api from '../services/api';

export default function Login({history}){
    const [username, setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/devs',{
            username:username,
        })
        const { _id } = response.data;
        history.push('/dev/'+ _id);
    }

    return (
        <div className = "login-container">
            <form onSubmit = {handleSubmit}>
                <img src = {logo} alt = "tindev" />
                <input 
                    placeholder= "Digite seu usuário do Github"
                    value = {username}
                    onChange = { e => setUsername(e.target.value)}>
                </input>
                <button type = "submit">Enviar</button>
            </form>
            
        </div>
        
    );
}