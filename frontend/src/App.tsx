import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import { Routes } from './Routes';
import { store } from './redux/store';

export function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />

        <ToastContainer />
      </Provider>
    </>
  )
}
