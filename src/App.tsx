import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import { AppHeader } from './components/AppHeader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { useEffect } from 'react';
import { AssetsTable } from './components/AssetsTable';
import { useAppDispatch } from './hooks/useStoreTypes';
import { loadAssets } from './store/actions/assetActions';
import { loadContracts } from './store/actions/contractActions';
import { loadPayments } from './store/actions/paymentActions';
import { AssetDetails } from './components/AssetDetails';
import { PaymentsTable } from './components/PaymentsTable';


function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadAssets());
    dispatch(loadContracts());
    dispatch(loadPayments());
  }, []);

  return (
    <BrowserRouter basename='bank-international-presale'>
      <main className='app-main-container'>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assets-table" element={<AssetsTable />} />
          <Route path="/payments-table" element={<PaymentsTable />} />
          <Route path="/asset/:id" element={<AssetDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  )

}

export default App




