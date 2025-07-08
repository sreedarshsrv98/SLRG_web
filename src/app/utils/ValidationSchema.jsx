import * as Yup from "yup";


export const MobileValidationSchema = Yup.object({
    mobile: Yup.string()
    .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
    .required('Mobile number is required'),
 
});


export const NewRegisterValidationSchema = Yup.object({
  companyName: Yup.string()
    .min(2, 'Company name must be at least 2 characters')
    .required('Company name is required'),

  companyType: Yup.string()
    .required('Company type is required'),

  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
    .required('Mobile number is required'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  district: Yup.string()
    .required('District is required'),

  localbody: Yup.string()
    .required('Local body is required'),
});