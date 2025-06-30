import { Button, Card, Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { columns, generateDataSource, titleCheck } from '../model/preliminary-exercise';

import type { Attempt } from '../../../shared/types/workout';

import './PreliminaryExercise.scss';

interface PreliminaryExerciseProps {
    attempts: Attempt[],
    exercise: string[] | null | undefined,
    index: number
};

export function PreliminaryExercise({ attempts, exercise, index }: PreliminaryExerciseProps) {

    return (
        <Card
            title={titleCheck(exercise)}
            extra={<Button icon={<DeleteOutlined />} />}>
            <Table
                columns={columns}
                dataSource={generateDataSource(attempts)}
                pagination={false}
                size='small'
            />
        </Card>
    )
}
