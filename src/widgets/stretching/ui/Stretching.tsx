import { setStretchingClassName } from '@utils/set-stretching-class-name';
import { titleExerciseCheck } from '@utils/title-exercise-check';

import type { Stretching } from '../../../shared/types/workout';

import './Stretching.scss';

interface StretchingProps {
    stretching: Stretching[]
};

export function Stretching({ stretching }: StretchingProps) {

    return (
        <div className='stretchingTable'>
            <p className="header">Растяжка</p>
            <table>
                <thead>
                    <tr>
                        <th>Упражнение</th>
                        <th>Подходы</th>
                        <th>Повторения</th>
                    </tr>
                </thead>
                <tbody>
                    {stretching.map((element, i) => (
                        <tr key={i + 7}>
                            <td className={`exercise ${setStretchingClassName(titleExerciseCheck(element.exercise))}`}>{titleExerciseCheck(element.exercise)}</td>
                            <td>{element.attempts}</td>
                            <td>{element.times}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
