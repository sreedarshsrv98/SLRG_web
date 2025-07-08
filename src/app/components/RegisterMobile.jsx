

import RegisterLeftContent from './ragister/ragisterforms';
import RegisterMobileNumber from './ragister/registerMobileNumber';

export default function RegisterMobile() {
  return (


    <>
    
    
     <div
              className="mx-auto mt-4 w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover min-h-[600px]"
              style={{
                backgroundImage: "url('/bg_circle.svg')",
                backgroundPosition: 'calc(100% - 26%) calc(100% - 0%)', // ⬅️ Responsive right & bottom offset
                backgroundSize: '30%', // ⬅️ Responsive size
              }}
            >
        
        
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left Column - 7/12 */}
                <div className="w-full md:w-8/12 flex flex-col ">
                  <div className="w-full max-w-md">
                    <RegisterLeftContent />
                  </div>
                </div>
        
                {/* Right Column - 5/12 */}
                <div className="w-full md:w-4/12 p-4 flex  mt-4 md:mt-0 ">
                  <div className="max-w-sm mx-auto text-center">
              <RegisterMobileNumber />
                  </div>
                </div>
              </div>
        
            </div>
    </>

  );
}