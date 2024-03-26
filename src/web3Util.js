import Web3 from "web3";
import contractABI from './ABI.json';

const contractAdress = '0x37e40d932528bd9fbf6b8a02e920f9eb6b7539ed';
const web3 = new Web3(window.ethereum);
export const contract = new web3.eth.Contract(contractABI, contractAdress);



export const connectToWeb3 = async () => {
    try {
        if (window.ethereum) {
            // Demande à l'utilisateur l'autorisation de se connecter
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Crée une instance de Web3 avec le provider Ethereum
            const web3 = new Web3(window.ethereum);

            // Récupère les comptes de l'utilisateur
            const accounts = await web3.eth.getAccounts();
            console.log('Comptes :', accounts);

            const balance = await web3.eth.getBalance(accounts[0]);
            console.log('Balance :', balance);

            return {
                accounts: accounts,
                balance: web3.utils.fromWei(balance, 'ether')
            };
        } else {
            throw new Error('Veuillez installer MetaMask ou un autre fournisseur Ethereum.');
        }
    } catch (error) {
        console.error('Erreur lors de la connexion à Web3 :', error.message);
        throw error;
    }
};
