export const hasMinimumLength = (password: string) => password.length >= 12;
export const hasNumber = (password: string) => /\d/.test(password);
export const hasLowercase = (password: string) => /[a-z]/.test(password);
export const hasUppercase = (password: string) => /[A-Z]/.test(password);
export const hasSpecialChar = (password: string) => /[!@#$%^&*(),.?":{}|<>]/.test(password);

export const simulatePasswordChangeRequest = async (password: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const isSuccess = Math.random() < 0.8;
    return isSuccess;
};
