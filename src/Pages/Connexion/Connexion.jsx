import Header from "../../Components/Header";
import {useEffect, useState} from "react";
//import {connectToWeb3, contract} from "../../web3Util";
const Connexion = () => {

    const [accounts, setAccounts] = useState([]);
    const [web3Error, setWeb3Error] = useState(null);
    const [balance, setBalance] = useState(null)
    const [mdp, setMdp] = useState('')

    const postData = async () => {
        try {
            //const connexion = await contract.methods.connexion(mdp).call();
        } catch (error) {
            setWeb3Error(error.message);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('mdp : ', event.target.mdp.value);
        postData();
        
    }

    return (
        <div>
            <Header/>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Transilien-train.svg/1200px-Transilien-train.svg.png"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Connectez-vous à votre compte
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="mdp" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mot de passe
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="mdp"
                                    name="mdp"
                                    type="password"
                                    autoComplete="current-mdp"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Connexion
                            </button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Pas de compte ?{' '}
                        <a href="/inscription" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Je m'inscris !
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Connexion;