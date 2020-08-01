const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8081'
  : 'https://nintendoflix.herokuapp.com';

export default {
  URL_BACKEND_TOP,
};
