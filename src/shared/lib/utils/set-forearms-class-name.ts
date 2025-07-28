export function setForearmsClassName(exercise: string): string {
    switch (exercise) {
        case 'Сгибание на предплечья':
            return ('forearms flexionOnTheForearms');
            break;
        case 'Сгибание на предплечья (сидя)':
            return ('forearms flexionOnTheForearmsSitting');
            break;
        case 'Сгибание на предплечья сидя пронированный хват':
            return ('forearms flexionOnTheForearmsWhileSittingWithAPiercedGrip');
            break;
        case 'Сгибание гантели на предплечья сидя':
            return ('forearms bendingDumbbellsOnTheForearmsWhileSitting');
            break;
        case 'Сгибание кистей стоя, с прямым грифом гриф за спиной':
            return ('forearms bendingOfTheHandsWhileStandingWithAStraightNeckBehindTheBack');
            break;
        case 'Сгибание кистей сидя нейтральным хватом':
            return ('forearms bendingTheHandsWhileSittingWithANeutralGrip');
            break;
        case 'Сгибание кистей с гантелями сидя':
            return ('forearms bendingTheHandsWithDumbbellsWhileSitting');
            break;
        case 'Сгибание кисти с гантелей сидя':
            return ('forearms bendingTheHandWithDumbbellsWhileSitting');
            break;
        case 'Сгибание  запястий со штангой сидя, в наклоне':
            return ('forearms bendingTheWristsWithABarbellWhileSittingInATilt');
            break;
        case 'Сгибание запястий с гантелей сидя, нейтральным хватом':
            return ('forearms bendingTheWristsWithDumbbellsWhileSittingWithANeutralGrip');
            break;
        case 'Концентрированное сгибание гантели на бицепс сидя прямым хватом':
            return ('forearms concentratedDumbbellFlexionOnBicepsWhileSittingWithAStraightGrip');
            break;
        case 'Сгибание рук с блином стоя':
            return ('forearms flexingYourArmsWithAPancakeWhileStanding');
            break;
        case 'Сгибание рук с гантелями стоя, с вращением кистей':
            return ('forearms flexionOfArmsWithDumbbellsWhileStandingWithRotationOfTheHands');
            break;
        case 'Сгибание кисти сидя с  гантелей, нейтральным хватом':
            return ('forearms flexionOfTheHandWhileSittingWithDumbbellsWithANeutralGrip');
            break;
        case 'Наклонный жим пальцами с упором на колени':
            return ('forearms obliqueFingerPressWithAnEmphasisOnTheKnees');
            break;
        case 'Вращение кисти с гантелей в стороны сидя':
            return ('forearms rotatingTheBrushFromTheDumbbellsToTheSidesWhileSitting');
            break;
        case 'Вращение диска стоя':
            return ('forearms standingDiskRotation');
            break;
        case 'Скручивание гантели стоя':
            return ('forearms twistingDumbbellsWhileStanding');
            break;
        default:
            return ('forearms forearmLiftsWithAThreadedGrip')
    }
}