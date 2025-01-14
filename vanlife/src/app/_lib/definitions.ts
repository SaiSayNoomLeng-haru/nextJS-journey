// navbar
export type NavbarLink = {
    name: string
    url: string
    icon?: React.ReactElement
}

// vans
export type VansType = {
    id: number
    name: string
    documentId: string
    description: string
    price: number
    imgUrl: ImgUrl
    type: string
}

export type ImgUrl = {
    width: number
    height: number
    url: string
    formats: Thumbnail
}

export type Thumbnail = {
    thumbnail: {
        width: number
        height: number
        url: string
    }
}

// vans response
export type VansResponse = {
    vans: VansType[]
    pagination: Pagination
    error: string | null
}

export type Pagination = {
        page: number
        pageSize: number
        pageCount: number
}