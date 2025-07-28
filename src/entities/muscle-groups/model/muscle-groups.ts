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
        let backIndex: number = muscleGroups.indexOf(MuscleGroup.Back);

        tempArray.splice(backIndex, 1);
        return (tempArray)
    };
};
export function setChest(isChest: boolean, muscleGroups: MuscleGroup[]): MuscleGroup[] {
    let tempArray = new Array(...muscleGroups);

    if (isChest) {
        tempArray.push(MuscleGroup.Chest)
        return (tempArray)
    } else {
        let chestIndex: number = muscleGroups.indexOf(MuscleGroup.Chest);

        tempArray.splice(chestIndex, 1);
        return (tempArray)
    };
};
export function setBiceps(isBiceps: boolean, muscleGroups: MuscleGroup[]): MuscleGroup[] {
    let tempArray = new Array(...muscleGroups);

    if (isBiceps) {
        tempArray.push(MuscleGroup.Biceps)
        return (tempArray)
    } else {
        let bicepsIndex: number = muscleGroups.indexOf(MuscleGroup.Biceps);

        tempArray.splice(bicepsIndex, 1);
        return (tempArray)
    };
};
export function setLegs(isLegs: boolean, muscleGroups: MuscleGroup[]): MuscleGroup[] {
    let tempArray = new Array(...muscleGroups);

    if (isLegs) {
        tempArray.push(MuscleGroup.Legs)
        return (tempArray)
    } else {
        let legsIndex: number = muscleGroups.indexOf(MuscleGroup.Legs);

        tempArray.splice(legsIndex, 1);
        return (tempArray)
    };
};
export function setTriceps(isTriceps: boolean, muscleGroups: MuscleGroup[]): MuscleGroup[] {
    let tempArray = new Array(...muscleGroups);

    if (isTriceps) {
        tempArray.push(MuscleGroup.Triceps)
        return (tempArray)
    } else {
        let tricepsIndex: number = muscleGroups.indexOf(MuscleGroup.Triceps);

        tempArray.splice(tricepsIndex, 1);
        return (tempArray)
    };
};
export function setPress(isPress: boolean, muscleGroups: MuscleGroup[]): MuscleGroup[] {
    let tempArray = new Array(...muscleGroups);

    if (isPress) {
        tempArray.push(MuscleGroup.Press)
        return (tempArray)
    } else {
        let pressIndex: number = muscleGroups.indexOf(MuscleGroup.Press);

        tempArray.splice(pressIndex, 1);
        return (tempArray)
    };
};
export function setForearms(isForearms: boolean, muscleGroups: MuscleGroup[]): MuscleGroup[] {
    let tempArray = new Array(...muscleGroups);

    if (isForearms) {
        tempArray.push(MuscleGroup.Forearms)
        return (tempArray)
    } else {
        let forearmsIndex: number = muscleGroups.indexOf(MuscleGroup.Forearms);

        tempArray.splice(forearmsIndex, 1);
        return (tempArray)
    };
};