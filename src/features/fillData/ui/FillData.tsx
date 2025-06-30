import { Cascader } from 'antd';

import { AddExercise } from '@entities/add-exercise';
import { Cardio } from '@entities/cardio';
import { trainingTypeCascaderProps } from '../model/fill-data';

import './FillData.scss';

export function FillData() {

    return (
        <>
            <Cascader
                options={trainingTypeCascaderProps.options}
                placeholder={trainingTypeCascaderProps.placeholder} />
            <Cardio />
            <AddExercise />
        </>
    )
}
