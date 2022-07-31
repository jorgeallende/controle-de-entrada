import React from 'react'

const AttendantButtons = (props) => {
  return (
    <div className='flex flex-col'>
        <button 
            className='mt-4 bg-blue-800 p-3 px-10 rounded text-sm hover:bg-blue-900 transition-colors'
            onClick={() => props.mode("addVisitor")}
        >
            Cadastrar visitante
        </button>
        <button 
            className='mt-4 bg-blue-800 p-3 px-10 rounded text-sm hover:bg-blue-900 transition-colors'
        >
            Listar visitantes
        </button>
    </div>
  )
}

export default AttendantButtons