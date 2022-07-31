import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

const GET_VISITORS = gql`
    query GetVisitors {
            visitantes(stage: DRAFT) {
                cpf
                nome
                photo
                rg
                telefone
        }
    }
`

const ReadVisitor = () => {
    const [cpf, setCPF] = useState();
    const { data, refetch } = useQuery(GET_VISITORS);
    const [userData, setUserData] = useState(null);
    const [date, setDate] = useState(moment());
    date.locale('ptBr')


    console.log(date)

    function handleSubmit(event) {
        event.preventDefault();
        data?.visitantes.map((visitor) => {
            if (visitor.cpf == cpf) {
                setUserData(visitor)
            }
        })
    }

    useEffect(() => {
        refetch();
    }, []);

    return (
        <div className='flex flex-col'>
            <form onSubmit={handleSubmit} className='mt-12 flex gap-2 items-center justify-center'>
                <input
                    className='bg-gray-900 rounded px-16 pl-4 p-2'
                    type='number'
                    placeholder='CPF'
                    value={cpf}
                    onChange={e => setCPF(parseInt(e.target.value))}
                />
                <button
                    type='submit'
                    className=' bg-green-500 uppercase p-2 rounded font-bold text-sm hover:bg-green-700 transition-colors'>
                    Buscar
                </button>
            </form>

            {
                userData &&
                <>

                    <div className='flex gap-8 mt-6'>
                        <div className='flex-1'>
                            <header className='text-gray-300 mt-3'>Nome</header>
                            <div className='w-full bg-slate-500 rounded p-2'>
                                {userData.nome}
                            </div>

                            <header className='text-gray-300 mt-3'>RG</header>
                            <div className='w-full bg-slate-500 rounded p-2'>
                                {userData.rg}
                            </div>

                            <header className='text-gray-300 mt-3'>Telefone</header>
                            <div className='w-full bg-slate-500 rounded p-2'>
                                {userData.telefone}
                            </div>
                        </div>
                        <div className='flex-1'>
                            <header className='text-gray-300 mt-3'>Foto</header>
                            <img className='' src={userData.photo} />
                        </div>
                    </div>
                    <div className='mt-6 text-sm'>
                        Registrar visita?
                        <p>
                            {/* {date.locale("pt").format("MMMM")} */}
                        </p>
                        <div className='flex gap-4 mt-2'>
                        <button
                    type='submit'
                    className=' bg-red-500 p-2 px-6 rounded font-bold text-sm hover:bg-red-700 transition-colors'>
                    Voltar
                </button>
                <button
                    type='submit'
                    className=' bg-green-500 p-2 px-6 rounded font-bold text-sm hover:bg-green-700 transition-colors'>
                    Registrar
                </button>
                        </div>
                    </div>
                </>
            }
        </div>

    )
}

export default ReadVisitor