export function setShouldersClassName(exercise: string): string {
  switch (exercise) {
    case 'Поочередный жим гантелей стоя':
      return 'shoulders alternateDumbbellsBenchPress';
      break;
    case 'Армейский жим сидя':
      return 'shoulders armyBenchPress';
      break;
    case 'Армейский жим в Смите':
      return 'shoulders armyBenchPressInSmith';
      break;
    case 'Армейский жим (узкий хват)':
      return 'shoulders armyBenchPressNarrowGrip';
      break;
    case 'Армейский жим стоя широким хватом':
      return 'shoulders armyBenchPressWithAWideGrip';
      break;
    case 'Жим Арнольда':
      return 'shoulders arnoldsBenchPress';
      break;
    case 'Тяга штанги к подбородку Е образный гриф':
      return 'shoulders barbellPullToTheChinEShapedBar';
      break;
    case 'Тяга штанги к подбородку в Смите':
      return 'shoulders barbellPullToTheChinInSmith';
      break;
    case 'Жим из-за головы (сидя)':
      return 'shoulders benchPressFromBehindTheHeadSitting';
      break;
    case 'Жим в тренажере Хаммер':
      return 'shoulders benchPressInTheHummerTrainer';
      break;
    case 'Жим в тренажере сидя':
      return 'shoulders benchPressInTheTrainerWhileSitting';
      break;
    case 'Тяга к подбородку в кроссовере':
      return 'shoulders chinPullInACrossover';
      break;
    case 'Жим гантелей сидя':
      return 'shoulders dumbbellBenchPress';
      break;
    case 'Жим гантелей сидя (с разведением)':
      return 'shoulders dumbbellBenchPressWithDilution';
      break;
    case 'Жим гантелей лежа нейтральным хватом наклонная скамья':
      return 'shoulders dumbbellBenchPressWithNeutralGripInclinedBench';
      break;
    case 'Тяга гантели (плечи)':
      return 'shoulders dumbbellDeadliftShoulders';
      break;
    case 'Жим гантелей сидя нейтральным хватом':
      return 'shoulders dumbbellsBenchPressWithANeutralGrip';
      break;
    case 'Жим в Смите за голову':
      return 'shoulders headBenchPress';
      break;
    case 'Подъем гантели перед собой':
      return 'shoulders liftingADumbbellInFrontOfYou';
      break;
    case 'Подъем рук с гантелями перед собой сидя':
      return 'shoulders liftingArmsWithDumbbellsInFrontOfYouWhileSitting';
      break;
    case 'Подъем гантелей перед собой':
      return 'shoulders liftingDumbbellsInFrontOfYou';
      break;
    case 'Подъем гантелей перед собой поочередно':
      return 'shoulders liftingDumbbellsInFrontOfYouAlternately';
      break;
    case 'Подъем гантелей перед собой лёжа наклонная скамья':
      return 'shoulders liftingDumbbellsInFrontOfYouWhileLyingOnAnInclinedBench';
      break;
    case 'Подъемы гантелей перед собой супинированным хватом':
      return 'shoulders liftingDumbbellsInFrontOfYouWithASupinatedGrip';
      break;
    case 'Тяга гантелей к подбородку':
      return 'shoulders liftingDumbbellsToTheChin';
      break;
    case 'Отведение гантелей в стороны сидя с подъемом корпуса':
      return 'shoulders liftingDumbbellsToTheSidesWhileSittingWithTheBodyRaised';
      break;
    case 'Отведение гантелей в стороны стоя':
      return 'shoulders liftingDumbbellsToTheSidesWhileStanding';
      break;
    case 'Подъем гантелей лёжа супинированным хватом':
      return 'shoulders liftingDumbbellsWhileLyingDownWithASupineGrip';
      break;
    case 'Подъем штанги перед собой':
      return 'shoulders liftingTheBarbellInFrontOfYou';
      break;
    case 'Отведение гантели в сторону':
      return 'shoulders liftingTheDumbbellToTheSide';
      break;
    case 'Отведение плеча в сторону с гантелей':
      return 'shoulders liftingTheShoulderToTheSideWithDumbbell';
      break;
    case 'Подъем блина перед собой':
      return 'shoulders liftingWeightPlatesInFrontOfYou';
      break;
    case 'Подъем рук с гантелями перед собой':
      return 'shoulders liftingYourArmsWithDumbbellsInFrontOfYou';
      break;
    case 'Отведение руки в сторону в кроссовере':
      return 'shoulders movingYourHandToTheSideInACrossover';
      break;
    case 'Жим гантелей над головой (стоя)':
      return 'shoulders overheadDumbbellPressStanding';
      break;
    case 'Подъем рук перед собой в кроссовере узким хватом':
      return 'shoulders raisingYourArmsInFrontOfYouInACrossoverWithANarrowGrip';
      break;
    case 'Подъем руки перед собой в кроссовере':
      return 'shoulders raisingYourHandInFrontOfYouInACrossover';
      break;
    case 'Вращение кистей с диском перед собой':
      return 'shoulders rotatingTheBrushesWithTheDiscInFrontOfYou';
      break;
    case 'Подъемы в стиле Шрагов на плечи':
      return 'shoulders shoulderShrugLifts';
      break;
    case 'Разведение гантелей в стороны в наклоне':
      return 'shoulders spreadingDumbbellsToTheSidesInATilt';
      break;
    case 'Разведение рук в кроссовере':
      return 'shoulders spreadingYourArmsInACrossover';
      break;
    case 'Протяжка в кроссовере':
      return 'shoulders drawingInACrossover';
      break;
    case 'Отведение рук с гантелями в стороны сидя, в наклоне':
      return 'shoulders liftingArmsWithDumbbellsToTheSidesWhileSittingInATilt';
      break;
    case 'Отведение руки с гантелей в стороны, лёжа на скамье':
      return 'shoulders liftingTheArmFromTheDumbbellsToTheSidesWhileLyingOnTheBench';
      break;
    case 'Тяга каната лежа в кроссовере':
      return 'shoulders ropePullWhileLyingInACrossover';
      break;
    case 'Тяга канатной рукоятки стоя к лицу, в кроссовере с верхнего блока':
      return 'shoulders tractionOfTheRopeHandleStandingToTheFaceInACrossoverFromTheUpperBlock';
      break;
    case 'Тяга к корпусу канатной рукоятки в кроссовере верхнего блока':
      return 'shoulders tractionToTheBodyOfTheRopeHandleInTheCrossoverOfTheUpperBlock';
      break;
    case 'Жим Арнольда 2 вариация':
      return 'shoulders arnoldPressVariationTwo';
      break;
    case 'Жим блина стоя над головой':
      return 'shoulders standingOverheadPlatePress';
      break;
    case 'Обратные махами с гантелями в наклоне + Молотки':
      return 'shoulders bentOverReverseDumbbellFlyesToHammerCurls';
      break;
    case 'Отведение гантелей в стороны в наклоне (с опорой на скамью)':
      return 'shoulders benchSupportedBentOverDumbbellLateralRaise';
      break;
    case 'Отведение гантелей назад в наклоне':
      return 'shoulders bentOverDumbbellRearDeltFlyes';
      break;
    case 'Отведение рук в тренажёре Peck-Deck (нейтральный хват)':
      return 'shoulders pecDeckRearDeltFlyesNeutralGrip';
      break;
    case 'Отведение рук в тренажёре Peck-Deck (прямым хватом)':
      return 'shoulders pecDeckRearDeltFlyesOverhandGrip';
      break;
    case 'Отведение штанги назад в наклоне':
      return 'shoulders bentOverBarbellRearDeltRaise';
      break;
    case 'Повороты гантели (руль) перед собой стоя':
      return 'shoulders standingDumbbellSteeringWheel';
      break;
    case 'Подъем гантелей перед собой + отведения в стороны':
      return 'shoulders dumbbellFrontRaiseToLateralRaise';
      break;
    case 'Подъём гантелей через стороны лёжа на скамье под углом':
      return 'shoulders inclineBenchProneDumbbellLateralRaise';
      break;
    case 'Подъём гантели в сторону лёжа на боку (на скамье)':
      return 'shoulders sideLyingBenchDumbbellLateralRaise';
      break;
    case 'Подъём гантели одной рукой лёжа боком на наклонной скамье':
      return 'shoulders inclineBenchSideLyingSingleArmDumbbellLateralRaise';
      break;
    case 'Подъём гантели перед собой лёжа на наклонной скамье':
      return 'shoulders inclineBenchDumbbellFrontRaise';
      break;
    case 'Подъём гантели перед собой одной рукой в наклоне с опорой (супинацией)':
      return 'shoulders supportedBentOverSingleArmDumbbellFrontRaiseWithSupination';
      break;
    case 'Подъем гантели перед собой сидя, нейтральным хватом':
      return 'shoulders seatedNeutralGripDumbbellFrontRaise';
      break;
    case 'Подъём одной гантели лёжа на боку':
      return 'shoulders sideLyingSingleDumbbellRaise';
      break;
    case 'Подъём штанги перед собой сидя':
      return 'shoulders seatedBarbellFrontRaise';
      break;
    case 'Поочерёдный жим гантелей стоя':
      return 'shoulders standingAlternatingDumbbellPress';
      break;
    case 'Тяга горизонтального блока к груди (на заднюю дельту)':
      return 'shoulders seatedCableRowToChestForRearDelts';
      break;
    default:
      return 'shoulders standingDumbbellPress';
      break;
  }
}
