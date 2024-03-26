import Header from "../../Components/Header";
import {useEffect, useState} from "react";
import {connectToWeb3, contract} from "../../web3Util";

const Register = () => {

    const [inputMdp, setInputMdp] = useState('');
    const [inputPseudo, setInputPseudo] = useState('');
    const [inputConfirmMdp, setInputConfirmMdp] = useState('');
    const [stateMdp, setStateMdp] = useState(<p></p>);
    const [web3Error, setWeb3Error] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const inscription = await contract.methods.inscription(pseudo, mdp).call();
            } catch (error) {
                setWeb3Error(error.message);
            }
        };
        fetchData();
    }, []);

    const handleChangeMdp = (event) => {
        setInputMdp(event.target.value);
    };

    const handleChangeConfirmMdp= (event) => {
        setInputConfirmMdp(event.target.value);
        checkMdp(inputMdp, event.target.value);
    };

    const handleChangePseudo = (event) => {
        setInputPseudo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Pseudo : ', event.target.pseudo.value);
        console.log('Email : ', event.target.email.value);
        console.log('Mdp : ', event.target.Mdp.value);
    }

    const handleCancel = () => {
        window.location.href = '/';
    }

    const checkMdp = (Mdp, confirmMdp) => {
        if (Mdp === confirmMdp) {
           setStateMdp(
               <button
                   type="submit"
                   className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                   Créer
               </button>
           );
        } else {
            setStateMdp(<p></p>);
        }
    }

    return (
        <div>
            <Header/>

            <form className={"form_register"} onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">

                        <h2 className="text-base font-semibold leading-7 text-gray-900">Création de compte</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Veuillez entrer les informations
                            suivantes.</p><br/>

                        <div className="sm:col-span-6">
                            <label htmlFor="Pseudo" className="block text-sm font-medium leading-6 text-gray-900">
                                Pseudo
                            </label>
                            <div className="mt-2">
                                <input
                                    id="pseudo"
                                    name="pseudo"
                                    type="pseudo"
                                    value={inputPseudo} onChange={handleChangePseudo}
                                    autoComplete="pseudo"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div><br/>
                        <div className="sm:col-span-6">
                            <label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="Mdp"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Mot de passe
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="Mdp"
                                        name="Mdp"
                                        id="Mdp"
                                        value={inputMdp} onChange={handleChangeMdp}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="confirm-Mdp"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirmer le mot de passe
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="Mdp"
                                        name="confirm-Mdp"
                                        id="confirm-Mdp"
                                        value={inputConfirmMdp} onChange={handleChangeConfirmMdp}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={handleCancel}>
                        Annuler
                    </button>
                    {stateMdp}
                </div>
            </form>
        </div>
    )
}

export default Register;