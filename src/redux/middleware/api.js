// import { apiService } from "../../services/ApiService";
import * as actions from "../actions-reducers/apiActions";

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== actions.apiCallBegan.type) return next(action);

        const { url, method, data, onStart, onSuccess, onError } = action.payload;

        onStart && dispatch({ type: onStart });

        next(action);

        try {
            // const response = await apiService
            //     .authenticated()
            //     .request({ url, method, data })
            //     .then(({ data }) => data);
            // dispatch(actions.apiCallSuccess(response));
            // onSuccess && dispatch({ type: onSuccess, payload: response });
        } catch ({ message }) {
            dispatch(actions.apiCallFailed(message));

            onError && dispatch({ type: onError, payload: message });
        }
    };

export default api;
