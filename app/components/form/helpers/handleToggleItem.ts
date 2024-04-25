import React from "react";

export default  function handleToggleItem(id: number, setState: React.Dispatch<React.SetStateAction<number[]>>) {
    setState((prev) =>
      prev.includes(id)
        ? [...prev].filter((stateId) => stateId !== id)
        : [...prev, id]
    );
  }