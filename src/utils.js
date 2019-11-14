import Axios from 'axios';




// const create_request = () => {
//     let cancel;
//     console.log("What is Cancel" + cancel);

//     return async (query) => {
//         // Check if we made a request
//         if (cancel) {

//             // Cancel the previously made request before new request is made
//             // console.log("IF CANCEL WORK" + cancel)
//             cancel.cancel(console.log("Cancel Wored"));
//         }
//         // Create  New Cancel Token
//         cancel = Axios.CancelToken.source()
        
//         try {

//             console.log("TRY IS FIRED");
//             const res = await Axios(query, {cancelToken: cancel.token})
//             const result = res.data.results;
//             console.log(result);

//             return result;

//         } catch(error) {
//             if(Axios.isCancel(error)) {
//                 // If request was canceled
//                 console.log('Request Canceled', error.message);
//             } else {
//                 // Errors
//                 console.log('Error', error.message);
//             }
//         }
//     }
// }

// export const search = create_request()


const makeRequestCreator = () => {
    let cancel;
  
    return async query => {
      if (cancel) {
        // Cancel the previous request before making a new request
        cancel.cancel(console.log('previous request cancelled'));
      }
      // Create a new CancelToken
      cancel = Axios.CancelToken.source();
      try {
       
        const res = await Axios(query, { cancelToken: cancel.token });
  
        const result = res.data.results;
        console.log(result);
        // Store response
      
  
        return result;
      } catch (error) {
        if (Axios.isCancel(error)) {
          // Handle if request was cancelled
          console.log("Request canceled", error.message);
        } else {
          // Handle usual errors
          console.log("Something went wrong: ", error.message);
        }
      }
    };
  };
  
  export const search = makeRequestCreator();
  