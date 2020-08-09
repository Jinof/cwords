import React from "react";
import {WordsInMatrix} from "../components/game/wordsInMatrix"
import {Box, Divider} from "@material-ui/core";

export class Game extends React.Component<any, any> {
  render() {
    return (
      <Box>
        <Box style={{textAlign: 'center', justifyContent: 'center', padding: 20}}>
          Welcome to the synonymous game.
        </Box>
        <Divider/>
        <Box style={{marginTop: 20}}>
          <WordsInMatrix/>
        </Box>
      </Box>
    )
  }
}
