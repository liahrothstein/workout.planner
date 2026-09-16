import './MuscleGroups.scss';

import { groups } from '@constants/workout';
import { Checkbox } from 'antd';

import type { MuscleGroup } from '../../../shared/types/workout';
import { groupCheck } from '../model/muscle-groups';

interface MuscleGroupsProps {
  muscleGroups: MuscleGroup[];
}

export function MuscleGroups({ muscleGroups }: MuscleGroupsProps) {
  return (
    <div className="muscleGroups">
      {groups.map((group) => (
        <div className="group" key={group}>
          <Checkbox name={group} disabled={true} checked={groupCheck(muscleGroups, group)} />
          <label htmlFor={group} className="name">
            {group}
          </label>
        </div>
      ))}
    </div>
  );
}
