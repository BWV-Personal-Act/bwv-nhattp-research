import * as yup from 'yup';

export const backendRegisterSchema = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
  name: yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  nationality: yup.string().optional(),
});

export const backendLoginSchema = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const backendChangePasswordSchema = yup.object({
  oldPassword: yup.string().required('Old password is required'),
  newPassword: yup.string().min(6, 'New password must be at least 6 characters').required('New password is required'),
});