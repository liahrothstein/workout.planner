import type { Workout } from '../../../shared/types/workout';

import './Cardio.scss';

interface CardioProps {
    workout: Workout
};

export function Cardio({ workout }: CardioProps) {

    return (
        <div className='cardio'>
            <p className="header">Кардио тренировка</p>
            <table className="exercise">
                <thead>
                    <tr>
                        <th>Вид</th>
                        <th>Время</th>
                        <th>Ритм</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{workout.cardioExercises.name}</td>
                        <td>{workout.cardioExercises.time}</td>
                        <td>{workout.cardioExercises.rhythm}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
