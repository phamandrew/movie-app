import Axios from 'axios';

const create_request = () => {
    let token;

    return (query) => {
        // Check if we made a request
        if (token) {
            // Cancel the previously made request before new request is made
            token.cancel()
        }
        // Create Cancel Token
        token = Axios.CancelToken.source()
        
        try {

            await Axios(
                query,
                {
                    cancelToken: cancel.token
                }
            )
            .then((res) => )


            const result = res.data.results;
        }
    }
}