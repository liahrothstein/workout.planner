import { Typography } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

import { setWarmUpClassName } from '@utils/set-warm-up-class-name';

import './WarmUpPreview.scss';

interface WarmUpPreviewProps {
    exercise: string[] | null | undefined
};

export function WarmUpPreview({ exercise }: WarmUpPreviewProps) {
    const { Text } = Typography;

    return (
        <div className='warmUpPreview'>
            {((exercise === null) || (exercise === undefined)) ?
                <>
                    <EyeOutlined />
                    <Text>Предпросмотр</Text>
                </> :
                <img alt="preview" className={setWarmUpClassName(exercise[0])} />}
        </div>
    )
}
