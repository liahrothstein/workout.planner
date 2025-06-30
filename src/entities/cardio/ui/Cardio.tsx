import { Cascader, InputNumber, TimePicker } from 'antd';

import { cardioCascaderProps } from '../model/cardio';

import './Cardio.scss';

export function Cardio() {

    return (
        <div className="cardio">
            <Cascader
                options={cardioCascaderProps.options}
                placeholder={cardioCascaderProps.placeholder} />
            <TimePicker
                format='mm:ss'
                placeholder='Время' />
            <InputNumber
                className='rhytm'
                min={0.1}
                max={100}
                placeholder='Ритм' />
        </div>
    )
}
