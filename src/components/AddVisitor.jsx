import { gql, useMutation } from '@apollo/client';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam';
import ReactModal from 'react-modal';

const CREATE_VISITOR = gql`
        mutation CreateVisitante($cpf: Int!, $nome: String!, $rg: Int!, $telefone: Int!, $photo: String) {
        createVisitante(
            data: {cpf: $cpf, nome: $nome, rg: $rg, telefone: $telefone, photo: $photo}
        ){
            id
        }
    }
`

const AddVisitor = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState();
    const [rg, setRG] = useState();
    const [telefone, setTelefone] = useState();
    const [photo, setImgSrc] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    const webcamRef = useRef(null);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            position: 'relative',
        },
    };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    // useEffect(()=>{
    //     console.log(photo);
    // },[photo])

    const [createVisitor] = useMutation(CREATE_VISITOR);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Chamou");
        createVisitor({
            variables: {
                cpf,
                nome,
                rg,
                telefone,
                photo
            }
        })
        console.log(cpf == isNaN);
        console.log(
            cpf,
            nome,
            rg,
            telefone,
            photo
        )
    }

    return (
        <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-2'>

            <div className='relative'>
                <input
                    id="floating_fille"
                    class="pr-24 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-900 border-0  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded pl-4 h-12"
                    type='number'
                    placeholder=' '
                    value={cpf}
                    onChange={e => setCPF(parseInt(e.target.value))}
                />
                <label
                    for="floating_fille"
                    class="absolute z-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4  origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    CPF
                </label>
            </div>
            
            <div className='relative'>
                <input
                    id="floating_fille2"
                    class="pr-24 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-900 border-0  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded pl-4 h-12"
                    type='text'
                    placeholder=' '
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <label
                    for="floating_fille2"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-0 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Nome
                </label>
            </div>
            
            <div className='relative'>
                <input
                    id="floating_fille"
                    class="pr-24 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-900 border-0  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded pl-4 h-12"
                    type='number'
                    placeholder=' '
                    value={rg}
                    onChange={e => setRG(parseInt(e.target.value))}
                />
                <label
                    for="floating_fille"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-0 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    RG
                </label>
            </div>
    
            <div className='relative'>
                <input
                    id="floating_fille"
                    class="pr-24 block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-900 border-0  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rounded pl-4 h-12"
                    type='number'
                    placeholder=' '
                    value={telefone}
                    onChange={e => setTelefone(parseInt(e.target.value))}
                />
                <label
                    for="floating_fille"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-0 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Telefone
                </label>
            </div>

            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Capturar foto"
                style={customStyles}
                className="z-50 bg-transparent"
            >
                <div className='flex flex-col items-center gap-2'>
                    <div className='flex'>
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                        />

                        {photo && (
                            <img
                                src={photo}
                            />
                        )}
                    </div>
                    <div className='flex gap-2'>
                        <button
                            className='bg-blue-800 p-2 rounded text-sm hover:bg-blue-900 transition-colors'
                            type='button'
                            onClick={capture}
                        >
                            Capture photo
                        </button>
                        <button
                            className='bg-green-800 p-2 rounded text-sm hover:bg-green-900 transition-colors'
                            type='button'
                            onClick={closeModal}
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            </ReactModal>
            <button
                type='button'
                className='bg-blue-800 p-2 rounded text-sm hover:bg-blue-900 transition-colors'
                onClick={() => openModal()}
            >
                Adicionar foto
            </button>
            <button
                type='submit'
                className='mt-4 w-full bg-green-600 p-4 rounded font-bold text-sm hover:bg-green-900 transition-colors'
            >
                Cadastrar visitante
            </button>
        </form>
    )
}

export default AddVisitor