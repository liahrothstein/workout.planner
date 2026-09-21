import './GenerateLink.scss';

import { CopyOutlined } from '@ant-design/icons';
import { useAppSelector } from '@store/hooks';
import { Button, Input, Typography } from 'antd';
import { useEffect, useState } from 'react';

import type { Workout } from '../../../shared/types/workout';
import { checkChangesWorkoutData, generateParams } from '../model/generate-link';

export function GenerateLink() {
  const workout: Workout = useAppSelector((state) => state.workout);

  const [link, setLink] = useState<string>('');

  const { Text } = Typography;

  useEffect(() => {
    checkChangesWorkoutData(workout, setLink, generateParams(workout));
  }, [workout]);

  return (
    <div className="generateLink">
      <Text keyboard={true}>Ссылка на план</Text>
      <Input className="link" placeholder="https:// ..." value={link} />
      <Button
        icon={<CopyOutlined />}
        color="yellow"
        variant="solid"
        disabled={link === ''}
        onClick={() => {
          navigator.clipboard.writeText(link);
        }}
      >
        Скопировать
      </Button>
    </div>
  );
}
