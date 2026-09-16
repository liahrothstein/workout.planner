import './App.scss';

import { store } from '@store/store';
import { Layout } from 'antd';
import { Provider } from 'react-redux';

import { routes } from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <Layout>{routes}</Layout>
    </Provider>
  );
}
