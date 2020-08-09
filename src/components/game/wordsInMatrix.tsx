import React from "react";
import {Box, Button, ButtonGroup, Divider} from "@material-ui/core";
import {NewMatrix} from "./matrix";
import {Border} from "./border";
import './styles.css';

interface Props {
}

interface state {
  level: string
  score: number
  data: Array<Array<string>>
  show: Array<Array<boolean>>
  first: number
  matrix: Array<Array<number>>
}

export class WordsInMatrix extends React.Component<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = {
      level: "",
      score: 0,
      data: new Array(10).fill(Array(2).fill(" ")),
      show: new Array(10).fill(Array(2).fill(true)),
      first: -1,
      matrix: new Array(5).fill(Array(4).fill(1)),
    }
  }

  getData = (level: string) => {
    const json = require('../data/synonymous.json')
    return json[level]
  }

  matrix = () => NewMatrix()

  handleClick = (num: number) => {
    if (this.state.first !== -1) {
      this.handleSynonyms(num)
    } else {
      this.setState({first: num})
    }
  }

  handleChickLevel = (level: string) => {
    let matrix = this.matrix()
    let data = this.getData(level)
    this.setState({
      level: level,
      data: data,
      matrix: matrix,
      show: new Array(10).fill(Array(2).fill(true)),
      score: 0,
      first: -1,
    })
  }

  handleSynonyms = (second: number) => {
    if (this.state.first !== -1 && second !== -1
      && this.state.first !== second && isSynonyms(this.state.first, second, this.state.data)) {
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
        <Box marginBottom={2} style={{minHeight: 200, minWidth: 400}}>
          <Border data={data} matrix={this.state.matrix} onClickHandler={(num: number) => this.handleClick(num)}
                  show={show}/>
        </Box>
        <Divider/>
        <Box textAlign={'center'}>
          {score()}
        </Box>
        <Box style={{textAlign: 'center'}}>
          <Box>
            Please choose the level.
          </Box>
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button onClick={() => this.handleChickLevel("level1")}>Level1</Button>
            <Button onClick={() => this.handleChickLevel("level2")}>Level2</Button>
            <Button onClick={() => this.handleChickLevel("level3")}>Level3</Button>
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

function isSynonyms(first: number, second: number, data: Array<Array<string>>) {
  return data[parseInt((first / 2).toString())] === data[parseInt((second / 2).toString())];
}

