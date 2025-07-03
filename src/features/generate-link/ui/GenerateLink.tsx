import { useEffect, useState } from 'react';
import { Button, Input, Typography } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

import { useAppSelector } from '@store/hooks';
import { checkChangesWorkoutData, generateParams } from '../model/generate-link';

import type { Workout } from '../../../shared/types/workout';

import './GenerateLink.scss';

export function GenerateLink() {
    const workout: Workout = useAppSelector((state) => (state.workout));

    const [link, setLink] = useState<string>('');

    const { Text } = Typography;

    useEffect(() => {
        checkChangesWorkoutData(workout, setLink, generateParams(workout));
    }, [workout]);

    return (
        <div className='generateLink'>
            <Text keyboard={true}>Ссылка на план</Text>
            <Input
                className='link'
                placeholder='https:// ...'
                value={link} />
            <Button
                icon={<CopyOutlined />}
                color='primary'
                variant='solid'
                onClick={() => { navigator.clipboard.writeText(link) }}>Скопировать</Button>
        </div>
    )
}
