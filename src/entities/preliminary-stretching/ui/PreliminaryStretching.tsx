import { Button, Card, Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { useAppDispatch } from '@store/hooks';
import { setStretching } from '@slices/stretching-slice';
import { columns, deleteStretching } from '../model/preliminary-stretching';
import { titleExerciseCheck, TableData, checkNumber } from '@utils/index';

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
                dataSource={[new TableData(`${index}`, checkNumber(stretching.attempts), checkNumber(stretching.times))]}
                pagination={false}
                size='small' />
        </Card>
    )
}
