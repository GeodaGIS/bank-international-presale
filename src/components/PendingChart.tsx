// @ts-nocheck
import { useState, useEffect } from 'react';
import '../styles/pending-chart.css';
import { Chart } from 'primereact/chart';
import { useAppSelector } from '../hooks/useStoreTypes';
import { Asset } from '../types/Asset';
// import jsPDF from 'jspdf';


export const PendingChart = () => {
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
        const pendingAssets = assets.filter((asset: Asset) => asset.contractStatus === 'ממתין לאישור');
        const approversNames = pendingAssets.map((asset: Asset) => asset.approverName);
        const uniqueApproversNames = [...new Set(approversNames)];
        uniqueApproversNames.sort();
        const approversFrequencies = uniqueApproversNames.map(uniqueName => {
            return approversNames.reduce((frequency, name) => {
                return (name === uniqueName) ? ++frequency : frequency;
            }, 0);
        })
        return {
            labels: uniqueApproversNames,
            datasets: [{
                label: 'חוזים בסבב אישורים',
                data: approversFrequencies,
                backgroundColor: ['#163771'],
                barThickness: 70
            }]
        }
    }


    const getOptions = () => {
        return {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.5,
            scales: {
                x: {
                    ticks: { stepSize: 1 },
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                }
            }
        }
    }


    return (
        <div className="pending-chart-container">
            {(data && options) &&
                <Chart type="bar" data={data} options={options} />
            }
        </div>
    )
}