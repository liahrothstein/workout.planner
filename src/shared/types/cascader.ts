import type { Dispatch, SetStateAction } from 'react';
import type { CascaderOption } from '@utils/cascader-option';

export interface CascaderProps {
    options: CascaderOption[],
    placeholder: string
}

export type SetTimes = Dispatch<SetStateAction<number | null>>;
export type SetWeight = Dispatch<SetStateAction<number | null>>;