export function setChestClassName(exercise: string): string {
    switch (exercise) {
        case 'Пуловер с гантелей с упором о скамью':
            return ('chest aPulloverWithDumbbellRestingOnABench');
            break;
        case 'Жим штанги лёжа':
            return ('chest benchPress');
            break;
        case 'Жим штанги лёжа (наклон вниз)':
            return ('chest benchPressDownwardTilt');
            break;
        case 'Жим гантелей лёжа поочередно каждой рукой':
            return ('chest benchPressDumbbellsAlternatelyWithEachHand');
            break;
        case 'Жим штанги в Смите':
            return ('chest benchPressInSmith');
            break;
        case 'Жим в Смите на горизонтальной скамье':
            return ('chest benchPressInSmithOnAHorizontalBench');
            break;
        case 'Жим в тренажере Хаммер':
            return ('chest benchPressInTheHummerTrainer');
            break;
        case 'Жим штанги лёжа на наклонной скамье':
            return ('chest benchPressWhileLyingOnAnInclinedBench');
            break;
        case 'Жим узкой рукояткой в Смите':
            return ('chest benchPressWithANarrowHandleInSmith');
            break;
        case 'Сведение рук в кроссовере':
            return ('chest bringingHandsTogetherInACrossover');
            break;
        case 'Сведение в тренажёре':
            return ('chest bringingTogetherInTheTrainer');
            break;
        case 'Сведение рук перед собой в кроссовере':
            return ('chest bringingYourHandsTogetherInFrontOfYouInACrossover');
            break;
        case 'Сведение рук в тренажёре':
            return ('chest bringingYourHandsTogetherInTheTrainer');
            break;
        case 'Жим гантелей лёжа наклонная скамья':
            return ('chest dumbbellsBenchPressInclinedBench');
            break;
        case 'Жим гантелей лёжа на горизонтальной скамье':
            return ('chest dumbbellsBenchPressLyingOnAHorizontalBench');
            break;
        case 'Жим гантелей лёжа нейтральным хватом':
            return ('chest dumbbellsBenchPressWithNeutralGrip');
            break;
        case 'Разведение гантелей лёжа наклонная скамья':
            return ('chest dumbbellsLiftingLyingOnAnInclinedBench');
            break;
        case 'Разведение гантелей лёжа на горизонтальной скамье':
            return ('chest liftingDumbbellsWhileLyingOnAHorizontalBench');
            break;
        case 'Жим гантели одной рукой лёжа':
            return ('chest oneHandedDumbbellBenchPress');
            break;
        case 'Жим Свенда стоя':
            return ('chest svendsStandingBenchPress');
            break;
        case 'Жим Свенда стоя классический':
            return ('chest svendsStandingBenchPressClassic');
            break;
        case 'Жим штанги лёжа с бруска':
            return ('chest benchPressFromABar');
            break;
        case 'Жим штанги лёжа с лентой':
            return ('chest benchPressWithTape');
            break;
        case 'Сгибание одной руки в сторону в кроссовере':
            return ('chest bendingOneArmToTheSideInACrossover');
            break;
        case 'Сведение руки перед собой в кроссовере с верхнего блока':
            return ('chest bringingTheHandInFrontOfYouInACrossoverFromTheUpperBlock');
            break;
        case 'Сведение рук в кроссовере лежа с нижнего блока':
            return ('chest bringingYourHandsTogetherInACrossoverWhileLyingDownFromTheLowerBlock');
            break;
        case 'Сведение рук с гантелями лёжа на наклонной скамье супинированным хватом':
            return ('chest bringingYourHandsTogetherWithDumbbellsWhileLyingOnAnInclinedBenchWithASupinatedGrip');
            break;
        case 'Жим от груди стоя в кроссовере':
            return ('chest chestPressWhileStandingInACrossover');
            break;
        case 'Жим гантелей лёжа на горизонтальной скамье супинированным хватом':
            return ('chest dumbbellBenchPressLyingOnAHorizontalBenchWithASupinatedGrip');
            break;
        case 'Жим гантелей лёжа на наклонной скамье нейтральным хватом':
            return ('chest dumbbellBenchPressLyingOnAnInclinedBenchWithANeutralGrip');
            break;
        case 'Отжимания на кулаках':
            return ('chest fistPushUps');
            break;
        case 'Вращение гантелей в стороны лежа':
            return ('chest rotatingDumbbellsToTheSidesWhileLyingDown');
            break;
        case 'Жим в тренажёре Хамммер':
            return ('chest hammerStrengthChestPress');
            break;
        case 'Жим в тренажёре Хаммер одной рукой (боковой)':
            return ('chest singleArmSideHammerStrengthChestPress');
            break;
        case 'Жим в тренажёре Хаммер одной рукой':
            return ('chest singleArmHammerStrengthChestPress');
            break;
        case 'Жим гантели на наклонной скамье':
            return ('chest inclineDumbbellPress');
            break;
        case 'Жим одной гантели лёжа на горизонтальной скамье':
            return ('chest singleArmFlatDumbbellPress');
            break;
        case 'Жим одной рукой сидя в кроссовере':
            return ('chest seatedSingleArmCableChestPress');
            break;
        case 'Жим штанги лёжа без опоры ног':
            return ('chest feetUpBarbellBenchPress');
            break;
        case 'Жим штанги лёжа широким хватом':
            return ('chest wideGripBarbellBenchPress');
            break;
        case 'Отжимания в Гравитроне':
            return ('chest assistedPushUps');
            break;
        case 'Отжимания на брусьях с акцентом на грудные мышцы':
            return ('chest chestFocusedDips');
            break;
        case 'Отжимания от пола с упоров':
            return ('chest pushUpsWithHandles');
            break;
        case 'Разведение гантелей лёжа на полу':
            return ('chest floorDumbbellFlyes');
            break;
        case 'Разведение гантелей лёжа поочерёдно':
            return ('chest alternatingDumbbellFlyes');
            break;
        case 'Сведение рук в кроссовере сидя на скамье':
            return ('chest seatedBenchCableChestFlyes');
            break;
        case 'Сведение рук в тренажёре Pec-Deck':
            return ('chest pecDeckFlyes');
            break;
        default:
            return ('chest svendsStandingBenchPressWithDumbbell');
            break;
    }
}