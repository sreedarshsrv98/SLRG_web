
'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NewRegisterValidationSchema } from '@/app/utils/ValidationSchema';




export default function NewRegisterFormDetails() {





  return (


    <>
     <div className="absolute top-1/2 left-[37%] -translate-x-1/2 -translate-y-1/2 right-[80px] w-[360px] rounded-[27px] bg-white shadow-[0px_4px_25px_rgba(3,145,35,0.2)] py-5 px-4">
  <div className="flex flex-col h-full space-y-4">

    <div className="text-center text-[18px] leading-[25px] tracking-[0] font-bold text-[rgba(26,26,26,1)] font-[Mulish]">
      New Registration
    </div>

    <Formik
      initialValues={{
        companyName: '',
        companyType: '',
        mobile: '',
        email: '',
        district: '',
        localbody: '',
      }}
      validationSchema={NewRegisterValidationSchema} // Replace with actual schema
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className="flex flex-col space-y-6 items-center">

          {/* Text Inputs */}
          {[
            { name: 'companyName', placeholder: 'Name of Company' },
            { name: 'mobile', placeholder: 'Mobile Number' },
            { name: 'email', placeholder: 'Email' },
          ].map((field) => (
            <div key={field.name} className="w-[300px]">
              <Field
                type="text"
                name={field.name}
                placeholder={field.placeholder}
 className="flex-grow min-w-0 w-full sm:max-w-[18rem] rounded-md px-4 py-3 text-base font-semibold text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 border border-green-700/20"                
              />
              <ErrorMessage
                name={field.name}
                component="div"
                className="text-red-500 text-sm mt-1 text-center"
              />
            </div>
          ))}

          {/* Select Boxes */}
          {[
            {
              name: 'companyType',
              label: 'Company Type',
              options: ['Hospitality', 'Educational', 'Commercial'],
            },
            {
              name: 'district',
              label: 'District',
              options: ['District A', 'District B', 'District C'],
            },
            {
              name: 'localbody',
              label: 'Local Body',
              options: ['Panchayat', 'Municipality', 'Corporation'],
            },
          ].map((select) => (
            <div key={select.name} className="relative w-[300px]">
              <Field
                as="select"
                name={select.name}
                className="w-full rounded-md px-4 h-[44px] text-base font-semibold text-gray-600 border border-green-700/20 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
              >
                <option value="">{select.label}</option>
                {select.options.map((opt) => (
                  <option value={opt.toLowerCase()} key={opt}>
                    {opt}
                  </option>
                ))}
              </Field>
              <img
                src="/Rectangle 657.svg"
                alt="Dropdown Icon"
                className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-4"
              />
              <ErrorMessage
                name={select.name}
                component="div"
                className="text-red-500 text-sm mt-1 text-center"
              />
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-[300px] h-[44px] rounded-[6px] bg-[rgba(3,145,35,1)] text-white text-[16px] font-normal"
          >
            {isSubmitting ? 'Processing...' : 'Continue'}
          </button>
        </Form>
      )}
    </Formik>
  </div>
</div>

    </>

  )

}