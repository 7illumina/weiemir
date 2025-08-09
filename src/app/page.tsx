"use client";

import { motion } from "framer-motion";
import { FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl py-16 md:py-24">
      {/* Hero */}
      <section id="home" className="min-h-[60vh] flex flex-col justify-center gap-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Hey, I’m <span className="text-gradient">Emir</span> 👋 —
          <span className="text-gradient"> Full‑stack Developer</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="text-lg text-white/70 max-w-prose"
        >
          I design and build playful, fast web experiences with Next.js, animations that
          feel buttery, and micro-interactions that spark joy.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base md:text-lg font-semibold text-black shadow-[0_8px_30px_rgba(255,127,80,.25)]"
            style={{
              background:
                "linear-gradient(90deg, var(--accent-orange), var(--accent-blue), var(--accent-purple))",
            }}
          >
            Meet me
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-base font-medium hover:bg-white/5 transition"
          >
            Contact
          </motion.a>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <SectionTitle title="About me" kicker="fun facts" />
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {[
            {
              title: "Coffee-powered",
              text: "Caffeine in, code out. Also probably listening to lo-fi remixes.",
            },
            {
              title: "Animation enjoyer",
              text: "Micro-interactions > everything. If it feels good, it is good.",
            },
            {
              title: "TypeScript stan",
              text: "Safety AND vibes. I like both.",
            },
            {
              title: "Builder at heart",
              text: "I ship. Side projects, experiments, tiny tools.",
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="glass rounded-xl p-4"
            >
              <div className="text-base font-semibold">{card.title}</div>
              <div className="text-sm text-white/70 mt-1">{card.text}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="py-24">
        <SectionTitle title="Highlights" kicker="things I’m proud of" />
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {[
            "Won a local hackathon with a realtime collab app",
            "Open-sourced a motion library snippet",
            "Shipped a 99/100 Lighthouse portfolio",
            "Designed a playful brand system",
          ].map((h, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="glass rounded-xl p-4"
            >
              <span className="text-gradient font-semibold">★</span> {h}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <SectionTitle title="Contact" kicker="say hi" />
        <div className="mt-6 flex items-center gap-3">
          <a
            href="https://instagram.com/7illumina"
            target="_blank"
            className="glass rounded-full px-4 py-2 inline-flex items-center gap-2 hover:bg-white/10 transition"
          >
            <FaInstagram size={18} /> Instagram
          </a>
          <a
            href="https://github.com/7illumina"
            target="_blank"
            className="glass rounded-full px-4 py-2 inline-flex items-center gap-2 hover:bg-white/10 transition"
          >
            <FaGithub size={18} /> GitHub
          </a>
          <a
            href="https://discord.com/users/1403739245373296792"
            target="_blank"
            className="glass rounded-full px-4 py-2 inline-flex items-center gap-2 hover:bg-white/10 transition"
          >
            <FaDiscord size={18} /> Discord
          </a>
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ title, kicker }: { title: string; kicker: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-xs uppercase tracking-widest text-white/50">{kicker}</div>
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
    </div>
  );
}



