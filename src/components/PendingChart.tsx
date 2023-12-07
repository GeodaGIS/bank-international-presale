// @ts-nocheck
import { useState, useEffect } from 'react';
import '../styles/pending-chart.css';
import { Chart } from 'primereact/chart';
import { useAppSelector } from '../hooks/useStoreTypes';
import { useAssign } from '../hooks/useAssign';
// import jsPDF from 'jspdf';


export const PendingChart = () => {
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
        const assignedAssets = useAssign(assets, contracts);
        const pendingAssets = assignedAssets.filter(asset => asset.contractStatus === 'ממתין לאישור');
        const approversNames = pendingAssets.map(asset => asset.approverName);
        const uniqueApproversNames = [...new Set(approversNames)];
        uniqueApproversNames.sort();
        // we need to know how many times each approver name exists in the data:
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
                barThickness: 35
            }]
        }
    }


    const getOptions = () => {
        return {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.56,
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
            },
            animation: {
                duration: 0
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