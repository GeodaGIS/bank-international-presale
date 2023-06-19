import { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import '../styles/expenses-chart.css';
import { useAppSelector } from '../hooks/useStoreTypes';


export const ExpensesChart = () => {
    const { assets } = useAppSelector(state => state.assetModule);
    const [data, setData] = useState(null);
    const [options, setOptions] = useState(null);


    useEffect(() => {
        if (assets.length) {
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
                    borderColor: '#9176b3',
                    tension: 0.4
                },
                {
                    label: 'סך הוצאות שוטפות',
                    data: [15000, 14000, 12000, 10000, 12000, 13000, 14000, 13000, 14000, 11000, 13000, 15000],
                    borderColor: '#25B025',
                    tension: 0.4
                }
            ]
        };
    }


    const getOptions = () => {
        return {
            maintainAspectRatio: false,
            aspectRatio: 1.15,
            plugins: {
                legend: {
                    labels: {
                        // color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        // color: textColorSecondary
                    },
                    grid: {
                        // color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        // color: textColorSecondary
                    },
                    grid: {
                        // color: surfaceBorder
                    }
                }
            }
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