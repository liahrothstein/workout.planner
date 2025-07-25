export function setTricepsClassName(exercise: string): string {
    switch (exercise) {
        case 'Разгибание рук с гантелей из-за головы стоя':
            return ('triceps armExtensionWithDumbbellFromBehindTheHeadWhileStanding');
            break;
        case 'Жим штанги в Смите (узким)':
            return ('triceps benchPressInSmithNarrow');
            break;
        case 'Жим штанги узким хватом':
            return ('triceps benchPressWithANarrowGrip');
            break;
        case 'Жим лежа узким хватом Е образный гриф':
            return ('triceps benchPressWithANarrowGripEShapedNeck');
            break;
        case 'Разгибание рук из-за головы в кроссовере':
            return ('triceps extendingTheArmsFromBehindTheHeadInACrossover');
            break;
        case 'Разгибание рук в кроссовере в наклоне':
            return ('triceps extensionOfArmsInACrossoverInATilt');
            break;
        case 'Разгибание рук в кроссовере канатная рукоятка':
            return ('triceps extensionOfArmsInACrossoverRopeGrip');
            break;
        case 'Разгибание руки из-за головы одной гантелей сидя':
            return ('triceps extensionOfTheArmFromBehindTheHeadWithOneDumbbellWhileSitting');
            break;
        case 'Разгибание рук из-за головы в кроссовере канатная рукоятка':
            return ('triceps extensionOfTheArmsFromBehindTheHeadInACrossoverRopeGrip');
            break;
        case 'Разгибание рук в кроссовере супинированный хват':
            return ('triceps extensionOfTheArmsInACrossoverSupinatedGrip');
            break;
        case 'Разгибание рук в кроссовере рукоятка узкая':
            return ('triceps extensionOfTheArmsInTheCrossoverTheHandleIsNarrow');
            break;
        case 'Разгибание рук в кроссовере рукояткой':
            return ('triceps extensionOfTheArmsInTheCrossoverWithTheHandle');
            break;
        case 'Разгибание рук на блоке кроссовера рукоятка':
            return ('triceps extensionOfTheArmsOnTheCrossoverBlockHandle');
            break;
        case 'Разгибание рук на блоке рукоятка':
            return ('triceps extensionOfTheArmsOnTheHandleBlock');
            break;
        case 'Разгибание руки с гантелей из-за головы':
            return ('triceps extensionOfTheArmWithDumbbellFromBehindTheHead');
            break;
        case 'Французский жим на наклонной скамье':
            return ('triceps frenchBenchPress');
            break;
        case 'Французский жим лежа с гантелями':
            return ('triceps frenchBenchPressWithDumbbells');
            break;
        case 'Французский жим Е образной штангой':
            return ('triceps frenchEBarBenchPress');
            break;
        case 'Французский жим прямым грифом':
            return ('triceps frenchStraightBenchPress');
            break;
        case 'Отведение руки назад в кроссовере':
            return ('triceps pullingTheArmBackInTheCrossover');
            break;
        case 'Отведение руки назад в кроссовере рукояткой':
            return ('triceps pullingTheArmBackInTheCrossoverWithTheHandle');
            break;
        case 'Отведение гантели назад':
            return ('triceps pullingTheDumbbellBack');
            break;
        case 'Отведение гантелей назад в наклоне':
            return ('triceps pullingTheDumbbellsBackInATilt');
            break;
        case 'Разгибание рук с гантелей из-за головы':
            return ('triceps stretchingArmsWithDumbbellFromBehindTheHead');
            break;
        case 'Разгибание рук с гантелями из-за головы сидя':
            return ('triceps stretchingArmsWithDumbbellsFromBehindTheHeadWhileSitting');
            break;
        case 'Разгибание рук с гантелями из-за головы лёжа':
            return ('triceps stretchingOfArmsWithDumbbellsFromBehindTheHeadLyingDown');
            break;
        case 'Разгибание рук с гантелей из-за головы лёжа':
            return ('triceps stretchingTheArmsWithDumbbellFromBehindTheHeadWhileLyingDown');
            break;
        case 'Жим Тейта одной гантелей (лёжа)':
            return ('triceps tatePressWithOneDumbbellProne');
            break;
        case 'Разгибание рук в кроссовере с канатной рукояткой, с верхнего блока':
            return ('triceps armExtensionInACrossoverWithARopeHandleFromTheUpperBlock');
            break;
        case 'Разгибание руки в кроссовере одной канатной рукояткой с верхнего блока':
            return ('triceps extensionOfTheArmInTheCrossoverWithOneRopeHandleFromTheUpperBlock');
            break;
        case 'Французский жим лёжа на наклонной скамье узким хватом':
            return ('triceps frenchBenchPressOnAnInclinedBenchWithANarrowGrip');
            break;
        case 'Французский жим лёжа одной гантелей':
            return ('triceps frenchBenchPressWithOneDumbbell');
            break;
        case 'Обратные отжимания от скамьи':
            return ('triceps reversePushUpsFromTheBench');
            break;
        default:
            return ('triceps theTatePress');
            break;
    }
}