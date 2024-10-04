import axios from "axios";

export const useSignup = () => {

    const signUp = async(data: any) => {
        try {
            const response = await axios.post('/api/signup', data);

            if(response.status === 200) {
                console.log('User registered successfully');
            }

        } catch (error) {
             console.log(error);
        }
    }
    return {
        signUp,
    }
}