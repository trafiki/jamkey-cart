import React from "react"

function useLocalStorageState(
    key: string,
    defaultValue?: any,
  ) {
    const [state, setState] = React.useState(() => {
      const valueInLocalStorage = window.localStorage.getItem(key)
      if (valueInLocalStorage) {
        return JSON.parse(valueInLocalStorage)
      }
      return defaultValue || ''
    })
  
    const prevKeyRef = React.useRef(key)
  
    React.useEffect(() => {
      const prevKey = prevKeyRef.current
      if (prevKey !== key) {
        window.localStorage.removeItem(prevKey)
      }
      prevKeyRef.current = key
      window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])
  
    return [state, setState]
  }
  
export default useLocalStorageState;