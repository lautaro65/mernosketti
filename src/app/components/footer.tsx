import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Facebook, Instagram, Twitch, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black py-6">
      <div className=" px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Mernosketti</h3>
            <p className="text-sm text-gray-400">
              Plataforma de recompensas para los fans de Mernosketti. Gana puntos mientras ves streams y canjéalos por
              productos exclusivos.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Enlaces</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-purple-500">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-purple-500">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="hover:text-purple-500">
                  Clasificación
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-purple-500">
                  Mi Cuenta
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/terms" className="hover:text-purple-500">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-purple-500">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-purple-500">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Síguenos</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-500">
                <Twitch className="h-5 w-5" />
                <span className="sr-only">Twitch</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-white">Suscríbete a nuestro boletín</h4>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex h-10 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus-visible:ring-purple-500"
                />
                <Button className="bg-purple-600 hover:bg-purple-700">Enviar</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Mernosketti. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
