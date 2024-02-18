export function nodeDistance(first: number[], second: number[]) {
    return  Math.sqrt((Math.abs(first[0] - second[0]) ** 2) + (Math.abs(first[1] - second[1]) ** 2))
}