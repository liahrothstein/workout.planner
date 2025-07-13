import { EyeOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

import { setClassName } from '../../../lib/utils/set-class-name';

import './Preview.scss';

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
