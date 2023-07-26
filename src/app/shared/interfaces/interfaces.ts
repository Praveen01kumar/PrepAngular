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
    date: string;
    type: string;
    amount: string;
    remaining: string;
    price: string;
    usd: string;
    fee: string;
    status: { name: string, type: string };
  }