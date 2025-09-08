import type { MuscleGroup } from "../../types/workout";

export class MuscleGroupCheckbox {
    public dispatch;
    public muscleGroup;

    constructor(dispatch: (value: React.SetStateAction<boolean>) => void, muscleGroup: MuscleGroup) {
        this.dispatch = dispatch;
        this.muscleGroup = muscleGroup;
    }
};