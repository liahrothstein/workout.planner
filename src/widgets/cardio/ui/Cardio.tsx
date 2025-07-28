import type { CardioExercise } from '../../../shared/types/workout';

import './Cardio.scss';

interface CardioProps {
    cardioExercises: CardioExercise[]
};

export function Cardio({ cardioExercises }: CardioProps) {

    return (
        <div className='cardioTable'>
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
                    {(cardioExercises.length === 0) && <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>}
                    {cardioExercises.map((cardio) => (
                        <tr key={cardio.name}>
                            <td>{cardio.name}</td>
                            <td>{cardio.time}</td>
                            <td>{cardio.rhythm}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
