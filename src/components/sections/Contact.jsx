import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";


function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        }
      )

      .then(() => {
        setStatus(
          "Thanks for reaching out! I'll get back to you soon."
        );
        e.target.reset();
      })

      .catch(() => {
        setStatus(
          "Something went wrong. Please try again."
        );
      })

      .finally(() => {
        setLoading(false);
      });
  };

  const contactCards = [
    {
      icon: <FaEnvelope />,
      value: "malith.perera2021@gmail.com",
      link: "mailto:malith.perera2021@gmail.com",
    },

    {
      icon: <FaPhone />,
      value: "+94 76 986 7801",
      link: "tel:+94769867801",
    },

    {
      icon: <FaMapMarkerAlt />,
      value: "Panadura, Sri Lanka",
      link: "https://maps.google.com/?q=Panadura,Sri Lanka",
    },
  ];


  return (
    <section
      id="contact"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="
            text-4xl
            font-bold
            text-center
          "
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          transition={{delay:0.2}}
          className="
            text-gray-400
            text-center
            mt-6
            max-w-2xl
            mx-auto
          "
        >
          I'm currently seeking Software Engineering internship
          and entry-level opportunities. Feel free to contact me
          for collaboration or opportunities.
        </motion.p>

        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            mt-16
            items-start
          "
        >

          <motion.div
            initial={{opacity:0,x:-40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className="space-y-6"
          >
            {
              contactCards.map((item)=>(
                <a
                  key={item.value}
                  href={item.link}
                  target={
                    item.value.includes("Panadura")
                    ? "_blank"
                    : undefined
                  }
                  rel="noopener noreferrer"

                  className="
                    flex
                    items-center
                    gap-5
                    bg-slate-900
                    border
                    border-slate-800
                    rounded-xl
                    p-4
                    hover:border-cyan-400
                    hover:-translate-y-1
                    transition-all
                  "
                >

                  <div
                    className="
                      text-cyan-400
                      text-2xl
                    "
                  >
                    {item.icon}
                  </div>

                  <p className="text-gray-300 text-sm">
                    {item.value}
                  </p>

                </a>
              ))}
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{opacity:0,x:40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-8
              space-y-6
            "
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="
                w-full
                bg-slate-950
                border
                border-slate-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-cyan-400
              "
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="
                w-full
                bg-slate-950
                border
                border-slate-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                focus:border-cyan-400
              "
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="
                w-full
                bg-slate-950
                border
                border-slate-700
                rounded-lg
                px-4
                py-3
                text-white
                outline-none
                resize-none
                focus:border-cyan-400
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-cyan-500
                text-slate-950
                font-semibold
                py-3
                rounded-lg
                hover:bg-cyan-400
                disabled:opacity-50
                transition
              "
            >
              {
                loading
                ? "Sending..."
                : "Send Message"
              }
            </button>

            {
              status && (
                <p
                  className="
                    text-center
                    text-cyan-400
                    text-sm
                  "
                >
                  {status}
                </p>
              )
            }
          </motion.form>
        </div>
      </div>
    </section>
  );
}


export default Contact;