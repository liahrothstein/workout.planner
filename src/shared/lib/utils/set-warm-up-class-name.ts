export function setWarmUpClassName(exercise: string): string {
    switch (exercise) {
        case 'Наклоны корпуса по сторонам':
            return ('warmUp bodyTiltsToTheSides');
            break;
        case 'Повороты корпуса из стороны в сторону':
            return ('warmUp bodyTurnsFromSideToSide');
            break;
        case 'Развороты корпуса по сторонам':
            return ('warmUp bodyTurnsToTheSides');
            break;
        case 'Разведения и сведения рук':
            return ('warmUp breedingAndBringingHandsTogether');
            break;
        case 'Сведение рук перед собой':
            return ('warmUp bringingYourHandsTogetherInFrontOfYou');
            break;
        case 'Круговые вращения руками':
            return ('warmUp circularHandRotations');
            break;
        case 'Вращения в локтях вперед':
            return ('warmUp elbowRotationsForward');
            break;
        case 'Сгибания рук и выгибания кистей':
            return ('warmUp flexionOfArmsAndFlexionOfHands');
            break;
        case 'Сгибания рук на верхнюю зону спины':
            return ('warmUp flexionOfTheArmsOnTheUpperBack');
            break;
        case 'Подъемы бедер и вращения кистями':
            return ('warmUp hipLiftsAndHandRotations');
            break;
        case 'Сведения локтей перед собой':
            return ('warmUp keepingYourElbowsInFrontOfYou');
            break;
        case 'Мельница к прямым ногам':
            return ('warmUp millToStraightLegs');
            break;
        case 'Мельница без разгибания корпуса':
            return ('warmUp millWithoutExtensionOfTheBody');
            break;
        case 'Полукруговые вращения головой':
            return ('warmUp semicircularHeadRotations');
            break;
        default:
            return ('warmUp tiltingTheBodyWithTheHandToTheSides')
    }
}