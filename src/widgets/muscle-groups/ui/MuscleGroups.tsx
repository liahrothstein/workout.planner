import { muscleGroups } from '@constants/workout';

import { groupCheck } from '../model/muscle-groups';

import type { Workout } from '../../../shared/types/workout';

import './MuscleGroups.scss';

interface MuscleGroupsProps {
    workout: Workout
};

export function MuscleGroups({ workout }: MuscleGroupsProps) {

    return (
        <div className='muscleGroups'>
            {muscleGroups.map((group) => (
                <div className="group" key={group}>
                    <input
                        type="checkbox"
                        name={`${group}`}
                        disabled={true}
                        checked={groupCheck(workout, group)} />
                    <label
                        htmlFor={`${group}`}
                        className="name">{group}</label>
                </div>
            ))}
        </div>
    )
}
