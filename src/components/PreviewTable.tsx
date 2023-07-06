// @ts-nocheck
import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useAppSelector } from '../hooks/useStoreTypes';
import '../styles/preview-table.css';
import { Field } from '../types/Field';
import { useReadable } from '../hooks/useReadable';
import { Export } from './Export';
import { useStatusTag } from '../hooks/useStatusTag';
import { useAssign } from '../hooks/useAssign';
import { TableSearch } from './TableSearch';
import { useNavigate } from 'react-router-dom';


export const PreviewTable = () => {
    const { assets } = useAppSelector(state => state.assetModule);
    const { contracts } = useAppSelector(state => state.contractModule);
    const [readableAssets, setReadableAssets] = useState([]);
    const [selectedAssets, setSelectedAssets] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        if (assets.length && contracts.length) {
            setAllAssets();
        }
    }, [assets, contracts])


    const getFieldsMap = () => {
        return {
            branchNum: 'מספר סניף',
            branchName: 'שם סניף',
            rentContractId: 'חוזה שכירות',
            managementContractId: 'חוזה ניהול',
            address: 'כתובת',
            town: 'עיר',
            areaSizePerEmployee: 'שטח לעובד',
            monthleyIndexedServiceFee: 'דמ"ש לחודש ממודד',
            totalExpenses: 'סך הוצאות שוטפות',
            closeExitAt: 'נקודת יציאה קרובה',
            contractStatus: 'סטטוס חוזה'
        }
    }


    const getFields = () => {
        const fieldsMap = getFieldsMap();
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
        const assignedAssets = useAssign(assets, contracts);
        const readableAssets = useReadable(assignedAssets, 'asset');
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
        <div className='preview-table-container'>
            {readableAssets.length ? (
                <>
                    <header>
                        <h2>{'כל הנכסים'}</h2>
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