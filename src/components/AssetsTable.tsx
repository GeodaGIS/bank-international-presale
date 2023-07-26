// @ts-nocheck
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useStoreTypes';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { UtilService } from '../services/UtilService';
import { loadAssets } from '../store/actions/assetActions';
import { loadContracts } from '../store/actions/contractActions';
import { Field } from '../types/Field';
import { useReadable } from '../hooks/useReadable';
import { Export } from './Export';
import { useStatusTag } from '../hooks/useStatusTag';
import { TableSearch } from './TableSearch';
import '../styles/assets-table.css';


export const AssetsTable = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const { assets } = useAppSelector(state => state.assetModule);
    const { contracts } = useAppSelector(state => state.contractModule);
    const [readableAssets, setReadableAssets] = useState([]);
    const [selectedAssets, setSelectedAssets] = useState([]);


    useEffect(() => {
        if (!assets.length) {
            dispatch(loadAssets());
        }
        if (!contracts.length) {
            dispatch(loadContracts());
        }
    }, [])


    useEffect(() => {
        if (assets.length && contracts.length) {
            setAllAssets();
        }
    }, [assets, contracts, location.state])


    const getFields = () => {
        const fieldsMap = UtilService.getFieldsMap();
        const fieldsNames = Object.keys(fieldsMap);
        return fieldsNames.map(fieldName => {
            return {
                name: fieldName,
                alias: fieldsMap[fieldName]
            } as Field;
        });
    }


    const fields = getFields();


    const onSearch = (searchVal) => {
        if (searchVal) {
            const filteredAssets = readableAssets.filter(asset => {
                const values = Object.values(asset);
                const strValues = values.map(value => `${value}`);
                return strValues.includes(searchVal);
            });
            if (filteredAssets.length) {
                setReadableAssets(filteredAssets);
                setSelectedAssets([]);
            } else {
                setAllAssets();
            }
        } else {
            setAllAssets();
        }
    }


    const setAllAssets = () => {
        const { entities } = location.state;
        let readableAssets = [];
        if ('isByGenSearch' in location.state) {
            readableAssets = entities;
        } else {
            readableAssets = useReadable(entities, 'asset');
        }
        setReadableAssets(readableAssets);
    }


    const getDetailsBtn = (readableAsset) => {
        const asset = assets.find(asset => asset.branchName === readableAsset.branchName);
        return <span
            onClick={() => navigate(`/asset/${asset.id}`)}
            className="pi pi-book"
            title='הצג פרטי נכס'
            style={{ cursor: 'pointer' }}
        />
    }


    return (
        <div className='assets-table-container'>
            {readableAssets.length ? (
                <>
                    <header>
                        <h2>{location.state.he}</h2>
                        <TableSearch onSearch={onSearch} />
                        <Export
                            records={selectedAssets.length ? selectedAssets : readableAssets}
                            fields={fields}
                            headline={'נכסים'}
                        />
                    </header>
                    <DataTable
                        value={readableAssets}
                        rows={readableAssets.length}
                        dataKey="id"
                        emptyMessage={'לא נמצאו נכסים'}
                        scrollable
                        selectionMode={'checkbox'}
                        selection={selectedAssets}
                        onSelectionChange={(ev) => setSelectedAssets(ev.value)}
                    >
                        <Column selectionMode="multiple" className='checkbox-column' />
                        <Column body={getDetailsBtn} />
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