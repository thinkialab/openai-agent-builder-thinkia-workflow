"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import ChatApp from "./ChatApp";

// --- DATOS DE SERVICIOS ---

const servicesData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-sky-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 21v-1a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v1M20 9a2.5 2.5 0 0 0 -2.5 -2.5h-11a2.5 2.5 0 0 0 -2.5 2.5v4.5a2.5 2.5 0 0 0 2.5 2.5h11a2.5 2.5 0 0 0 2.5 -2.5zM16.5 6.5a1.5 1.5 0 0 0 -3 0M10.5 6.5a1.5 1.5 0 0 0 -3 0" />
      </svg>
    ),

    title: "Odontología General",

    desc: "Prevención, diagnóstico y tratamientos integrales para mantener una salud bucodental óptima.",
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-sky-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.623L16.5 21.75l-.398-1.127a3.375 3.375 0 00-2.456-2.456L12.5 18l1.127-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.127a3.375 3.375 0 002.456 2.456L20.5 18l-1.127.398a3.375 3.375 0 00-2.456 2.456z"
        />
      </svg>
    ),

    title: "Estética Dental",

    desc: "Diseño de sonrisa, carillas y blanqueamientos con resultados naturales y duraderos.",
  },

  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-sky-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),

    title: "Implantes Dentales",

    desc: "Recupera tu sonrisa con soluciones estéticas y funcionales de última generación.",
  },
];

// --- FIN DE DATOS ---

export default function DentalClinicPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    // <-- CAMBIO DE FUENTE: 'font-sans' (Inter) es ahora la fuente base

    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-sky-50 via-white to-sky-100 text-slate-800 font-sans scroll-smooth overflow-hidden">
      {/* FONDO DECORATIVO (Animado) */}

      <motion.div
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-sky-100 rounded-full blur-3xl -z-10 opacity-50"
        animate={{
          x: [0, 50, -30, 0],

          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 60,

          repeat: Infinity,

          repeatType: "reverse",

          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-sky-200 rounded-full blur-3xl -z-10 opacity-30"
        animate={{
          x: [0, -40, 20, 0],

          y: [0, 30, -50, 0],
        }}
        transition={{
          duration: 70,

          repeat: Infinity,

          repeatType: "reverse",

          ease: "linear",
        }}
      />

      {/* HEADER */}

      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-sky-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            href="#"
            // <-- CAMBIO DE FUENTE: 'font-serif' (Lora) para el logo

            className="text-3xl font-extrabold tracking-tight text-sky-600 font-serif"
          >
            Sonrisa<span className="text-sky-800 font-light">Perfecta</span>
          </motion.a>

          {/* NAV usa 'font-sans' (Inter) por defecto */}

          <nav className="hidden md:flex items-center gap-8 font-medium">
            {["Servicios", "Equipo", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-700 hover:text-sky-600 transition relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-sky-500 hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}

            <a
              href="#cita"
              className="bg-sky-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:bg-sky-600 transition-transform transform hover:-translate-y-[2px]"
            >
              Pedir Cita
            </a>
          </nav>
        </div>
      </header>

      {/* Contenedor <main> con "flex-grow" */}

      <main className="flex-grow">
        {/* HERO */}

        <section className="pt-36 pb-24 relative overflow-hidden">
          <div className="container mx-auto flex flex-col md:flex-row items-center px-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="md:w-1/2 text-center md:text-left"
            >
              {/* <-- CAMBIO DE FUENTE: 'font-serif' (Lora) al H1 */}

              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight font-serif">
                Cuidamos tu sonrisa <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-700">
                  como si fuera la nuestra
                </span>
              </h1>

              {/* Este <p> usa 'font-sans' (Inter) por defecto */}

              <p className="mt-6 text-lg text-slate-600 max-w-md mx-auto md:mx-0">
                En nuestra clínica, la innovación tecnológica se une con la
                calidez humana para brindarte una experiencia dental sin estrés.
              </p>

              <a
                href="#cita"
                className="mt-8 inline-block bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition-transform transform hover:scale-105"
              >
                Solicita tu cita
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:w-1/2 mt-12 md:mt-0"
            >
              <img
                src="https://clinicadentalpalomero.com/wp-content/uploads/2022/04/Como-escoger-tu-clinica-dental-y-no-equivocarte-1080x675.jpg"
                alt="Clínica dental moderna"
                className="rounded-3xl shadow-2xl border border-sky-100"
              />
            </motion.div>
          </div>
        </section>

        {/* SERVICIOS */}

        <section
          id="servicios"
          className="py-24 bg-gradient-to-b from-white to-sky-50 relative"
        >
          <div className="container mx-auto px-8 text-center">
            {/* <-- CAMBIO DE FUENTE: 'font-serif' (Lora) al H2 */}

            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">
              Tratamientos que inspiran confianza
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto mb-16">
              Descubre cómo transformamos sonrisas con precisión, estética y un
              toque de innovación.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {servicesData.map((s) => (
                <motion.div
                  key={s.title}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-lg hover:shadow-2xl border border-sky-100 transition-all"
                >
                  <div className="text-5xl mb-4 flex justify-center items-center">
                    {s.icon}
                  </div>

                  {/* <-- CAMBIO DE FUENTE: 'font-serif' (Lora) al H3 */}

                  <h3 className="text-2xl font-semibold text-sky-700 font-serif">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-slate-600">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO */}

        <section id="equipo" className="py-24 bg-white">
          <div className="container mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
              alt="Dra. Elena García"
              className="rounded-full shadow-xl border-4 border-sky-100 w-[300px] md:w-[400px] mx-auto"
            />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:w-1/2 text-center md:text-left"
            >
              {/* <-- CAMBIO DE FUENTE: 'font-serif' (Lora) al H2 */}

              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">
                Conoce a nuestro equipo
              </h2>

              <p className="text-sky-600 font-semibold text-lg mb-2">
                Dra. Elena García — Directora Médica
              </p>

              <p className="text-slate-600 leading-relaxed">
                “Nuestro objetivo es hacer que cada visita sea cómoda, segura y
                transformadora. Contamos con un equipo apasionado que une
                técnica, innovación y empatía en cada tratamiento.”
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA FINAL */}

        <section
          id="cita"
          className="py-24 text-center bg-gradient-to-r from-sky-600 to-sky-500 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a4?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10"></div>

          <div className="relative z-10 container mx-auto px-6">
            {/* <-- CAMBIO DE FUENTE: 'font-serif' (Lora) al H2 */}

            <h2 className="text-4xl font-bold mb-6 font-serif">
              ¿Listo para tu nueva sonrisa?
            </h2>

            <p className="text-blue-100 max-w-xl mx-auto mb-10">
              Da el primer paso hacia una experiencia dental excepcional. Agenda
              tu cita hoy mismo.
            </p>

            <a
              href="mailto:citas@sonrisaperfecta.com"
              className="bg-white text-sky-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-sky-50 transition-transform transform hover:scale-105"
            >
              Reservar mi cita
            </a>
          </div>
        </section>
      </main>

      {/* FIN del <main> */}

      {/* FOOTER (Fuera del <main>) */}

      <footer className="bg-slate-900 text-slate-300 py-12 text-center">
        {/* <-- CAMBIO DE FUENTE: 'font-serif' (Lora) al H3 */}

        <h3 className="text-xl font-bold text-white mb-2 font-serif">
          Clínica Dental SonrisaPerfecta
        </h3>

        <p>Calle de la Salud 123, Madrid | Tel. 912 345 678</p>

        <p className="text-slate-500 text-sm mt-6">
          © {new Date().getFullYear()} SonrisaPerfecta. Todos los derechos
          reservados.
        </p>
      </footer>

      {/* BOTÓN DE CHAT (CAMBIADO A EMOJI) */}

      <motion.button

        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsChatOpen(!isChatOpen)}

        className="fixed bottom-8 right-8 bg-gradient-to-r from-sky-500 to-sky-600 text-white p-4 rounded-full shadow-2xl hover:shadow-sky-300/30 z-50 text-2xl leading-none"
      >
        
      </motion.button>

      {/* PANEL DE CHAT */}

      <div
        className={`fixed bottom-24 right-8 w-full max-w-md h-[70vh] z-50 ${
          isChatOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-sky-100 h-full flex flex-col overflow-hidden">
          <header className="bg-gradient-to-r from-sky-500 to-sky-600 text-white p-4 flex justify-between items-center rounded-t-2xl">
            <h3 className="font-semibold text-lg">Asistente Virtual</h3>

            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white/80 hover:text-white transition"
            >
              ✕
            </button>
          </header>

          <div className="flex-grow">
            <ChatApp />
          </div>
        </div>
      </div>
    </div>
  );
}
