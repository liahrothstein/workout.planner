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
        case 'Боковые выпады для разминки ног':
            return ('warmUp sideLungesLegWarmup');
            break;
        case 'Вращение коленями':
            return ('warmUp kneeCircles');
            break;
        case 'Вращение локтями':
            return ('warmUp elbowCircles');
            break;
        case 'Вращение ногами':
            return ('warmUp legCircles');
            break;
        case 'Вращение плечами':
            return ('warmUp shoulderCircles');
            break;
        case 'Вращение рук с захлестом голени':
            return ('warmUp armCirclesWithButtKicks');
            break;
        case 'Вращение руками':
            return ('warmUp armCircles');
            break;
        case 'Вращение тазом':
            return ('warmUp hipCircles');
            break;
        case 'Вращения стопой':
            return ('warmUp ankleCircles');
            break;
        case 'Выгибания для спины и позвоночника':
            return ('warmUp backAndSpineArches');
            break;
        case 'Выпады для разминки ног':
            return ('warmUp lungesLegWarmup');
            break;
        case 'Махи ногами':
            return ('warmUp legSwings');
            break;
        case 'Наклон в приседе для спины и плеч':
            return ('warmUp squatBendForBackAndShoulders');
            break;
        case 'Наклоны головы':
            return ('warmUp headTilts');
            break;
        case 'Наклоны к стопе для задней поверхности бедра':
            return ('warmUp toeTouchesForHamstrings');
            break;
        case 'Повороты для пресса и косых мышц':
            return ('warmUp torsoTwistsForAbsAndObliques');
            break;
        case 'Подтягивание стоп для растяжки квадрицепса':
            return ('warmUp footPullsForQuadStretch');
            break;
        case 'Подъем рук и колен':
            return ('warmUp armAndKneeRaises');
            break;
        case 'Приседания с подъемом рук':
            return ('warmUp squatsWithArmRaises');
            break;
        case 'Разведение локтей для дельт и плечевых суставов':
            return ('warmUp elbowAbductionForDeltsAndShoulders');
            break;
        default:
            return ('warmUp tiltingTheBodyWithTheHandToTheSides')
    }
}