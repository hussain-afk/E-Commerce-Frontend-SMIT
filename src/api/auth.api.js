import axios from "axios";


export const api = axios.create({
    baseURL: 'https://e-commerce-backend-smit.vercel.app',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

export const registerUser = async (username, email, password) => {
    try {
        const res = await api.post('/api/auth/register', {
            username,
            email,
            password
        })
        return res.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

export const loginUser = async (username, password) => {
    try {
        const res = await api.post('/api/auth/login', {
            username,
            password
        })
        return res.data;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}

export const getMe = async () => {
    try {
        const res = await api.get('/api/auth/profile');
        // setUser(res.data); // Set the user in context after fetching the profile
        return res.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
}

export const logoutUser = async () => {
    try {
        const res = await api.get('/api/auth/logout');
        return res.data;
    } catch (error) {
        console.error('Error logging out user:', error);
        throw error;
    }
}

