import * as Yup from "yup";


export const MobileValidationSchema = Yup.object({
    mobile: Yup.string()
    .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
    .required('Mobile number is required'),
 
});


export const RegisterStep1Validation = Yup.object({
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



export const RegisterStep2Validation = Yup.object({
  centerNumber: Yup.string()
    .min(1, 'Center number is required')
    .required('Center number is required'),

  wardNumber: Yup.string()
    .required('Ward number is required'),

  localSelfGovt: Yup.string()
    .min(2, 'Local Self-Government must be at least 2 characters')
    .required('Local Self-Government is required'),

  selfGovtType: Yup.string()
    .min(2, 'Type of Local Self-Government must be at least 2 characters')
    .required('Type of Local Self-Government is required'),

  workerName: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Worker name is required'),

  workerPhone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Worker phone number is required'),

  workerEmail: Yup.string()
    .email('Invalid email address')
    .required('Worker email is required'),
});
