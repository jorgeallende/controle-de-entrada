import React from 'react'

const EmployeeButtons = () => {
  return (
    <div>
        <button 
            className='mt-4 bg-blue-800 uppercase p-4 rounded font-bold text-sm hover:bg-blue-900 transition-colors'
        >
            Listar visitantes
        </button>
        <button 
            className='mt-4 bg-blue-800 uppercase p-4 rounded font-bold text-sm hover:bg-blue-900 transition-colors'
        >
            Notificar visita
        </button>
    </div>
  )
}

export default EmployeeButtons