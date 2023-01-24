import React from "react";
import boxes from "./boxes";
import Box from "./components/Box";

export default function Content() {
  const [squares, setSquares] = React.useState(boxes)

  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  const squareElements = squares.map(square => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      toggle={toggle}
    />
  ))

    return (
      <div className="boxes">
      {squareElements}
    </div>
  )
}
