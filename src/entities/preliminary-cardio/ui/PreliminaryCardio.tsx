import './PreliminaryCardio.scss';

import { DeleteOutlined } from '@ant-design/icons';
import { setCardio } from '@slices/cardio-slice';
import { useAppDispatch } from '@store/hooks';
import { Button, Card, Table } from 'antd';

import type { CardioExercise } from '../../../shared/types/workout';
import { columns, deleteCardioExercise } from '../model/preliminary-cardio';

interface PreliminaryCardioProps {
  cardio: CardioExercise;
  index: number;
  array: CardioExercise[];
}

export function PreliminaryCardio({ cardio, index, array }: PreliminaryCardioProps) {
  const dispatch = useAppDispatch();

  return (
    <Card
      title={cardio.name}
      extra={
        <Button
          onClick={() => {
            dispatch(setCardio(deleteCardioExercise(index, array)));
          }}
          icon={<DeleteOutlined />}
          color="danger"
          variant="filled"
        />
      }
    >
      <Table
        columns={columns}
        dataSource={[{ key: `${index}`, time: cardio.time, rhytm: cardio.rhythm }]}
        pagination={false}
        size="small"
      />
    </Card>
  );
}
