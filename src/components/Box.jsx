import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "white" : "transparent"
  }

  return (
    <div
      className="box"
      style={styles}
      onClick={()=>props.toggle(props.id)}
    >
    </div>
  )
}
