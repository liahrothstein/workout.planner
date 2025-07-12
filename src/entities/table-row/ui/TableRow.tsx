import { TableCell } from '../../../shared/ui/table-cell';

import { setClassName } from '../../../shared/lib/utils/set-class-name';

import type { ExerciseWithAttmepts } from '../../../shared/types/exercise';

import './TableRow.scss';

interface TableRowProps {
    exercise: ExerciseWithAttmepts
};

export function TableRow({ exercise }: TableRowProps) {

    return (
        <tr className='tableRow'>
            {((exercise.exercise !== null) && (exercise.exercise !== undefined)) && <td className={`exercise ${setClassName(exercise.exercise[1], exercise.exercise[0])}`}>{exercise.exercise[1]}</td>}
            {exercise.attempts.map((attempt, i) => (
                <TableCell
                    times={attempt.times}
                    weight={attempt.weight}
                    key={i + 7} />
            ))}
        </tr>
    )
}
