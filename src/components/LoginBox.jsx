import React from 'react'
import { useState } from 'react';

const LoginBox = (props) => {
    const [login, setlogin] = useState('');
    const [senha, setSenha] = useState('');

    const data = props.data;

    function validate() {
        console.log(data.empregados)
        data.empregados.map((user) => {
            if (login == user.login) {
                console.log("Login encontrado")
                if (senha == user.senha) {
                    console.log("LOGADO COM SUCESSO");
                    props.userLevel(user.cargo)
                    props.setUser(user);
                    props.callback(true);
                } else {
                    console.log("SENHA ERRADA!");
                }
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        validate();
    }

    return (
        <>
            <div className='p-12 px-18 bg-gray-700 border border-gray-500 rounded'>
                <strong className='text-1xl mb-6 block'>Entrar no sistema</strong>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full'>
                    <div class="relative">
                        <input
                            type="text"
                            id="floating_fille"
                            class="pr-24 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={e => setlogin(e.target.value)}
                            value={login}
                        />
                        <label
                            for="floating_fille"
                            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                            Login
                        </label>
                    </div>
                    <div class="relative">
                        <input
                            type="password"
                            id="floating_fille"
                            class="pr-24 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={e => setSenha(e.target.value)}
                            value={senha}
                        />
                        <label
                            for="floating_fille"
                            class=" absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                            Senha
                        </label>
                    </div>

                    <button
                        type='submit'
                        className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors'>
                        Entrar
                    </button>
                </form>
            </div>
            {/* <div className='h-96 w-96 rounded bg-zinc-300 flex items-center text-zinc-800 p-3 flex-col'>
                <h1 className=''>Login</h1>
                <input type='text' placeholder='Login' value={login} onChange={e => setlogin(e.target.value)} />
                <input type='text' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
                <button onClick={validate}>Entrar</button>
            </div> */}
        </>
    )
}

export default LoginBox