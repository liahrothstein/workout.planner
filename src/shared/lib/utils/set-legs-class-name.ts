export function setLegsClassName(exercise: string): string {
    switch (exercise) {
        case 'Выпады назад с гантелями':
            return ('legs backLungesWithDumbbells');
            break;
        case 'Выпады со штангой':
            return ('legs barbellLunges');
            break;
        case 'Приседание со штангой':
            return ('legs barbellSquat');
            break;
        case 'Жим одной ногой в тренажёре':
            return ('legs benchPressWithOneFootInTheTrainer');
            break;
        case 'Сгибание ноги в тренажёре':
            return ('legs bendingTheLegInTheTrainer');
            break;
        case 'Сгибание ног в тренажёре':
            return ('legs bendingTheLegsInTheTrainer');
            break;
        case 'Сгибание ног лёжа с гантелей':
            return ('legs bendingYourLegsWhileLyingDownWithDumbbell');
            break;
        case 'Приведение ноги в кроссовере':
            return ('legs bringingTheFootIntoTheCrossover');
            break;
        case 'Сведение ног в тренажёре':
            return ('legs bringingYourLegsTogetherInTheTrainer');
            break;
        case 'Болгарские выпады с гантелями':
            return ('legs bulgarianLungesWithDumbbells');
            break;
        case 'Бёрпи':
            return ('legs burpee');
            break;
        case 'Ягодичный мостик от скамьи без веса':
            return ('legs buttockBridgeFromBenchWithoutWeight');
            break;
        case 'Выпады с гантелями':
            return ('legs dumbbellsLunges');
            break;
        case 'Гакк приседания':
            return ('legs gakkSquats');
            break;
        case 'Ягодичный мостик со штангой':
            return ('legs gluteBridgeWithBarbell');
            break;
        case 'Гутен Морген (стоя)':
            return ('legs gutenMorgenStanding');
            break;
        case 'Отведение колена в сторону лёжа с резинкой':
            return ('legs kneeExtensionToTheSideWhileLyingDownWithAnElasticBand');
            break;
        case 'Боковые зашагивания':
            return ('legs lateralPacing');
            break;
        case 'Разгибание ног в тренажёре':
            return ('legs legExtensionInTheTrainer');
            break;
        case 'Жим ногами в тренажёре (узкий)':
            return ('legs legPressInTheTrainerNarrow');
            break;
        case 'Жим ногами в тренажёре (новый)':
            return ('legs legPressInTheTrainerNew');
            break;
        case 'Жим ногами в тренажёре (широкий)':
            return ('legs legPressInTheTrainerWide');
            break;
        case 'Отведение ног в тренажёре':
            return ('legs legSpreadingInTheTrainer');
            break;
        case 'Выпады с подъема':
            return ('legs lungesFromTheRise');
            break;
        case 'Выпады с места':
            return ('legs lungesFromTheSpot');
            break;
        case 'Выпады с гантелями на месте':
            return ('legs lungesWithDumbbellsInPlace');
            break;
        case 'Отведение ноги в сторону в кроссовере':
            return ('legs movingTheLegToTheSideInACrossover');
            break;
        case 'Отведение ноги в сторону лежа с резинкой':
            return ('legs movingTheLegToTheSideWhileLyingDownWithAnElasticBand');
            break;
        case 'Зашагивание с гантелями':
            return ('legs pacingWithDumbbells');
            break;
        case 'Отведение ноги назад в кроссовере':
            return ('legs pullingTheLegBackInTheCrossover');
            break;
        case 'Отведение ноги назад стоя на четвереньках':
            return ('legs pullingTheLegBackWhileStandingOnAllFours');
            break;
        case 'Боковой выпад с отягощением':
            return ('legs sideLungeWithWeights');
            break;
        case 'Выпады в Смите':
            return ('legs smithLunges');
            break;
        case 'Приседания':
            return ('legs squats');
            break;
        case 'Приседания с отягощением на вытянутых руках':
            return ('legs squatsWithWeightsOnOutstretchedArms');
            break;
        case 'Приседание в Смите':
            return ('legs squattingInSmith');
            break;
        case 'Приседание с гантелями на скамью':
            return ('legs squattingWithDumbbellsOnABench');
            break;
        case 'Приседание с гантелей':
            return ('legs squatWithDumbbell');
            break;
        case 'Приседание с гантелями':
            return ('legs squatWithDumbbells');
            break;
        case 'Приседание с гантелями на плечах':
            return ('legs squatWithDumbbellsOnShoulders');
            break;
        case 'Разгибание одной ноги в тренажёре':
            return ('legs stretchingOneLegInTheTrainer');
            break;
        case 'Трастеры с гантелями':
            return ('legs trastersWithDumbbells');
            break;
        case 'Сгибание лёжа в кроссовере, с нижнего блока':
            return ('legs bendingDownInACrossoverFromTheLowerBlock');
            break;
        case 'Сгибание ноги стоя с лентой':
            return ('legs bendingTheLegWhileStandingWithARibbon');
            break;
        case 'Болгарские выпады от скамьи':
            return ('legs bulgarianLungesFromTheBench');
            break;
        case 'Казачьи приседания':
            return ('legs cossackSquats');
            break;
        case 'Сгибание на икры в кроссовере':
            return ('legs flexingOnTheCalvesInACrossover');
            break;
        case 'Приседания с выпрыгиванием':
            return ('legs jumpSquats');
            break;
        case 'Мини-приседания с прыжком':
            return ('legs miniJumpSquats');
            break;
        case 'Приседания с гантелями и боковым движением':
            return ('legs squatsWithDumbbellsAndLateralMovement');
            break;
        case 'Приседание с маятниковой ногой в сторону':
            return ('legs squattingWithAPendulumLegToTheSide');
            break;
        case 'Свинг с гантелей':
            return ('legs swingWithDumbbells');
            break;
        case 'Стульчик':
            return ('legs theHighChair');
            break;
        case 'Свинг с утяжелением':
            return ('legs weightedSwing');
            break;
        case 'Ягодичный мостик лёжа':
            return ('legs buttockBridgeLyingDown');
            break;
        case 'Выпады с гантелями на плечах':
            return ('legs lungesWithDumbbellsOnTheShoulders');
            break;
        case 'Сумо-приседания с гантелей':
            return ('legs sumoSquatsWithDumbbell');
            break;
        case 'Сумо-приседания с гантелями':
            return ('legs sumoSquatsWithDumbbells');
            break;
        case 'Болгарские выпады с гантелью с опорой на стойку':
            return ('legs rackSupportedDumbbellBulgarianSplitSquat');
            break;
        case 'Жим одной ногой в тренажёре (новый)':
            return ('legs singleLegMachinePressNew');
            break;
        case 'Журавлик':
            return ('legs singleLegRomanianDeadlift');
            break;
        case 'Зашагивания на платформу в кроссовере':
            return ('legs cableStepUps');
            break;
        case 'Лэндмайн':
            return ('legs landmine');
            break;
        case 'Наклоны Гуд морнинг в гакке':
            return ('legs hackMachineGoodMorning');
            break;
        case 'Обратные приседания в Гакк-тренажере (глубокие)':
            return ('legs deepReverseHackSquat');
            break;
        case 'Отведение ноги в сторону с нижнего блока':
            return ('legs lowCableLegAbduction');
            break;
        case 'Отведение ноги назад с нижнего блока (с упором на скамью)':
            return ('legs benchSupportedLowCableHipExtension');
            break;
        case 'Подъёмы корпуса на тренажёре GHD':
            return ('legs ghdSitUps');
            break;
        case 'Приведение бедра':
            return ('legs hipAdduction');
            break;
        case 'Приседание с гантелей вариант 2':
            return ('legs dumbbellSquatVariationTwo');
            break;
        case 'Приседание с гантелей вариант 3':
            return ('legs dumbbellSquatVariationThree');
            break;
        case 'Приседания Гоблет с нижнего блока':
            return ('legs lowCableGobletSquat');
            break;
        case 'Приседания с удержанием блина на вытянутых руках':
            return ('legs plateHoldSquat');
            break;
        case 'Разгибание ноги сидя в кроссовере':
            return ('legs seatedCableLegExtension');
            break;
        case 'Разгибание со сведением ног':
            return ('legs legExtensionWithAdduction');
            break;
        case 'Румынская тяга с гантелями':
            return ('legs dumbbellRomanianDeadlift');
            break;
        case 'Румынская тяга с нижнего блока на платформе':
            return ('legs lowCablePlatformRomanianDeadlift');
            break;
        case 'Сгибание ног сидя':
            return ('legs seatedLegCurl');
            break;
        case 'Сгибание одной ноги сидя':
            return ('legs seatedSingleLegCurl');
            break;
        case 'Тяга гири к подбородку из плие-приседа':
            return ('legs plieSquatKettlebellUprightRow');
            break;
        case 'Тяга нижнего блока между ног':
            return ('legs pullThrough');
            break;
        case 'Экстензия на тренажёре GHD':
            return ('legs ghdBackExtension');
            break;
        case 'Экстензия с акцентом на ягодицы и бицепс бедра':
            return ('legs gluteAndHamstringFocusedExtension');
            break;
        case 'Ягодичный мостик в тренажёре':
            return ('legs machineGluteBridge');
            break;
        case 'Ягодичный мостик лёжа с гантелей':
            return ('legs lyingDumbbellGluteBridge');
            break;
        case 'Ягодичный мостик с ногами на скамье':
            return ('legs feetElevatedGluteBridge');
            break;
        default:
            return ('legs walkingWithDumbbells');
            break;
    }
}