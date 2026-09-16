export function setCalfClassName(exercise: string): string {
  switch (exercise) {
    case 'Жим с носка в тренажёре для жима':
      return 'calf singleLegPressCalfRaise';
      break;
    case 'Подъем на носки в тренажере для жима ногами':
      return 'calf legPressCalfRaise';
      break;
    case 'Подъем на носки сидя с гантелями':
      return 'calf seatedDumbbellCalfRaise';
      break;
    case 'Подъем на носок в тренажере для жима ногами':
      return 'calf singleLegPressCalfRaiseAlternate';
      break;
    case 'Подъем на носки в Смите каждой отдельно':
      return 'calf liftingOnYourToesInSmithSeparately';
      break;
    case 'Подъем на носки в тренажёре для жима ногами':
      return 'calf standingOnYourToesInALegPressMachine';
      break;
    case 'Подъем на носки в Гакк тренажёре':
      return 'calf standingOnYourToesInTheGakkSimulator';
      break;
    case 'Подъем на носки сидя в Смите':
      return 'calf standingOnYourToesWhileSittingInTheSmith';
      break;
    case 'Подъем на носки стоя':
      return 'calf standingOnYourToes';
      break;
    case 'Подъем на носки сидя':
      return 'calf standingOnYourToesWhileSitting';
      break;
    case 'Подъем на носки стоя с гантелями':
      return 'calf standingOnYourToesWithDumbbells';
      break;
    case 'Подъем на носки в Смите':
      return 'calf gettingOnYourToesInSmith';
      break;
    case 'Подъем на носки сидя в тренажёре':
      return 'calf gettingUpOnYourToesWhileSittingInTheTrainer';
      break;
    default:
      return 'calf seatedDumbbellSingleLegCalfRaise';
      break;
  }
}
