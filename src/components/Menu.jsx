import React, { useState, useEffect } from 'react'
import AddEmployee from './AddEmployee'
import AddSetor from './AddSetor'
import AddUnit from './AddUnit'
import AddVisitor from './AddVisitor'
import AdminButtons from './AdminButtons'
import AttendantButtons from './AttendantButtons'
import EmployeeButtons from './EmployeeButtons'
import ReadVisitor from './ReadVisitor'

const Menu = (props) => {
    console.log(props.user)
    const [mode, setMode] = useState();

    useEffect(() => {
        console.log(mode)
    }, [mode]);

    return (
        <div className='flex  h-[95vh]'>

            <div className='p-12 w-[300px] justify-between bg-gray-700 border border-gray-500 flex flex-col items-center '>
                <div className="flex flex-col items-center gap-1">

                    <div className='w-full text-center'>
                        Bem-vindo, {props.user.empName}.
                    </div>

                    <span
                        class=" bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        {props.cargo}
                    </span>
                </div>

                <div>
                    {
                        props.cargo == "administrador"
                            ? <> <AdminButtons mode={setMode} /> </>
                            : props.cargo == "atendente"
                                ? <> <AttendantButtons mode={setMode} /> </>
                                : props.cargo == "funcionario"
                                    ? <> <EmployeeButtons mode={setMode} /> </>
                                    : <> USER NOT FOUND </>
                    }
                </div>
                <div className="mt-4">
                    <button className="text-red-500 underline" onClick={() => props.logged(false)}>Sair</button>
                </div>
            </div>
            <div className='bg-gray-700 border border-gray-500 w-[60vw] flex flex-col items-center p-12'>
                {
                    mode == "addUnit" && <>
                        <header className='font-bold text-xl'>Cadastrar unidade</header>
                        <AddUnit />
                    </>
                }
                {
                    mode == "addFunc" && <>
                        <header className='font-bold text-xl'>Cadastrar funcionário</header>
                        <AddEmployee />
                    </>
                }
                {
                    mode == "addVisitor" && <>
                        <header className='font-bold text-xl'>Cadastrar visitante</header>
                        <AddVisitor />
                    </>
                }
                {
                    mode == "readVisitor" && <>
                        <header className='font-bold text-xl'>Registrar visita</header>
                        <div className='w-full'>
                            <ReadVisitor />
                        </div>
                    </>
                }
                {
                    mode == "addSetor" && <>
                        <header className='font-bold text-xl'>Cadastrar setor</header>
                            <AddSetor />
                    </>
                }
            </div>

        </div>
    )
}

export default Menu