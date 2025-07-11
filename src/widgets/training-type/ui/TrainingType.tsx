import type { Workout } from '../../../shared/types/workout';

import './TrainingType.scss';

interface TrainingTypeProps {
    workout: Workout
};

export function TrainingType({ workout }: TrainingTypeProps) {

    return (
        <div className="trainingType">
            <p className="header">Вид тренировки:</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p className="name">{`${workout.trainingType} №${(workout.workoutNumber !== null) ? workout.workoutNumber : ''}`}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
