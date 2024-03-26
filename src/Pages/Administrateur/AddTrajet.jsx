import Header from "../../Components/Header";
import {Link} from "react-router-dom";
import {useState} from "react";

const AddTrajet = () => {
    const [depart, setdepart] = useState('');
    const [destination, setdestination] = useState('');
    const [date, setdate] = useState(new Date().toISOString().split('T')[0]);
    const [typeVehicule, settypeVehicule] = useState('');
    const [prix, setprix] = useState(10);
    const [url, seturl] = useState("");
    const [duree, setduree] = useState(0);

    const [web3Error, setWeb3Error] = useState(null);

    const handleChangeDepart = (event) => {
        setdepart(event.target.value);
    };
    const handleChangedestination = (event) => {
        setdestination(event.target.value);
    }
    const handleChangeDate = (event) => {
        setdate(event.target.value);
    }

    const handleChangetypeVehicule = (event) => {
        settypeVehicule(event.target.value);
    }

    const handleChangeprix = (event) => {
        setprix(event.target.value);
    }

    const handleUrl = (event) => {
        seturl(event.target.value);
    }

    const handleChangeduree = (event) => {
        setduree(event.target.value);
    }

    const postData = async () => {
        try {
            //await contract.methods.creerTrajet(typeVehicule, depart, destination, date, duree,  true, 100, prix).send({from: 'contractAddress'});
        } catch (error) {
            setWeb3Error(error.message);
        }
    };

    const handleTrajet = (event) => {
        event.preventDefault();
        console.log('depart', depart);
        console.log('destination', destination);
        console.log('date', date);
        console.log('typeVehicule', typeVehicule);
        console.log('prix', prix);
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
                        Créer un nouveau trajet ...
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="depart" className="block text-sm font-medium leading-6 text-gray-900">
                                Départ
                            </label>
                            <div className="mt-2">
                                <input
                                    id="depart"
                                    name="depart"
                                    type="depart"
                                    autoComplete="depart"
                                    value={depart}
                                    onChange={handleChangeDepart}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="destination"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Destination
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="destination"
                                    name="destination"
                                    type="destination"
                                    autoComplete="current-destination"
                                    value={destination}
                                    onChange={handleChangedestination}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="depart" className="block text-sm font-medium leading-6 text-gray-900">
                                prix
                            </label>
                            <div className="mt-2">
                                <input
                                    id="prix"
                                    name="prix"
                                    type="number"
                                    value={prix}
                                    onChange={handleChangeprix}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="date"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Date
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    value={date}
                                    onChange={handleChangeDate}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="depart" className="block text-sm font-medium leading-6 text-gray-900">
                                Durée :
                            </label>
                            <div className="mt-2">
                                <input
                                    id="duree"
                                    name="duree"
                                    type="number"
                                    min={"0"}
                                    value={duree}
                                    onChange={handleChangeduree}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="typeVehicule"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Moyen de transport
                                </label>
                            </div>
                            <select
                                id="typeVehicule"
                                name="typeVehicule"
                                value={typeVehicule}
                                onChange={handleChangetypeVehicule}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="">-- Choisir le transport --</option>
                                <option value="Bus">Bus</option>
                                <option value="Tram">Tram</option>
                                <option value="Train">Train</option>
                            </select>
                        </div>
                        <div>
                            <br/>
                            <button
                                type="button"
                                onClick={handleTrajet}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Ajouter un trajet
                            </button>

                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        <a href="/tableaudebordadmin"
                           className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Retour
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AddTrajet;