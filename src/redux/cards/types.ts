export enum Status {
    LOADING = 'pending',   
    SUCCESS = 'filled',
    ERROR = 'failure'
}

export type Card = {
    key: string;
    id: string;
    payoutLevel: string;
    index: number;
    partners: [];
}

export interface CardsState {
    items: Card[];
    status: Status;
}