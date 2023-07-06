// @ts-nocheck
import { Chart } from 'primereact/chart';
import { useEffect, useState } from "react";
import { useAppSelector } from '../hooks/useStoreTypes';


export const PaymentsChart = (props) => {
    const { currAsset } = props;
    const { assets } = useAppSelector(state => state.assetModule);
    const { contracts } = useAppSelector(state => state.contractModule);
    const { payments } = useAppSelector(state => state.paymentModule);
    const [data, setData] = useState(null);
    const [options, setOptions] = useState(null);


    useEffect(() => {
        if (assets.length && contracts.length && payments.length) {
            setData(getData());
            setOptions(getOptions());
        }
    }, [assets, currAsset])


    const getData = () => {
        const assetsWithPayments = assets.filter(asset => {
            const assetContract = contracts.find(contract => contract.id === asset.contractsIds[0]);
            return assetContract.paymentsIds.length;
        });
        return {
            labels: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
            datasets: assetsWithPayments.map(asset => {
                const assetContract = contracts.find(contract => contract.id === asset.contractsIds[0]);
                const contractPayments = payments.filter(payment => assetContract.paymentsIds.includes(payment.id));
                let data = [];
                const payment = contractPayments[0];
                if (payment.frequency === 'שנתי') {
                    data = [null, null, null, null, null, null, null, null, null, null, null, payment.total];
                }
                if (payment.frequency === 'רבעוני') {
                    data = [contractPayments[0].total, null, null, contractPayments[1].total, null, null, contractPayments[2].total, null, null, contractPayments[3].total, null, null];
                }
                if (payment.frequency === 'חודשי') {
                    data = contractPayments.map(payment => payment.total);
                }
                return {
                    label: asset.branchName,
                    data,
                    borderColor: (asset.id === currAsset.id) ? '#f59e0b' : '#c7c7c7'
                }
            })
        };
    }


    const getOptions = () => {
        return {
            maintainAspectRatio: false,
            aspectRatio: 0.38
        };
    }


    return (
        <section className="payments-chart-container">
            {(data && options) &&
                <Chart type="line" data={data} options={options} />
            }
        </section>
    )
}