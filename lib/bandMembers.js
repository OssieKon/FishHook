import {Drum, KeyboardMusic } from "lucide-react";
import { GiGuitarBassHead, GiGuitar } from "react-icons/gi";


export const bandMembers = [
  {
    name: "Ossie Chacón",
    role: "Guitarrista",
    desc: "Egresado de la Licenciatura en Música por la Universidad Autónoma de Chihuahua, Ossie es un apasionado del rock clásico que ha convertido su gusto por bandas como Led Zeppelin y Back Sabbath en el pilar de su estilo. Guitarrista con alma de showman, también asumió los micrófonos de Fish Hook, heredando algunos trucos vocales de su madre",
    image: "/Ozzy_black.jpg",
    icon: GiGuitar, // Componente de ícono,
    instagram: "https://www.instagram.com/ossie.wav/",
  },
  {
    name: "Alonso Vargas",
    role: "Baterista",
    image: "/Alonso_black.jpg",
    icon: Drum,
    desc:"Baterista chihuahuense de corazón rockero, Alonso descubrió su amor por la música a los 13 años con una guitarra en manos, pero fue a los 16 que encontró su verdadera pasión: la batería. Autodidacta en sus inicios, aprendió de videos en internet y estudiando los ritmos de sus ídolos: Led Zeppelin, Deep Purple y Pearl Jam, entre otros. Hoy, además de ser el motor rítmico de Fish Hook, explora su faceta como vocalista y compositor, buscando llevar su música más allá de los escenarios locales.",   icon: Drum, // Componente de ícono,
    instagram: "https://www.instagram.com/alonsovargas24/",
  },
  {
    name: "Daniel Vargas",
    role: "Bajista",
    image: "/Dani_black.jpg",
    desc:"Estudiante de Música en la Universidad Autónoma de Chihuahua (UACH). Con un rango vocal extenso y versátil, aporta armonías y coros que elevan el sonido de la banda, mientras su bajo —instrumento que dominó en pocos meses para unirse al proyecto— le da el groove característico al grupo.",
    icon: GiGuitarBassHead, // Componente de ícono
    instagram: "https://www.instagram.com/_daniiboy__/",
  },
    {
    name: "Abelardo Castillo",
    role: "Tecladista",
    image: "/Abelardo_black.jpg",
    desc: "Tecladista de Fish Hook, aportando texturas y atmósferas que complementan el sonido de la banda con influencias del rock clásico.",
    icon: KeyboardMusic,
    instagram: "https://www.instagram.com/abelardo_castillo/",
  },
  // prueba git
];