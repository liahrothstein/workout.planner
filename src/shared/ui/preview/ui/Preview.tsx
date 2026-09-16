import './Preview.scss';

import { EyeOutlined } from '@ant-design/icons';
import { setClassName } from '@utils/set-class-name';
import { Typography } from 'antd';

interface PreviewProps {
  exercise: string[] | null | undefined;
}

export function Preview({ exercise }: PreviewProps) {
  const { Text } = Typography;

  return (
    <div className="preview">
      {exercise === null || exercise === undefined ? (
        <>
          <EyeOutlined />
          <Text>Предпросмотр</Text>
        </>
      ) : (
        <img alt="preview" className={setClassName(exercise[1], exercise[0])} />
      )}
    </div>
  );
}
