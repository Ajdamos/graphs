export function position2dArray(array: number[][], value: number) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === value) {
                return [i, j];
            }
        }
    }
    return null;
}
