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

export interface MainContextType {
    selectedAddons: string[];
    setSelectedAddons: React.Dispatch<React.SetStateAction<string[]>>;
    freeService: string[];
    setFreeService: React.Dispatch<React.SetStateAction<string[]>>;
    checkedItems: { [key: string]: boolean };
    setCheckedItems: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
    removeFreeService: (service: string) => void;
    prices: number;
    setPrices: React.Dispatch<React.SetStateAction<number>>;
}

export interface CheckedItems {
    [key: string]: boolean;
}

export interface OnCheckboxChange {
    (event: React.ChangeEvent<HTMLInputElement>, addonName: string, tag: string, price?: number): void;
}

export interface TabItem {
    id: number;
    icon: any;
    title: string;
    content: (onCheckboxChange: OnCheckboxChange, checkedItems: { [key: string]: boolean }) => JSX.Element;
}