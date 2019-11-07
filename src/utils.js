import Axios from 'axios';

const create_request = () => {
    let token;

    return async (query) => {
        // Check if we made a request
        if (token) {
            // Cancel the previously made request before new request is made
            token.cancel()
        }
        // Create Cancel Token
        token = Axios.CancelToken.source()
        
        try {
            const res = await Axios(query, {cancelToken: token.token})
            const result = res.data.results
            return result;
        } catch(error) {
            if(Axios.isCancel(error)) {
                // If request was canceled
                console.log('Request Canceled', error.message);
            } else {
                // Errors
                console.log('Error', error.message);
            }
        }
    }
}

export const search = create_request()