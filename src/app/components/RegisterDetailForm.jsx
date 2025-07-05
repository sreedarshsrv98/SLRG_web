

import RegisterLeftContent from './ragister/ragisterforms';

import RegisterVerifyOtp from './ragister/registerverifyOtp';

export default function RegisterDetailsForm() {
  return (
    <div className="mx-auto mt-4 w-full max-w-[1380px] px-4 sm:px-6 lg:px-8">

      <div className="flex flex-col md:flex-row gap-6">

        <div className="w-full flex flex-col items-center-mobile">
          <div className="w-full max-w-md">
            <RegisterLeftContent />
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4 flex justify-center-mobile mt-4 md:mt-0 relative">
          <div className=" max-w-sm text-center-mobile mx-auto">
            <RegisterVerifyOtp />
          </div>
        </div>


      </div>
    </div>
  );
}