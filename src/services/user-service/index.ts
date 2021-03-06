import { API_URL } from "configuration/variables";
import { LoginFormValuesTypes, RegisterFormValuesTypes } from "types/stores/user-store";

export default class UserService {
    async onLogin(loginFormValues: LoginFormValuesTypes) {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            body: JSON.stringify(loginFormValues),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        return response.json();
    }

    async onRegister(registerFormValues: RegisterFormValuesTypes) {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            body: JSON.stringify(registerFormValues),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        return response.json();
    }
}