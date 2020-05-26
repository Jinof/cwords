import React from "react";
import {WordsInMatrix} from "../components/wordsInMatrix"

export class Game extends React.Component<any, any>{
  render() {
    return (
      <div>
        <WordsInMatrix />
      </div>
    )
  }
}