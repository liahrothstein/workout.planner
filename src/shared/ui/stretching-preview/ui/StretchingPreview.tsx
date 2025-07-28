import { Typography } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

import { setStretchingClassName } from '@utils/set-stretching-class-name';

import './StretchingPreview.scss';

interface StretchingPreviewProps {
    exercise: string[] | null | undefined
};

export function StretchingPreview({ exercise }: StretchingPreviewProps) {
    const { Text } = Typography;

    return (
        <div className='stretchingPreview'>
            {((exercise === null) || (exercise === undefined)) ?
                <>
                    <EyeOutlined />
                    <Text>Предпросмотр</Text>
                </> :
                <img alt="preview" className={setStretchingClassName(exercise[0])} />}
        </div>
    )
}
