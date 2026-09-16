import './ExercisesTable.scss';

import { TableRow } from '@entities/table-row';

import type { ExerciseWithAttmepts } from '../../../shared/types/exercise';
import { attempts } from '../model/exercises-table';

interface ExercisesTableProps {
  exercises: ExerciseWithAttmepts[];
}

export function ExercisesTable({ exercises }: ExercisesTableProps) {
  return (
    <div className="exercisesTable">
      <p className="header">Основные упражнения</p>
      <table>
        <thead>
          <tr>
            <th>Упражнение</th>
            {attempts.map((num) => (
              <th key={num}>{`Подход ${num}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, i) => (
            <TableRow exercise={exercise} key={i + 5} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
