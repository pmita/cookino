import { useState, useEffect } from "react"

export const useFetch = (url, method= "GET") => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState(null)

  const postData = (postData) => {
    //set some fetch options
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
  }

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async (fetchOptions) => {
      setIsPending(true)
      
      try {
        //the options object can also contain
        //A headers property
        //The method ,which can be GEt, POST, etc.
        //And the body we want to send with our request
        const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()

        setIsPending(false)
        setData(data)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError("Could not fetch the data")
        }
      }
    }

    if(method ==="GET"){
      fetchData()
    }

    if(method === "POST" && options){
      fetchData(options)
    }

    return () => {
      controller.abort()
    }

  }, [url, options, method])

  return { data, isPending, error, postData }
}