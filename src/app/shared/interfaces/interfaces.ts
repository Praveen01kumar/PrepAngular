import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

export interface snakData {
    message: string;
    action?: string;
    hrposition?: MatSnackBarHorizontalPosition;
    vrposition?: MatSnackBarVerticalPosition;
    duration?: number;
}

export interface pricing {
    name: string;
    completed: boolean;
    pricingType: { name: string, completed: boolean }[];
}

export interface features {
    name: string;
    completed: boolean;
    featuresType: { name: string, completed: boolean }[];
}

export interface chipArr {
    name: string;
    active: boolean;
}

export interface aisArr {
    url: string;
    img: string;
    name: string;
    plan_badge?: string;
    vnpai: string;
    verified?: boolean;
    likes?: number;
    descrip: string;
    feetype?: any;
    api?: number;
    hashtag?: string[];
}

export interface PeriodicElement {
    name?:string;
    all_data:string;
    pic: string;
    role: string;
    date: string;
    type: string;
    amount: string | number;
    country: string;
    state: string;
    city: string;
    phone: string | number;
    status?: { name: string, type: string } | string;
}