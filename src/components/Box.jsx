import React from "react";

export default function Box(props) {
  const [isOn, setIsOn] = React.useState(props.on)

  const styles = {
    backgroundColor: isOn ? "white" : "transparent"
  }

  return (
    <div
      className="box"
      key={props.key}
      style={styles}
      onClick={()=>props.toggle(props.id)}
    >
    </div>
  )
}
