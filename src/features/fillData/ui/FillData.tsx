import { Cascader } from 'antd';

import { Exercise } from '@entities/exercise';
import { trainingTypeCascaderProps } from '../model/fill-data';

import './FillData.scss';

export function FillData() {

    return (
        <>
            <Cascader
                options={trainingTypeCascaderProps.options}
                placeholder={trainingTypeCascaderProps.placeholder} />
            <Exercise />
            {/* <Cascader
                // options={trainingTypeCascaderProps.options}
                // placeholder={trainingTypeCascaderProps.placeholder} /> */}
        </>
    )
}
