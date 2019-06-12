const ENV = process.env.REACT_APP_ENV;

const BASE_URL = (ENV === 'prod') || (ENV === 'dev')
    ? 'http://smarta-api.herokuapp.com' 
    : 'http://localhost:3006';

export {
    ENV,
    BASE_URL
}