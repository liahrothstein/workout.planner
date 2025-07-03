import './TableCell.scss';

interface TableCellProps {
    times: number | null,
    weight: number | null
};

export function TableCell({ times, weight }: TableCellProps) {

    return (
        <td className='tableCell'>
            <p className="times">{(times !== null) ? times : ''}</p>
            <p className="weight">{(weight !== null) ? weight : ''}</p>
            <div className="void" />
            <div className="diagonal" />
        </td>
    )
}
