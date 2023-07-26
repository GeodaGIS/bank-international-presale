// @ts-nocheck
import { InputText } from "primereact/inputtext"
import '../styles/general-search.css';
import { useRef, useEffect, useState } from "react";
import { useAppSelector } from "../hooks/useStoreTypes";
import { useAssign } from "../hooks/useAssign";
import { useReadable } from "../hooks/useReadable";
import { useNavigate } from "react-router-dom";


export const GeneralSearch = () => {
    const inputRef = useRef();
    const navigate = useNavigate();
    const { assets } = useAppSelector(state => state.assetModule);
    const { contracts } = useAppSelector(state => state.contractModule);
    const { payments } = useAppSelector(state => state.paymentModule);
    const [readableAssets, setReadableAssets] = useState([]);
    const [readablePayments, setReadablePayments] = useState([]);


    useEffect(() => {
        if (assets.length && contracts.length && payments.length) {
            onSetReadableAssets();
            onSetReadablePayments();
        }
    }, [assets, contracts, payments])


    const onSetReadableAssets = () => {
        const assignedAssets = useAssign(assets, contracts);
        const readableAssetsToSet = useReadable(assignedAssets, 'asset');
        setReadableAssets(readableAssetsToSet);
    }


    const onSetReadablePayments = () => {
        const paymentsToUse = payments.map(payment => {
            const contract = contracts.find(contract => contract.paymentsIds.includes(payment.id));
            return {
                contractNum: contract.rentContractId,
                ...payment,
                num: (Date.now() > payment.payDate) ? payment.num : null
            }
        });
        const readablePaymentsToSet = useReadable(paymentsToUse, 'payment');
        setReadablePayments(readablePaymentsToSet);
    }


    const onSearch = () => {
        const searchVal = inputRef.current.value;
        if (searchVal.trim() === '') {
            return;
        }

        const foundAssets = readableAssets.filter(asset => {
            const values = Object.values(asset);
            const strValues = values.map(value => `${value}`);
            return strValues.includes(searchVal);
        });
        if (foundAssets.length) {
            const routeState = {
                he: 'נכסים',
                entities: foundAssets,
                isByGenSearch: true
            };
            navigate('/assets-table', { state: routeState });
            inputRef.current.value = '';
            return;
        }

        const foundPayments = readablePayments.filter(payment => {
            const values = Object.values(payment);
            const strValues = values.map(value => `${value}`);
            return strValues.includes(searchVal);
        });
        if (foundPayments.length) {
            const routeState = {
                he: 'הוראות תשלום',
                entities: foundPayments,
                isByGenSearch: true
            };
            navigate('/payments-table', { state: routeState });
            inputRef.current.value = '';
        }
    }


    const handleKeyUp = (ev) => {
        if (ev.key === 'Enter') {
            onSearch();
        }
    }


    return (
        <div className='general-search-container'>
            <span className="p-input-icon-left">
                <i
                    className="pi pi-search"
                    onClick={onSearch}
                    title="חפש"
                />
                <InputText
                    placeholder="חפש במערכת..."
                    ref={inputRef}
                    onKeyUp={handleKeyUp}
                />
            </span>
        </div>
    )
}