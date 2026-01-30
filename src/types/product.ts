import { ReactNode } from "react";

export type Product = {
    [x: string]: ReactNode;
    id: number;
    strMeal: string;// name: string;
    slug: string;
    price: string;     // viene como string en tu API
    stock: number;
    is_active: boolean;
    strMealThumb: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",    //IMG
    strCategory: string                                     //category_name: string;
    created_at: string;
    updated_at: string;
  };
  
  export type PaginatedResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
  };