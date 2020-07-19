// Matrix is a function returns a scrambled array.
function Shuffle(ary: Array<number>) {
  return ary.sort(function () {
    return 0.5 - Math.random()
  })
}

// NewAry returns an 5x4=20 array.
function NewAry() {
  let ary: Array<number> = new Array<number>()
  for (let _i = 0; _i < 20; _i++) {
    ary.push(_i)
  }

  return ary
}

// CovToMatrix is a function converts an array to a 5x4 matrix
function CovToMatrix(ary: Array<number>) {
  let matrix: Array<Array<number>> = new Array<Array<number>>()
  for (let _i = 0; _i < 5; _i++) {
    matrix[_i] = ary.slice(_i * 4, (_i + 1) * 4)
  }

  return matrix
}

// NewMatrix is a function returns an 5x4 matrix
export function NewMatrix() {
  return CovToMatrix(Shuffle(NewAry()))
}
