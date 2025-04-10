import { Button } from "../../components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Filter, Search, ShoppingBag } from "lucide-react"
import Image from "next/image"

// Mock data for store items
const storeItems = [
  {
    id: 1,
    name: "Reproducir audio personalizado",
    description: "Envía un audio que sonará en vivo durante el stream.",
    points: 15000,
    category: "interaccion",
    image: "/placeholder.svg?height=200&width=300",
    stock: 10,
  },
  {
    id: 2,
    name: "Mensaje en pantalla",
    description: "Tu mensaje aparecerá en pantalla durante el stream.",
    points: 8000,
    category: "interaccion",
    image: "/placeholder.svg?height=200&width=300",
    stock: 15,
  },
  {
    id: 3,
    name: "Agregar canción a Spotify",
    description: "Agrega una canción a la playlist del stream.",
    points: 20000,
    category: "musica",
    image: "/placeholder.svg?height=200&width=300",
    stock: 5,
  },
  {
    id: 4,
    name: "Participar en sorteo mensual",
    description: "Accede al sorteo mensual exclusivo para la comunidad.",
    points: 5000,
    category: "sorteos",
    image: "/placeholder.svg?height=200&width=300",
    stock: 100,
  },
  {
    id: 5,
    name: "Jugar con el streamer",
    description: "Participa en una partida con el streamer en vivo.",
    points: 30000,
    category: "experiencias",
    image: "/placeholder.svg?height=200&width=300",
    stock: 3,
  },
  {
    id: 6,
    name: "Saludo personalizado",
    description: "Recibe un saludo especial en directo durante el stream.",
    points: 10000,
    category: "experiencias",
    image: "/placeholder.svg?height=200&width=300",
    stock: 20,
  },
  {
    id: 7,
    name: "Rol especial en Discord",
    description: "Consigue un rol exclusivo dentro del servidor de Discord.",
    points: 3000,
    category: "digital",
    image: "/placeholder.svg?height=200&width=300",
    stock: 50,
  },
  {
    id: 8,
    name: "Sorteo especial",
    description: "Participa en un sorteo exclusivo de alto valor.",
    points: 50000,
    category: "sorteos",
    image: "/placeholder.svg?height=200&width=300",
    stock: 1,
  },
];


export default function StorePage() {
  return (
    <div className=" px-4 py-12 md:px-6 md:py-24 bg-[#0b0b11]">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter text-purple-500 sm:text-4xl md:text-5xl">
            Tienda de Recompensas
          </h1>
          <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Canjea tus puntos por productos exclusivos, experiencias únicas y participación en sorteos.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Buscar productos..."
              className="pl-8 bg-gray-900 border-gray-800 text-white"
            />
          </div>
        </div>
        <Button variant="outline" className="border-purple-500 text-purple-400 ">
          <Filter className="mr-2 h-4 w-4" />
          Filtrar
        </Button>
        <div className="flex items-center gap-2  dark:bg-input/30  border-gray-800 border  px-4 py-2 rounded-md">
          <Award className="h-5 w-5 text-purple-500" />
          <span className="text-white font-medium">Tus Puntos:</span>
          <span className="text-purple-500 font-bold">12,345</span>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-flex  dark:bg-input/30 border border-gray-500">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="merch">Merchandising</TabsTrigger>
          <TabsTrigger value="experiencias">Experiencias</TabsTrigger>
          <TabsTrigger value="sorteos">Sorteos</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <StoreGrid items={storeItems} />
        </TabsContent>
        <TabsContent value="merch" className="mt-6">
          <StoreGrid items={storeItems.filter((item) => item.category === "merch")} />
        </TabsContent>
        <TabsContent value="experiencias" className="mt-6">
          <StoreGrid items={storeItems.filter((item) => item.category === "experiencias")} />
        </TabsContent>
        <TabsContent value="sorteos" className="mt-6">
          <StoreGrid items={storeItems.filter((item) => item.category === "sorteos")} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function StoreGrid({ items }: { items: typeof storeItems }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden  dark:bg-input/30  border-gray-700">
          <div className="relative h-48">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
            {item.stock <= 5 && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                ¡Solo {item.stock} disponibles!
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-bold text-white mb-1">{item.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{item.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-purple-500 font-bold">{item.points.toLocaleString()} puntos</span>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white text-bold">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Canjear
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
