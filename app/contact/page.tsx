import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Spacer */}
      <div className="h-24 bg-white" />

      <main>
    
        {/* Contact Info & Form Grid */}
        <section className="py-24">
          <Container>
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Left - Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-4xl font-bold text-[#0d2a1b] mb-12">Contact Info</h2>

                {/* Phone */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                      <FaPhone className="text-2xl text-accent" />
                    </div>
                    <p className="font-bold text-[#0d2a1b] text-sm uppercase tracking-widest">Phone</p>
                  </div>
                  <p className="text-gray-700 text-lg font-semibold">0407 469 730</p>
                  {/* <p className="text-gray-500 text-sm mt-1">Available during business hours</p> */}
                </div>

                {/* Email */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                      <FaEnvelope className="text-2xl text-accent" />
                    </div>
                    <p className="font-bold text-[#0d2a1b] text-sm uppercase tracking-widest">Email</p>
                  </div>
                  <p className="text-gray-700 text-lg font-semibold">jack@growthgrain.com.au</p>
                  {/* <p className="text-gray-500 text-sm mt-1">Quick response guaranteed</p> */}
                </div>

                {/* Social Media */}
               
              </div>

              {/* Right - Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-10 shadow-xl">
                  <h3 className="text-3xl font-bold text-[#0d2a1b] mb-10">Send us a Message</h3>

                  <form className="space-y-6">
                    {/* Name Row */}
                    <div className="grid grid-cols-2 gap-6">
                      {/* First Name */}
                      <div>
                        <label className="block text-sm font-bold text-[#0d2a1b] mb-3 uppercase tracking-widest">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="John"
                          className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-all duration-300 text-gray-700"
                          required
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label className="block text-sm font-bold text-[#0d2a1b] mb-3 uppercase tracking-widest">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Doe"
                          className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-all duration-300 text-gray-700"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-bold text-[#0d2a1b] mb-3 uppercase tracking-widest">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-all duration-300 text-gray-700"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-bold text-[#0d2a1b] mb-3 uppercase tracking-widest">
                        Message
                      </label>
                      <textarea
                        placeholder="Tell us about your inquiry..."
                        rows={6}
                        className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-accent focus:outline-none transition-all duration-300 text-gray-700 resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button className="w-full bg-accent text-white hover:bg-accent/90 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                        Send Message
                        <MdSend className="text-xl" />
                      </Button>
                      <p className="text-gray-500 text-sm text-center mt-4">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
