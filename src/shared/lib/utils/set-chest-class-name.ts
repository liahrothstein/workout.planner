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
        default:
            return ('chest svendsStandingBenchPressWithDumbbell');
            break;
    }
}