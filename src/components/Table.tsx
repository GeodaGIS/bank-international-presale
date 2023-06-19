// @ts-nocheck
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Asset } from '../types/Asset';
import { useAppDispatch, useAppSelector } from '../hooks/useStoreTypes';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { UtilService } from '../services/UtilService';
import { loadAssets } from '../store/actions/assetActions';
import { Field } from '../types/Field';
import '../styles/table.css';
import { useAssetsToShow } from '../hooks/useAssetsToShow';
import { Export } from './Export';
import { useStatusTag } from '../hooks/useStatusTag';


export const Table = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const { assets } = useAppSelector(state => state.assetModule);
    const [assetsToShow, setAssetsToShow] = useState<Asset[]>([]);
    const [selectedAssets, setSelectedAssets] = useState<Asset[]>([]);


    useEffect(() => {
        if (!assets.length) {
            dispatch(loadAssets());
        }
    }, [])


    useEffect(() => {
        if (assets.length) {
            const { filteredAssets } = location.state;
            const assetsToShow = useAssetsToShow(filteredAssets);
            setAssetsToShow(assetsToShow);
        }
    }, [assets])


    const getFields = () => {
        const fieldsMap = UtilService.getFieldsMap();
        const fieldsNames = Object.keys(fieldsMap);
        return fieldsNames.map(fieldName => {
            return {
                name: fieldName,
                alias: fieldsMap[fieldName]
            } as Field
        });
    }


    const fields = getFields();


    return (
        <div className='table-container'>
            {assetsToShow.length ? (
                <>
                    <header>
                        <h2>{location.state.he}</h2>
                        <Export
                            assets={selectedAssets.length ? selectedAssets : assetsToShow}
                            fields={fields}
                            headline={selectedAssets.length ? 'נכסים שנבחרו' : location.state.he}
                        />
                    </header>
                    <DataTable
                        value={assetsToShow}
                        rows={assetsToShow.length}
                        dataKey="id"
                        emptyMessage={'לא נמצאו נכסים'}
                        scrollable
                        selectionMode={'checkbox'}
                        selection={selectedAssets}
                        onSelectionChange={(ev) => setSelectedAssets(ev.value)}
                    >
                        <Column selectionMode="multiple" className='checkbox-column' />
                        {fields.map(field => {
                            if (field.name === 'contractStatus') {
                                return <Column
                                    field={field.name}
                                    header={field.alias}
                                    key={field.name}
                                    sortable
                                    body={useStatusTag}
                                />
                            } else {
                                return <Column
                                    field={field.name}
                                    header={field.alias}
                                    key={field.name}
                                    sortable
                                />
                            }
                        })}
                    </DataTable>
                </>
            ) : null}
        </div>
    )
}