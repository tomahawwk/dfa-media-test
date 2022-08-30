import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Card } from './types';

export const fetchCards = createAsyncThunk<Card[]>(
  'cards/fetchCards',
  async () => {
    const { data } = await axios.get<Card[]>(`https://630d3311b37c364eb7016ec6.mockapi.io/dfa-cards`);
    return data;
  },
);