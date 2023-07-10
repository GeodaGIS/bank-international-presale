// @ts-nocheck
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useStoreTypes";
import { loadPayments } from "../store/actions/paymentActions";
import { useLocation } from "react-router-dom";
import { useReadable } from "../hooks/useReadable";
import { TableSearch } from "./TableSearch";
import { Export } from "./Export";
import { UtilService } from "../services/UtilService";
import { Field } from "../types/Field";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import '../styles/payments-table.css';
import { loadContracts } from "../store/actions/contractActions";


export const PaymentsTable = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const { contracts } = useAppSelector(state => state.contractModule);
    const { payments } = useAppSelector(state => state.paymentModule);
    const [readablePayments, setReadablePayments] = useState([]);
    const [selectedPayments, setSelectedPayments] = useState([]);


    useEffect(() => {
        if (!contracts.length) {
            dispatch(loadContracts());
        }
        if (!payments.length) {
            dispatch(loadPayments());
        }
    }, [])


    useEffect(() => {
        if (contracts.length && payments.length) {
            setAllPayments();
        }
    }, [payments, contracts])


    const onSearch = (searchVal) => {
        if (searchVal) {
            const filteredPayments = readablePayments.filter(payment => {
                const values = Object.values(payment);
                const strValues = values.map(value => `${value}`);
                return strValues.includes(searchVal);
            });
            if (filteredPayments.length) {
                setReadablePayments(filteredPayments);
                setSelectedPayments([]);
            } else {
                setAllPayments();
            }
        } else {
            setAllPayments();
        }
    }


    const setAllPayments = () => {
        const { entities } = location.state;
        const readablePayments = useReadable(entities, 'payment');
        setReadablePayments(readablePayments);
    }


    const getFields = ({ state }) => {
        let fieldsMap = null;
        if (state.he === 'הוראות תשלום מרוכזות') {
            fieldsMap = {
                contractNum: 'מספר חוזה',
                num: 'מספר הוראת תשלום',
                frequency: 'תדירות',
                supplier: 'ספק',
                aim: 'תשלום עבור',
                details: 'פרטים',
                total: 'סה"כ לתשלום'
            };
        }
        if (state.he === 'הוראות תשלום מפורטות') {
            fieldsMap = {
                contractNum: 'מספר חוזה',
                type: 'סוג הוראת תשלום',
                debits: 'חובה',
                credits: 'זכות',
                site: 'אתר',
                branch: 'סניף',
                ...UtilService.getEntityFieldsMap('payment')
            }
        }
        const fieldsNames = Object.keys(fieldsMap);
        return fieldsNames.map(fieldName => {
            return {
                name: fieldName,
                alias: fieldsMap[fieldName]
            } as Field;
        });
    }


    const fields = useMemo(() => getFields(location), [location]);


    return (
        <div className='payments-table-container'>
            {readablePayments.length ? (
                <>
                    <header>
                        <h2>{location.state.he}</h2>
                        <TableSearch onSearch={onSearch} />
                        <Export
                            records={selectedPayments.length ? selectedPayments : readablePayments}
                            fields={fields}
                            headline={'הוראות תשלום'}
                        />
                    </header>
                    <DataTable
                        value={readablePayments}
                        rows={readablePayments.length}
                        dataKey="id"
                        emptyMessage={'לא נמצאו הוראות תשלום'}
                        scrollable
                        selectionMode={'checkbox'}
                        selection={selectedPayments}
                        onSelectionChange={(ev) => setSelectedPayments(ev.value)}
                        rowGroupMode="rowspan"
                        groupRowsBy="contractNum"
                        footer={`סה"כ: ${readablePayments.reduce((acc, payment) => acc + payment.total, 0)}`}
                    >
                        <Column selectionMode="multiple" className='checkbox-column' />
                        {fields.map(field => <Column
                            field={field.name}
                            header={field.alias}
                            key={field.name}
                            sortable
                        />)}
                    </DataTable>
                </>
            ) : null}
        </div>
    )
}