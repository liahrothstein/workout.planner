export function setPressClassName(exercise: string): string {
    switch (exercise) {
        case 'Ситап с отягощением лёжа':
            return ('press benchPressup');
            break;
        case 'Наклоны корпуса с гантелей':
            return ('press bodyBendsWithDumbbell');
            break;
        case 'Повороты корпуса сидя':
            return ('press bodyRotationsWhileSitting');
            break;
        case 'Повороты корпуса с отягощением':
            return ('press bodyRotationsWithWeights');
            break;
        case 'Наклоны корпуса в сторону в кроссовере':
            return ('press bodyTiltsToTheSideInTheCrossover');
            break;
        case 'Повороты корпуса сидя с руками за головой':
            return ('press bodyTurnsWhileSittingWithHandsBehindHead');
            break;
        case 'Кранчи':
            return ('press crunches');
            break;
        case 'Кранчи на скамье':
            return ('press crunchesOnTheBench');
            break;
        case 'Отклонение таза в сторону в висе':
            return ('press deviationOfThePelvisToTheSideInTheTemple');
            break;
        case 'Подъем ног в висе (перекладина)':
            return ('press legLiftAtTheTempleCrossbar');
            break;
        case 'Подъем ног лежа':
            return ('press legLiftingWhileLyingDown');
            break;
        case 'Подъем ног лежа на наклонной скамье':
            return ('press legLiftingWhileLyingOnAnInclinedBench');
            break;
        case 'Подъемы ног в висе':
            return ('press legLiftsAtTheTemple');
            break;
        case 'Подъем ног со сгибанием в висе':
            return ('press legLiftWithBendingAtTheTemple');
            break;
        case 'Подъем корпуса лежа на боку':
            return ('press liftingTheBodyWhileLyingOnItsSide');
            break;
        case 'Подъем таза лежа на боку с упором на локоть':
            return ('press liftingThePelvisWhileLyingOnYourSideWithAnEmphasisOnTheElbow');
            break;
        case 'Молитва':
            return ('press prayer');
            break;
        case 'Ролик для пресса':
            return ('press pressRoller');
            break;
        case 'Вращение ног в висе':
            return ('press rotationOfTheLegsInTheTemple');
            break;
        case 'Вращения корпуса с грифом':
            return ('press rotationsOfTheBodyWithAFingerboard');
            break;
        case 'Ножницы':
            return ('press scissors');
            break;
        case 'Ситап на скамье':
            return ('press seatupOnTheBench');
            break;
        case 'Планка с попеременным касанием плеча':
            return ('press shoulderAlternateTouchBar');
            break;
        case 'Подъемы прямых  ног в висе':
            return ('press straightLegLiftsAtTheTemple');
            break;
        case 'Планка':
            return ('press theBar');
            break;
        case 'Планка с отведением ноги в сторону':
            return ('press theBarWithTheFootPointingToTheSide');
            break;
        default:
            return ('press twistingWithWeighting');
            break;
    }
}