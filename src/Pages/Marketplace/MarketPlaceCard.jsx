import Header from "../../Components/Header";
import {useEffect, useState} from "react";

const cards = [
    {
        id: 1,
        type: 10,
        price: 45,
        nombreUtilisation: 10
    },{
        id: 2,
        type: 40,
        price: 45,
        nombreUtilisation: 3
    },{
        id: 3,
        type: 20,
        price: 50,
        nombreUtilisation: 7
    },{
        id: 4,
        type: 10,
        price: 25,
        nombreUtilisation: 8
    }
]

const MarketPlaceCard = () => {

    const [web3Error, setWeb3Error] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const obtenirCarteMarcheOccasion = await contract.methods.obtenirCarteMarcheOccasion().call();
                // => products = obtenirCarteMarcheOccasion   dx
            } catch (error) {
                setWeb3Error(error.message);
            }
        };
        fetchData();
    }, []);
    const imageCard = (type) => {
        if (type === 10){
            return "https://img.freepik.com/free-vector/realistic-glass-effect-credit-card_52683-74367.jpg?w=1800&t=st=1711299318~exp=1711299918~hmac=9535a0069d35271433d9925111f64efd016c237344d8738d80d75d88830b838f"
        }else if(type === 20) {
            return "https://img.freepik.com/free-vector/realistic-glass-effect-credit-card_52683-74370.jpg?w=1800&t=st=1711299321~exp=1711299921~hmac=f5985df684def6968332e63159b3797b4110e29a3e9e1e99e9b44ac74a863f14"
        }else if(type === 40){
            return "https://img.freepik.com/free-vector/realistic-monochromatic-credit-card_52683-74366.jpg?w=1800&t=st=1711299323~exp=1711299923~hmac=29416c098e197013f9bd70b16472c481a21dddf98f684da56ded80a9eafd7714"
        }
    }

    const typeCard = (type) => {
        if (type === 10) {
            return "Carte Membre"
        } else if (type === 20) {
            return "Carte Argent"
        } else if (type === 40) {
            return "Carte Gold"
        }
    }

    const handleBuy = (id, type, prix, nbUtilisation) => {
        console.log('id : ', id);
        console.log('carte : ', type);
        console.log('prix : ', prix);
        console.log('nombre d\'utilisation restant : ', nbUtilisation);
    }

    return (
        <div>
                <Header/>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Les cartes d'occasions</h2>

                        <div
                            className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {cards.map((product) => (
                                <div>
                                    <div key={product.id} className="group relative">
                                        <div
                                            className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={imageCard(product.type)}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-lg text-black-900">
                                                    <a href={product.href}>
                                                        <span aria-hidden="true" className="absolute inset-0"/>
                                                        {typeCard(product.type)}
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">Nombre d'utilisation restantes
                                                    : {product.nombreUtilisation}</p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">{product.price} €</p>
                                        </div>
                                        <br/>
                                    </div>
                                    <button
                                        onClick={() => handleBuy(product.id, product.type, product.price, product.nombreUtilisation)}
                                        className="rounded-md bg-indigo-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >Acheter
                                    </button>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
    );
}
export default MarketPlaceCard;