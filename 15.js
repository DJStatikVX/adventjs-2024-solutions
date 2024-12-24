/*

  Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.
  
  Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.
  
  La tabla dibujada debe representar los datos del objeto de la siguiente manera:
  
  Tiene una cabecera con el nombre de la columna.
  El nombre de la columna pone la primera letra en mayúscula.
  Cada fila debe contener los valores de los objetos en el orden correspondiente.
  Cada valor debe estar alineado a la izquierda.
  Los campos dejan siempre un espacio a la izquierda.
  Los campos dejan a la derecha el espacio necesario para alinear la caja.
  Mira el ejemplo para ver cómo debes dibujar la tabla:
  
  drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
  ])
  // +---------+-----------+
  // | Name    | City      |
  // +---------+-----------+
  // | Alice   | London    |
  // | Bob     | Paris     |
  // | Charlie | New York  |
  // +---------+-----------+
  
  drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
  ])
  // +----------+----------+
  // | Gift     | Quantity |
  // +----------+----------+
  // | Doll     | 10       |
  // | Book     | 5        |
  // | Music CD | 1        |
  // +----------+----------+

*/

/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  if (data.length === 0) return ''

  const tableCorner = '+'
  const tableBorder = '-'
  const tableSideBorder = '|'
  const blankSpace = ' '
  const result = []

  const columns = Object.keys(data[0])
  const columnWidths = columns.map(column => {
    return Math.max(column.length, ...data.map(item => `${item[column]}`.length))
  })

  const horizontalBorder = 
    tableCorner
    +
      columnWidths
        .map(width => tableBorder.repeat(width + 2))
        .join(tableCorner)
    +
    tableCorner
  
  result.push(horizontalBorder)

  const headers = 
    tableSideBorder
    +
      columns
        .map((column, index) => {
          const capitalizedName = column.charAt(0).toUpperCase() + column.substring(1)
          const endSpacing = columnWidths[index] - capitalizedName.length
          return ` ${capitalizedName} ${blankSpace.repeat(endSpacing)}`
        })
        .join(tableSideBorder)
    +
    tableSideBorder
  
  result.push(headers)
  result.push(horizontalBorder)

  for (const item of data) {
    const row = 
      tableSideBorder
      +
        Object.values(item)
          .map((value, index) => {
            const endSpacing = columnWidths[index] - `${value}`.length
            return ` ${value} ${blankSpace.repeat(endSpacing)}`
          })
          .join(tableSideBorder)
      +
      tableSideBorder
    result.push(row)
  }

  result.push(horizontalBorder)
  
  return result.join('\n')
}
