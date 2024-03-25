import Header from "../../Components/Header";
import {Link} from "react-router-dom";
import {useState} from "react";

const AddTrajet = () => {
    const [inputDepart, setInputDepart] = useState('');
    const [inputArrive, setInputArrive] = useState('');
    const [inputDate, setInputDate] = useState(new Date().toISOString().split('T')[0]);
    const [inputLocomotion, setInputLocomotion] = useState('');
    const [inputPrice, setInputPrice] = useState(10);
    const [inputUrl, setInputUrl] = useState("");


    const handleChangeDepart = (event) => {
        setInputDepart(event.target.value);
    };
    const handleChangeArrive = (event) => {
        setInputArrive(event.target.value);
    }
    const handleChangeDate = (event) => {
        setInputDate(event.target.value);
    }

    const handleChangeLocomotion = (event) => {
        setInputLocomotion(event.target.value);
    }

    const handleChangePrice = (event) => {
        setInputPrice(event.target.value);
    }

    const handleUrl = (event) => {
        setInputUrl(event.target.value);
    }

    const handleTrajet = (event) => {
        event.preventDefault();
        console.log('depart', inputDepart);
        console.log('arrive', inputArrive);
        console.log('date', inputDate);
        console.log('locomotion', inputLocomotion);
        console.log('price', inputPrice);

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
                                    value={inputDepart}
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
                                    value={inputArrive}
                                    onChange={handleChangeArrive}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
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
                                    value={inputPrice}
                                    onChange={handleChangePrice}
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
                                    value={inputDate}
                                    onChange={handleChangeDate}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="locomotion"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Moyen de transport
                                </label>
                            </div>
                            <select
                                id="locomotion"
                                name="locomotion"
                                value={inputLocomotion}
                                onChange={handleChangeLocomotion}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="">-- Choisir le transport --</option>
                                <option value="Bus">Bus</option>
                                <option value="Tram">Tram</option>
                                <option value="Train">Train</option>
                            </select>
                        </div>
                        <div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="url"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Date
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="url"
                                        name="url"
                                        type="url"
                                        value={inputUrl}
                                        onChange={handleUrl}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={handleTrajet}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Ajouter un trajet
                            </button>

                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        <a href="/dashboardadmin"
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