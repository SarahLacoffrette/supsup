import Header from "../../Components/Header";
import {CheckIcon} from "@heroicons/react/20/solid";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const cartes = [
    {
        id: 1,
        type: 10,
        prix: 45,
        enVente : true,
        adresseproprio : '',
        nombreUtilisation: 10

    },
    {
        id: 2,
        type: 20,
        prix: 60,
        enVente : false,
        adresseproprio : '',
        nombreUtilisation: 5
    },
    {
        id: 3,
        type: 40,
        prix: 75,
        enVente : false,
        adresseproprio : '',
        nombreUtilisation: 2
    }
]

const TableauDeBord = () => {

    const [web3Error, setWeb3Error] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const cartes = await contract.methods.consulterCartesUtilisateur().call();
            } catch (error) {
                setWeb3Error(error.message);
            }
        };
        fetchData();
    }, []);

    const handleBuy = (id, carte, prix, nbUtilisation) => {
        console.log('id : ', id);
        console.log('carte : ', carte);
        console.log('prix : ', prix);
        console.log('nombre d\'utilisation restant : ', nbUtilisation);
        //TODO : Faire le lien avec venteCarte.jsx
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

    const etatCarte = (etat) => {
        if(etat === true){
            return 'En vente'
        }else{
            return ' - '
        }
    }

    return (
        <div>
            <Header/>
            <div className="card">
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl sm:text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vos cartes avantages</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Retrouvez vos cartes exclusives et profitez d'offres spéciales, de réductions, et
                                d'avantages personnalisés. Explorez une sélection taillée sur mesure pour vous. </p>
                        </div>
                        {cartes.map((item) => (
                        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-300 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-500">{getCartes(item.type)}</h3>
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    Vous êtes membre et entrez dans un monde d'avantages exclusifs. Profitez d'offres
                                    spéciales, de réductions sur mesure et d'une expérience personnalisée à chaque
                                    voyage.
                                </p>
                            </div>
                            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-9">
                                    <div className="mx-auto max-w-xs px-8">
                                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                            <span
                                                className="text-5xl font-bold tracking-tight text-gray-900">{item.prix} Wei</span>
                                            <span
                                                className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Euro</span>
                                        </p>
                                        <a
                                            href="#"
                                            className="mt-5 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() => handleBuy(item.id, item.name, item.prix, item.nombreUtilisation)}
                                        ><Link to={`/echangeCarte?id=${item.id}&type=${item.type}&prix=${item.prix}&nombreUtilisation=${item.nombreUtilisation}`}>Echanger cette carte</Link></a>

                                        <a
                                            href="#"
                                            className="mt-5 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() => handleBuy(item.id, item.type, item.prix, item.nombreUtilisation)}
                                        ><Link to={`/venteCarte?id=${item.id}&type=${item.type}&prix=${item.prix}&nombreUtilisation=${item.nombreUtilisation}`}>Vendre cette carte</Link></a>
                                        <p className="mt-6 text-xs leading-5 text-gray-600">
                                            Nombre d'utilisation restant : {item.nombreUtilisation}
                                        </p>
                                        <p className="mt-6 text-xs leading-5 text-gray-600">
                                            Statut : {etatCarte(item.enVente)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableauDeBord;