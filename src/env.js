const ENV = process.env.REACT_APP_ENV;

const getBaseUrl = () => {
    switch(ENV) {
        case 'prod':
            return 'https://api.ataper.com';
        case 'staging':
            return 'https://staging.api.ataper.com';
        default:
            return 'http://localhost:3006';
    }
}

const BASE_URL = getBaseUrl();

export {
    ENV,
    BASE_URL
}