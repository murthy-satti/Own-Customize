import { useState } from "react";
import toast from "react-hot-toast";

const ContactPage = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle submit with Web3Forms
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = {
            access_key: "ae9cc876-6259-48b4-af28-cb12ea4740b0",
            subject: `New Message from StreamVideos website`,
            Name: `${formData.firstName} ${formData.lastName}`,
            Email: formData.email,
            PhoneNumber: formData.phone,
            Message: formData.message,
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formDataToSend),
            });

            const data = await res.json();

            if (data.success) {
                toast.success(" Message sent successfully!", { icon: "✅" });
                setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
            } else {
                toast.error(` Failed: ${data.message || "Something went wrong"}`, { icon: "❌" });
            }
        } catch (error) {
            toast.error(" Error sending message.", { icon: "❌" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen  flex items-center justify-center p-2 md:p-4 pb-4">
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-5 2xl:gap-10">

                <div className="h-fit mt-6 flex flex-col md:flex-row items-center justify-center gap-6 bg-slate-900 p-4 rounded-2xl">
                    <img
                        src="/qr.png"
                        alt="Portfolio QR Code"
                        width={160}
                        height={160}
                        className="rounded-lg shadow-lg"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-white text-lg md:text-xl font-semibold mb-2">Scan to Explore</h2>
                        <p className="text-gray-300 text-sm md:text-base">
                            Scan the QR code to see admins more information and projects.
                        </p>
                    </div>
                </div>


                <div className="bg-[#202020] rounded-2xl p-3 md:p-4 xl:p-8 border border-gray-700 relative gradient-shadow">

                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-white mb-2">Get in touch with us</h1>
                        <p className="text-gray-400 text-sm">
                            We would love to hear from you. Send us a message and we will respond as soon as possible.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                rows={4}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`cursor-pointer w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 
    ${loading
                                    ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                                    : "bg-green-500 text-gray-900 dark:text-white hover:bg-gray-100"
                                }`}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                    </form>




                </div>


            </div>
        </main>
    )
}

export default ContactPage
