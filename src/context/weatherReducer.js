export const initialState = {
    weather: null,
    forecast: [],
    loading: false,
    error: null,
};

export function weatherReducer(state, action) {
    switch (action.type) {
        case "FETCH_START":
            return {
                ...state,
                loading: true,
                    error: null, // 🔥 clear previous error
            };


        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                    weather: action.payload.weather,
                    forecast: action.payload.forecast,
                    error: null, // 🔥 ensure error cleared
            };


        case "FETCH_ERROR":
            return {
                ...state,
                loading: false,
                    error: action.payload,
                    weather: null, // ✅ clear old data
                    forecast: [], // ✅ clear old data
            };


        default:
            return state;
    }
}