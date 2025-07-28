import { Button, Card, Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { useAppDispatch } from '@store/hooks';
import { titleExerciseCheck } from '@utils/title-exercise-check';
import { setStretching } from '@slices/stretching-slice';
import { columns, deleteStretching, generateDataSource } from '../model/preliminary-stretching';

import type { Stretching } from '../../../shared/types/workout';

import './PreliminaryStretching.scss';

interface PreliminaryStretchingProps {
    stretching: Stretching,
    index: number,
    array: Stretching[]
};

export function PreliminaryStretching({ stretching, index, array }: PreliminaryStretchingProps) {
    const dispatch = useAppDispatch();

    return (
        <Card
            title={titleExerciseCheck(stretching.exercise)}
            extra={<Button onClick={() => { dispatch(setStretching(deleteStretching(index, array))) }} icon={<DeleteOutlined />} color='danger' variant='filled' />}>
            <Table
                columns={columns}
                dataSource={generateDataSource(stretching, index)}
                pagination={false}
                size='small' />
        </Card>
    )
}
