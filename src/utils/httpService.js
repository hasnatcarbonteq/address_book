import axios from "axios";
import showToast from './showToast'

axios.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
});

/**
 * interceptors is like a middleware it fire betweeen request and response
 * Further more https://www.sitepoint.com/axios-beginner-guide/
 *
 */
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {

        const expectedError =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedError) {
            console.log(error);
            showToast("An unexpected error occurred.");
        }else {
            showToast(error.response.data.message, "error");
        }

        return Promise.reject(error);
    }
);

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};