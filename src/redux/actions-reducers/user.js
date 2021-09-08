import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "currentUser",
    initialState: {
        country: null,
        email: "",
        image: null,
        last_login: null,
        name: "",
        phone: "",
    },

    reducers: {
        setUser: (user, { payload }) => {
            Object.assign(user, payload);
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
