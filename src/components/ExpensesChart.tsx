// @ts-nocheck
import { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import '../styles/expenses-chart.css';
import { useAppSelector } from '../hooks/useStoreTypes';


export const ExpensesChart = () => {
    const { assets } = useAppSelector(state => state.assetModule);
    const { contracts } = useAppSelector(state => state.contractModule);
    const [data, setData] = useState(null);
    const [options, setOptions] = useState(null);


    useEffect(() => {
        if (assets.length && contracts.length) {
            setData(getData());
            setOptions(getOptions());
        }
    }, [assets])


    const getData = () => {
        return {
            labels: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
            datasets: [
                {
                    label: 'דמי שימוש ממודד',
                    data: [7000, 11000, 10000, 12000, 14000, 9000, 10000, 10000, 9000, 11000, 10000, 9000],
                    borderColor: '#579EB9',
                    tension: 0.4
                },
                {
                    label: 'סך הוצאות שוטפות',
                    data: [15000, 14000, 12000, 10000, 12000, 13000, 14000, 13000, 14000, 11000, 13000, 15000],
                    borderColor: 'rgba(245, 158, 11, 0.6)',
                    tension: 0.4
                }
            ]
        };
    }


    const getOptions = () => {
        return {
            maintainAspectRatio: false,
            aspectRatio: 1.15
        };
    }


    return (
        <div className="expenses-chart-container">
            {(data && options) &&
                <Chart type="line" data={data} options={options} />
            }
        </div>
    )
}