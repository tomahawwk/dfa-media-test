
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchCards } from "./asyncActions";
import { CardsState, Status, Card } from './types';

const initialState: CardsState = {
    items: [],
    status: Status.LOADING
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Card[]>) {
            state.items = action.payload;
            state.items.forEach((item, index) => {
                item.index = index;
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCards.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        builder.addCase(fetchCards.fulfilled, (state, action: PayloadAction<Card[]>) => {
            state.status = Status.SUCCESS;
            state.items = action.payload;
        });
        builder.addCase(fetchCards.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    },
})

export const { setItems } = cardsSlice.actions;

export default cardsSlice.reducer;