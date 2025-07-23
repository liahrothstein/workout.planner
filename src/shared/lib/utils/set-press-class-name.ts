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
        case 'Боковая планка':
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
        case 'Альпинист на скамейке':
            return ('press aClimberOnABench');
            break;
        case 'Складка со сгибанием ног к животу на горизонтальной скамье':
            return ('press aFoldWithTheLegsBentTowardsTheStomachOnAHorizontalBench');
            break;
        case 'Наклоны корпуса на гиперэкстензии':
            return ('press bodyTiltsOnHyperextension');
            break;
        case 'Классическая складка с подтяжкой':
            return ('press classicCreaseWithSuspender');
            break;
        case 'Кранчи на вытянутых руках':
            return ('press crunchesAtArmsLength');
            break;
        case 'Кранчи с поднятыми ногами':
            return ('press crunchesWithRaisedLegs');
            break;
        case 'Кранчи с поднятыми ногами и отягощением на выпрямленных руках Ситап':
            return ('press crunchesWithRaisedLegsAndWeightsOnStraightenedArmsSitup');
            break;
        case 'Кранчи с утяжелением':
            return ('press crunchesWithWeighting');
            break;
        case 'Динамическая боковая планка с отягощением':
            return ('press dynamicSideBarWithWeights');
            break;
        case 'Боковые наклоны лежа':
            return ('press lateralInclinesWhileLyingDown');
            break;
        case 'Подъем ног лёжа на горизонтальной скамье':
            return ('press legLiftWhileLyingOnAHorizontalBench');
            break;
        case 'Складка с подтягиванием ног':
            return ('press legTighteningCrease');
            break;
        case 'Подъем корпуса на фитболе':
            return ('press liftingTheBodyOnAFitball');
            break;
        case 'Подъем ног к корпусу с утяжелением складка':
            return ('press liftingTheLegsToTheBodyWithAWeightedFold');
            break;
        case 'Косые скручивания колено локоть велосипед':
            return ('press obliqueTwistingKneeElbowBicycle');
            break;
        case 'Косые скручивания колено локоть с лентой велосипед':
            return ('press obliqueTwistingKneeElbowWithTapeBike');
            break;
        case 'Русский твист с утяжелением':
            return ('press russianTwistWithWeighting');
            break;
        case 'Супермен':
            return ('press superman');
            break;
        case 'Касание пятки с подъемом ног':
            return ('press touchingTheHeelWithLiftingOfTheLegs');
            break;
        default:
            return ('press twistingWithWeighting');
            break;
    }
}