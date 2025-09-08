import { stretching } from "@constants/stretching";
import { CascaderOption } from "@utils/cascader-option";

import type { CascaderProps } from "../../../shared/types/cascader";

function stretchingArray(array: string[]) {
    let tempArray = new Array();

    array.forEach((e) => {
        tempArray.push(new CascaderOption(e, e))
    });

    return (tempArray)
}

const stretchingOptions: CascaderOption[] = stretchingArray(stretching);

export const stretchingCascaderProps: CascaderProps = {
    options: stretchingOptions,
    placeholder: 'Упражнение'
};