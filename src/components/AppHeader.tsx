import { useMemo } from 'react';
import '../styles/app-header.css';
import { NavLink, useLocation } from 'react-router-dom';


export const AppHeader = () => {
    const geodaLogoUrl = 'https://geoda.co.il/wp-content/uploads/2018/03/geoda_main_logo.png';
    const location = useLocation();
    const isAtHome = useMemo(() => location.pathname === '/', [location]);

    return (
        <div className="app-header-container">

            <img src={geodaLogoUrl} />

            <nav>
                <NavLink
                    to={'/'}
                    style={{
                        fontSize: '18px',
                        color: isAtHome ? '#bd0000' : '#0f3c8f'
                    }}
                >
                    <span className="pi pi-home" title='עבור אל מסך הבית'></span>
                </NavLink>
            </nav>

            <section className='contact-container'>
                <div>
                    <span className='make-contact'>{'צור קשר'}</span>
                    <span className="pi pi-phone"></span>
                    <strong className="pi pi-pause"></strong>
                </div>
                <div>
                    <span className="pi pi-search"></span>
                </div>
            </section>

        </div>
    )
}