import { warmUp } from "@constants/warm-up";
import { CascaderOption } from "@utils/cascader-option";

import type { CascaderProps } from "../../../shared/types/cascader";

function warmUpArray(array: string[]) {
    let tempArray = new Array();

    array.forEach((e) => {
        tempArray.push(new CascaderOption(e, e))
    });

    return (tempArray)
}

const warmUpOptions: CascaderOption[] = warmUpArray(warmUp);

export const warmUpCascaderProps: CascaderProps = {
    options: warmUpOptions,
    placeholder: 'Упражнение'
};