import React, { useState, useEffect } from 'react'
import { gql, useQuery, useMutation } from "@apollo/client";

const CREATE_EMPLOYEE = gql`
    mutation CreateEmpregado($empName: String!, $unitNumber: Int!, $login: String!, $senha: String!, $cargo: Cargo!) {
        createEmpregado(
            data: {empName: $empName, unitNumber: $unitNumber, login:  $login, senha: $senha, cargo: $cargo}
        ) {
            id
        }
    }
`

const GET_UNITS = gql`
    query ReadUnidades {
        unidades(stage: DRAFT) {
            idnumber
            unitName
        }
    }
`

const AddEmployee = () => {
    const [empName, setNome] = useState('');
    const [unitNumber, setUnitNumber] = useState();
    const [login, setLogin] = useState('');
    const [senha, useSenha] = useState('');
    const [cargo, setCargo] = useState(["", "administrador", "atendente", "funcionario"]);
    const { data, loading, error, refetch } = useQuery(GET_UNITS);

    useEffect(()=>{
        refetch();
    },[])

    const [createEmpregado] = useMutation(CREATE_EMPLOYEE);

    console.log(data)

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Chamou")
        createEmpregado({
            variables: {
                empName,
                unitNumber,
                login,
                senha,
                cargo
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-2'>
                <div class="relative">
                    <input
                        type="text"
                        id="floating_fille"
                        class="pr-24 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-900 border-0  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded pl-4 h-12"
                        placeholder=" "
                        onChange={e => setNome(e.target.value)}
                        value={empName}
                    />
                    <label
                        for="floating_fille"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Nome
                    </label>
                </div>
                
                <div class="relative">
                    <input
                        type="text"
                        id="floating_fille2"
                        class="pr-24 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-900 border-0  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded pl-4 h-12"
                        placeholder=" "
                        onChange={e => setLogin(e.target.value)}
                        value={login}
                    />
                    <label
                        for="floating_fille2"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Login
                    </label>
                </div>

                <div class="relative">
                    <input
                        type="password"
                        id="floating_fille3"
                        class="pr-24 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-900 border-0  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded pl-4 h-12"
                        placeholder=" "
                        onChange={e => useSenha(e.target.value)}
                        value={senha}
                    />
                    <label
                        for="floating_fille3"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Senha
                    </label>
                </div>

                <select
                    name="cargo"
                    id="cargo"
                    className='bg-gray-900 w-full rounded pr-16 pl-2 h-12 text-sm'
                    placeholder='Cargo'
                    onChange={
                        (e) => { setCargo(e.target.value) }
                    }
                >
                    <option>Cargo</option>
                    <option value="administrador">Administrador</option>
                    <option value="atendente">Atendente</option>
                    <option value="funcionario">Funcionário</option>
                </select>
                <select
                    name="unidade"
                    id="unit"
                    className='bg-gray-900 w-full rounded pr-16 pl-2 h-12 text-sm'
                    placeholder='Unidade'
                    onChange={
                        (e) => {
                            // console.log(e.target.value)
                            setUnitNumber(parseInt(e.target.value))
                            console.log(unitNumber);
                        }
                    }
                >
                    <option value="">Unidade</option>
                    {
                        data?.unidades?.map((unit) => (
                            <option value={unit.idnumber}>{unit.unitName}</option>
                        ))
                    }
                </select>
                <button
                    className='mt-4 w-full bg-green-600 p-4 rounded font-bold text-sm hover:bg-green-900 transition-colors'
                    type="submit"
                    onClick={() => props.mode("addUnit")}
                >
                    Cadastrar
                </button>
            </form>
        </div>
    )
}

export default AddEmployee