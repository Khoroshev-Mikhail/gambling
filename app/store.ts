import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit'

export const moneySlice = createSlice({
    name: 'moneySlice',
    initialState: 1_000_000,
    reducers: {
        decrement(state, action: PayloadAction<number>) {
            return state - action.payload
        },
        increment(state, action: PayloadAction<number>) {
            return state + action.payload
        },
    },
})

export const { decrement, increment } = moneySlice.actions

export const rateSlise = createSlice({
    name: 'rateSlice',
    initialState: 50_000,
    reducers: {
        decrementRate(state, action: PayloadAction<number>) {
            return state - action.payload
        },
        incrementRate(state, action: PayloadAction<number>) {
            return state + action.payload
        },
    },
})
export const { decrementRate, incrementRate } = rateSlise.actions

export const starsSlise = createSlice({
    name: 'starsSlice',
    initialState: 0,
    reducers: {
        decrementStars(state, action: PayloadAction<number>) {
            return state - action.payload
        },
        incrementStars(state, action: PayloadAction<number>) {
            return state + action.payload
        },
    },
})
export const { decrementStars, incrementStars } = starsSlise.actions

export const store = configureStore({
    reducer: {
        money: moneySlice.reducer,
        rate: rateSlise.reducer,
        stars: starsSlise.reducer,     
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch