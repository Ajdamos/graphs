export const create2dArray = (rows: number, cols: number, fill: number) => {
    return [...Array(rows)].map(() => Array(cols).fill(fill))
}