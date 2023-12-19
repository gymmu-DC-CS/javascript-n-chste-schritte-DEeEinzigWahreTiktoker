

// Ufgob 1

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


// Ufgob 5 

export function aufgabe05(args) {
  const input = args
  if (input.toLowerCase() === input) {
    return false
  } else {
    return true
  }
}



// Ufgob 6

export function aufgabe06(args) {
  const input = args

  if (input === "") {
    return false
  }

  for ( let i = 0; i < input.length; i++) {
    const currentElement = input [i].toLowerCase()
    console.log(currentElement.charCodeAt())
    if (currentElement.charCodeAt() < 97 || currentElement.charCodeAt() > 122) {
      if (currentElement.charCodeAt() != 32) {
        return true
      }
    }
  }

  return false
}



// Ufgob 7

export function aufgabe07(args) {
  const input = args
  if (
    (input.indexOf(" und ") !=-1 && input.indexOf("Und") != 0) ||
    input.indexOf("Und") === 0 ||
    input === "und"
  )
  return true
  else return false
}



// Ufgob 8

export function aufgabe08(args) {
  const input = args;

  var textMit3 = input.replace(/[e]/g, '3');

  return textMit3;
}




// Ufgob 9

export function aufgabe09(args) {
  const input = args
  if (input.length === 6) return true
  else return false 
}


// Ufgob 10

export function aufgabe10(args) {
  const input = args.toUpperCase()
  let result = true

if 
  
}





// Ufgob 11

export function aufgabe11(args) {2
  const input = args;

  if (input.length === 1) {
      return input.charCodeAt(0);
  } else {
      return "null"
  }
}




