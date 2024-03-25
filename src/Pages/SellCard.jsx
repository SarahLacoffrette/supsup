import Header from "../Components/Header";
import {Link, useParams} from "react-router-dom";
import {useState} from "react";

const cards = [
    {
        id: 1,
        name: 'Carte Membre',
        price: 45,
        nombreUtilisation: 10

    },
    {
        id: 2,
        name: 'Carte Argent',
        price: 60,
        nombreUtilisation: 5
    },
    {
        id: 3,
        name: 'Carte gold',
        price: 75,
        nombreUtilisation: 2
    }
]

const SellCard = () => {

    const handleSellCard = (event) => {
        event.preventDefault();
        console.log('id', event.target.cardSelect.value);
        console.log('price', event.target.price.value);

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
                            <div className="flex items-center justify-between">
                                <label htmlFor="card"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Choisir la carte
                                </label>
                            </div>
                            <div className="mt-2">
                                <select
                                    id="cardSelect"
                                    name="cardSelect"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option value="">-- Choisir une carte --</option>
                                    {cards.map((item) => (
                                        <option value={item.id}>{item.name} - Nombre d'utilisation restant
                                            : {item.nombreUtilisation}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="depart" className="block text-sm font-medium leading-6 text-gray-900">
                                Price
                            </label>
                            <div className="mt-2">
                                <input
                                    id="price"
                                    name="price"
                                    type="number"
                                    autoComplete="00"
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
                        <a href="/destination"
                           className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Retour
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SellCard;