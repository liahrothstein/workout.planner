import { TableCell } from '@components/table-cell';

import type { ExerciseWithAttmepts } from '../../../shared/types/exercise';

import './TableRow.scss';

interface TableRowProps {
    exercise: ExerciseWithAttmepts
};

export function TableRow({ exercise }: TableRowProps) {

    return (
        <tr className='tableRow'>
            <td className="exercise">{((exercise.exercise !== null) && (exercise.exercise !== undefined)) ? exercise.exercise[1] : ''}</td>
            {exercise.attempts.map((attempt, i) => (
                <TableCell
                    times={attempt.times}
                    weight={attempt.weight}
                    key={i + 7} />
            ))}
        </tr>
    )
}
