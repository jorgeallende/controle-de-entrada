import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'

const GET_UNITS = gql`
    query ReadUnidades {
        unidades(stage: DRAFT) {
            idnumber
            unitName
        }
    }
`

const CREATE_SETOR = gql`
    mutation CreateSetor($setorNome: String!, $unidade: UnidadeCreateOneInlineInput ){
        createSetor(data: {setorNome: $setorNome, unidade: $unidade}) {
            id
        }
    }
`



const AddSetor = () => {
    const [setorNome, setSetorNome] = useState();
    const [unit, setUnit] = useState();

    const [createSetor] = useMutation(CREATE_SETOR);
    const { data, loading, error, refetch } = useQuery(GET_UNITS);

    useEffect(() => {
        refetch();
    }, [])

    useEffect(()=>{
        console.log(unit);
    },[unit])


    function handleSubmit(event){
        event.preventDefault();
        createSetor({
            variables: {
                setorNome,
                unit
            }
        })
    }

    return (
        <form className='flex flex-col gap-2 mt-12'>
            <div className='flex flex-col gap-2'>
                <div class="relative">
                    <input
                        type="text"
                        id="floating_fille"
                        class="pr-24 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-900 border-0  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded pl-4 h-12"
                        placeholder=" "
                        onChange={e => setSetorNome(e.target.value)}
                        value={setorNome}
                    />
                    <label
                        for="floating_fille"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Nome do setor
                    </label>
                </div>
                <div class="relative">

                    <select
                        name="cargo"
                        id="cargo"
                        className='bg-gray-900 w-full rounded pr-16 pl-2 h-12 text-sm'
                        placeholder='Cargo'
                        onChange={
                            (e) => { setUnit(e.target.value) }
                        }
                    >
                        <option>Unidade</option>
                        {
                            data?.unidades.map((unit) => (
                                <option value={unit}>{unit.unitName}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div>
                <button
                    className='mt-4 w-full bg-green-600 p-4 rounded font-bold text-sm hover:bg-green-900 transition-colors'
                    type="submit"
                    onClick={handleSubmit}
                >
                    Cadastrar
                </button>
            </div>
        </form>
    )
}

export default AddSetor