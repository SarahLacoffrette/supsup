import Header from "../Components/Header";
import {useParams} from "react-router-dom";
import {useLocation} from "react-router-dom";

const contacts = [{
    name: "Jean Dupont",
    email: "Jean@Dupont.com",
},{
    name: "Marie Dupont",
    email: "Marie@dupond.com",
},{
    name: "Jean Reney",
    email: "Jean@reney.com",
},{
    name: "Robin Dupond",
    email: "Robin@dupond.com",
}]


const ExchangeCard = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const item = {
        id: params.get('id'),
        name: params.get('name'),
        price: params.get('price'),
        nombreUtilisation: params.get('nombreUtilisation'),
        type: params.get('type')
    };
    const handleSellCard = (event) => {
        event.preventDefault();
        console.log('contact : ', event.target.contactSelect.value);
    }
    return (
        <div className="exchange-card">
            <Header/>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Transilien-train.svg/1200px-Transilien-train.svg.png"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Donnez une de vos cartes ...
                    </h2>
                </div>

                <div
                    className="mt-10 w-2xl rounded-3xl ring-1 ring-gray-300 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-500">{item.name}</h3>
                    </div>
                    <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div
                            className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-9">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                            <span
                                                className="text-5xl font-bold tracking-tight text-gray-900">{item.price} €</span>
                                    <span
                                        className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Euro</span>
                                </p>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Nombre d'utilisation restant : {item.nombreUtilisation}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSellCard}>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="contact"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Choisir un contact
                                </label>
                            </div>
                            <div className="mt-2">
                                <select
                                    id="contactSelect"
                                    name="contactSelect"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option value="">-- Choisir une carte --</option>
                                    {contacts.map((item) => (
                                        <option value={item.email}>{item.name}</option>
                                    ))}
                                </select>
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
                        <a href="/dashboard"
                           className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Retour
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ExchangeCard;