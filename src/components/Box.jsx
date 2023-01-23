import React from "react";

export default function Box(props) {
  const [isOn, setIsOn] = React.useState(props.on)

  const styles = {
    backgroundColor: isOn ? "white" : "transparent"
  }

  function toggleColor() {
    setIsOn(prevIsOn => !prevIsOn)
  }

  return (
    <div className="box" key={props.key} style={styles} onClick={toggleColor}></div>
  )
}
