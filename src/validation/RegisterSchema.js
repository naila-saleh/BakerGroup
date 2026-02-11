import * as yup from "prop-types";

export const registerSchema = yup.object({
    userName: yup.string().required('User Name is required').min(3, "User Name must be at least 3 characters long")
        .matches(/^[a-zA-Z0-9_.]+$/, "User Name must contain only letters, numbers, dots and underscores"),
    fullName: yup.string().required('Full Name is required'),
    phoneNumber: yup.string().required('Phone Number is required'),
    email: yup.string().required('Email is required').email('Email is not valid'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character")
})