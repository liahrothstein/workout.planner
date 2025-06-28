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
export { initAttempt };