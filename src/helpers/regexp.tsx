export const hasMinimumLength = (str: string, minLength: number) => str.length >= minLength;
export const hasNumber = (str: string) => /\d/.test(str);
export const hasLowercase = (str: string) => /[a-z]/.test(str);
export const hasUppercase = (str: string) => /[A-Z]/.test(str);
export const hasSpecialChar = (str: string,) => /[!@#$%^&*(),.?":{}|<>]/.test(str);


export const simulatePasswordChangeRequest = async (password: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const isSuccess = Math.random() < 0.8;
    return isSuccess;
};
