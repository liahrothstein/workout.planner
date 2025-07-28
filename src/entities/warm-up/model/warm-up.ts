import { warmUp } from "@constants/warm-up";

import type { WarmUpCascaderProps, WarmUpOption } from "../../../shared/types/cascader";

function warmUpArray(array: string[]) {
    let tempArray = new Array();

    array.forEach((e) => {
        tempArray.push({
            value: e,
            label: e
        })
    });

    return (tempArray)
}

const warmUpOptions: WarmUpOption[] = warmUpArray(warmUp);

export const warmUpCascaderProps: WarmUpCascaderProps = {
    options: warmUpOptions,
    placeholder: 'Упражнение'
};