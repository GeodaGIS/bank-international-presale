// @ts-nocheck
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/tiles.css';
import { useAppSelector } from '../hooks/useStoreTypes';
import { Asset } from '../types/Asset';
import { useAssign } from '../hooks/useAssign';


export const Tiles = () => {
    const navigate = useNavigate();
    const { assets } = useAppSelector(state => state.assetModule);
    const { contracts } = useAppSelector(state => state.contractModule);
    const { payments } = useAppSelector(state => state.paymentModule);
    const [entitiesDataSets, setEntitiesDataSets] = useState<any[]>([]);
    const deadLine = 1704059999000; // 31.12.23;


    useEffect(() => {
        if (assets.length && contracts.length && payments.length) {
            setEntitiesDataSets([
                {
                    en: 'all',
                    he: 'כל הנכסים',
                    entities: getAssignedAssets('all')
                },
                {
                    en: 'rentEndingDate',
                    he: 'סיום שכירות השנה',
                    entities: getAssignedAssets('rentEndingDate')
                },
                {
                    en: 'closeExitPoints',
                    he: 'נקודות יציאה קרובות',
                    entities: getAssignedAssets('closeExitPoints')
                },
                {
                    en: 'activeStatus',
                    he: 'פעילים',
                    entities: getAssignedAssets('activeStatus')
                },
                {
                    en: 'nonActiveStatus',
                    he: 'לא פעילים',
                    entities: getAssignedAssets('nonActiveStatus')
                },
                {
                    en: 'pendingStatus',
                    he: 'ממתינים לאישור',
                    entities: getAssignedAssets('pendingStatus')
                },
                {
                    en: 'bankBeinleumi',
                    he: 'הבנק הבינלאומי',
                    entities: getAssignedAssets('bankBeinleumi')
                },
                {
                    en: 'bankMasad',
                    he: 'בנק מסד',
                    entities: getAssignedAssets('bankMasad')
                },
                {
                    en: 'unitedPayments',
                    he: 'הפקת הוראת תשלום מרוכזת',
                    entities: getUnitedPayments()
                },
                {
                    en: 'detailedPayments',
                    he: 'העברת ממשק',
                    entities: getDetailedPayments()
                },
                {
                    en: 'newContract',
                    he: 'חוזה חדש',
                    entities: []
                },
                {
                    en: 'paymentsProducing',
                    he: 'הפקת הוראות תשלום',
                    entities: []
                },
                {
                    en: 'united',
                    he: 'מרוכזות',
                    entities: []
                },
                {
                    en: 'reports',
                    he: 'דוחות',
                    entities: []
                },
                {
                    en: 'ongoingPayments',
                    he: 'תשלומים שוטפים',
                    entities: []
                }
            ]);
        }
    }, [assets, contracts, payments])


    const getAssignedAssets = (filterBy: string) => {
        const assignedAssets = useAssign(assets, contracts);
        if (filterBy === 'all') {
            return assignedAssets;
        }
        if (filterBy === 'rentEndingDate') {
            return assignedAssets.filter(asset => asset.rentEndsAt <= deadLine);
        }
        if (filterBy === 'closeExitPoints') {
            return assignedAssets.filter(asset => asset.closeExitAt <= deadLine);
        }
        if (filterBy === 'activeStatus') {
            return assignedAssets.filter(asset => asset.contractStatus === 'פעיל');
        }
        if (filterBy === 'nonActiveStatus') {
            return assignedAssets.filter(asset => asset.contractStatus === 'לא פעיל');
        }
        if (filterBy === 'pendingStatus') {
            return assignedAssets.filter(asset => asset.contractStatus === 'ממתין לאישור');
        }
        if (filterBy === 'bankBeinleumi') {
            return assignedAssets.filter(asset => asset.bankName === 'הבינלאומי');
        }
        if (filterBy === 'bankMasad') {
            return assignedAssets.filter(asset => asset.bankName === 'מסד');
        }
    }


    const getUnitedPayments = () => {
        // WE NEED TO 'UNITE' THE PAYMENTS WITH EACH CONTRACT THAT THEY ARE BELONG TO.
        return payments.map(payment => {
            const contract = contracts.find(contract => contract.paymentsIds.includes(payment.id));
            return {
                contractNum: contract.rentContractId,
                ...payment,
                // we need to present the payment number only if it's already payed:
                num: (Date.now() > payment.payDate) ? payment.num : null
            }
        });
    }


    const getDetailedPayments = () => {
        // WE NEED ACTUALLY TO SPLIT EACH PAYMENT INTO 2, IN ORDER TO PRESENT EACH PAYMENT TWICE:
        // - ONCE AS A DEBIT
        // - SECOND AS A CREDIT
        return payments.reduce((acc, payment) => {
            const contract = contracts.find(contract => contract.paymentsIds.includes(payment.id));
            const asset = assets.find(asset => asset.contractsIds.includes(contract.id));
            const debitPayment = {
                contractNum: contract.rentContractId,
                type: 'הוצאה',
                debits: payment.total,
                credits: null,
                site: asset.bankName,
                branch: asset.branchName,
                ...payment,
                id: `${payment.id}_1`,
                num: (Date.now() > payment.payDate) ? payment.num : null
            };
            const creditPayment = {
                contractNum: contract.rentContractId,
                type: 'זיכוי (ספק)',
                debits: null,
                credits: payment.total,
                site: asset.bankName,
                branch: asset.branchName,
                ...payment,
                id: `${payment.id}_2`,
                num: (Date.now() > payment.payDate) ? payment.num : null
            };
            acc.push(debitPayment, creditPayment);
            return acc;
        }, []);
    }


    const showEntities = (dataSet, idx) => {
        // entities are actually the data to be presented
        if (idx >= 10) {
            // there are 15 tiles in general and the last 5 should not do anything, only to be rendered.
            return;
        }
        const { he, entities } = dataSet;
        const isPaymentsTable = ((he === 'הפקת הוראת תשלום מרוכזת') || (he === 'העברת ממשק'));
        const route = isPaymentsTable ? '/payments-table' : '/assets-table';
        const routeState = { he, entities };
        navigate(route, { state: routeState });
    }


    return (
        <section className="tiles-container">
            {entitiesDataSets.length ?
                <>
                    {entitiesDataSets.map((dataSet, idx) => (
                        <div
                            // we need to figure out on which tile the user has clicked,
                            // so we will navigate him to the relevant route with the relevant data
                            onClick={() => showEntities(dataSet, idx)}
                            className={dataSet.en}
                            key={dataSet.en}
                        >
                            <strong>{dataSet.he}</strong>
                            <h4>({dataSet.entities.length})</h4>
                        </div>
                    ))}
                </> : null
            }
        </section>
    )
}