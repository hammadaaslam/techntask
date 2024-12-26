import { ADD_USER,LOG_OUT } from "./userType"

export const addUser = (payload) => {
    return{
        type:ADD_USER,
        payload:payload
    }
}


export const loginUser = (email, password, navigation) => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://admin.workoutlibrary.org/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
  
        const responseJson = await response.json();
  
        if (responseJson?.status === "success") {
          console.log('Login successful');
          console.log('User data => ', JSON.stringify(responseJson?.data));
          console.log('Access token =>', JSON.stringify(responseJson?.access_token));
  
          // Now, you can dispatch the data to the Redux store
          dispatch(addUser({
            // id:responseJson?.data?.id,
            name:responseJson?.data?.name,
            email:email,
            password:password,
            // email_verified:null,
            // phone:responseJson?.data?.phone,
            // is_admin:0,
            // premium:1,
            // created_at:responseJson?.data?.created_at,
            // updated_at:responseJson?.data?.updated_at,
            token:responseJson?.access_token
        }))
  
          // You can also dispatch other actions or perform additional logic here
  
        //   navigation.navigate(NavigationStrings.Home);
        } else {
          console.log('Login failed');
          alert('Login Failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
        // Handle the error as needed
        // You might want to dispatch an error action or show an error message
      }
    };
  };






export const logOut = (payload) => {

    return {

        type:LOG_OUT,
        payload:payload
    }
}