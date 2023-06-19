import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/tiles.css';
import { useAppSelector } from '../hooks/useStoreTypes';
import { Asset } from '../types/Asset';

export const Tiles = () => {
    const { assets } = useAppSelector(state => state.assetModule);
    const navigate = useNavigate();
    const [filteredAssetDataSets, setFilteredAssetDataSets] = useState<any[]>([]);
    const deadLine = 1704059999000; // 31.12.23;


    useEffect(() => {
        if (assets.length) {
            setFilteredAssetDataSets([
                {
                    en: 'all',
                    he: 'כל הנכסים',
                    assets: getFilteredAssets('all')
                },
                {
                    en: 'rentEndingDate',
                    he: 'סיום שכירות השנה',
                    assets: getFilteredAssets('rentEndingDate')
                },
                {
                    en: 'closeExitPoints',
                    he: 'נקודות יציאה קרובות',
                    assets: getFilteredAssets('closeExitPoints')
                },
                {
                    en: 'pendingStatus',
                    he: 'ממתינים לאישור',
                    assets: getFilteredAssets('pendingStatus')
                }
            ])
        }
    }, [assets])


    const getFilteredAssets = (filterBy: string) => {
        if (filterBy === 'all') {
            return assets;
        }
        if (filterBy === 'rentEndingDate') {
            return assets.filter((asset: Asset) => asset.rentEndsAt <= deadLine);
        }
        if (filterBy === 'closeExitPoints') {
            return assets.filter((asset: Asset) => asset.closeExitAt <= deadLine);
        }
        if (filterBy === 'pendingStatus') {
            return assets.filter((asset: Asset) => asset.contractStatus === 'ממתין לאישור');
        }
    }


    const showAssets = (dataSet) => {
        const filterBy = {
            filteredAssets: dataSet.assets,
            he: dataSet.he
        };
        navigate('/table', { state: filterBy });
    }


    return (
        <section className="tiles-container">
            {filteredAssetDataSets.length ?
                <>
                    {filteredAssetDataSets.map(dataSet => (
                        <div onClick={(ev) => showAssets(dataSet)} key={dataSet.en}>
                            <strong>{dataSet.he}</strong>
                            <h4>({dataSet.assets.length})</h4>
                        </div>
                    ))}
                </> : null
            }
        </section>
    )
}