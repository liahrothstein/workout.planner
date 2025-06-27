import { Link, useLocation } from 'react-router-dom';
import { Button, Tabs, type TabsProps } from 'antd';

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
            label:
                <Link to='/workout.planner/create'>
                    <Button variant='filled' color='blue'>
                        Написать новый
                    </Button>
                </Link>
        },
        {
            key: '3',
            label:
                <Link to='/workout.planner/edit'>
                    <Button variant='filled' color='purple'>
                        Изменить существующий
                    </Button>
                </Link>
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
