import axios from 'axios';

const prefixUrl = "http://electronic-prescription-system.herokuapp.com/api";

export const get = async (url, headers = {}) => {
  try {
    console.log(prefixUrl + url);
    const { data } = await axios.get(prefixUrl + url, {
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
    const { data } = await axios.post(prefixUrl + url, body, {
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
