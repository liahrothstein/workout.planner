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
        case 'Тяга Рейдера в кроссовере':
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
        case 'Австралийские подтягивания обратным хватом':
            return ('back australianPullUpsWithReverseGrip');
            break;
        case 'Австралийские подтягивания обратным хватом со скрещенными ногами':
            return ('back australianReverseGripPullUpsWithCrossedLegs');
            break;
        case 'Тяга к поясу в кроссовере рукоятки сидя':
            return ('back beltPullInTheCrossoverArmsWhileSitting');
            break;
        case 'Приведение локтей в кроссовере сидя':
            return ('back bringingElbowsInACrossoverWhileSitting');
            break;
        case 'Приведение локтя в кроссовере с верхнего блока':
            return ('back bringingTheElbowIntoTheCrossoverFromTheUpperBlock');
            break;
        case 'Тяга к груди в кроссовере стоя':
            return ('back chestTractionInAStandingCrossover');
            break;
        case 'Тяга в кроссовере сидя на горизонтальной скамье':
            return ('back crossoverTractionWhileSittingOnAHorizontalBench');
            break;
        case 'Французский жим в кроссовере лёжа, канатной рукояткой, с нижнего блока':
            return ('back frenchBenchPressInTheCrossoverRopeGripFromTheLowerBlock');
            break;
        case 'Тяга гантелей к поясу на наклонной скамье':
            return ('back liftingDumbbellsToTheBeltOnAnInclinedBench');
            break;
        case 'Тяга одной рукой к поясу в Смите':
            return ('back oneHandedBeltPullInSmith');
            break;
        case 'Тяга блина к поясу в наклоне':
            return ('back pancakePullToTheBeltInATilt');
            break;
        case 'Тяга гантелей к поясу в наклоне, с упором головы о скамью':
            return ('back pullDumbbellsToTheBeltInATiltWithTheHeadRestingOnTheBench');
            break;
        case 'Подтягивания с опорой на одну ногу':
            return ('back pullUpsWithSupportOnOneLeg');
            break;
        case 'Шраги в Смите широким хватом за спину':
            return ('back scarsInSmithWithAWideBackGrip');
            break;
        case 'Тяга одной рукоятки в кроссовере в пол амплитуды с опорой на вертикальную скамью':
            return ('back theThrustOfOneHandleInTheCrossoverIsHalfTheAmplitudeSupportedByAVerticalBench');
            break;
        case 'Тяга горизонтального блока с небольшим наклоном корпуса вперед':
            return ('back thrustOfAHorizontalBlockWithASlightForwardTiltOfTheBody');
            break;
        case 'Тяга в кроссовере канатной рукоятки, с верхнего блока':
            return ('back tractionInTheCrossoverOfTheRopeHandleFromTheUpperBlock');
            break;
        case 'Тяга рукояток в кроссовере со сведением лопаток с опорой на вертикальную скамью':
            return ('back tractionOfTheHandlesInACrossoverWithTheReductionOfTheBladesSupportedOnAVerticalBench');
            break;
        case 'Тяга горизонтального блока рукоятки к поясу с опорой на колено':
            return ('back tractionOfTheHorizontalBlockOfTheHandleToTheBeltWithSupportOnTheKnee');
            break;
        case 'Тяга Рейдера в кроссовере рукояткой':
            return ('back tractionOfTheRaiderInTheCrossoverWithTheHandle');
            break;
        case 'Тяга канатной рукоятки к поясу в кроссовере с нижнего блока':
            return ('back tractionOfTheRopeHandleToTheBeltInTheCrossoverFromTheLowerBlock');
            break;
        case 'Тяга вертикального блока рукояткой':
            return ('back tractionOfTheVerticalBlockByTheHandle');
            break;
        default:
            return ('back verticalBlockThrustWithNarrowThreadedGrip');
            break;
    }
}