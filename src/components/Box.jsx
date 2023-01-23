import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "yellow" : "none"
  }

  return (
    <div className="box" key={props.key} style={styles}></div>
  )
}
