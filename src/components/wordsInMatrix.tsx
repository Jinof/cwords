import React from "react";

export class WordsInMatrix extends React.Component<any, object>{
  render() {
    let matrix = NewMatrix()
    const listItems = matrix.map((ary) => <li>{ary.map((num) => num.toString() + " ")}</li>)

    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    )
  }
}

// Matrix is a function returns a scrambled array.
function Shuffle(ary: Array<number>) {
  ary.sort(function () {
    return 0.5 - Math.random()
  })

  console.log("Shuffle", ary)
  return ary
}

// NewAry returns an 5x4=20 array.
function NewAry() {
  let ary: Array<number> = new Array<number>()
  for (let _i = 0; _i < 25; _i++) {
    ary.push(_i)
  }

  console.log("new ary", ary)

  return ary
}

// CovToMatrix is a function converts an array to a 5x4 matrix
function CovToMatrix(ary: Array<number>) {
  let matrix: Array<Array<number>> = new Array<Array<number>>()
  for (let _i = 0; _i < 5; _i++) {
    matrix[_i] = ary.slice(_i*4, (_i+1)*4)
    console.log(`matrix${_i}`, matrix[_i])
  }

  console.log("cov to matrix", matrix)
  return matrix
}

// NewMatrix is a function returns an 5x4 matrix
function NewMatrix() {
  return CovToMatrix(Shuffle(NewAry()))
}