import { MuscleGroup } from "../../../shared/types/workout";

export function setShoulders(isShoulders: boolean, muscleGroups: MuscleGroup[]): MuscleGroup[] {
    let tempArray = new Array(...muscleGroups);

    if (isShoulders) {
        tempArray.push(MuscleGroup.Shoulders)
        return (tempArray)
    } else {
        let shouldersIndex: number = muscleGroups.indexOf(MuscleGroup.Shoulders);

        tempArray.splice(shouldersIndex, 1);
        return (tempArray)
    };
};
export function setBack(isBack: boolean, muscleGroups: MuscleGroup[]): MuscleGroup[] {
    let tempArray = new Array(...muscleGroups);

    if (isBack) {
        tempArray.push(MuscleGroup.Back)
        return (tempArray)
    } else {
        let shouldersIndex: number = muscleGroups.indexOf(MuscleGroup.Back);

        tempArray.splice(shouldersIndex, 1);
        return (tempArray)
    };
};
export function setChest(isChest: boolean, muscleGroups: MuscleGroup[]): MuscleGroup[] {
    let tempArray = new Array(...muscleGroups);

    if (isChest) {
        tempArray.push(MuscleGroup.Chest)
        return (tempArray)
    } else {
        let shouldersIndex: number = muscleGroups.indexOf(MuscleGroup.Chest);

        tempArray.splice(shouldersIndex, 1);
        return (tempArray)
    };
};
export function setBiceps(isBiceps: boolean, muscleGroups: MuscleGroup[]): MuscleGroup[] {
    let tempArray = new Array(...muscleGroups);

    if (isBiceps) {
        tempArray.push(MuscleGroup.Biceps)
        return (tempArray)
    } else {
        let shouldersIndex: number = muscleGroups.indexOf(MuscleGroup.Biceps);

        tempArray.splice(shouldersIndex, 1);
        return (tempArray)
    };
};
export function setLegs(isLegs: boolean, muscleGroups: MuscleGroup[]): MuscleGroup[] {
    let tempArray = new Array(...muscleGroups);

    if (isLegs) {
        tempArray.push(MuscleGroup.Legs)
        return (tempArray)
    } else {
        let shouldersIndex: number = muscleGroups.indexOf(MuscleGroup.Legs);

        tempArray.splice(shouldersIndex, 1);
        return (tempArray)
    };
};
export function setTriceps(isTriceps: boolean, muscleGroups: MuscleGroup[]): MuscleGroup[] {
    let tempArray = new Array(...muscleGroups);

    if (isTriceps) {
        tempArray.push(MuscleGroup.Triceps)
        return (tempArray)
    } else {
        let shouldersIndex: number = muscleGroups.indexOf(MuscleGroup.Triceps);

        tempArray.splice(shouldersIndex, 1);
        return (tempArray)
    };
};