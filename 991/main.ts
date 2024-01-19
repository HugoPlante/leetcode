function minFallingPathSum(matrix: number[][]): number {
    const nbRows: number = matrix.length;
    const nbColumns: number = matrix[0].length;

    let prevRow: number[] = [...matrix[0]];

    for (let r: number = 1; r < nbRows; r++) {
        const currRow: number[] = new Array(nbColumns).fill(0);
        for (let c: number = 0; c < nbColumns; c++) {
            const curr: number = matrix[r][c];
            const top: number = curr + prevRow[c];
            const topL: number = curr + (prevRow[c - 1] || Infinity);
            const topR: number = curr + (prevRow[c + 1] || Infinity);
            currRow[c] = Math.min(top, topL, topR);
        }
        prevRow = [...currRow]; 
    }

    return Math.min(...prevRow);
};