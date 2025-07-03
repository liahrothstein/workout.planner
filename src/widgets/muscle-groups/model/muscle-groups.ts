import type { MuscleGroup, Workout } from "../../../shared/types/workout";

export function groupCheck(workout: Workout, group: MuscleGroup): boolean {
    let isIncludesGroup: boolean = workout.muscleGroups.includes(group);

    return (isIncludesGroup)
}