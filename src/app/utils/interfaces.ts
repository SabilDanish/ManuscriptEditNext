export interface Editor {
    id: string;
    ediName: string;
    ediType: string;
    ediImg: string;
    ediEdu: string;
    ediExp: string;
    ediExpt: string;
}

export interface Partner {
    id: string;
    part_logo: string;
    part_link: string;
    logo_link: string;
}

export interface FetchPostResponse<T> {
    isLoading: boolean;
    error: string | null;
    data: T | null;
    postData: (formData: any) => Promise<void>;
    login: (formData: any, router: any) => Promise<void>;
}

export interface Editor {
    id: string;
    ediImg: string;
    ediName: string;
    ediBio: string;
}

export interface Service {
    category: string;
    subServices: string[];
}