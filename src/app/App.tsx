import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

import { Head } from '@widgets/index';
import { routes } from './routes';

import './App.scss';

export default function App() {

  return (
    <Layout>
      <BrowserRouter>
        <Head />
        {routes}
      </BrowserRouter>
    </Layout>
  )
}