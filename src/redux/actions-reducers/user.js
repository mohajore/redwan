import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'currentUser',
    initialState: { country_id: 0, phone: '', name_en: '', name_ar: '', email: '', image: null, language: 'en', updated_at: '', created_at: '', id: null, country: null },

    reducers: {
        setUser: (user, { payload }) => {
            Object.assign(user, payload);
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
