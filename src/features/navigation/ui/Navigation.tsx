import { Link, useLocation } from 'react-router-dom';
import { Tabs, type TabsProps } from 'antd';

import { setClassName } from '../model/navigation';

import './Navigation.scss';

export function Navigation() {
    const location = useLocation();

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: ''
        },
        {
            key: '2',
            label: <Link to='/workout.planner/create'>Написать новый</Link>
        },
        {
            key: '3',
            label: <Link to='/workout.planner/edit'>Изменить существующий</Link>
        }
    ];

    return (
        <div className={setClassName(location.pathname)}>
            <Tabs
                centered={true}
                items={items}>
            </Tabs>
        </div>
    )
}
