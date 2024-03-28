import axios from 'axios';
export default {
    get: async function (endpoint, token) {
        try {
            const url = `${process.env.PanelUrlApi}/${endpoint}`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    post: async function (endpoint, data, token) {
        try {
            const url = `${process.env.PanelUrlApi}/${endpoint}`;

            // Create a new FormData object
            const formData = new FormData();

            // Append each key-value pair from the data object to the FormData
            for (const key in data) {
                formData.append(key, data[key]);
            }

            const response = await axios.post(url, formData, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data
                }
            });

            return response.data;
            
        } catch (error) {
            throw error;
        }
    }

}

