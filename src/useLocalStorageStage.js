import { useState, useEffect } from "react";

export function useLocalStorageStage(initialState, key) {
  const [value, setValue] = useState(function () {
    const storeValue = localStorage.getItem(key);
    console.log(storeValue);
    return storeValue ? JSON.parse(storeValue) : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
