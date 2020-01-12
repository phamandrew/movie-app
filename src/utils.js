import Axios from 'axios';


const createRequest = () => {
    let cancel;

    return async (query) => {
        // Check if we made a request
        if (cancel) {

            // Cancel the previously made request before new request is made
            // console.log("IF CANCEL WORK" + cancel)
            cancel.cancel();
        }
        // Create  New Cancel Token
        cancel = Axios.CancelToken.source()
        
        try {

            const res = await Axios(query, {cancelToken: cancel.token})
            const result = res.data.results;

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

export const search = createRequest()

