import Header from "../../Components/Header";
import {Link, useParams} from 'react-router-dom';
import {useState} from "react";

const Externe = () => {
    const { data } = useParams();

    const [inputDepart, setInputDepart] = useState('');
    const [inputArrive, setInputArrive] = useState('');
    const handleChangeDepart = (event) => {
        setInputDepart(event.target.value);
    };
    const handleChangeArrive = (event) => {
        setInputArrive(event.target.value);
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
                        Préparez votre voyage ...
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
                            <div className="flex items-center justify-between">
                                <label htmlFor="destination"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Date
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    value={new Date().toISOString().split('T')[0]}
                                    //required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <Link to={`/marketplacetrajet?data=externe&depart=${inputDepart}&destination=${inputArrive}`}>Je voyage !</Link>
                            </button>

                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        <a href="/Destination/Destination" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Retour
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Externe;