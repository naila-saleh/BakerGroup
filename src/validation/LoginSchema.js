import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup.string().required('Email is required').email('Email is not valid'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and must be at least 8 characters long")
})