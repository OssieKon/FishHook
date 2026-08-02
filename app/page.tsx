"use client" 

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Music, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "motion/react" 
import Link from "next/link"
import { bandMembers } from "@/lib/bandMembers"
import dynamic from "next/dynamic"

const DynamicCarousel = dynamic(() => import("@/components/ui/carousel"), {
  ssr: false, 
  loading: () => <div className="h-[70vmin] w-[70vmin] mx-auto bg-muted/20 animate-pulse rounded-lg flex items-center justify-center"><p>Cargando galería...</p></div>,
});


const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}


export default function Home() {
  const slideData = [
    { src: "/fishhook_slides_1.jpg", alt: "Fish Hook en concierto en escenario iluminado" },
    { src: "/fishhook_slides_2.jpg", alt: "Fish Hook posando como banda en exterior" },
    { src: "/fishhook_slides_5.jpg", alt: "Primer plano del guitarrista de Fish Hook tocando" },
    { src: "/fishhook_slides_4.jpg", alt: "Baterista de Fish Hook durante una presentación" },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-black relative flex min-h-[91vh] flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fh_background.jpg" 
            alt="Fish Hook tocando en vivo con luces de escenario" 
            layout="fill" 
            sizes="(max-width: 4000px) 100vw, (max-width: 2000px) 50vw, 33vw"
            quality={80} 
            priority 
            className="opacity-40 object-cover object-[25%_50%] md:opacity-50 animate-reveal-focus" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 animate-fadeInAfterReveal z-[1]" style={{animationDelay: '1.5s', animationDuration: '1s', animationFillMode: 'forwards'}}></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="container space-y-6 relative z-20"
        >
          <motion.div variants={item} className="mx-auto mb-2 z-10">
            <Image
              src="/fhlogo.png"
              alt="Fish Hook Logo - Anzuelo de pesca con el nombre de la banda"
              width={400} 
              height={400}
              className="mx-auto"
              priority 
            />
          </motion.div>

          <div className="reveal-text-block">
            <h1 className="text-white- text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-wide" >

              El Rock Clásico Vive Aquí 
            </h1>
          </div>
          <motion.div
            variants={container} 
            className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mb-10"
          >
            <motion.div variants={item}>
              <Button size="lg" className="group" asChild>
                <Link href="/discography">
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Escúchanos ahora
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={item}>
              <Button size="lg" variant="outline" asChild>
                <Link href="/events">
                  <Calendar className="mr-2 h-4 w-4" />
                  Próximos eventos
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary animate-pulse-glow z-30"></div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.8 }}
        className="py-16"
        aria-labelledby="latest-release-heading"
      >
        <div className="container">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10 text-center"
          >
            <h2 id="latest-release-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">Último lanzamiento</h2>
            <p className="mt-4 text-muted-foreground">Nuestro nuevo sencillo</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="grid grid-cols-1 gap-8 md:grid-cols-2 bg-primary/10">
              <div className="flex items-center justify-center p-4 md:p-0"> 
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-full max-w-md" 
                >
                  <Image
                    src="/fh_display.jpg" 
                    alt="Portada del sencillo April Rain de Fish Hook"
                    width={500} 
                    height={500}
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 500px" 
                    className="rounded-lg shadow-lg aspect-square object-cover"
                    loading="lazy" 
                  />
                </motion.div>
              </div>

              <div className="flex flex-col justify-center space-y-6 px-4 py-6 md:px-6">
                <motion.h3
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }} 
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold"
                >
                  April Rain
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.3 }}
                  className="text-muted-foreground"
                >
                  Escucha nuestro último lanzamiento, April Rain. Un sencillo con tintes celtas que te transportará a otra época.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <div className="flex items-center">
                    <Music className="mr-2 h-4 w-4 text-primary" aria-hidden="true" />
                    <span>Sencillo</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-primary" aria-hidden="true" />
                    <span>Lanzamiento: Enero 2025</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.5 }}
                  className="w-full"
                >
                  <iframe
                    title="Reproductor de Spotify para April Rain de Fish Hook"
                    src="https://open.spotify.com/embed/track/68zHxMbUuozcTv0cQuZbFp?utm_source=generator"
                    width="100%"
                    height="152" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg shadow-sm"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }} 
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 pt-2"
                >
                  <Button asChild>
                    <Link href="/discography">Ver discografía</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://open.spotify.com/track/68zHxMbUuozcTv0cQuZbFp" target="_blank" rel="noopener noreferrer">
                      Abrir en Spotify
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Info de los integrantes de la banda */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-muted"
        aria-labelledby="band-members-heading"
      >
        <div className="container">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-10"
          >
            <h2 id="band-members-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Fish Hook</h2>
            <p className="mt-4 text-muted-foreground">Conoce a los talentosos integrantes</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12"
          >
            {bandMembers.map((member, index) => (
              <motion.div key={index} variants={item}>
                <Card className="band-member-card overflow-hidden border-0 bg-card shadow-lg p-0">
                  <div className="relative h-80 sm:h-96 w-full overflow-hidden group"> 
                    <Image
                      src={member.image}
                      alt={`Foto de ${member.name}, ${member.role} de Fish Hook`}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 23vw" 
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="pt-4 pb-4 px-4"> 
                    <div className="mb-2 flex items-center">
                      <div className="mr-2 rounded-full bg-primary/10 p-1 text-primary">
                        <member.icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{member.role}</span>
                    </div>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-center"
          >
            <Button size="lg" asChild>
              <Link href="/about">
                Conoce más
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Galería */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        aria-labelledby="gallery-heading" 
      >
        <div className="bg-muted relative overflow-hidden w-full h-full py-16 md:py-20"> 
          <DynamicCarousel slides={slideData} />
        </div>
      </motion.section>

      {/* Enlaces rapidos */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="bg-muted py-16" 
        aria-labelledby="quick-links-heading"
      >
        <div className="container">
            <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div variants={item}>
              <Card className="h-full border-2 border-primary/20 bg-card/50 backdrop-blur hover:border-primary transition-all">
                <CardContent className="flex h-full flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Music className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Nuestra música</h3>
                  <p className="mb-4 text-sm text-muted-foreground flex-grow"> 
                    Explora nuestra discografía completa y escucha nuestros últimos lanzamientos.
                  </p>
                  <Link href="/discography" className="text-primary hover:underline mt-auto"> 
                    Ver Discografía
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full border-2 border-primary/20 bg-card/50 backdrop-blur hover:border-primary transition-all">
                <CardContent className="flex h-full flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Calendar className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Eventos</h3>
                  <p className="mb-4 text-sm text-muted-foreground flex-grow">
                    No te pierdas nuestros próximos shows en vivo. ¡Consulta el calendario!
                  </p>
                  <Link href="/events" className="text-primary hover:underline mt-auto">
                    Ver Calendario
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full border-2 border-primary/20 bg-card/50 backdrop-blur hover:border-primary transition-all">
                <CardContent className="flex h-full flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Contacto</h3>
                  <p className="mb-4 text-sm text-muted-foreground flex-grow">
                    ¿Interesado en contratarnos o tienes alguna pregunta? Ponte en contacto.
                  </p>
                  <Link href="/contact" className="text-primary hover:underline mt-auto">
                    Contáctanos
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}