import { setShouldersClassName } from "./set-shoulders-class-name";
import { setLegsClassName } from "./set-legs-class-name";
import { setBackClassName } from "./set-back-class-name";
import { setTricepsClassName } from "./set-triceps-class-name";
import { setChestClassName } from "./set-chest-class-name";
import { setPressClassName } from "./set-press-class-name";
import { setBicepsClassName } from "./set-biceps-class-name";

import { MuscleGroup } from "../../types/workout";

export function setClassName(exercise: string, muscleGroup: string): string {
    switch (muscleGroup) {
        case MuscleGroup.Shoulders:
            return (setShouldersClassName(exercise));
            break;
        case MuscleGroup.Legs:
            return (setLegsClassName(exercise));
            break;
        case MuscleGroup.Back:
            return (setBackClassName(exercise));
            break;
        case MuscleGroup.Triceps:
            return (setTricepsClassName(exercise));
            break;
        case MuscleGroup.Chest:
            return (setChestClassName(exercise));
            break;
        case MuscleGroup.Press:
            return (setPressClassName(exercise));
            break;
        default:
            return (setBicepsClassName(exercise));
    }
}