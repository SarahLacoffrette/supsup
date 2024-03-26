import Header from "../../Components/Header";
import {Link, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const cartes = [
    {
        id: 1,
        type: 10,
        prix: 45,
        nombreUtilisation: 10

    },
    {
        id: 2,
        type: 20,
        prix: 60,
        nombreUtilisation: 5
    },
    {
        id: 3,
        type: 40,
        prix: 75,
        nombreUtilisation: 2
    }
]

const VenteCarte = () => {

    const [web3Error, setWeb3Error] = useState(null);
    const [id, setId] = useState(0);
    const [type, setType] = useState(0);
    const { search } = useLocation();
    const params = new URLSearchParams(search);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setId(params.get('id'));
                setType(params.get('type'));
            } catch (error) {
                setWeb3Error(error.message);
            }
        };
        fetchData();
    });

    const handleSellCard = (event) => {
        event.preventDefault();
        console.log('id', event.target.carteselect.value);
        console.log('prix', event.target.prix.value);
        VendreCarte();
    }

    const VendreCarte = async () => {
        try {
            //await contract.methods.miseEnVenteCarteMarcheOccasion(id, type).send({from: 'contractAddress'});
        } catch (error) {
            setWeb3Error(error.message);
        }
    };

    const handleChangeCarte = (id, type) => {
        setId(id);
        setType(type);
    }

    const getCartes = (type) => {
        if(type === 10){
            return 'Carte Membre';
        } else if(type === 20){
            return 'Carte Argent';
        } else {
            return 'Carte Gold';
        }
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
                        Vendez une de vos cartes ...
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSellCard}>
                        <div>
                            <label htmlFor="depart" className="block text-sm font-medium leading-6 text-gray-900">
                                prix
                            </label>
                            <div className="mt-2">
                                <input
                                    id="prix"
                                    name="prix"
                                    type="number"
                                    autoComplete="00"
                                    min='0'
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Je vend ma carte !
                            </button>

                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        <a href="/tableaudebord"
                           className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Retour
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VenteCarte;