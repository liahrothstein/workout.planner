import { Button, Card, Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { useAppDispatch } from '@store/hooks';
import { setCardio } from '@slices/cardio-slice';
import { columns, deleteCardioExercise, generateDataSource } from '../model/preliminary-cardio';

import type { CardioExercise } from '../../../shared/types/workout';

import './PreliminaryCardio.scss';

interface PreliminaryCardioProps {
    cardio: CardioExercise,
    index: number,
    array: CardioExercise[]
};

export function PreliminaryCardio({ cardio, index, array }: PreliminaryCardioProps) {
    const dispatch = useAppDispatch();

    return (
        <Card
            title={cardio.name}
            extra={<Button onClick={() => { dispatch(setCardio(deleteCardioExercise(index, array))) }} icon={<DeleteOutlined />} color='danger' variant='filled' />}>
            <Table
                columns={columns}
                dataSource={generateDataSource(cardio, index)}
                pagination={false}
                size='small' />
        </Card>
    )
}
