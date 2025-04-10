"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { es } from "date-fns/locale"
import dynamic from "next/dynamic"

export default function NewGiveawayPage() {
const CalendarClient = dynamic(() => import("@/app/components/CalendarClient"), { ssr: false })
  
  return (
    <div className=" px-4 py-12 md:px-6 md:py-24">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Volver</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tighter text-white">Nuevo Sorteo</h1>
      </div>

      <Card className="max-w-3xl mx-auto bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Detalles del Sorteo</CardTitle>
          <CardDescription className="text-gray-400">
            Completa la información para crear un nuevo sorteo en la plataforma.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Nombre
              </Label>
              <Input id="name" placeholder="Nombre del sorteo" className="bg-gray-950 border-gray-800 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="text-white">
                Descripción
              </Label>
              <Textarea
                id="description"
                placeholder="Descripción detallada del sorteo"
                className="min-h-[100px] bg-gray-950 border-gray-800 text-white"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="points" className="text-white">
                  Puntos para participar
                </Label>
                <Input
                  id="points"
                  type="number"
                  placeholder="Cantidad de puntos"
                  className="bg-gray-950 border-gray-800 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="winners" className="text-white">
                  Número de ganadores
                </Label>
                <Input
                  id="winners"
                  type="number"
                  placeholder="Cantidad de ganadores"
                  className="bg-gray-950 border-gray-800 text-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="start-date" className="text-white">
                  Fecha de inicio
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-gray-950 border-gray-800 text-gray-400"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Seleccionar fecha</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-800">
                    <CalendarClient  mode="single" locale={es} className="bg-gray-900 text-white" />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-date" className="text-white">
                  Fecha de finalización
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-gray-950 border-gray-800 text-gray-400"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Seleccionar fecha</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-800">
                    <CalendarComponent mode="single" locale={es} className="bg-gray-900 text-white" />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="prize" className="text-white">
                Premio
              </Label>
              <Input
                id="prize"
                placeholder="Descripción del premio"
                className="bg-gray-950 border-gray-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image" className="text-white">
                Imagen
              </Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-950 border-gray-800 hover:bg-gray-900"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-400">
                      <span className="font-semibold">Haz clic para subir</span> o arrastra y suelta
                    </p>
                    <p className="text-xs text-gray-400">SVG, PNG, JPG o GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="image-upload" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Link href="/admin">
                <Button variant="outline" className="border-gray-800 text-white hover:bg-gray-800">
                  Cancelar
                </Button>
              </Link>
              <Button className="bg-purple-600 hover:bg-purple-700">Crear Sorteo</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
