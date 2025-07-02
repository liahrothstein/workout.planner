import { Form } from 'antd';

import { FillData } from '@features/fill-data';
import { GenerateLink } from '@features/generate-link';

import './Create.scss';

export function Create() {

    return (
        <Form>
            <FillData />
            <GenerateLink />
        </Form>
    )
}
