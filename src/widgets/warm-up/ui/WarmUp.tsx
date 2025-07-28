import { titleExerciseCheck } from '@utils/title-exercise-check';
import { setWarmUpClassName } from '@utils/set-warm-up-class-name';

import type { WarmUp } from '../../../shared/types/workout';

import './WarmUp.scss';

interface WarmUpProps {
    warmUp: WarmUp[]
};

export function WarmUp({ warmUp }: WarmUpProps) {

    return (
        <div className='warmUpTable'>
            <p className="header">Разминка</p>
            <table>
                <thead>
                    <tr>
                        <th>Упражнение</th>
                        <th>Подходы</th>
                        <th>Повторения</th>
                    </tr>
                </thead>
                <tbody>
                    {warmUp.map((element, i) => (
                        <tr key={i + 7}>
                            <td className={`exercise ${setWarmUpClassName(titleExerciseCheck(element.exercise))}`}>{titleExerciseCheck(element.exercise)}</td>
                            <td>{element.attempts}</td>
                            <td>{element.times}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
