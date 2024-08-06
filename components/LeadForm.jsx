// components/LeadForm.jsx
export default function LeadForm({ id }) {
    return (
      <section id={id} className="py-20 bg-gray-800 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Request a Free Consultation</h2>
          <p className="text-lg mb-8">Fill out the form below to receive a free consultation with our legal experts.</p>
          <form className="flex flex-col space-y-4">
            <input className="p-3 rounded-lg text-gray-900" type="text" placeholder="Your Name" required />
            <input className="p-3 rounded-lg text-gray-900" type="email" placeholder="Your Email" required />
            <textarea className="p-3 rounded-lg text-gray-900" placeholder="Your Message" required />
            <button className="bg-gray-900 text-white py-3 rounded-lg font-bold">Submit</button>
          </form>
        </div>
      </section>
    );
  }
  