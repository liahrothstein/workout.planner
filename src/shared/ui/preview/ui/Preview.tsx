import { EyeOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

import './Preview.scss';
import { setClassName } from '@utils/set-class-name';

interface PreviewProps {
    exercise: string[] | null | undefined
};

export function Preview({ exercise }: PreviewProps) {
    const { Text } = Typography;

    return (
        <div className="preview">
            {((exercise === null) || (exercise === undefined)) ?
                <>
                    <EyeOutlined />
                    <Text>Предпросмотр</Text>
                </> :
                <img alt="preview" className={setClassName(exercise[1], exercise[0])} />}
        </div>
    )
}
