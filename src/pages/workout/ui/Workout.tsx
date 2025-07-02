import { useSearchParams } from 'react-router-dom';

import './Workout.scss';

export function Workout() {
    const [searchParams] = useSearchParams();
    console.log(JSON.parse(decodeURIComponent(searchParams.get('workout'))))

    return (
        <div>Workout</div>
    )
}
