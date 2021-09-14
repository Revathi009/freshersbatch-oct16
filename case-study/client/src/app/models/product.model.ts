export interface ProductModelServer {

    name: string;
    image: string;
    price: number;
    category: string;
    description: string;
    
}


export interface ServerResponse {
    count: number,
    products: ProductModelServer[]
}