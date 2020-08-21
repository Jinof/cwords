import React from "react";

export function Home() {
  return <div>
    <Header />
    <Announcement />
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

const styles = {
  headerText: {
    // Why add `as "center"`/ `as "const"` ?
    // Normally TypeScript would type textAlign as string, but since
    // it can't just be any string, you can cast it to the more specific type.
    // Both works.
    // textAlign: "center" as "center",
    textAlign: "center" as const,
    fontSize: "26px",
    fontWeight: "bold" as const,
    fontFamily: "arial"
  },
  announcementBorder: {
    // position: "absolute" as const,
    marginLeft: "44px",
    marginTop: "27px",
    maxWidth: "287px",
    maxHeight: "177px",
    fontSize: "20px",
  }
}
