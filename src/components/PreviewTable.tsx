// @ts-nocheck
import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useAppSelector } from '../hooks/useStoreTypes';
import '../styles/preview-table.css';
import { Field } from '../types/Field';
import { Asset } from '../types/Asset';
import { useAssetsToShow } from '../hooks/useAssetsToShow';
import { Export } from './Export';
import { useStatusTag } from '../hooks/useStatusTag';


export const PreviewTable = () => {
    const { assets } = useAppSelector(state => state.assetModule);
    const [assetsToShow, setAssetsToShow] = useState<Asset[]>([]);
    const [selectedAssets, setSelectedAssets] = useState<Asset[]>([]);


    useEffect(() => {
        if (assets.length) {
            const assetsToShow = useAssetsToShow(assets);
            setAssetsToShow(assetsToShow);
        }
    }, [assets])


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


    return (
        <div className='preview-table-container'>
            {assetsToShow.length ? (
                <>
                    <header>
                        <h4>{'כל הנכסים'}</h4>
                        <Export
                            assets={selectedAssets.length ? selectedAssets : assetsToShow}
                            fields={fields}
                            headline={selectedAssets.length ? 'נכסים שנבחרו' : 'כל הנכסים'}
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