import React, {CSSProperties} from "react";
import {Button} from "../components/button/button";

export function Home() {
  return <div>
    <Header />
    <Announcement />
    <ButtonList buttonListStyles={styles.buttonList} buttonListBoxStyles={styles.buttonsListBox} />
  </div>
}

function Header() {
  return <div>
    <div style={styles.headerText}>
      Welcome to synonyms game
    </div>
  </div>
}

function Announcement() {
  return <div>
    <div style={styles.announcementBorder}>
      <p>
        Readme!!!<br />
        In this game you should find the synonymous.<br />
        Your scores is base on the time and the number of successful matches.<br />
      </p>
    </div>
  </div>
}

interface ButtonListProps {
  buttonListStyles: CSSProperties
  buttonListBoxStyles: CSSProperties
}

function ButtonList (props: ButtonListProps) {
  return <div>
    <div style={props.buttonListStyles}>
      <div style={props.buttonListBoxStyles}><Button text={"rank"} /></div>
      <div style={props.buttonListBoxStyles}><Button text={"start"} /></div>
      <div style={props.buttonListBoxStyles}><Button text={"thanks"} /></div>
    </div>
  </div>
}

const styles = {
  headerText: {
    // Why add `as "center"`/ `as "const"` ?
    // Normally TypeScript would type textAlign as string, but since
    // it can't just be any string, you can cast it to the more specific type.
    // Both works.
    // textAlign: "center" as "center",
    marginTop: "20px",
    textAlign: "center" as const,
    fontSize: "26px",
    fontWeight: "bold" as const,
    fontFamily: "arial"
  },
  announcementBorder: {
    marginLeft: "44px",
    marginTop: "27px",
    maxWidth: "287px",
    maxHeight: "177px",
    fontSize: "20px",
  },
  buttonList: {
    marginTop: "144px"
  },
  buttonsListBox: {
    marginTop: "60px",
    textAlign: "center" as const,
  }
}
