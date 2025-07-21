import { Provider } from 'react-redux';
import { Layout } from 'antd';

import { routes } from './routes';

import { store } from '@store/store';

import './App.scss';

export default function App() {

  return (
    <Provider store={store}>
      <Layout>
        {routes}
      </Layout>
    </Provider>
  )
}