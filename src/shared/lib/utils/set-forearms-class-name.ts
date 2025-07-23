export function setForearmsClassName(exercise: string): string {
    switch (exercise) {
        case 'Сгибание на предплечья':
            return ('forearms flexionOnTheForearms');
            break;
        case 'Сгибание на предплечья (сидя)':
            return ('forearms flexionOnTheForearmsSitting');
            break;
        case 'Сгибание на предплечья сидя пронированный хват':
            return ('forearms flexionOnTheForearmsWhileSittingWithAPiercedGrip');
            break;
        default:
            return ('forearms forearmLiftsWithAThreadedGrip')
    }
}