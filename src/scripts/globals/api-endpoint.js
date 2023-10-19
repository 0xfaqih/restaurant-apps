import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/${CONFIG.REVIEW}`,
};

export default API_ENDPOINT;
