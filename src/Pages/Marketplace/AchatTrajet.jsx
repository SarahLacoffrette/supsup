import React, {useEffect, useState} from 'react';
import Header from "../../Components/Header";
import {useLocation, redirect} from "react-router-dom";

const AchatTrajet = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const id = params.get('id');
    const depart = params.get('depart');
    const destination = params.get('destination');
    const prix = params.get('prix');
    const typeVehicule = params.get('typeVehicule');

    const [web3Error, setWeb3Error] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //await contract.methods.calculerReduction(id).send({from: accounts[0]});
            } catch (error) {
                setWeb3Error(error.message);
            }
        };
        fetchData();
    }, []);

    const handleBuy = async () => {
        try {
            //await contract.methods.achatTrajet(id).send({from: accounts[0]});
        } catch (error) {
            setWeb3Error(error.message);
        }
    }

    return (
        <div>
            <Header/>
            <div className="bg-white">
                <div className="pt-6">
                    <div
                        className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Achat du trajet</h1>
                        </div>


                        <div className="mt-4 lg:row-span-3 lg:mt-0 flex items-center justify-center">
                            <div>
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-2xl tracking-tight text-gray-900">Départ : {depart}</p>
                                <p className="text-2xl tracking-tight text-gray-900">Destination : {destination}</p>
                                <p className="text-1xl tracking-tight text-gray-600">Transport : {typeVehicule}</p>
                                <br/>
                                <p className="text-2xl tracking-tight text-gray-900">Prix initial : <s>{prix}</s></p>
                                <p className="text-3xl tracking-tight text-red-600">Réduction : ...Wei (-10 Wei)</p>
                                <form className="mt-10" onSubmit={handleBuy}>

                                    <button type="submit"
                                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        Acheter ce trajet
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div
                            className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">Lorsque nous envisageons de voyager, nous sommes confrontés à une multitude de choix quant à la meilleure manière de nous déplacer. Que ce soit pour une escapade de week-end ou un voyage d'affaires, choisir le bon trajet peut avoir un impact significatif sur notre expérience globale.</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Ce voyage est pour vous : </h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        <li className="text-gray-400"><span className="text-gray-600">Confort optimal</span>
                                        </li>
                                        <li className="text-gray-400"><span className="text-gray-600">Économies financières</span>
                                        </li>
                                        <li className="text-gray-400"><span
                                            className="text-gray-600">Gain de temps </span></li>
                                        <li className="text-gray-400"><span className="text-gray-600">Expérience unique</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">Chaque trajet offre une expérience unique, que ce soit en raison des paysages pittoresques traversés, des interactions avec d'autres voyageurs ou des services et activités proposés à bord.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AchatTrajet;