import { Button, Card, Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { columns, deleteWarmUp } from '../model/preliminary-warm-up';
import { useAppDispatch } from '@store/hooks';
import { setWarmUp } from '@slices/warm-up-slice';
import { titleExerciseCheck, TableData, checkNumber } from '@utils/index';

import type { WarmUp } from '../../../shared/types/workout';

import './PreliminaryWarmUp.scss';

interface PreliminaryWarmUpProps {
    warmUp: WarmUp,
    index: number,
    array: WarmUp[]
};

export function PreliminaryWarmUp({ warmUp, index, array }: PreliminaryWarmUpProps) {
    const dispatch = useAppDispatch();

    return (
        <Card
            title={titleExerciseCheck(warmUp.exercise)}
            extra={<Button onClick={() => { dispatch(setWarmUp(deleteWarmUp(index, array))) }} icon={<DeleteOutlined />} color='danger' variant='filled' />}>
            <Table
                columns={columns}
                dataSource={[new TableData(`${index}`, checkNumber(warmUp.attempts), checkNumber(warmUp.times))]}
                pagination={false}
                size='small' />
        </Card>
    )
}
