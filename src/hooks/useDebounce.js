import { useEffect, useState } from "react";

export default function useDebounce(value,delay = 2000) {
  const [debounceValue,setDebounceValue] = useState("");

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      setDebounceValue(value);
    },delay)

    return() => clearTimeout(debounceHandler);
  },[value,delay])

  return debounceValue;
}
