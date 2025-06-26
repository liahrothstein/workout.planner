export function setClassName(path: string): string {
    switch (path) {
        case '/workout.planner/create':
            return ('navigation create');
        case '/workout.planner/edit':
            return ('navigation edit');
        default:
            return ('navigation')
    }
}