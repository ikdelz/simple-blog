import { useState, useEffect } from "react";


const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()
    // Fetching
      setTimeout(() => {
        fetch(url, { signal: abortCont.signal })
    .then(res => {
      if (!res.ok) {
        throw Error('Could not fetch the data!')
      }
      return res.json()
    })
    .then(data => {
      setData(data)
      setIsLoading(false)
      setError(null)
    })
    .catch(err => {
      if (err.message === 'AbortError') {
        console.log('Fetch Aborted!')
      } else {
        setIsLoading(false)
        setError(err.message)
      }
    })
      }, 700);
    // Aborting the fetch api function when the component unmounts while trying to fetch
    return () => abortCont.abort()

  },[url])

  return { data, isLoading, error }
}

export default useFetch