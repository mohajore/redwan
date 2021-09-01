import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: { lang: "en", isLoading: false },

    reducers: {
        setLanguage: (language, action) => {
            language.lang = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
