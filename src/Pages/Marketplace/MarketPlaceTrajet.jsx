import Header from "../../Components/Header";
import QuickView from "../../Components/QuickView";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const products = [
    {
        id: 1,
        depart: 'Paris',
        arrive: '',
        href: '#',
        imageSrc: 'https://www.azutura.com/media/catalog/product/cache/49/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-45942_WP.jpg',
        imageAlt: "Paris",
        price: '50 €',
        locomotion: 'Train',
    },{
        id: 2,
        depart: 'Belgique',
        arrive: 'Paris',
        href: '#',
        imageSrc: 'https://c4.wallpaperflare.com/wallpaper/49/397/108/5bd3b695ce3d5-wallpaper-preview.jpg',
        imageAlt: "Belgique",
        price: '60 €',
        locomotion: 'Train',
    },{
        id: 3,
        depart: 'Londres',
        arrive: 'Paris',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg',
        imageAlt: "Londres",
        price: '55 €',
        locomotion: 'Train',
    },{
        id: 4,
        depart: 'Barcelone',
        arrive: 'Paris',
        href: '#',
        imageSrc: 'https://images8.alphacoders.com/354/354497.jpg',
        imageAlt: "Barcelone",
        price: '55 €',
        locomotion: 'Bus',
    },{
        id: 5,
        depart: 'Amsterdam',
        arrive: 'Paris',
        href: '#',
        imageSrc: 'https://i.pinimg.com/736x/dc/64/e8/dc64e8947c2b70fe6fbd52595416e0c6.jpg',
        imageAlt: "Los Angeles",
        price: '550 €',
        locomotion: 'Bus',
    },{
        id: 6,
        depart: 'Tours',
        arrive: '',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/498553541/fr/photo/place-plumereau-dans-les-circuits.jpg?s=612x612&w=0&k=20&c=bbpFAtNJ3cJ0Yaf8ERYcCHOQR5j9I_azf4I-mx-maYA=',
        imageAlt: "Tours",
        price: '37 €',
        locomotion: 'Tram',
    },{
        id: 7,
        depart: 'Rome',
        arrive: 'Paris',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/1323460157/photo/rome-italy-night-city-skyline-at-rome-colosseum-empty-nobody.webp?b=1&s=170667a&w=0&k=20&c=XE9O_GYWrL_RaFZH0Gw5P3NAW_YL_BSVcbbq9rlLvXE=',
        imageAlt: "Rome",
        price: '216 €',
        locomotion: 'Train',
    },{
        id: 8,
        depart: 'Lille',
        arrive: 'Paris',
        href: '#',
        imageSrc: 'https://s1.1zoom.me/big0/610/Houses_France_Lille_Street_lights_Street_Pavement_582322_1280x854.jpg',
        imageAlt: "Lille",
        price: '35 €',
        locomotion: 'Train',
    },{
        id: 9,
        depart: 'Lille',
        arrive: 'Paris',
        href: '#',
        imageSrc: 'https://s1.1zoom.me/big0/610/Houses_France_Lille_Street_lights_Street_Pavement_582322_1280x854.jpg',
        imageAlt: "Lille",
        price: '15 €',
        locomotion: 'Tram',
    },{
        id: 10,
        depart: 'Tours',
        arrive: '',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/498553541/fr/photo/place-plumereau-dans-les-circuits.jpg?s=612x612&w=0&k=20&c=bbpFAtNJ3cJ0Yaf8ERYcCHOQR5j9I_azf4I-mx-maYA=',
        imageAlt: "Tours",
        price: '14 €',
        locomotion: 'Tram',
    }
]

const MarketPlaceTrajet = () => {

    const [filteredData, setFilteredData] = useState([]);
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const data = params.get('data');
    const depart = params.get('depart');
    const arrive = params.get('arrive');

    const [web3Error, setWeb3Error] = useState(null);

    useEffect(() => {
        if(data === 'externe'){
            setFilteredData(products.filter(item => (item.locomotion == 'Train' && item.arrive == arrive && item.depart == depart || item.locomotion == 'Bus' && item.arrive == arrive && item.depart == depart)));
        } else if(data === 'interne'){
            setFilteredData(products.filter(item => (item.locomotion == 'Tram' && item.depart == depart && item.arrive == '' || item.locomotion == 'Bus' && item.depart == depart && item.arrive == '')));
        }
        const fetchData = async () => {
            try {
                //const obtenirCarteMarchePrincipal = await contract.methods.obtenirCarteMarchePrincipal().call();
                // => products = obtenirCarteMarchePrincipal
            } catch (error) {
                setWeb3Error(error.message);
            }
        };
        fetchData();
    }, [data]);

    const handleBuy = (id, depart, arrive, price, locomotion) => {
        console.log('Billet :', data);
        console.log('id : ', id);
        console.log('depart : ', depart);
        console.log('arrive : ', arrive);
        console.log('price : ', price);
        console.log('locomotion : ', locomotion);
    }

    return (
        <div>
            <Header/>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nos voyages du moment</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {filteredData.map((product) => (
                            <div>
                                <div key={product.id} className="group relative">
                                    <div
                                        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-lg text-black-900">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0"/>
                                                    {product.depart}
                                                    {data === 'externe' && (
                                                        <span> - {product.arrive}</span>
                                                    )}
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">{product.locomotion}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                    </div>
                                    <br/>
                                </div>
                                <button
                                    className="rounded-md bg-indigo-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    onClick={() => handleBuy(product.id, product.depart, product.arrive, product.price, product.locomotion)}
                                >Acheter
                                </button>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default MarketPlaceTrajet;