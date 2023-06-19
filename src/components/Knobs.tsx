// @ts-nocheck
import { Fragment, useEffect, useState } from 'react';
import { Knob } from 'primereact/knob';
import { useAppSelector } from '../hooks/useStoreTypes';
import '../styles/knobs.css';


export const Knobs = () => {
    const { assets } = useAppSelector(state => state.assetModule);
    const [dataSets, setDataSets] = useState([]);
    const deadLine = 1704059999000; // 31.12.23;


    useEffect(() => {
        if (assets.length) {
            setData();
        }
    }, [assets])


    const setData = () => {
        const activeContractsDataSet = {
            label: 'חוזים פעילים',
            value: assets.filter(asset => asset.contractStatus === 'פעיל').length,
            valueColor: '#22C55E'
        };

        const closeRenewalContractsDataSet = {
            label: 'חוזים לחידוש השנה',
            value: assets.filter(asset => asset.contractRenewalAt <= deadLine).length,
            valueColor: 'rgba(61, 175, 204, 0.7)'
        };

        const closeExitDataSet = {
            label: 'חוזים עם נקודות יציאה השנה',
            value: assets.filter(asset => asset.closeExitAt <= deadLine).length,
            valueColor: 'rgba(255, 255, 15, 0.7)'
        };

        const closeOptionEndDataSet = {
            label: 'חוזים עם סיום אופציה השנה',
            value: assets.filter(asset => asset.optionEndsAt <= deadLine).length,
            valueColor: 'rgba(78, 81, 252, 0.7)'
        };

        setDataSets([activeContractsDataSet, closeRenewalContractsDataSet, closeExitDataSet, closeOptionEndDataSet]);
    }


    return (
        <section className='knobs-container'>
            {dataSets.length ?
                <Fragment>
                    {dataSets.map(dataSet => (
                        <div key={dataSet.label}>
                            <strong>{dataSet.label}</strong>
                            <Knob
                                value={dataSet.value}
                                valueColor={dataSet.valueColor}
                                rangeColor="rgba(162, 163, 166, 0.6)"
                                min={0} max={assets.length}
                                size={95}
                            />
                        </div>
                    ))}
                </Fragment> : null
            }
        </section>
    )
}