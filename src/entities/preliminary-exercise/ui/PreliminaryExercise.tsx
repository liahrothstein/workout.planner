import { Button, Card, Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { useAppDispatch } from '@store/hooks';
import { editExercise } from '@slices/exercise-slice';
import { columns, deleteExercise, generateDataSource } from '../model/preliminary-exercise';
import { titleExerciseCheck } from '@utils/title-exercise-check';

import type { Attempt } from '../../../shared/types/workout';
import type { ExerciseWithAttmepts } from '../../../shared/types/exercise';

import './PreliminaryExercise.scss';

interface PreliminaryExerciseProps {
    attempts: Attempt[],
    exercise: string[] | null | undefined,
    index: number,
    exercises: ExerciseWithAttmepts[]
};

export function PreliminaryExercise({ attempts, exercise, index, exercises }: PreliminaryExerciseProps) {
    const dispatch = useAppDispatch();

    return (
        <Card
            title={titleExerciseCheck(exercise)}
            extra={<Button onClick={() => { dispatch(editExercise(deleteExercise(index, exercises))) }} icon={<DeleteOutlined />} color='danger' variant='filled' />}>
            <Table
                columns={columns}
                dataSource={generateDataSource(attempts)}
                pagination={false}
                size='small'
            />
        </Card>
    )
}
