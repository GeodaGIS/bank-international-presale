// @ts-nocheck
import { Tiles } from './Tiles';
import { PendingChart } from './PendingChart';
import { ExpensesChart } from './ExpensesChart';
import { Knobs } from './Knobs';
import { PreviewTable } from './PreviewTable';
import { TypesChart } from './TypesChart';
import '../styles/home.css';
import { PaymentsChart } from './PaymentsChart';


export const Home = () => {
    return (
        <div className='home-container'>
            <div className='upper-container'>
                <section className='charts-container'>
                    <TypesChart />
                    <ExpensesChart />
                    <Knobs />
                </section>
            </div>
            <div className='lower-container'>
                {/* <PreviewTable /> */}
                <Tiles />
                <PaymentsChart />
                <PendingChart />
            </div>
        </div>
    )
}