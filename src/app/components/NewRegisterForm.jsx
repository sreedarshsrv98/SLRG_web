

import NewRegisterFormDetails from './ragister/newregisterformDetails';
import RegisterLeftContent from './ragister/ragisterforms';



export default function NewRegisterForm() {
  return (

    <div
      className="mx-auto mt-4 w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover min-h-[600px]"
      style={{
        backgroundImage: "url('/bg_circle.svg')",
        backgroundPosition: 'calc(100% - 26%) calc(100% - 0%)',
        backgroundSize: '30%',
      }}
    >


      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column - 7/12 */}
        <div className="w-full md:w-8/12 flex flex-col ">

          <RegisterLeftContent />

        </div>

        {/* Right Column - 5/12 */}
        <div className="w-full md:w-4/12 p-4 flex  mt-4 md:mt-0 ">
          <div className="max-w-sm mx-auto text-center">
            <NewRegisterFormDetails />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 px-4 md:hidden">
          {[
            { label: 'Healthcare', icon: '/ecg.svg', count: '1000' },
            { label: 'Educational', icon: '/school.svg', count: '1000' },
            { label: 'Hospitality', icon: '/holiday_village.svg', count: '1000' },
            { label: 'Common Establishments', icon: '/home_work.svg', count: '1000' },
          ].map(({ label, icon, count }, index) => (
            <div
              key={index}
              className="w-[45%] min-w-[150px] rounded-lg p-2.5 bg-[rgba(255,255,255,0.6)] shadow-[4px_4px_20px_rgba(3,145,35,0.1)] backdrop-blur-md"
            >
              <div className="flex flex-col items-center">
                <img src={icon} alt={label} className="w-8 h-8 mb-2" />
                <div className="text-[16px] leading-[25px] font-bold text-center mb-1 text-[#5A5A5A] font-mulish">
                  {label}
                </div>

                <div className="text-[18px] font-bold font-mulish text-[#039123]">{count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}