import React from 'react'

const AdminButtons = (props) => {
  return (
    <div className='flex flex-col'>
        <button 
            className='mt-4 text-sm bg-blue-600 hover:bg-blue-500 text-zinc-200 py-2 px-4 border-b-4 border-r-4 border-blue-900 hover:border-blue-700 rounded'
            onClick={() => props.mode("addUnit")}
        >
            Cadastrar unidades
        </button>
        <button 
            className='mt-4 text-sm bg-blue-600 hover:bg-blue-500 text-zinc-200 py-2 px-4 border-b-4 border-r-4 border-blue-900 hover:border-blue-700 rounded'
            onClick={() => props.mode("addSetor")}
        >
            Cadastrar setor
        </button>
        <button 
            className='mt-4 text-sm bg-blue-600 hover:bg-blue-500 text-zinc-200 py-2 px-4 border-b-4 border-r-4 border-blue-900 hover:border-blue-700 rounded'
            onClick={() => props.mode("addFunc")}
        >
            Cadastrar funcionário
        </button>
        <button 
            className='mt-4 text-sm bg-blue-600 hover:bg-blue-500 text-zinc-200 py-2 px-4 border-b-4 border-r-4 border-blue-900 hover:border-blue-700 rounded'
            onClick={() => props.mode("addVisitor")}
        >
            Cadastrar visitante
        </button>
        <button 
            className='mt-4 text-sm bg-blue-600 hover:bg-blue-500 text-zinc-200 py-2 px-4 border-b-4 border-r-4 border-blue-900 hover:border-blue-700 rounded'
            onClick={() => props.mode("readVisitor")}
        >
            Registrar visita
        </button>
    </div>
  )
}

export default AdminButtons