import React from "react";

export function Home() {
  return <div>
    <Header />
  </div>
}

function Header() {
  return <div>
    <div style={styles.headerText}>
      Welcome to synonyms game
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
    textAlign: "center" as const
  }
}
