import React from "react";
import { Box, Button, Grid, ButtonGroup, Divider } from "@material-ui/core"
import './styles.css';

function SingleWord(props: { theKey: number, value: string, onClickHandler: Function, show: boolean; }) {
  return (
    <Button key={props.theKey} disabled={!props.show} onClick={() => props.onClickHandler()} id={"singleWord"} color="default">
      {props.show ? props.value : ""}
    </Button>
  )
}

function Border(props: { data: Array<Array<string>>, matrix: Array<Array<number>>, onClickHandler: Function, show: Array<Array<boolean>>; }) {

  let renderBorder = (num: number, data: string, show: boolean) => {
    return <SingleWord theKey={num} value={data} onClickHandler={() => props.onClickHandler(num)} show={show} />
  }

  let Item = props.matrix.map((ary, aryIndex) => {

    return (
      <React.Fragment key={aryIndex}>
        {ary.map((num, numIndex) => {
          return <Grid container item xs={3} key={aryIndex * 10 + numIndex}>
            {
              renderBorder(num,
                props.data[parseInt((num / 2).toString())][num % 2],
                props.show[parseInt((num / 2).toString())][num % 2]
              )
            }
          </Grid>
        })}
      </React.Fragment>
    )
  })

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
  matrix: Array<Array<number>>
}

export class WordsInMatrix extends React.Component<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      level: "",
      score: 0,
      data: new Array(10).fill(Array(2).fill("test")),
      show: new Array(10).fill(Array(2).fill(true)),
      first: -1,
      second: -1,
      matrix: new Array(5).fill(Array(4).fill(1)),
    }
  }

  getData = (level: string) => {
    const json = require('../data/synonymous.json')
    return json[level]
  }

  matrix = () => {
    return NewMatrix()
  }

  componentDidUpdate() {

  }

  handleClick = (num: number) => {
    if (this.state.first !== -1) {
      this.handelSynonyms(num)
    } else {
      this.setState({first: num})
    }
  }

  handelChickLevel = (level: string) => {
    let matrix = this.matrix()
    let data = this.getData(level)
    this.setState({ level: level, data: data, matrix: matrix })
  }

  handelSynonyms = (second: number) => {
    if (this.state.first !== -1 && second !== -1
      && this.state.first !== second &&isSynonyms(this.state.first, second, this.state.data)) {
      let show = this.state.show.slice() as Array<Array<boolean>>

      show[parseInt((this.state.first / 2).toString())] = [false, false]

      let score = this.state.score + 10
      this.setState({show: show, first: -1, score: score})
    } else {
      this.setState({first: second})
    }
  }

  render() {
    let data = this.state.data
    let show = this.state.show

    let score = () => {
      if (this.state.level !== "") {
        return "Current score:" + this.state.score + "/100"
      } else {
        return ""
      }
    }

    return (
      <Box>
        <Box marginBottom={2} style={{minHeight: 200, minWidth: 400}} >
          <Border data={data} matrix={this.state.matrix} onClickHandler={(num: number) => this.handleClick(num)} show={show} />
        </Box>
        <Divider />
        <Box textAlign={'center'}>
         {score()}
        </Box>
        <Box style={{ textAlign: 'center'}}>
          <Box>
            Please choose the level.
          </Box>
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button onClick={() => this.handelChickLevel("level1")}>Level1</Button>
            <Button onClick={() => this.handelChickLevel("level2")}>Level2</Button>
            <Button onClick={() => this.handelChickLevel("level3")}>Level3</Button>
          </ButtonGroup>
        </Box>
      </Box>
    )
  }
}

function calculate(show: Array<Array<boolean>>) {
  let score = 0;
  for (let _i = 0; _i < show.length; _i++) {
    if (show[_i] == [false, false]) {
      score += 10
    }
  }

  return score
}

function isSynonyms(first: number, second : number, data: Array<Array<string>>) {
  return data[parseInt((first / 2).toString())] === data[parseInt((second / 2).toString())];
}

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
