import axios from 'axios';
import {USER_ROUTES} from "../assets/constants/routes";
import * as SecureStore from "expo-secure-store";

exports.validateToken = async (token) => {

        let config = {
            method: 'get',
            url: USER_ROUTES.VALIDATE,
            headers: {
                'Authorization': `Bearer ${token}`}
        };
        axios(config)
            .then(function (response) {
                console.log('Authenticated',response.data);
            })
            .catch(function (error) {
                console.log('Not Authenticated',error.response.data.authenticated);
                return error.response.data.authenticated ==='true';
            });
};

exports.getToken = async () => {
    return SecureStore.getItemAsync('token');
}