import type { ExerciseWithAttmepts } from "../types/exercise";
import type { Attempt } from "../types/workout";

export const attempts: number[] = [1, 2, 3, 4, 5];

const initAttempt: Attempt[] = new Array();
attempts.forEach((num) => {
    initAttempt.push({
        number: num,
        times: null,
        weight: null
    })
});

const initExerciseWithAttempt: ExerciseWithAttmepts = {
    exercise: null,
    attempts: initAttempt
};

export { initAttempt, initExerciseWithAttempt };