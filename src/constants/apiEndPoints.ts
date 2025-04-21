// src/constants/api.ts
export const API_BASE_URL = import.meta.env.VITE_BASE_URL as string;

interface ShopApiEndPoints {
    allShop: string;
    detailShop: (id: number) => string;
}


interface ApiEndpoints {
    shop: ShopApiEndPoints;
}


const apiEndPoints: ApiEndpoints = {
    shop: {
        allShop: `${API_BASE_URL}/gift-cards`,
        detailShop: (id: number) => `${API_BASE_URL}/gift-cards/${id}`,
    },
};

export default apiEndPoints