import { Checkbox } from 'antd';

import { groups } from '@constants/workout';

import { groupCheck } from '../model/muscle-groups';

import type { MuscleGroup } from '../../../shared/types/workout';

import './MuscleGroups.scss';

interface MuscleGroupsProps {
    muscleGroups: MuscleGroup[]
};

export function MuscleGroups({ muscleGroups }: MuscleGroupsProps) {

    return (
        <div className='muscleGroups'>
            {groups.map((group) => (
                <div className="group" key={group}>
                    <Checkbox
                        name={group}
                        disabled={true}
                        checked={groupCheck(muscleGroups, group)} />
                    <label
                        htmlFor={group}
                        className="name">{group}</label>
                </div>
            ))}
        </div>
    )
}
