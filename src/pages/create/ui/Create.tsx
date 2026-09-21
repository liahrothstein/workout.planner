import './Create.scss';

import { FillData, GenerateLink } from '@features/index';
import { Form } from 'antd';

export function Create() {
  return (
    <Form className="create">
      <FillData />
      <GenerateLink />
    </Form>
  );
}
