/*

  Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:
  
  type indica si es una bota izquierda (I) o derecha (R).
  size indica el tamaño de la bota.
  Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.
  
  ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!
  
  const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]
  
  organizeShoes(shoes)
  // [38, 42]
  
  const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]
  // [38, 38]
  
  const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
  ]
  
  organizeShoes(shoes3)
  // []

*/

/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
  const result = []

  const countedShoes = shoes.reduce((result, { type, size }) => {
    result[size] ??= { I: 0, R: 0 }
    result[size][type]++
    return result
  }, {})

  for (const [size, counts] of Object.entries(countedShoes)) {
    const numberOfPairs = Math.min(counts['I'], counts['R'])
    for (let i = 0; i < numberOfPairs; i++) {
      result.push(+size)
    }
  }
    
  return result
}
