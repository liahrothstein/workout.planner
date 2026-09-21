import './PreliminaryExercise.scss';

import { DeleteOutlined } from '@ant-design/icons';
import { editExercise } from '@slices/exercise-slice';
import { useAppDispatch } from '@store/hooks';
import { Attempt, titleExerciseCheck } from '@utils/index';
import { Button, Card, Table } from 'antd';

import type { ExerciseWithAttmepts } from '../../../shared/types/exercise';
import { columns, deleteExercise, generateDataSource } from '../model/preliminary-exercise';

interface PreliminaryExerciseProps {
  attempts: Attempt[];
  exercise: string[] | null | undefined;
  index: number;
  exercises: ExerciseWithAttmepts[];
}

export function PreliminaryExercise({
  attempts,
  exercise,
  index,
  exercises,
}: PreliminaryExerciseProps) {
  const dispatch = useAppDispatch();

  return (
    <Card
      title={titleExerciseCheck(exercise)}
      extra={
        <Button
          onClick={() => {
            dispatch(editExercise(deleteExercise(index, exercises)));
          }}
          icon={<DeleteOutlined />}
          color="danger"
          variant="filled"
        />
      }
    >
      <Table
        columns={columns}
        dataSource={generateDataSource(attempts)}
        pagination={false}
        size="small"
      />
    </Card>
  );
}
