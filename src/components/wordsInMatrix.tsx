import React from "react";
import { Box, Button, Grid, ButtonGroup, Divider } from "@material-ui/core"
import './styles.css';

function SingleWord(props: { key: number, value: string, onClickHandler: Function, show: boolean; }) {
  return (
    <Button key={props.key} onClick={props.onClickHandler()} id={"singleWord"} color="default">
      {props.show ? props.value : ""}
    </Button>
  )
}

function Border(props: { data: Array<Array<string>>, matrix: Array<Array<number>>, onClickHandler: Function, show: Array<Array<boolean>>; }) {

  let renderBorder = (num: number, data: string, onClickHandler: Function, show: boolean) => {
    return <SingleWord key={num} value={data} onClickHandler={onClickHandler} show={show} />
  }

  console.log(props.matrix)

  let Item = props.matrix.map((ary) => {

    return (
      <>
        {ary.map((num) => {
          return <Grid container item xs={3}>
            {
              renderBorder(num,
                props.data[parseInt((num / 2).toString())][num % 2],
                props.onClickHandler,
                props.show[parseInt((num / 2).toString())][num % 2]
              )
            }
          </Grid>
        })}
      </>
    )
  })

  console.log(Item)

  return (
    <Grid container spacing={1} justify="center" alignItems="center">
      {Item}
    </Grid>
  )
}

interface Props {
}

interface state {
  level: string
  score: number
  data: Array<Array<string>>
  show: Array<Array<boolean>>
  first: number
  second: number
}

export class WordsInMatrix extends React.Component<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      level: "level1",
      score: 0,
      data: new Array(10).fill(Array(2).fill("test")),
      show: new Array(10).fill(Array(2).fill(true)),
      first: 0,
      second: 0,
    }
  }

  getData = (level: string) => {
    const json = require('../data/synonymous.json')
    console.log(level, json[level])
    return json[level]
  }

  matrix = () => {
    return NewMatrix()
  }

  handleClick = () => {

  }

  handelChickLevel = (level: string) => {
    let data = this.getData(level)
    this.setState({ level: level, data: data })
  }

  render() {
    let matrix = this.matrix().slice()
    let data = this.state.data
    let show = this.state.show

    console.log(this.state.level, data)

    return (
      <Box>
        <Box marginBottom={2} style={{minHeight: 200, minWidth: 400}} >
          <Border data={data} matrix={matrix} onClickHandler={this.handleClick} show={show} />
        </Box>
        <Divider />
        <Box style={{ textAlign: 'center' }}>
          <Box>
            Please choose the difficulty.
          </Box>
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group" >
            <Button onClick={() => this.handelChickLevel("level1")}>Level1</Button>
            <Button onClick={() => this.handelChickLevel("level2")}>Level2</Button>
            <Button onClick={() => this.handelChickLevel("level3")}>Level3</Button>
          </ButtonGroup>
        </Box>
      </Box>
    )
  }
}

// function check() {
//   for (let _i = 0;_i < 10; _i++) {
//     if (json[this.state.levelCorrect][_i].indexOf(this.state.clickedArray[0]) !== -1) {
//       return this.state.clickedArray[1] === json[this.state.levelCorrect][_i][1] ||
//         this.state.clickedArray[1] === json[this.state.levelCorrect][_i][2]
//     }
//   }
//
//   return false
// }

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
function NewMatrix() {
  return CovToMatrix(Shuffle(NewAry()))
}
