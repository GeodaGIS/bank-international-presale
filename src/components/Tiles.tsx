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
    const [assignedAssetsDataSets, setAssignedAssetsDataSets] = useState<any[]>([]);
    const deadLine = 1704059999000; // 31.12.23;


    useEffect(() => {
        if (assets.length && contracts.length) {
            setAssignedAssetsDataSets([
                {
                    en: 'all',
                    he: 'כל הנכסים',
                    assignedAssets: getAssignedAssets('all')
                },
                {
                    en: 'rentEndingDate',
                    he: 'סיום שכירות השנה',
                    assignedAssets: getAssignedAssets('rentEndingDate')
                },
                {
                    en: 'closeExitPoints',
                    he: 'נקודות יציאה קרובות',
                    assignedAssets: getAssignedAssets('closeExitPoints')
                },
                {
                    en: 'activeStatus',
                    he: 'פעילים',
                    assignedAssets: getAssignedAssets('activeStatus')
                },
                {
                    en: 'nonActiveStatus',
                    he: 'לא פעילים',
                    assignedAssets: getAssignedAssets('nonActiveStatus')
                },
                {
                    en: 'pendingStatus',
                    he: 'ממתינים לאישור',
                    assignedAssets: getAssignedAssets('pendingStatus')
                },
                {
                    en: 'bankBeinleumi',
                    he: 'הבנק הבינלאומי',
                    assignedAssets: getAssignedAssets('bankBeinleumi')
                },
                {
                    en: 'bankMasad',
                    he: 'בנק מסד',
                    assignedAssets: getAssignedAssets('bankMasad')
                },
                {
                    en: 'x',
                    he: 'הוראות תשלום מרוכזות',
                    assignedAssets: () => console.log('y')
                },
                {
                    en: 'y',
                    he: 'הוראות תשלום מפורטות',
                    assignedAssets: () => console.log('x')
                },
            ])
        }
    }, [assets, contracts])


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


    const showAssets = (dataSet) => {
        const { he, assignedAssets } = dataSet;
        if (he === 'הוראות תשלום מפורטות' || he === 'הוראות תשלום מרוכזות') {
            return;
        }
        const routeState = { he, assignedAssets };
        navigate('/table', { state: routeState });
    }


    return (
        <section className="tiles-container">
            {assignedAssetsDataSets.length ?
                <>
                    {assignedAssetsDataSets.map(dataSet => (
                        <div onClick={(ev) => showAssets(dataSet)} key={dataSet.en}>
                            <strong>{dataSet.he}</strong>
                            <h4>({dataSet.assignedAssets.length})</h4>
                        </div>
                    ))}
                </> : null
            }
        </section>
    )
}