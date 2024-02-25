import React, { useState } from "react";
import { hasLowercase, hasMinimumLength, hasNumber, hasSpecialChar, hasUppercase, simulatePasswordChangeRequest } from "../../../helpers/regexp";
import PasswordCriteriaChecker from "./passwordCriteriaChecker";
import SubmitButton from "./submitButton";
import PasswordField from "./passwordField";

interface Payload {
    password: string;
    confirmPassword: string;
}

export default function PasswordForm() {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const isSubmitDisabled = isLoading || password !== confirmPassword ||
        !(
            hasMinimumLength(password, 12) &&
            hasNumber(password) &&
            hasLowercase(password) &&
            hasUppercase(password) &&
            hasSpecialChar(password)
        );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const payload: Payload = {
                password,
                confirmPassword
            };
            const isSuccess = await simulatePasswordChangeRequest(payload.password);
            if (isSuccess) {
                console.info("Password changed");
            } else {
                throw new Error("Request failed");
            }
        } catch (error) {
            console.error("Error changing password");
        } finally {
            setIsLoading(false);
        }
    };

    return <>
        <h1>Password Reset</h1>
        <form className="password-form" onSubmit={handleSubmit}>
            <PasswordField
                value={password}
                onChange={setPassword}
                placeholder="Password"
                type="password"
            />
            <PasswordCriteriaChecker password={password} />
            <PasswordField
                value={confirmPassword}
                onChange={setConfirmPassword}
                placeholder="Confirm Password"
                type="password"
            />
            <SubmitButton isDisabled={isSubmitDisabled} isLoading={isLoading} />
        </form>
    </>
}
