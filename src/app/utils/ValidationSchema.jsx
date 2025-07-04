import * as Yup from "yup";


export const MobileValidationSchema = Yup.object({
    mobile: Yup.string()
    .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
    .required('Mobile number is required'),
 
});