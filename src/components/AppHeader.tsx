import { useMemo } from 'react';
import '../styles/app-header.css';
import { NavLink, useLocation } from 'react-router-dom';
import geodaLogo from '../icons/geoda_logo.png';
import { GeneralSearch } from './GeneralSearch';


export const AppHeader = () => {
    const location = useLocation();
    const isAtHome = useMemo(() => location.pathname === '/', [location]);

    return (
        <div className="app-header-container">

            <img src={geodaLogo} width={60} height={55} title='גאודע' />

            <nav>
                <NavLink
                    to={'/'}
                    style={{
                        fontSize: '18px',
                        color: isAtHome ? '#c8c8c8' : '#969faf'
                    }}
                >
                    <span className="pi pi-home" title='עבור אל מסך הבית'></span>
                </NavLink>
            </nav>

            <section className='contact-container'>
                <main>
                    {/* <span className="pi pi-search"></span> */}
                    <GeneralSearch />
                </main>
                <div>
                    {/* <strong className="pi pi-pause"></strong> */}
                    <span className="pi pi-phone"></span>
                    <span className='make-contact'>{'צור קשר'}</span>
                </div>
            </section>

        </div>
    )
}