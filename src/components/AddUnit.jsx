import React, { useState } from 'react'
import { gql, useMutation } from "@apollo/client";

const CREATE_UNIT = gql`
    mutation CreateUnit($name : String!, $idnumber : Int!) {
        createUnidade(data: {unitName: $name, idnumber: $idnumber}) {
            id
        }
    }
`

const AddUnit = (props) => {
    const [name, setUnitName] = useState('');
    const [idnumber, setUnitNumber] = useState();

    const [createUnit] = useMutation(CREATE_UNIT);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(name, idnumber);
        createUnit({
            variables: {
                name,
                idnumber
            }
        })

    }

    return (
        <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-2'>
            <div className='relative'>
                <input
                    id="floating_fille"
                    class="pr-24 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-900 border-0  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded pl-4 h-12"
                    type='text'
                    placeholder=' '
                    value={name}
                    onChange={e => setUnitName(e.target.value)}
                />
                <label
                    for="floating_fille"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Nome
                </label>
            </div>
            <div className='relative'>
                <input
                    id="floating_fille2"
                    class="pr-24 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-900 border-0  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded pl-4 h-12"
                    type='number'
                    placeholder=' '
                    value={idnumber}
                    onChange={e => setUnitNumber(parseInt(e.target.value))}
                />
                <label
                    for="floating_fille2"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Número #
                </label>
            </div>
            <button
                type="submit"
                className='mt-4 w-full bg-green-600 p-4 rounded font-bold text-sm hover:bg-green-900 transition-colors'
                onClick={() => props.mode("addUnit")}
            >
                Cadastrar
            </button>
        </form>
    )
}

export default AddUnit