import LeadForm from "./LeadForm";

// components/Banner.jsx
export default function Banner() {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center bg-cover bg-center bg-no-repeat relative min-h-screen" style={{backgroundImage: "url('/img/Spouse-Visa.jpg')"}}>
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-xl text-[#000080] font-semibold mb-2">WE ARE</h2>
                    <h1 className="text-4xl text-black font-bold mb-4">
                        Reliable &<br/>
                        Experienced UK<br/>
                        Immigration<br/>
                        Lawyers
                    </h1>
                    <p className="mb-4 text-black">
                    We are a team of experienced immigration lawyers that care about your future.
                    </p>
                    <p className="mb-6 text-black">
                    Call us on <span className="text-yellow-500">+44 77 3969 9968</span> for immediate help and assistance with your situation. We're here to help you in person, via the phone or online.
                    </p>
                    <button className="bg-yellow-400 text-navy-900 font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
                    Contact Us
                    </button>
                </div>
                <div className="md:w-1/2">
                    <div className="bg-[#000080]/50 rounded-lg px-6 shadow-lg">
                        <LeadForm/>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  