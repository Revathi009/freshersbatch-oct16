export interface ProductModelServer {
    name: string;
    image: string;
    brand: string;
    category: string;
    description: string;
}


export interface ServerResponse {
    count: number,
    products: ProductModelServer[]
}