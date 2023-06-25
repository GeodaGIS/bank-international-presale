import { Tiles } from './Tiles';
import { PendingChart } from './PendingChart';
import { ExpensesChart } from './ExpensesChart';
import { Knobs } from './Knobs';
import { PreviewTable } from './PreviewTable';
import { TypesChart } from './TypesChart';
import '../styles/home.css';


export const Home = () => {
    return (
        <div className='home-container'>
            <div className='upper-container'>
                <Tiles />
                <section className='charts-container'>
                    <TypesChart />
                    <PendingChart />
                    <Knobs />
                </section>
            </div>
            <div className='lower-container'>
                <PreviewTable />
                <ExpensesChart />
            </div>
        </div>
    )
}