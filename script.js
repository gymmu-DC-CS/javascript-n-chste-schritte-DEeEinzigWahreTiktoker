
export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e")
    if (currentElement != "E") {
    result.push(currentElement)
  }
  }
  return result.join("")
}

// Ufgob 2

export function aufgabe02(args) {
  return args.toUpperCase()
}


// Ufgob 3

export function aufgabe03(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
    result++
    }
  }
  return result
}


// Ufgob 4

export function aufgabe04(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " " && input[i-1] != "-"){
      result++
    }
    
}
  return result + 1
}
