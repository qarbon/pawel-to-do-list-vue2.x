import axios from 'axios';

const url = 'https://61eef491d593d20017dbb246.mockapi.io';

const callApi = async (params) => {
  try {
    const res = await axios.get(`${url}${params}`);
    return res.data;
  } catch (e) {
    return { success: false, error: e.response.message };
  }
};

export default callApi
