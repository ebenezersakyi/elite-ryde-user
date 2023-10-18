import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { baseURLGeneral } from "../../utils";
import axios from "axios";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

function ContactUs() {
  const { user } = useAuth0();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!name || !email || !message) {
      toast("All fields are required");
      return;
    }
    setLoading(true);
    const messageData = {
      name: name,
      email: email,
      subject: "Help",
      message: message,
    };
    try {
      const response = await axios.post(
        `${baseURLGeneral}/contact-us`,
        messageData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Message sent successfully:", response.data);
        toast.success(response.data.message);
        setLoading(false);
        return response.data;
      } else {
        console.error("Failed to send message:", response.data);
        toast.error(response.data.message);
        setLoading(false);
        return null;
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setLoading(false);
      return null;
    }
  };

  return (
    <div>
      <div className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl font-semibold mb-4 text-[#FFF]">
            Contact Us
          </h1>
          <div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-[#FFF] font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-[#FFF] text-[#FFF] bg-[#fff0] rounded-md p-2 w-full"
                placeholder="Your Name"
                required
                defaultValue={user?.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[#FFF] font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-[#FFF] text-[#FFF] bg-[#fff0] rounded-md p-2 w-full"
                placeholder="Your Email"
                required
                defaultValue={user?.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-[#FFF] font-medium"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="border border-[#FFF] text-[#FFF] bg-[#fff0] rounded-md p-2 w-full h-32"
                placeholder="Your Message"
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              //   type="submit"
              onClick={submit}
              className="bg-blue-500 border border-[#FFF] text-[#FFF] py-2 px-4 rounded-md hover:bg-blue-700"
            >
              {loading ? <ClipLoader size={15} color="white" /> : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
