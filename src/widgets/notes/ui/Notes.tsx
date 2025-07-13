import './Notes.scss';

interface NotesProps {
    notes: string
};

export function Notes({ notes }: NotesProps) {

    return (
        <div className='notes'>
            <p className="header">Заметки</p>
            <p>{notes}</p>
        </div>
    )
}
