import type { CardioCascaderProps, CardioOption } from "../../../shared/types/cascader";

const cardioOptions: CardioOption[] = [
    {
        value: 'Эллипс',
        label: 'Эллипс'
    },
    {
        value: 'Беговая дорожка',
        label: 'Беговая дорожка'
    },
    {
        value: 'Велотренажёр',
        label: 'Велотренажёр'
    }
];

export const cardioCascaderProps: CardioCascaderProps = {
    options: cardioOptions,
    placeholder: 'Кардиотренировка'
}