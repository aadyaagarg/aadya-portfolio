import { useEffect, useState, type ChangeEvent, type SubmitEvent } from "react";
import { Mail, MapPin, Link as LinkedinIcon, Send } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PORTFOLIO } from "../data/constants";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => {
      setStatus("");
      setSuccess(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [status]);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: "New Portfolio Contact",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setStatus("Thank you! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800"
    >
      <p className="font-mono text-sm text-gray-600 mb-3">
        &lt;section id="contact"&gt;
      </p>

      <h2 className="text-4xl sm:text-5xl font-extrabold mb-12">
        Let's <span className="text-teal-400">Talk</span>
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <p className="text-gray-400 leading-relaxed mb-8">
            I'm always open to discussing opportunities, collaborations, or
            exciting ideas. Feel free to reach out if you'd like to work
            together or simply connect.
          </p>

          <div className="space-y-5 font-mono text-sm">
            <a
              href={`mailto:${PORTFOLIO.email}`}
              className="group flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors"
            >
              <Mail
                size={18}
                className="text-teal-400 transition-transform group-hover:scale-110"
              />
              {PORTFOLIO.email}
            </a>

            <div className="flex items-center gap-3 text-gray-400">
              <MapPin size={18} className="text-teal-400" />
              {PORTFOLIO.location}
            </div>

            <a
              href={PORTFOLIO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors"
            >
              <LinkedinIcon
                size={18}
                className="text-teal-400 transition-transform group-hover:scale-110"
              />
              {PORTFOLIO.links.linkedin}
            </a>

            <a
              href={PORTFOLIO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-400 hover:text-teal-400 transition-colors"
            >
              <FaGithub
                size={18}
                className="text-teal-400 transition-transform group-hover:scale-110"
              />
              {PORTFOLIO.links.github}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30"
          />
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30"
          />
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about the role, project, or opportunity..."
            className="w-full resize-none rounded-xl border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30"
          />

          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 rounded-lg border border-teal-400 px-8 py-4 font-bold text-teal-400 transition-all duration-300 hover:bg-teal-400 hover:text-gray-950 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send size={16} />
          </button>

          {status && (
            <div
              className={`rounded-lg border px-4 py-3 text-sm font-mono ${
                success
                  ? "border-green-500/40 bg-green-500/10 text-green-400"
                  : "border-red-500/40 bg-red-500/10 text-red-400"
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
      <p className="mt-12 font-mono text-sm text-gray-600">&lt;/section&gt;</p>
    </section>
  );
}
