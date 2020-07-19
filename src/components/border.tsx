import {Button, Grid} from "@material-ui/core";
import React from "react";

interface SWProps {
  theKey: number
  value: string
  onClickHandler: Function
  show: boolean
}

function SingleWord(props: SWProps) {
  return (
    <Button key={props.theKey} disabled={!props.show} onClick={() => props.onClickHandler()} id={"singleWord"}
            color="default">
      {props.show ? props.value : ""}
    </Button>
  )
}

interface BorderProps {
  data: Array<Array<string>>
  matrix: Array<Array<number>>
  onClickHandler: Function
  show: Array<Array<boolean>>
}

export function Border(props: BorderProps) {

  let renderBorder = (num: number, data: string, show: boolean) => {
    return <SingleWord theKey={num} value={data} onClickHandler={() => props.onClickHandler(num)} show={show}/>
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
