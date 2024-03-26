import Header from "../../Components/Header";
import {useState} from "react";

const cartes = [
    {
        id: 1,
        typeCarte: 10

    },
    {
        id: 2,
        typeCarte: 20
    },
    {
        id: 3,
        typeCarte: 40
    }
]

const AddCarte = () => {

    const [web3Error, setWeb3Error] = useState(null);
    const [prixCarte10, setPrixCarte10] = useState();
    const [prixCarte20, setPrixCarte20] = useState();
    const [prixCarte40, setPrixCarte40] = useState();
    const [nbCartesValues, setNbCartesValues] = useState();

    const postData = async () => {
        try {
            //const creerCarteParMultipledeDix = await contract.methods.creerCarteParMultipledeDix(nbCartesValues, prixCarte10, prixCarte20, prixCarte40).send({from: 'contractAddress'});
        } catch (error) {
            setWeb3Error(error.message);
        }
    };

    const handleSellCard = (event) => {
        event.preventDefault();
        console.log('id', event.target.carteselect.value);
        console.log('prix carte 10', event.target.prixCarte10.value);
        console.log('prix carte 20', event.target.prixCarte20.value);
        console.log('prix carte 40', event.target.prixCarte40.value);
    }

    const handleChangePrixCarte10 = (event) =>{
        event.preventDefault();
        setPrixCarte10(event.target.value);
    }

    const handleChangePrixCarte20 = (event) =>{
        event.preventDefault();
        setPrixCarte20(event.target.value);
    }

    const handleChangePrixCarte40 = (event) =>{
        event.preventDefault();
        setPrixCarte40(event.target.value);
    }

   const handleChangeNbCartesValues = (event) => {
    event.preventDefault();
    setNbCartesValues(event.target.value);
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
                        Ajouter des cartes à vendre ...
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSellCard}>
                        <div>
                            <label htmlFor="depart" className="block text-sm font-medium leading-6 text-gray-900">
                                Prix carte Membre
                            </label>
                            <div className="mt-2">
                                <input
                                    id="prixCarte10"
                                    name="prixCarte10"
                                    type="number"
                                    min={"0"}
                                    value={prixCarte10}
                                    onChange={handleChangePrixCarte10}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="depart" className="block text-sm font-medium leading-6 text-gray-900">
                                Prix carte Argent
                            </label>
                            <div className="mt-2">
                                <input
                                    id="prixCarte20"
                                    name="prixCarte20"
                                    type="number"
                                    min={"0"}
                                    value={prixCarte20}
                                    onChange={handleChangePrixCarte20}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="depart" className="block text-sm font-medium leading-6 text-gray-900">
                                Prix carte Gold
                            </label>
                            <div className="mt-2">
                                <input
                                    id="prixCarte40"
                                    name="prixCarte40"
                                    type="number"
                                    min={"0"}
                                    value={prixCarte40}
                                    onChange={handleChangePrixCarte40}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="depart" className="block text-sm font-medium leading-6 text-gray-900">
                                Nombre de carte à créer
                            </label>
                            <div className="mt-2">
                                <input
                                    id="nombreUtilisation"
                                    name="nombreUtilisation"
                                    type="number"
                                    min="0"
                                    max="100"
                                    step = "10"
                                    value={nbCartesValues}
                                    onChange={handleChangeNbCartesValues}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                typeCarte="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Ajouter ces cartes
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
    )
}

export default AddCarte