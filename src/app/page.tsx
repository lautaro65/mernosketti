import Link from "next/link";
import { Button } from "../components/ui/button";
import { ArrowRight, Award, Gift, ShoppingBag, Twitch } from "lucide-react";
import Image from "next/image";
import LoginWithKickButton from "./components/LoginWithKickButton";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-black overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src="/img/prueba3.jfif"
          alt="Mernosketti Streamers"
          fill
          className="object-cover opacity-60"
          priority
        />

        {/* Capa oscura si quieres más contraste */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Contenido centrado */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Gana mientras miras a{" "}
            <span className="text-purple-500">Mernosketti</span>
          </h1>
          <p className="mt-4 max-w-xl text-gray-300 text-lg md:text-xl">
            Acumula puntos automáticamente mientras disfrutas de tus streamers
            favoritos y canjéalos por premios exclusivos.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/store">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold">
                Ver Tienda
                <ShoppingBag className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button
                variant="outline"
                className="border-purple-500  hover:bg-purple-950 text-white font-bold"
              >
                Tabla de Clasificación
                <Award className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 bg-[#0b0b11]">
        {/* Línea 1 */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll-left">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center py-4 px-4">
                <span className="text-6xl md:text-8xl font-extrabold text-violet-400">
                  Mernuel
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-800/50">
                  Moski
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-400">
                  Bauleti
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-800/50">
                  Mernosketti
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-400">
                  Moski
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Línea 2 */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll-right">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center py-4 px-4">
                <span className="text-6xl md:text-8xl font-extrabold text-violet-800/50">
                  Puntos
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-400">
                  Nenazos
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-800/50">
                  Antinenazos
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-400">
                  Cerveza
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-800/50">
                  Penales
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Línea 3 */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll-left">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center py-4 px-4">
                <span className="text-6xl md:text-8xl font-extrabold text-violet-400">
                  Flancito
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-800/50">
                  WWE
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-400">
                  Fifa
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-800/50">
                  Argentina
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-400">
                  EEUU
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Línea 4 */}
        <div className="relative overflow-hidden">
          <div className="flex w-max  animate-scroll-right">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center py-4 px-4">
                <span className="text-6xl md:text-8xl font-extrabold text-violet-800/50">
                  Crema
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-400">
                  Padilla
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-800/50">
                  Sasha
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-400">
                  Melgan
                </span>
                <span className="text-6xl md:text-8xl font-extrabold text-violet-800/50">
                  Amigas de merno
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LoginWithKickButton></LoginWithKickButton>
      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0b0b11]">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                ¿Cómo Funciona?
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ganar y canjear puntos nunca ha sido tan fácil. Sigue estos
                simples pasos:
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-purple-800 p-6 bg-gray-900">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600">
                <Twitch className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                1. Mira los Streams
              </h3>
              <p className="text-gray-400 text-center">
                Instala nuestra extensión y mira los streams de Mernosketti para
                ganar puntos automáticamente.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-purple-800 p-6 bg-gray-900">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                2. Acumula Puntos
              </h3>
              <p className="text-gray-400 text-center">
                Gana más puntos mientras más tiempo veas. Participa en eventos
                especiales para multiplicar tus ganancias.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-purple-800 p-6 bg-gray-900">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                3. Canjea Premios
              </h3>
              <p className="text-gray-400 text-center">
                Visita nuestra tienda y canjea tus puntos por productos
                exclusivos, sorteos y beneficios especiales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extension Promo */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0b0b11]">
        <div className=" px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-600 px-3 py-1 text-sm text-white">
                Extensión Exclusiva
              </div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Descarga nuestra extensión y comienza a ganar
              </h2>
              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed">
                Nuestra extensión para navegador te permite ganar puntos
                automáticamente mientras disfrutas de los streams de
                Mernosketti.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold">
                Descargar Extensión
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Extensión Mernosketti"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rewards */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0b0b11]">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Recompensas Destacadas
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Echa un vistazo a algunos de los productos más populares que
                puedes canjear con tus puntos.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex flex-col rounded-lg border border-purple-800 overflow-hidden bg-gray-900"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=300`}
                    alt={`Producto ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    Producto Exclusivo {item}
                  </h3>
                  <p className="text-gray-400">
                    Una descripción breve del producto exclusivo de Mernosketti.
                  </p>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-purple-500 font-bold">
                      5000 puntos
                    </span>
                    <Button
                      variant="outline"
                      className="border-purple-500 text-purple-500 hover:bg-purple-950"
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/store">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold">
                Ver Todos los Productos
                <ShoppingBag className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
