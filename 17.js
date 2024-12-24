/*

  El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).
  
  Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.
  
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ])
  // [
  //   [1, 2, 1],
  //   [2, 1, 1],
  //   [1, 1, 1]
  // ]
  
  detectBombs([
    [true, false],
    [false, false]
  ])
  // [
  //   [0, 1],
  //   [1, 1]
  // ]
  
  detectBombs([
    [true, true],
    [false, false],
    [true, true]
  ])
  
  // [
  //   [1, 1],
  //   [4, 4],
  //   [1, 1]
  // ]

*/

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  const adjacentPositionsDeltas = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]

  return grid.map((row, rowIndex) => {
    return row.map((_, colIndex) => {
      return adjacentPositionsDeltas.reduce((count, [dx, dy]) => {
        const adjacentRow = grid[rowIndex + dx]
        if (adjacentRow != null) {
          const adjacentValue = adjacentRow[colIndex + dy] ?? false
          return count += (+adjacentValue)
        }
        return count
      }, 0)
    })
  })
}
