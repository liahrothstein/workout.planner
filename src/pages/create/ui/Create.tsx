import { Form } from 'antd';

import { FillData, GenerateLink } from '../../../features';

import './Create.scss';

export function Create() {

    return (
        <Form className='create'>
            <FillData />
            <GenerateLink />
        </Form>
    )
}
