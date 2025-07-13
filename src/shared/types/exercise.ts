import type { Attempt, MuscleGroup } from "./workout";

export interface ExerciseArray {
    muscleGroup: MuscleGroup,
    names: string[]
}

export interface ExerciseWithAttmepts {
    exercise: string[] | null | undefined,
    attempts: Attempt[]
}