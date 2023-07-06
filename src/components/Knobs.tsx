// @ts-nocheck
import { Fragment, useEffect, useState } from 'react';
import { Knob } from 'primereact/knob';
import { useAppSelector } from '../hooks/useStoreTypes';
import '../styles/knobs.css';
import { useAssign } from '../hooks/useAssign';


export const Knobs = () => {
    const { assets } = useAppSelector(state => state.assetModule);
    const { contracts } = useAppSelector(state => state.contractModule);
    const [dataSets, setDataSets] = useState([]);
    const deadLine = 1704059999000; // 31.12.23;


    useEffect(() => {
        if (assets.length && contracts.length) {
            setData();
        }
    }, [assets])


    const setData = () => {
        const assignedAssets = useAssign(assets, contracts);

        const activeContractsDataSet = {
            label: 'חוזים פעילים',
            value: assignedAssets.filter(asset => asset.contractStatus === 'פעיל').length
        };

        const closeRenewalContractsDataSet = {
            label: 'חוזים לחידוש השנה',
            value: assignedAssets.filter(asset => asset.contractRenewalAt <= deadLine).length
        };

        const closeExitDataSet = {
            label: 'חוזים עם נקודות יציאה השנה',
            value: assignedAssets.filter(asset => asset.closeExitAt <= deadLine).length
        };

        const closeOptionEndDataSet = {
            label: 'חוזים עם סיום אופציה השנה',
            value: assignedAssets.filter(asset => asset.optionEndsAt <= deadLine).length
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
                                valueColor='#397AA8'
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