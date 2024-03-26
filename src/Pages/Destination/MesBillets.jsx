import Header from "../../Components/Header";
import {useEffect, useState} from "react";

const Billets = [
    {
        id: 1,
        destination: 'Paris - Belgique',
        date: '01/01/2022',
        transport: 'Bus',
        prix: 45
    },
    {
        id: 2,
        destination: 'Paris - Londres',
        date: '01/02/2022',
        transport: 'Train',
        prix: 60
    },
    {
        id: 3,
        destination: 'Paris - Marseille',
        date: '01/03/2022',
        transport: 'Bus',
        prix: 75
    }
]

const MesBillets = () => {

    const [web3Error, setWeb3Error] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                //const billets = await contract.methods.consulterBillets().call();
            } catch (error) {
                setWeb3Error(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header/>
            <div className={'border spacer'}>
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Mes Billets</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Details des billets</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        {Billets.map((billet) => (
                            <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">{billet.destination}</dt>
                                <dt className="text-sm font-medium leading-6 text-gray-700">{billet.date}</dt>
                                <dt className="text-sm font-medium leading-6 text-gray-700">{billet.transport}</dt>
                                <dt className="text-sm font-medium leading-6 text-gray-700">{billet.prix} Wei</dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default MesBillets;