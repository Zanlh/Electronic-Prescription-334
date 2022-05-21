import axios from 'axios';

export const get = async (url, headers = {}) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        ...headers,
      },
    });

    return { ...data };
  } catch (err) {
    return { code: -1 };
  }
};

export const post = async (url, body, headers = {}) => {
  try {
    const { data } = await axios.post(url, body, {
      headers: {
        ...headers,
      },
    });
    console.log('api', data);
    return { ...data };
  } catch (err) {
    return { code: -1 };
  }
};
