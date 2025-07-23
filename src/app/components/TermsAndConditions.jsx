import React from "react";

function TermsAndConditions() {
    return (
        <div className="max-w-[1228px] mx-auto py-5 px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Image on Right for Desktop, Top for Mobile */}
                {/* <div className="order-1 md:order-2 col-span-12 md:col-span-4">
                    <div className="w-full h-[337px] rounded-[9.49px] bg-[#03912314] flex items-center justify-center">
                        <img
                            src="/swachhata-leaf-rating-booklet.svg"
                            alt="Suchitwa Mission Graphic"
                            className="w-full h-full object-cover rounded-[9.49px]"
                        />
                    </div>
                </div> */}

                {/* Terms Content */}
                <div className="order-2 md:order-1 col-span-12 md:col-span-12 flex flex-col gap-6">
                    <h1 className="text-[#01295A] text-3xl font-bold font-[Mulish]">Terms and Conditions</h1>
                    <p className="text-[#5A5A5A] text-base leading-[26px] font-[Mulish]">
                        <strong>Effective Date:</strong> [Insert Date]
                    </p>
                    <div className="font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A] mb-4">
                        Welcome to the Suchitwa Mission Application (“App”), developed and maintained by
                        Suchitwa Mission, under the Local Self Government Department (LSGD), Government
                        of Kerala. By accessing or using this App, you agree to comply with and be bound by the
                        following Terms and Conditions.
                    </div>

                    <h2 className="text-[#01295A] text-xl font-bold mt-4">1. Purpose of the App</h2>
                     <div className="font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A] mb-4">
                        The Suchitwa Mission App is designed to facilitate effective monitoring, reporting, and
                        management of various activities and schemes related to solid and liquid waste
                        management, sanitation, and other cleanliness initiatives across Local Self Government
                        Institutions (LSGIs) in Kerala.                    </div>

                    <h2 className="text-[#01295A] text-xl font-bold mt-4">2. User Eligibility and Access</h2>
                    <ul className="list-disc list-inside space-y-2 font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A]">
                        <li>This App is primarily intended for use by registered officials, functionaries, and authorized personnel associated with LSGIs.</li>
                        <li>Unauthorized access or use by individuals not designated by Suchitwa Mission is strictly prohibited.</li>
                    </ul>

                    <h2 className="text-[#01295A] text-xl font-bold mt-4">3. User Responsibilities</h2>
                    <ul className="list-disc list-inside space-y-2 font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A]">
                        <li>Users are responsible for ensuring the accuracy and completeness of the data entered.</li>
                        <li>Misrepresentation or manipulation of data is a violation and may attract disciplinary or legal action.</li>
                        <li>Login credentials must be kept confidential. Sharing credentials is strictly prohibited.</li>
                    </ul>

                    <h2 className="text-[#01295A] text-xl font-bold mt-4">4. Data Collection and Usage</h2>
                    <ul className="list-disc list-inside space-y-2 font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A]">
                        <li>The App may collect personal and official information including names, contact
                            details, GPS locations, photographs, and waste-related data.</li>
                        <li>Data collected through this App is intended solely for internal monitoring, evaluation,
                            planning, and reporting purposes of the Suchitwa Mission.</li>
                        <li>Suchitwa Mission reserves the right to use aggregated data for policy-making,
                            analysis, and publications, while ensuring individual privacy.</li>
                    </ul>
                    {/* <p>
                        The App may collect personal and official information including names, contact details, GPS locations, photographs, and waste-related data. This data is intended solely for internal monitoring, evaluation, planning, and reporting purposes. Aggregated data may be used for policy-making and publications.
                    </p> */}

                    <h2 className="text-[#01295A] text-xl font-bold mt-4">5. Data Security and Privacy</h2>
                    <ul className="list-disc list-inside space-y-2 font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A]">
                        <li>All user data is stored securely and handled in accordance with applicable data
                            protection laws.</li>
                        <li>The App implements reasonable security practices to protect against data loss,
                            misuse, or unauthorized access.</li>
                        <li>Users shall not upload any content that violates privacy, copyright, or security of
                            other individuals or institutions.</li>
                    </ul>

                    <h2 className="text-[#01295A] text-xl font-bold mt-4">6. Acceptable Use</h2>
                    <ul className="list-disc list-inside space-y-2 font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A]">
                        <li>Do not use the App for unlawful purposes.</li>
                        <li>Do not transmit malware or try to hack the App.</li>
                        <li>Do not copy, modify, or distribute the App without permission.</li>
                    </ul>

                    <h2 className="text-[#01295A] text-xl font-bold mt-4">7. Disclaimer of Liability</h2>
                         <div className="font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A] mb-4">
                        Suchitwa Mission makes no guarantees regarding uninterrupted operation or data accuracy. It is not liable for any damages from use or inability to use the App.
                    </div>

                    <h2 className="text-[#01295A] text-xl font-bold mt-4">8. Intellectual Property</h2>
                           <div className="font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A] mb-4">
                        All content in the App is property of Suchitwa Mission or its licensors and protected by applicable copyright laws.
                    </div>

                    <h2 className="text-[#01295A] text-xl font-bold mt-4">9. Modifications to the Terms</h2>
                            <div className="font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A] mb-4">
                        Suchitwa Mission reserves the right to revise these Terms and Conditions at any time. Users
                        will be notified of significant changes via in-app notifications or official communications.
                        Continued use of the App implies acceptance of the updated terms.                    </div>

                    <h2 className="text-[#01295A] text-xl font-bold mt-4">10. Termination of Access</h2>
                      <div className="font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A] mb-4">
                        Suchitwa Mission may suspend or terminate user access if there is a breach of these terms
                        or misuse of the App. All data related to terminated accounts will be handled as per the data
                        retention policy.                    </div>

                    <h2 className="text-[#01295A] text-xl font-bold mt-4">11. Governing Law and Jurisdiction</h2>
                       <div className="font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A] mb-4">
                        These Terms shall be governed by and construed in accordance with the laws of India. Any
                        disputes arising shall be subject to the jurisdiction of courts in Thiruvananthapuram,
                        Kerala.                    </div>

                    <h2 className="text-[#01295A] text-xl font-bold mt-4">12. Contact Information</h2>
                       <div className="font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A] mb-4">
                        Suchitwa Mission Headquarters<br />
                        Local Self Government Department<br />
                        Government of Kerala<br />
                        Email: [Insert email]
                    </div>

                    <h2 className="text-[#01295A] text-xl font-bold mt-4">13. Acknowledgment and Acceptance of Terms</h2>
                          <div className="font-[Mulish] font-bold text-[16px] leading-[22px] tracking-[0] text-[#5A5A5A] mb-4">
                        By accessing, installing, or using this App, you expressly acknowledge that you have read
                        and fully understood these Terms and Conditions, including all policies and notices
                        referenced herein. You agree to be bound by them and to comply with all applicable laws
                        and regulations governing the use of the App. If you do not agree to these terms, you must
                        refrain from using the App. Continued use of the App shall constitute your ongoing
                        acceptance of any updates or modifications made to these Terms and Conditions.                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermsAndConditions;
