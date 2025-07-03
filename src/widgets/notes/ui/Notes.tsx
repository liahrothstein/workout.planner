import type { Workout } from '../../../shared/types/workout';

import './Notes.scss';

interface NotesProps {
    workout: Workout
};

export function Notes({ workout }: NotesProps) {

    return (
        <div className='notes'>
            <p className="header">Заметки</p>
            <p>{workout.notes}</p>
        </div>
    )
}
