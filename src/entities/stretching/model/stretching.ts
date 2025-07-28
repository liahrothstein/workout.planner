import { stretching } from "@constants/stretching";

import type { StretchingCascaderProps, StretchingOption } from "../../../shared/types/cascader";

function stretchingArray(array: string[]) {
    let tempArray = new Array();

    array.forEach((e) => {
        tempArray.push({
            value: e,
            label: e
        })
    });

    return (tempArray)
}

const stretchingOptions: StretchingOption[] = stretchingArray(stretching);

export const stretchingCascaderProps: StretchingCascaderProps = {
    options: stretchingOptions,
    placeholder: 'Упражнение'
};