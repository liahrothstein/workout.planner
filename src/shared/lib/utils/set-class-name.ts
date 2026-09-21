import { MuscleGroup } from '../../types/workout';
import {
  setBackClassName,
  setBicepsClassName,
  setCalfClassName,
  setChestClassName,
  setForearmsClassName,
  setLegsClassName,
  setPressClassName,
  setShouldersClassName,
  setTricepsClassName,
} from './index';

export function setClassName(exercise: string, muscleGroup: string): string {
  switch (muscleGroup) {
    case MuscleGroup.Shoulders:
      return setShouldersClassName(exercise);
      break;
    case MuscleGroup.Legs:
      return setLegsClassName(exercise);
      break;
    case MuscleGroup.Back:
      return setBackClassName(exercise);
      break;
    case MuscleGroup.Triceps:
      return setTricepsClassName(exercise);
      break;
    case MuscleGroup.Chest:
      return setChestClassName(exercise);
      break;
    case MuscleGroup.Press:
      return setPressClassName(exercise);
      break;
    case MuscleGroup.Forearms:
      return setForearmsClassName(exercise);
      break;
    case MuscleGroup.Calf:
      return setCalfClassName(exercise);
      break;
    default:
      return setBicepsClassName(exercise);
  }
}
