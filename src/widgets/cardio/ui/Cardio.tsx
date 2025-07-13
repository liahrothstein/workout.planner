import type { CardioExercise } from '../../../shared/types/workout';

import './Cardio.scss';

interface CardioProps {
    cardioExercises: CardioExercise
};

export function Cardio({ cardioExercises }: CardioProps) {

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
                        <td>{cardioExercises.name}</td>
                        <td>{cardioExercises.time}</td>
                        <td>{cardioExercises.rhythm}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
