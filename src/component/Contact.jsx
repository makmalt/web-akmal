import { Mail, Phone, Linkedin } from "lucide-react";
import BlurText from "../elements/BlurText";

const Contact = () => {
  return (
    <section className="flex flex-col text-center justify-center items-center md:mb-20 mt-10">
      {/* Judul Section */}
      <BlurText
        text="Contact"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl md:text-5xl font-bold text-white"
      />
      <p className="text-slate-300 mb-10">
        Have any question? Get in touch with me.
      </p>

      {/* Card Kontak */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        {/* Email */}
        <a
          href="mailto:makmalthoriq31@gmail.com"
          className="group flex flex-col items-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <Mail className="w-10 h-10 text-white-400 group-hover:scale-110 transition-transform duration-300" />
          <span className="mt-4 text-white font-semibold">
            makmalthoriq31@gmail.com
          </span>
          <p className="text-slate-300 text-sm mt-1">Send me an email</p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/6285183053907"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <Phone className="w-10 h-10 text-green-400 group-hover:scale-110 transition-transform duration-300" />
          <span className="mt-4 text-white font-semibold">
            +62 851-8305-3907
          </span>
          <p className="text-slate-300 text-sm mt-1">Chat me on WhatsApp</p>
        </a>

        {/* Instagram */}
        <a
          href="https://linkedin.com/in/mochammad-akmal-thoriq"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <Linkedin className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
          <span className="mt-4 text-white font-semibold">
            @mochammad-akmal-thoriq
          </span>
          <p className="text-slate-300 text-sm mt-1">Follow my journey</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
