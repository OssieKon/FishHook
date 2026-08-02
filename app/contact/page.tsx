"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Facebook,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { FaTiktok, FaSpotify } from "react-icons/fa";

export default function ContactPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const socialMediaPlatforms = [
    {
      name: "Facebook",
      icon: <Facebook className="h-8 w-8 text-blue-600" />,
      description:
        "Siguenos para enterarte de nuestras actualizaciones y eventos",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      textColor: "text-blue-600",
      link: "https://www.facebook.com/FishHookCuu",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-8 w-8 text-pink-600" />,
      description: "Dale un vistazo a nuestras fotos y videos",
      color: "bg-pink-600",
      hoverColor: "hover:bg-pink-700",
      textColor: "text-pink-600",
      link: "https://www.instagram.com/thefishhookbandmx/",
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-8 w-8 text-red-600" />,
      description: "Escucha nuestros covers y canciones originales en Youtube",
      color: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      textColor: "text-red-600",
      link: "https://www.youtube.com/@TheFishHookBand",
    },
    {
      name: "Tik Tok",
      icon: <FaTiktok className="h-8 w-8 text-indigo-600" />,
      description: "Ríete un rato con nosotros en Tik Tok",
      color: "bg-indigo-600",
      hoverColor: "hover:bg-indigo-700",
      textColor: "text-indigo-600",
      link: "https://www.tiktok.com/@thefishhookband",
    },
    {
      name: "Spotify",
      icon: <FaSpotify className="h-8 w-8 text-green-600" />,
      description: "Escucha nuestra música en Spotify",
      color: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      textColor: "text-green-600",
      link: "https://open.spotify.com/intl-es/artist/6HplwIY5Ds79j9irVQzlaE?si=tkYKRsShT36PDHiJwDUuKQ",
    },
  ];

  return (
    <div className="flex flex-col">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-muted py-16 md:py-24"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Conecta con nosotros
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Siguenos en nuestras redes sociales y contactanos para cualquier
              consulta.
            </motion.p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16"
      >
        <div className="container">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-3xl font-bold"
          >
            Siguenos en nuestras redes sociales
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
          >
            {socialMediaPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8 }}
              >
                <Card
                  className="h-full flex flex-col overflow-hidden"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`h-2 ${platform.color}`}></div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-col items-center text-center h-full">
                      <motion.div
                        animate={{
                          scale: hoveredCard === index ? 1.1 : 1,
                          transition: { type: "spring", stiffness: 300 },
                        }}
                        className={`mb-4 rounded-full ${platform.color.replace(
                          "bg-",
                          "bg-"
                        )}/10 p-4`}
                      >
                        {platform.icon}
                      </motion.div>

                      <h3 className="text-xl font-bold mb-2">
                        {platform.name}
                      </h3>

                      <div className="min-h-[72px] mb-4 flex items-center">
                        <p className="text-sm text-muted-foreground">
                          {platform.description}
                        </p>
                      </div>

                      <div className="mt-auto w-full">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            className={`w-full ${platform.color} ${platform.hoverColor}`}
                            asChild
                          >
                            <Link href={platform.link} target="_blank">
                              <motion.span
                                animate={{
                                  scale:
                                    hoveredCard === index ? [1, 1.1, 1] : 1,
                                  transition: {
                                    repeat: Infinity,
                                    duration: 1.5,
                                  },
                                }}
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                              </motion.span>
                              Seguir
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              ¡Tocamos en tu evento!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-8"
            >
              ¿Te interesa que Fish Hook toque en tu evento, fiesta o
              establecimiento? Contáctanos directamente para más información
            </motion.p>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative bg-background rounded-lg p-8 shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 left-0 w-20 h-20 rounded-full bg-primary/5"
                ></motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.05, 0.1, 0.05],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    delay: 1,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-primary/5"
                ></motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-primary/5"
                ></motion.div>
              </div>

              <div className="relative z-10 flex flex-col items-center space-y-8">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    },
                  }}
                  className="rounded-full bg-primary/10 p-6 shadow-lg"
                >
                  <Phone className="h-12 w-12 text-primary" />
                </motion.div>

                <div className="text-center">
                  <p className="text-lg mb-3 font-medium">
                    Contrataciones e información:
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative inline-block"
                  >
                    <p className="text-4xl font-bold text-primary mb-1">
                      +52 (614) 136-1754
                    </p>
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      className="h-1 bg-primary mx-auto"
                    ></motion.div>
                  </motion.div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Ing. Gerardo Vargas
                  </p>
                </div>

                <div className="flex flex-col w-full sm:flex-row gap-4 max-w-md justify-center">
                  <Link href="https://wa.me/526141361754" target="_blank">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="flex-1 bg-primary hover:bg-primary/90 group cursor-pointer"
                      >
                        <motion.span
                          animate={{
                            scale: [1, 1.1, 1],
                            transition: { repeat: Infinity, duration: 1.5 },
                          }}
                        >
                          <Phone className="mr-2 h-5 w-5" />
                        </motion.span>
                        <span>WhatsApp</span>
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
