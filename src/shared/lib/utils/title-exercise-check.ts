export function titleExerciseCheck(exercise: string[] | null | undefined): string {
    if (exercise) {
        if (exercise[1]) {
            return (exercise[1])
        } else {
            return (exercise[0])
        }
    } else {
        return ('Пусто')
    }
};