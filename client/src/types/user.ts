export type User = {
    id: string;
    email: string;
    displayName: string;
    imageUrl?: string;
    token: string;
}

export type LoginCreds = {
    email: string;
    password: string;
}

export type RegisterCreds = {
    email: string;
    password: string;
    displayName: string;
}