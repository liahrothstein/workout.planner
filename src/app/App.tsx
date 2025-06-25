import { BrowserRouter } from 'react-router-dom';
import { Layout, Tabs } from 'antd';

import { routes } from './routes';

import './App.scss';

export default function App() {
  const { Header } = Layout;

  return (
    <Layout>
      <Header>
        <Tabs />
      </Header>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </Layout>
  )
}