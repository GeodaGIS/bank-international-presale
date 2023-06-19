import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import { AppHeader } from './components/AppHeader';
import { AssetService } from './services/AssetService';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { createContext, useEffect } from 'react';
import { Table } from './components/Table';
import { useAppDispatch } from './hooks/useStoreTypes';
import { loadAssets } from './store/actions/assetActions';


function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadAssets());
  }, []);

  return (
    <BrowserRouter>
      <main className='app-main-container'>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App




