import { useSearchParams } from 'react-router-dom';
import LZString from 'lz-string';

import './Workout.scss';

export function Workout() {
    const [searchParams] = useSearchParams();
    console.log(JSON.parse(LZString.decompressFromEncodedURIComponent(searchParams.get('workout'))))

    return (
        <div>Workout</div>
    )
}
