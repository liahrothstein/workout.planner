import { MuscleGroup } from "../types/workout";
import { MuscleGroupCheckbox } from "@utils/muscle-group";

export function muscleGroupCheckboxes(

    setIsShoulders: (value: React.SetStateAction<boolean>) => void,
    setIsBack: (value: React.SetStateAction<boolean>) => void,
    setIsChest: (value: React.SetStateAction<boolean>) => void,
    setIsBiceps: (value: React.SetStateAction<boolean>) => void,
    setIsLegs: (value: React.SetStateAction<boolean>) => void,
    setIsTriceps: (value: React.SetStateAction<boolean>) => void,
    setIsPress: (value: React.SetStateAction<boolean>) => void,
    setIsForearms: (value: React.SetStateAction<boolean>) => void

): MuscleGroupCheckbox[] {
    return [
        new MuscleGroupCheckbox(setIsShoulders, MuscleGroup.Shoulders),
        new MuscleGroupCheckbox(setIsBack, MuscleGroup.Back),
        new MuscleGroupCheckbox(setIsChest, MuscleGroup.Chest),
        new MuscleGroupCheckbox(setIsBiceps, MuscleGroup.Biceps),
        new MuscleGroupCheckbox(setIsLegs, MuscleGroup.Legs),
        new MuscleGroupCheckbox(setIsTriceps, MuscleGroup.Triceps),
        new MuscleGroupCheckbox(setIsPress, MuscleGroup.Press),
        new MuscleGroupCheckbox(setIsForearms, MuscleGroup.Forearms)
    ]
}