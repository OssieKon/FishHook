"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby9K7qpJZzdE5N9TfjixsCG5SqDRLW_HLZZY4ekP95IWl815VMV-rgQRLZ1uAmzDWdH/exec";

export default function MerchPage() {

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    direccion: "",
    ciudad: "",
    estado: "",
    codigoPostal: "",
    talla: "",
  });

  const [enviado, setEnviado] = useState(false);


  const actualizarCampo = (campo: string, valor: string) => {
    setForm({
      ...form,
      [campo]: valor,
    });
  };


  const enviarPedido = async () => {

    console.log("Enviando pedido...", form);

    try {

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          ...form,
          producto: "Playera Fish Hook",
          cantidad: 1,
          metodoPago: "Pendiente",
        }),
      });


      console.log("Pedido enviado");

      setEnviado(true);


    } catch (error) {

      console.error("Error enviando pedido:", error);

    }

  };


  const whatsappMessage = encodeURIComponent(
    `Hola Fish Hook, quiero apartar una playera oficial de pre-order.

Nombre: ${form.nombre}

Talla: ${form.talla}`
  );


  return (

    <main className="min-h-screen bg-black text-white py-20">

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">


        <div className="relative aspect-square rounded-xl overflow-hidden">

          <Image
            src="/merch/playera-fishhook.png"
            alt="Playera Fish Hook"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />

        </div>



        <div className="space-y-6">


          <h1 className="text-4xl md:text-5xl font-bold">
            Playera Oficial Fish Hook
          </h1>


          <p className="text-3xl font-bold text-primary">
            $450 MXN
          </p>


          <p className="text-zinc-300">
            Pre-order edición especial de Fish Hook.
          </p>


          <div>

            <h2 className="text-xl font-bold mb-3">
              Incluye:
            </h2>

            <ul className="text-zinc-300 space-y-2">

              <li>✓ Playera oficial Fish Hook</li>
              <li>✓ Sticker exclusivo</li>
              <li>✓ Photocard exclusiva</li>
              <li>✓ Termo Fish Hook</li>

            </ul>

          </div>



          <div className="space-y-3">


            <h2 className="font-bold">
              Datos del pedido
            </h2>


            <input
              placeholder="Nombre completo"
              className="w-full p-3 rounded bg-zinc-800"
              onChange={(e)=>actualizarCampo("nombre", e.target.value)}
            />


            <input
              placeholder="Teléfono"
              className="w-full p-3 rounded bg-zinc-800"
              onChange={(e)=>actualizarCampo("telefono", e.target.value)}
            />


            <input
              placeholder="Correo"
              className="w-full p-3 rounded bg-zinc-800"
              onChange={(e)=>actualizarCampo("correo", e.target.value)}
            />


            <input
              placeholder="Dirección"
              className="w-full p-3 rounded bg-zinc-800"
              onChange={(e)=>actualizarCampo("direccion", e.target.value)}
            />


            <input
              placeholder="Ciudad"
              className="w-full p-3 rounded bg-zinc-800"
              onChange={(e)=>actualizarCampo("ciudad", e.target.value)}
            />


            <input
              placeholder="Estado"
              className="w-full p-3 rounded bg-zinc-800"
              onChange={(e)=>actualizarCampo("estado", e.target.value)}
            />


            <input
              placeholder="Código Postal"
              className="w-full p-3 rounded bg-zinc-800"
              onChange={(e)=>actualizarCampo("codigoPostal", e.target.value)}
            />



            <select
              className="w-full p-3 rounded bg-zinc-800"
              onChange={(e)=>actualizarCampo("talla", e.target.value)}
            >

              <option value="">
                Selecciona talla
              </option>

              <option value="CH">
                CH
              </option>

              <option value="M">
                M
              </option>

              <option value="G">
                G
              </option>

              <option value="XL">
                XL
              </option>

              <option value="XXL">
                XXL
              </option>

            </select>


          </div>



          {!enviado ? (

            <Button
              className="w-full bg-primary"
              onClick={enviarPedido}
            >
              Apartar mi playera
            </Button>


          ) : (

            <a
              href={`https://wa.me/526141169268?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >

              <Button className="w-full">
                Continuar por WhatsApp
              </Button>

            </a>

          )}


        </div>


      </div>

    </main>

  );
}