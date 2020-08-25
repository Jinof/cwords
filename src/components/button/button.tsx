import React from "react";

interface ButtonProps {
    text: string
}

export function Button (props: ButtonProps) {
    return <div>
        <button style={styles.button}>
            {props.text}
        </button>
    </div>
}

const styles = {
    button: {
        outline: "none",
        borderRadius: "50px",
        width: "166px",
        height: "50px",
    },
}