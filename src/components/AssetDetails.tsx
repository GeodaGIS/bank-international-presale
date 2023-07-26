// @ts-nocheck
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/useStoreTypes";
import '../styles/asset-details.css';
import { TabMenu } from 'primereact/tabmenu';
import { Export } from "./Export";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { UtilService } from "../services/UtilService";
import { Field } from "../types/Field";
import { useReadable } from "../hooks/useReadable";
import { useStatusTag } from "../hooks/useStatusTag";
import { PaymentsChart } from "./PaymentsChart";


export const AssetDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { assets } = useAppSelector(state => state.assetModule);
    const { contracts } = useAppSelector(state => state.contractModule);
    const { payments } = useAppSelector(state => state.paymentModule);
    const [currAsset, setCurrAsset] = useState(null);
    const [fields, setFields] = useState([]);
    const navItems = [
        { label: 'כל התשלומים' },
        { label: 'תשלומי עבר' },
        { label: 'תחזית תשלומים' },
        { label: 'תחזית לרבעון הקרוב' },
        { label: 'כל החוזים' },
        { label: 'תשריטים' },
        { label: 'מסמכים נלווים' },
    ];
    const [activeTab, setActiveTab] = useState({ label: 'כל התשלומים', index: 0 });
    const [featuresToShowInTable, setFeaturesToShowInTable] = useState([]);
    const [selectedFeatures, setSelectedFeatures] = useState([]);


    useEffect(() => {
        if (assets.length) {
            const foundAsset = assets.find(asset => asset.id === params.id);
            setCurrAsset(foundAsset);
        }
    }, [params, assets])


    useEffect(() => {
        if (!currAsset || !contracts.length || !payments.length) {
            return;
        }
        const assetContracts = contracts.filter(contract => currAsset.contractsIds.includes(contract.id));
        if (activeTab.label === 'כל החוזים') {
            setFields(getFields('contract'));
            setAllContracts(assetContracts);
        } else {
            setFields(getFields('payment'));
            let allCurrPayments = payments.filter(payment => assetContracts[0].paymentsIds.includes(payment.id));
            if (allCurrPayments.length) {
                allCurrPayments = allCurrPayments.map(payment => ({
                    ...payment,
                    num: (Date.now() > payment.payDate) ? payment.num : null
                }));
                if (activeTab.label === 'כל התשלומים') {
                    setPaymentsInTable(allCurrPayments);
                }
                if (activeTab.label === 'תשלומי עבר') {
                    setPastPayments(allCurrPayments);
                }
                if (activeTab.label === 'תחזית תשלומים') {
                    setFuturePayments(allCurrPayments);
                }
                if (activeTab.label === 'תחזית לרבעון הקרוב') {
                    setNextQuarterPayments(allCurrPayments);
                }
                if (activeTab.label === 'תשריטים' || activeTab.label === 'מסמכים נלווים') {
                    setFeaturesToShowInTable([]);
                }
            } else {
                setFeaturesToShowInTable([]);
            }
        }
    }, [activeTab, currAsset])


    const setAllContracts = (assetContracts) => {
        const readableAssetContracts = useReadable(assetContracts, 'contract');
        setFeaturesToShowInTable(readableAssetContracts);
    }


    const setPastPayments = (allCurrPayments) => {
        const pastPayments = allCurrPayments.filter(payment => Date.now() > payment.payDate);
        setPaymentsInTable(pastPayments);
    }


    const setFuturePayments = (allCurrPayments) => {
        const futurePayments = allCurrPayments.filter(payment => Date.now() < payment.payDate);
        setPaymentsInTable(futurePayments);
    }


    const setNextQuarterPayments = (allCurrPayments) => {
        const threeMonthsPeriod = 7862400000;
        const nexQuarterPayments = allCurrPayments.filter(payment => {
            const isFuturePayment = Date.now() < payment.payDate;
            const inLessThanThreeMonths = (Date.now() + threeMonthsPeriod) > payment.payDate;
            return (isFuturePayment && inLessThanThreeMonths);
        });
        setPaymentsInTable(nexQuarterPayments);
    }


    const setPaymentsInTable = (payments) => {
        const readablePayments = useReadable(payments, 'payment');
        setFeaturesToShowInTable(readablePayments);
    }


    const getFields = (entityName) => {
        const fieldsMap = UtilService.getEntityFieldsMap(entityName);
        const fieldsNames = Object.keys(fieldsMap);
        return fieldsNames.map(fieldName => {
            return {
                name: fieldName,
                alias: fieldsMap[fieldName]
            } as Field;
        });
    }


    const handleTabChange = (ev) => {
        setActiveTab({
            label: ev.value.label,
            index: ev.index
        });
    }


    const changeAsset = (direction) => {
        let targetNum = null;
        if (direction === 'next') {
            targetNum = currAsset.branchNum + 1;
        }
        if (direction === 'prev') {
            targetNum = currAsset.branchNum - 1;
        }
        const targetAsset = assets.find(asset => asset.branchNum === targetNum);
        navigate(`/asset/${targetAsset.id}`);
    }


    return (
        <div>
            {currAsset &&
                <main className="asset-details-container">

                    <article>
                        <h1>{currAsset.branchName}</h1>
                        <h1>{currAsset.branchNum}</h1>
                    </article>

                    <section className="entries-container">
                        {(currAsset.branchNum !== 1) ?
                            <aside>
                                <span
                                    className="pi pi-chevron-right"
                                    onClick={() => changeAsset('prev')}
                                    title="עבור לנכס הקודם"
                                />
                            </aside>
                            : <aside style={{ width: '25px' }}></aside>
                        }
                        <div>
                            <h2>{'שם סניף'}</h2>
                            <h3>{currAsset.branchName}</h3>
                        </div>
                        <div>
                            <h2>{'מספר סניף'}</h2>
                            <h3>{currAsset.branchNum}</h3>
                        </div>
                        <div>
                            <h2>{'בנק'}</h2>
                            <h3>{currAsset.bankName}</h3>
                        </div>
                        <div>
                            <h2>{'כתובת'}</h2>
                            <h3>{currAsset.address}</h3>
                        </div>
                        <div>
                            <h2>{'עיר'}</h2>
                            <h3>{currAsset.town}</h3>
                        </div>
                        {(currAsset.branchNum !== 30) ?
                            <aside>
                                <span
                                    className="pi pi-chevron-left"
                                    onClick={() => changeAsset('next')}
                                    title="עבור לנכס הבא"
                                />
                            </aside>
                            : <aside style={{ width: '25px' }}></aside>
                        }
                    </section>

                    <section className="details-lower-container">

                        <main className="details-table-main-container">
                            <div className="details-table-container">
                                <header>
                                    <TabMenu
                                        model={navItems}
                                        activeIndex={activeTab.index}
                                        onTabChange={handleTabChange}
                                    />
                                    <div>
                                        <h2>{activeTab.label}</h2>
                                        <Export
                                            records={selectedFeatures.length ? selectedFeatures : featuresToShowInTable}
                                            fields={fields}
                                            headline={activeTab.label}
                                        />
                                    </div>
                                </header>
                                <DataTable
                                    value={featuresToShowInTable}
                                    rows={featuresToShowInTable.length}
                                    dataKey="id"
                                    emptyMessage={'לא נמצאו נתונים לתצוגה'}
                                    scrollable
                                    selectionMode={'checkbox'}
                                    selection={selectedFeatures}
                                    onSelectionChange={(ev) => setSelectedFeatures(ev.value)}
                                >
                                    <Column selectionMode="multiple" />
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
                            </div>
                        </main>

                    </section>

                </main>
            }
        </div >
    )
}