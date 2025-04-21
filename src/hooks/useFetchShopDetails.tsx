import {  useEffect, useState } from "react"
import apiEndPoints from "../constants/apiEndPoints"
import axios from "axios"
import { ShopDetails } from "../types/shopDetails"

const useFetchShopDetails = (id: number) => {
    const [shopDetails, setShopDetails] = useState<ShopDetails >({id: 0, title: "", description: "", price: "", image: "", details: []})
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const url = apiEndPoints.shop.detailShop(id) 
    useEffect(() => {
        const fetchShop = async () => {
            try {
                setLoading(true)
                const response = await axios.get(url)
                setShopDetails(response.data.data)
                setError(null)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchShop()
    }, [url])
    return {shopDetails, loading, error}
}

export default useFetchShopDetails