const add = (a, b) => {
    return a + b

}

const subtract = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    return a / b
}

const increment = a => ++a

const decrement = a => --a

const makeInt = n => {
    const int =  parseInt(n,10)

    return int
}

const preserveDecimal = n => {
    const float =  parseFloat(n)

    return float
}