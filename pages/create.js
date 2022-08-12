import { ethers } from "ethers";
import Router from "next/router";
import { usestate, useEffect, useState } from "react"; 
import PrimaryButton from "../components/primary-button";
import Keyboard from "../components/keyboard"; 
import abi from "../utils/Keyboards.json"; 

export default function Create() { 
    const [ ethereum, setEthereum ] = useState(undefined); 
    const [ connectedAccount, setConnectedAccount] = useState(undefined); 

    const [ keyboardKind, setKeyboardKind ] = useState(0); 
    const [ isPBT, setIsPBT ] = useState(false); 
    const [ filter, setFilter ] = useState(''); 

    const contractAddress = '0x6Cbb076b3Bd63Ff810B3e03d9D1Fd4175E8e208f'; 
    const contractABI = abi.abi; 

    const handleAccounts = (accounts) => { 
        if(accounts.length > 0) { 
            const account = accounts[0]; 
            console.log('We have an authorized account: ', account); 
            setConnectedAccount(account); 
        } else { 
            console.log("No authorized accounts yet");
        }
    };
    
    const getConnectedAccount = async () => { 
        if(window.ethereum) { 
            setEthereum(window.ethereum); 
        }
        if(ethereum) { 
            const accounts = await ethereum.request({ method: 'eth_accounts' }); 
            handleAccounts(accounts);  
        }
    };
    useEffect(() => getConnectedAccount(), []); 

    const connectAccount = async () => { 
        if(!ethereum) { 
            alert('Metamask is ')
        }
    }
}