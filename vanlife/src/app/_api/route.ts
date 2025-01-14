import { VansResponse, VansType } from "app/_lib/definitions";

// get vans
export async function getAllVans(
    key: string | null, 
    value: string | null, 
    page = 1, 
    pageSize = 4): Promise< VansResponse | undefined >{
    const baseUrl = key && key !== null 
    ? `http://127.0.0.1:1337/api/vans?filters[${key}][$eq]=${value}&populate[0]=imgUrl&pagination[page]=${page}&pagination[pageSize]=${pageSize}` 
    : `http://127.0.0.1:1337/api/vans?populate[0]=imgUrl&pagination[page]=${page}&pagination[pageSize]=${pageSize}`

    try {
        const resp = await fetch(baseUrl)
        if(!resp.ok) throw new Error('Cannot fetch Vans')
        const data = await resp.json();
        return {
            vans: data.data,
            pagination: data.meta.pagination,
            error: null
        }
    } catch (error) {
        if(error instanceof Error){
            return {
                vans: [],
                pagination: {
                    pageSize: 1,
                    pageCount: 1,
                    page: 1
                },
                error: error.message
            }
        }
    }
}

// get vans detail
export async function getVansDetail(id: string): Promise< VansType | undefined >{
    const baseUrl = `http://127.0.0.1:1337/api/vans/${id}?populate[0]=imgUrl`

    try {
        const resp = await fetch(baseUrl);
        const data = await resp.json()
        return data.data;
    } catch (error) {
        
    }
}

