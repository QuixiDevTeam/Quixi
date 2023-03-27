
const BASE_URL = 'https://11ed-2402-d000-a400-1565-19da-3c38-a0c6-7b13.in.ngrok.io'+'/api';


export const USER_ROUTES = {
    SIGNUP: `${BASE_URL}/users/signup`,
    LOGIN: `${BASE_URL}/users/login`,
    FIND: `${BASE_URL}/users`,
    UPDATE: (id) => `${BASE_URL}/users/${id}`,
    DELETE: (id) => `${BASE_URL}/users/${id}`,
    VALIDATE: `${BASE_URL}/users/validate`
};

export const GROUP_ROUTES = {
    CREATE: `${BASE_URL}/groups`,
    FIND: `${BASE_URL}/groups`,
    FIND_BY_ID: (id) => `${BASE_URL}/groups/${id}`,
    FIND_BY_USER_ID: (id) =>`${BASE_URL}/groups/${id}`,
    UPDATE: (id) => `${BASE_URL}/groups/${id}`,
    DELETE: (id) => `${BASE_URL}/groups/${id}`,
};

export const EXPENSE_ROUTES = {
    CREATE: `${BASE_URL}/expenses`,
    FIND_ALL: `${BASE_URL}/expenses`,
    FIND_BY_ID: (id) => `${BASE_URL}/expenses/${id}`,
    UPDATE_BY_ID: (id) => `${BASE_URL}/expenses/${id}`,
    DELETE_BY_ID: (id) => `${BASE_URL}/expenses/${id}`,
    TRANSACTION: {
        CREATE: (id) => `${BASE_URL}/expenses/${id}/transaction`,
        FIND_ALL: (id) => `${BASE_URL}/expenses/${id}/transaction`,
        FIND_BY_ID: (id, transactionId) => `${BASE_URL}/expenses/${id}/transaction/${transactionId}`,
        FIND_PENDING_TRANSACTIONS_BY_USER_ID: (id) => `${BASE_URL}/transactions/pending/${id}`,
        UPDATE_BY_ID: (id, transactionId) => `${BASE_URL}/expenses/${id}/transaction/${transactionId}`,
        DELETE_BY_ID: (id, transactionId) => `${BASE_URL}/expenses/${id}/transaction/${transactionId}`,
    },
};
