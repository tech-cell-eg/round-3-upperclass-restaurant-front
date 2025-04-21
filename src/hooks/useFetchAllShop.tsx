import { useEffect, useState } from "react"
import { Shop } from "../types/shop"
import axios from "axios"
import apiEndPoints from "../constants/apiEndPoints"

const useFetchAllShop = () => {
    const [shop, setShop] = useState<Shop[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const url: string = apiEndPoints.shop.allShop

    useEffect(() => {
        const fetchShop = async () => {
            try {
                setLoading(true)
                const response = await axios.get(url)
                setShop(response.data.data)
                setError(null)

        } catch (error:unknown) {
            if (error instanceof Error) {
                setError(error.message)
            }
        } finally {
            setLoading(false)
        }
            
        }
        fetchShop()
    }, [url] )
  return {shop, loading, error}
}

export default useFetchAllShop