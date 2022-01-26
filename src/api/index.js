import axios from 'axios';

const url = 'https://61eef491d593d20017dbb246.mockapi.io';

export const callApiGet = async (params) => {
  try {
    const res = await axios.get(`${url}${params}`);
    return res.data;
  } catch (e) {
    return { success: false, error: e.response.message };
  }
};

export const callApiPost = async (action, params) => {
  try {
    const res = await axios.post(`${url}/${action}`, params);
    return res.data;
  } catch (e) {
    return { success: false, error: e.response.message };
  }
};

export const callApiPut = async (action, selector, params) => {
  try {
    const res = await axios.put(`${url}/${action}/${selector}`, params);
    return res.data;
  } catch (e) {
    return { success: false, error: e.response.message };
  }
};

export const callApiDelete = async (action, selector) => {
  try {
    const res = await axios.delete(`${url}/${action}/${selector}`);
    return res.data;
  } catch (e) {
    return { success: false, error: e.response.message };
  }
};
