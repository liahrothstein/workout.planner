import { Cascader, InputNumber, TimePicker } from 'antd';

import { Exercise } from '@entities/exercise';
import { cardioCascaderProps, trainingTypeCascaderProps } from '../model/fill-data';

import './FillData.scss';

export function FillData() {

    return (
        <>
            <Cascader
                options={trainingTypeCascaderProps.options}
                placeholder={trainingTypeCascaderProps.placeholder} />
            <Exercise />
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
        </>
    )
}
