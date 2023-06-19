// @ts-nocheck
import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { useAppSelector } from '../hooks/useStoreTypes';
import '../styles/types-chart.css';


export const TypesChart = () => {
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
        const branch = {
            inOwnershipCount: assets.filter(asset => !asset.isInRent && asset.type === 'סניף').length,
            inRentCount: assets.filter(asset => asset.isInRent && asset.type === 'סניף').length
        }

        const parking = {
            inOwnershipCount: assets.filter(asset => !asset.isInRent && asset.type === 'חניון').length,
            inRentCount: assets.filter(asset => asset.isInRent && asset.type === 'חניון').length
        }

        const storage = {
            inOwnershipCount: assets.filter(asset => !asset.isInRent && asset.type === 'מחסן').length,
            inRentCount: assets.filter(asset => asset.isInRent && asset.type === 'מחסן').length
        }

        const office = {
            inOwnershipCount: assets.filter(asset => !asset.isInRent && asset.type === 'משרדים').length,
            inRentCount: assets.filter(asset => asset.isInRent && asset.type === 'משרדים').length
        }

        const atm = {
            inOwnershipCount: assets.filter(asset => !asset.isInRent && asset.type === 'כספומט').length,
            inRentCount: assets.filter(asset => asset.isInRent && asset.type === 'כספומט').length
        }

        return {
            labels: ['בעלות', 'שכירות'],
            datasets: [
                {
                    type: 'bar',
                    label: 'סניף',
                    data: [branch.inOwnershipCount, branch.inRentCount],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    barThickness: 90
                },
                {
                    type: 'bar',
                    label: 'חניון',
                    data: [parking.inOwnershipCount, parking.inRentCount],
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    barThickness: 90
                },
                {
                    type: 'bar',
                    label: 'מחסן',
                    data: [storage.inOwnershipCount, storage.inRentCount],
                    backgroundColor: 'rgba(255, 205, 86, 0.6)',
                    barThickness: 90
                },
                {
                    type: 'bar',
                    label: 'משרדים',
                    data: [office.inOwnershipCount, office.inRentCount],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    barThickness: 90
                },
                {
                    type: 'bar',
                    label: 'כספומט',
                    data: [atm.inOwnershipCount, atm.inRentCount],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    barThickness: 90
                }
            ]
        };
    }


    const getOptions = () => {
        return {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.82,
            scales: {
                x: {
                    stacked: true,
                    ticks: { stepSize: 1 }
                },
                y: {
                    stacked: true,
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                }
            }
        };
    }


    return (
        <div className="types-chart-container">
            {(data && options) &&
                <Chart type="bar" data={data} options={options} />
            }
        </div>
    )
}