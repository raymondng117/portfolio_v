import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null )
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
          fetch(url)
          .then(res => {
            if (!res.ok) {
              // manually generate an error and this error then will be caught
              // this error happen when the server is on, but not the correct resource
            throw Error('could not fetch the data for that resource')
            }
          
            return res.json()})
          .then(
            data => {
            setData(data) 
            setIsPending(false)
            setError(null)
          })
          // catch any error during the fetching error
          .catch(err => {
            // turn off the loading
            setIsPending(false) 
            setError(err.message)
          })
        
      // whenever the url changes, the useEffect triggers
      }, [url]);

   return {data, isPending, error}
}

export default useFetch;