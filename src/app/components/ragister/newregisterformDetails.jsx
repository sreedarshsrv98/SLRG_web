
'use client';


import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RegisterStep1Validation, RegisterStep2Validation } from '@/app/utils/ValidationSchema';
import { CloudCog } from 'lucide-react';




export default function NewRegisterFormDetails() {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleFinalSubmit = (values) => {
    const combinedData = { ...formData, ...values };
    console.log('Merged data for API:', combinedData);


  };


  return (


    <>



      <div className="w-[360px] rounded-[27px] bg-white shadow-[0px_4px_25px_rgba(3,145,35,0.2)] py-5 px-4">
        <div className="flex flex-col h-full space-y-4">
          <div className="text-center text-[18px] font-bold text-[rgba(26,26,26,1)] font-[Mulish]">
            {step === 1 ? 'New Registration' : 'Additional Details'}
          </div>

          {step === 1 && (
            <Formik
              initialValues={{
                companyName: '',
                companyType: '',
                mobile: '',
                email: '',
                district: '',
                localbody: '',
              }}
              validationSchema={RegisterStep1Validation}
              onSubmit={(values) => {
                setFormData(values);
                setStep(2);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col space-y-6 items-center">
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
                          <option value={opt} key={opt}>
                            {opt}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name={select.name}
                        component="div"
                        className="text-red-500 text-sm mt-1 text-center"
                      />
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-[300px] h-[44px] rounded-[6px] bg-green-700 text-white"
                  >
                    {isSubmitting ? 'Processing...' : 'Continue'}
                  </button>
                </Form>
              )}
            </Formik>
          )}

          {step === 2 && (
            <Formik
              initialValues={{
                centerNumber: '',
                wardNumber: '',
                localSelfGovt: '',
                selfGovtType: '',
                workerName: '',
                workerPhone: '',
                workerEmail: '',
              }}
              validationSchema={RegisterStep2Validation}
              onSubmit={handleFinalSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col space-y-6 items-center">
                  {/* ✅ Select Box: Ward Number */}
                  <div className="relative w-[300px]">
                    <Field
                      as="select"
                      name="wardNumber"
                      className="w-full rounded-md px-4 h-[44px] text-base font-semibold text-gray-600 border border-green-700/20 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
                    >
                      <option value="">Ward Number</option>
                      {['10', '20', '30'].map((opt) => (
                        <option value={opt} key={opt}>
                          {opt}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="wardNumber"
                      component="div"
                      className="text-red-500 text-sm mt-1 text-center"
                    />
                  </div>

                  {/* ✅ Text Inputs */}
                  {[
                    { name: 'centerNumber', placeholder: 'Center Number' },
                    { name: 'localSelfGovt', placeholder: 'Local Self-Government' },
                    { name: 'selfGovtType', placeholder: 'Type of Local Self-Government' },
                    { name: 'workerName', placeholder: 'Name of the Anganwadi Worker' },
                    { name: 'workerPhone', placeholder: 'Worker’s Phone Number' },
                    { name: 'workerEmail', placeholder: 'Worker’s Email Address' },
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-[300px] h-[44px] rounded-[6px] bg-green-700 text-white"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit All'}
                  </button>
                </Form>
              )}
            </Formik>
          )}

        </div>
      </div>

 

    </>

  )

}