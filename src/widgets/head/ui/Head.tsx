import { Layout } from 'antd';

import { Navigation } from '@features/index';

import './Head.scss';

export function Head() {
    const { Header } = Layout;

    return (
        <Header>
            <Navigation />
        </Header>
    )
}
