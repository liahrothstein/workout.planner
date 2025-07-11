export function setBackClassName(exercise: string): string {
    switch (exercise) {
        case 'Тяга штанги в наклоне':
            return ('back barbellPullInTilt');
            break;
        case 'Тяга штанги к поясу на наклонной скамье':
            return ('back barbellPullToTheBeltOnAnInclinedBench');
            break;
        case 'Шраги со штангой':
            return ('back barbellScars');
            break;
        case 'Тяга к поясу в кроссовере узким хватом':
            return ('back beltPullInACrossoverWithANarrowGrip');
            break;
        case 'Тяга к поясу в Смите':
            return ('back beltPullInSmith');
            break;
        case 'Тяга гантелей в наклоне супинированный хват':
            return ('back bendingDumbbellsDeadliftSupinatedGrip');
            break;
        case 'Становая тяга':
            return ('back deadlift');
            break;
        case 'Тяга на прямых ногах':
            return ('back deadliftOnStraightLegs');
            break;
        case 'Тяга гантели к поясу':
            return ('back dumbbellPullToTheBelt');
            break;
        case 'Тяга гантелей в наклоне к поясу':
            return ('back dumbbellsDeadliftInATiltToTheWaist');
            break;
        case 'Тяга гантелей на наклонной скамье':
            return ('back dumbbellsDeadliftOnAnInclinedBench');
            break;
        case 'Тяга гантелей к корпусу в планке':
            return ('back dumbbellsDeadliftToTheBodyInThePlank');
            break;
        case 'Тяга гантелей к поясу (в наклоне)':
            return ('back dumbbellsDeadliftToTheWaistIncline');
            break;
        case 'Тяга горизонтального блока широкая рукоятка':
            return ('back horizontalBlockPullWideHandle');
            break;
        case 'Тяга горизонтального блока с наклоном корпуса канатная рукоять':
            return ('back horizontalBlockPullWithBodyTiltRopeHandle');
            break;
        case 'Тяга горизонтального блока узкая рукоять':
            return ('back horizontalBlockThrustNarrowHandle');
            break;
        case 'Тяга горизонтального блока узким хватом':
            return ('back horizontalBlockThrustWithANarrowGrip');
            break;
        case 'Гиперэкстензия':
            return ('back hyperextension');
            break;
        case 'Пуловер в кроссовере':
            return ('back pulloverInACrossover');
            break;
        case 'Пуловер в кроссовере широкая рукоятка':
            return ('back pulloverInTheCrossoverHasAWideHandle');
            break;
        case 'Тяга гантели к поясу с упора':
            return ('back pullTheDumbbellTowardsTheBeltFromTheStop');
            break;
        case 'Подтягивания классические':
            return ('back pullUpsAreClassic');
            break;
        case 'Подтягивания супинированным хватом':
            return ('back pullUpsWithASupinatedGrip');
            break;
        case 'Подтягивания с отягощением':
            return ('back pullUpsWithWeights');
            break;
        case 'Румынская тяга с гантелей':
            return ('back romanianDumbbellDeadlift');
            break;
        case 'Румынская тяга':
            return ('back romanianThrust');
            break;
        case 'Шраги с гантелями сидя':
            return ('back scarsWithDumbbellsWhileSitting');
            break;
        case 'Шраги с гантелями сидя с упором о скамью':
            return ('back scarsWithDumbbellsWhileSittingWithEmphasisOnABench');
            break;
        case 'Шраги с гантелями стоя':
            return ('back scarsWithDumbbellsWhileStanding');
            break;
        case 'Разведение гантелей в стороны лёжа на наклонной скамье':
            return ('back spreadingDumbbellsToTheSidesWhileLyingOnAnInclinedBench');
            break;
        case 'Тяга Т-грифа в тренажёре':
            return ('back TBarDeadliftInTheTrainer');
            break;
        case 'Шраги в Смите':
            return ('back theScarsInSmith');
            break;
        case 'Тяга штанги в наклоне параллельно полу':
            return ('back theThrustOfTheBarIsTiltedParallelToTheFloor');
            break;
        case 'Тяга вертикального блока широким':
            return ('back theThrustOfTheVerticalBlockIsWide');
            break;
        case 'Тяга горизонтального блока в кроссовере':
            return ('back thrustOfTheHorizontalBlockInTheCrossover');
            break;
        case 'Тяга Т-грифа':
            return ('back TNeckThrust');
            break;
        case 'Тяга горизонтального блока одной рукоятки':
            return ('back tractionOfTheHorizontalBlockOfOneHandle');
            break;
        case 'Тяга горизонтального блока канатной рукояткой':
            return ('back tractionOfTheHorizontalBlockWithARopeHandle');
            break;
        case 'Тяга вертикального блока супинированным хватом':
            return ('back tractionOfTheVerticalBlockWithASupinatedGrip');
            break;
        case 'Тяга к корпусу в кроссовере канатная рукоятка':
            return ('back tractionToTheBodyInTheCrossoverRopeHandle');
            break;
        case 'Тяга вертикального блока за голову':
            return ('back verticalBlockHeadPull');
            break;
        case 'Тяга вертикального блока одной рукояткой':
            return ('back verticalBlockPullWithOneHandle');
            break;
        case 'Тяга вертикального блока':
            return ('back verticalBlockThrust');
            break;
        case 'Тяга вертикального блока узкая рукоятка':
            return ('back verticalBlockThrustNarrowHandle');
            break;
        default:
            return ('back verticalBlockThrustWithNarrowThreadedGrip');
            break;
    }
}