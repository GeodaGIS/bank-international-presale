// @ts-nocheck
import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { useAppSelector } from '../hooks/useStoreTypes';
import '../styles/types-chart.css';
import { useAssign } from '../hooks/useAssign';


export const TypesChart = () => {
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

        // for every asset type we need to get the assets that are in Ownership and those that are in Rent.

        const branch = {
            inOwnershipCount: assignedAssets.filter(asset => !asset.isInRent && asset.type === 'סניף').length,
            inRentCount: assignedAssets.filter(asset => asset.isInRent && asset.type === 'סניף').length
        }

        const parking = {
            inOwnershipCount: assignedAssets.filter(asset => !asset.isInRent && asset.type === 'חניון').length,
            inRentCount: assignedAssets.filter(asset => asset.isInRent && asset.type === 'חניון').length
        }

        const storage = {
            inOwnershipCount: assignedAssets.filter(asset => !asset.isInRent && asset.type === 'מחסן').length,
            inRentCount: assignedAssets.filter(asset => asset.isInRent && asset.type === 'מחסן').length
        }

        const office = {
            inOwnershipCount: assignedAssets.filter(asset => !asset.isInRent && asset.type === 'משרדים').length,
            inRentCount: assignedAssets.filter(asset => asset.isInRent && asset.type === 'משרדים').length
        }

        const atm = {
            inOwnershipCount: assignedAssets.filter(asset => !asset.isInRent && asset.type === 'כספומט').length,
            inRentCount: assignedAssets.filter(asset => asset.isInRent && asset.type === 'כספומט').length
        }

        return {
            labels: ['בעלות', 'שכירות'],
            datasets: [
                {
                    type: 'bar',
                    label: 'סניף',
                    data: [branch.inOwnershipCount, branch.inRentCount],
                    backgroundColor: '#89C0C4',
                    barThickness: 60
                },
                {
                    type: 'bar',
                    label: 'חניון',
                    data: [parking.inOwnershipCount, parking.inRentCount],
                    backgroundColor: '#579EB9',
                    barThickness: 60
                },
                {
                    type: 'bar',
                    label: 'מחסן',
                    data: [storage.inOwnershipCount, storage.inRentCount],
                    backgroundColor: '#397AA8',
                    barThickness: 60
                },
                {
                    type: 'bar',
                    label: 'משרדים',
                    data: [office.inOwnershipCount, office.inRentCount],
                    backgroundColor: '#1C5796',
                    barThickness: 60
                },
                {
                    type: 'bar',
                    label: 'כספומט',
                    data: [atm.inOwnershipCount, atm.inRentCount],
                    backgroundColor: '#163771',
                    barThickness: 60
                }
            ]
        };
    }


    const getOptions = () => {
        return {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 1.2,
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