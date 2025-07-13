import type { MuscleGroup } from "../../../shared/types/workout";

export function groupCheck(muscleGroups: MuscleGroup[], group: MuscleGroup): boolean {
    let isIncludesGroup: boolean = muscleGroups.includes(group);

    return (isIncludesGroup)
}