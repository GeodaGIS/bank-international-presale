
import { Chart } from 'primereact/chart';
import { useEffect, useState } from "react";
import { useAppSelector } from '../hooks/useStoreTypes';
import '../styles/payments-chart.css';


export const PaymentsChart = () => {
    const { payments } = useAppSelector(state => state.paymentModule);
    const [data, setData] = useState(null);
    const [options, setOptions] = useState(null);
    const start2022 = 1640995261000;
    const end2022 = 1672523941000;
    const start2023 = 1672531261000;
    const end2023 = 1704059941000;


    useEffect(() => {
        if (payments.length) {
            setData(getData());
            setOptions(getOptions());
        }
    }, [payments])


    const getData = () => {
        const totalMap2022 = getTotalMap2022();
        const totalMap2023 = getTotalMap2023();
        return {
            labels: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
            datasets: [
                {
                    label: '2022',
                    data: [
                        totalMap2022.januaryTotal, totalMap2022.februaryTotal, totalMap2022.marchTotal, totalMap2022.aprilTotal,
                        totalMap2022.mayTotal, totalMap2022.juneTotal, totalMap2022.julyTotal, totalMap2022.augustTotal,
                        totalMap2022.septemberTotal, totalMap2022.octoberTotal, totalMap2022.novemberTotal, totalMap2022.decemberTotal
                    ],
                    borderColor: '#9176b3',
                    tension: 0.4
                },
                {
                    label: '2023',
                    data: [
                        totalMap2023.januaryTotal, totalMap2023.februaryTotal, totalMap2023.marchTotal, totalMap2023.aprilTotal,
                        totalMap2023.mayTotal, totalMap2023.juneTotal, totalMap2023.julyTotal, totalMap2023.augustTotal,
                        totalMap2023.septemberTotal, totalMap2023.octoberTotal, totalMap2023.novemberTotal, totalMap2023.decemberTotal
                    ],
                    borderColor: '#25B025',
                    tension: 0.4
                }
            ]
        };
    }


    const filterByPeriod = (payment, startDate, endDate) => {
        const { payDate } = payment;
        return (payDate >= startDate) && (payDate <= endDate);
    }


    const sum = (acc, payment) => {
        return acc + payment.total;
    }


    const getTotalMap2022 = () => {
        const payments2022 = payments.filter(payment => filterByPeriod(payment, start2022, end2022));
        const paymentsByMonth = {
            januaryPayments: payments2022.filter(payment => filterByPeriod(payment, 1640995261000, 1643666341000)),
            februaryPayments: payments2022.filter(payment => filterByPeriod(payment, 1643673661000, 1646085541000)),
            marchPayments: payments2022.filter(payment => filterByPeriod(payment, 1646092861000, 1648760341000)),
            aprilPayments: payments2022.filter(payment => filterByPeriod(payment, 1648767661000, 1651352341000)),
            mayPayments: payments2022.filter(payment => filterByPeriod(payment, 1651359661000, 1654030741000)),
            junePayments: payments2022.filter(payment => filterByPeriod(payment, 1654038061000, 1656622741000)),
            julyPayments: payments2022.filter(payment => filterByPeriod(payment, 1656630061000, 1659301141000)),
            augustPayments: payments2022.filter(payment => filterByPeriod(payment, 1659308461000, 1661979541000)),
            septemberPayments: payments2022.filter(payment => filterByPeriod(payment, 1661986861000, 1664571541000)),
            octoberPayments: payments2022.filter(payment => filterByPeriod(payment, 1664578861000, 1667253541000)),
            novemberPayments: payments2022.filter(payment => filterByPeriod(payment, 1667260861000, 1669845541000)),
            decemberPayments: payments2022.filter(payment => filterByPeriod(payment, 1669852861000, 1672523941000))
        };
        return getTotalMap(paymentsByMonth);
    }


    const getTotalMap2023 = () => {
        const payments2023 = payments.filter(payment => filterByPeriod(payment, start2023, end2023));
        const paymentsByMonth = {
            januaryPayments: payments2023.filter(payment => filterByPeriod(payment, 1672531261000, 1675202341000)),
            februaryPayments: payments2023.filter(payment => filterByPeriod(payment, 1675209661000, 1677621541000)),
            marchPayments: payments2023.filter(payment => filterByPeriod(payment, 1677628861000, 1680296341000)),
            aprilPayments: payments2023.filter(payment => filterByPeriod(payment, 1680303661000, 1682888341000)),
            mayPayments: payments2023.filter(payment => filterByPeriod(payment, 1682895661000, 1685566741000)),
            junePayments: payments2023.filter(payment => filterByPeriod(payment, 1685574061000, 1688158741000)),
            julyPayments: payments2023.filter(payment => filterByPeriod(payment, 1688166061000, 1690837141000)),
            augustPayments: payments2023.filter(payment => filterByPeriod(payment, 1690844461000, 1693515541000)),
            septemberPayments: payments2023.filter(payment => filterByPeriod(payment, 1693522861000, 1696107541000)),
            octoberPayments: payments2023.filter(payment => filterByPeriod(payment, 1696114861000, 1698789541000)),
            novemberPayments: payments2023.filter(payment => filterByPeriod(payment, 1698796861000, 1701381541000)),
            decemberPayments: payments2023.filter(payment => filterByPeriod(payment, 1701388861000, 1704059941000))
        };
        return getTotalMap(paymentsByMonth);
    }


    const getTotalMap = (paymentsByMonth) => {
        return {
            januaryTotal: paymentsByMonth.januaryPayments.reduce(sum, 0),
            februaryTotal: paymentsByMonth.februaryPayments.reduce(sum, 0),
            marchTotal: paymentsByMonth.marchPayments.reduce(sum, 0),
            aprilTotal: paymentsByMonth.aprilPayments.reduce(sum, 0),
            mayTotal: paymentsByMonth.mayPayments.reduce(sum, 0),
            juneTotal: paymentsByMonth.junePayments.reduce(sum, 0),
            julyTotal: paymentsByMonth.julyPayments.reduce(sum, 0),
            augustTotal: paymentsByMonth.augustPayments.reduce(sum, 0),
            septemberTotal: paymentsByMonth.septemberPayments.reduce(sum, 0),
            octoberTotal: paymentsByMonth.octoberPayments.reduce(sum, 0),
            novemberTotal: paymentsByMonth.novemberPayments.reduce(sum, 0),
            decemberTotal: paymentsByMonth.decemberPayments.reduce(sum, 0)
        }
    }


    const getOptions = () => {
        return {
            maintainAspectRatio: false,
            aspectRatio: 0.7,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            animation: {
                duration: 0
            }
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