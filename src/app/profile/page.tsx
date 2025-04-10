import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Gift } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
  // Mock data for user profile
  const user = {
    username: "SuperFan123",
    email: "superfan123@example.com",
    points: 12345,
    joinDate: "15/01/2023",
    avatar: "/placeholder.svg?height=100&width=100",
  }

  // Mock data for redemption history
  const redemptionHistory = [
    {
      id: 1,
      item: "Camiseta Exclusiva Mernosketti",
      points: 15000,
      date: "10/04/2023",
      status: "completed",
    },
    {
      id: 2,
      item: "Sorteo Mensual - Marzo",
      points: 5000,
      date: "15/03/2023",
      status: "completed",
    },
    {
      id: 3,
      item: "Mención en Stream",
      points: 10000,
      date: "05/02/2023",
      status: "completed",
    },
  ]

  return (
    <div className=" px-4 py-12 md:px-6 md:py-24 bg-[#0b0b11] ">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 ">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter text-purple-500 sm:text-4xl md:text-5xl">Mi Perfil</h1>
          <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Gestiona tu cuenta y revisa tu historial de canjes.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          <Card className="dark:bg-input/30 border-gray-800">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user.avatar} alt={user.username} />
                  <AvatarFallback>{user.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h2 className="text-xl font-bold text-white">{user.username}</h2>
                  <p className="text-sm text-gray-400">Miembro desde {user.joinDate}</p>
                </div>
                <div className="flex items-center justify-center w-full p-4 bg-gray-700 rounded-lg">
                  <Award className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="text-white font-medium mr-2">Puntos:</span>
                  <span className="text-purple-500 font-bold">{user.points.toLocaleString()}</span>
                </div>
                <Button className="w-full bg-purple-500 hover:bg-purple-700 text-white text-bold">
                  <Gift className="mr-2 h-4 w-4" />
                  Ir a la Tienda
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-input/30 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Estadísticas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total de Puntos Ganados:</span>
                  <span className="text-white font-medium">45,678</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total de Puntos Canjeados:</span>
                  <span className="text-white font-medium">33,333</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Horas Vistas:</span>
                  <span className="text-white font-medium">256</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Posición en Ranking:</span>
                  <span className="text-white font-medium">#5</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2 dark:bg-input/30">
              <TabsTrigger value="account">Cuenta</TabsTrigger>
              <TabsTrigger value="history">Historial</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="mt-6">
              <Card className="dark:bg-input/30 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Información de la Cuenta</CardTitle>
                  <CardDescription className="text-gray-400">
                    Actualiza tu información personal y preferencias.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-white">
                        Nombre de Usuario
                      </Label>
                      <Input
                        id="username"
                        defaultValue={user.username}
                        className="bg-gray-950 border-gray-800 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue={user.email}
                        className="bg-gray-950 border-gray-800 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white">
                        Contraseña
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-gray-950 border-gray-800 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="avatar" className="text-white">
                        Avatar
                      </Label>
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={user.avatar} alt={user.username} />
                          <AvatarFallback>{user.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" className="border-gray-800 text-white hover:bg-gray-800">
                          Cambiar Avatar
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold">Guardar Cambios</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card className="dark:bg-input/30 border-gray-800 mt-6">
                <CardHeader>
                  <CardTitle className="text-white">Preferencias de Notificación</CardTitle>
                  <CardDescription className="text-gray-400">
                    Configura cómo quieres recibir notificaciones.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-white">Notificaciones por Email</Label>
                        <p className="text-xs text-gray-400">Recibe actualizaciones por email.</p>
                      </div>
                      <div className="ml-auto">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-800 bg-gray-950 text-purple-600 focus:ring-purple-600"
                          defaultChecked
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-white">Notificaciones de Sorteos</Label>
                        <p className="text-xs text-gray-400">Recibe alertas sobre nuevos sorteos.</p>
                      </div>
                      <div className="ml-auto">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-800 bg-gray-950 text-purple-600 focus:ring-purple-600"
                          defaultChecked
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-white">Notificaciones de Recompensas</Label>
                        <p className="text-xs text-gray-400">Recibe alertas sobre nuevas recompensas.</p>
                      </div>
                      <div className="ml-auto">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-800 bg-gray-950 text-purple-600 focus:ring-purple-600"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="history" className="mt-6">
              <Card className="dark:bg-input/30 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Historial de Canjes</CardTitle>
                  <CardDescription className="text-gray-400">Revisa tus canjes anteriores y su estado.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border border-gray-800 dark:bg-input/30">
                    <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium text-gray-400 border-b border-gray-800">
                      <div className="col-span-5 md:col-span-6">Producto</div>
                      <div className="col-span-3 md:col-span-2 text-right">Puntos</div>
                      <div className="col-span-2 text-right hidden md:block">Fecha</div>
                      <div className="col-span-4 md:col-span-2 text-right">Estado</div>
                    </div>
                    {redemptionHistory.map((item) => (
                      <div key={item.id} className="grid grid-cols-12 gap-4 p-4 items-center border-b border-gray-800">
                        <div className="col-span-5 md:col-span-6 font-medium text-white">{item.item}</div>
                        <div className="col-span-3 md:col-span-2 text-right text-purple-500 font-medium">
                          {item.points.toLocaleString()}
                        </div>
                        <div className="col-span-2 text-right text-gray-400 hidden md:block">{item.date}</div>
                        <div className="col-span-4 md:col-span-2 text-right">
                          <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500">
                            Completado
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="dark:bg-input/30 border-gray-800 mt-6">
                <CardHeader>
                  <CardTitle className="text-white">Participaciones en Sorteos</CardTitle>
                  <CardDescription className="text-gray-400">
                    Revisa los sorteos en los que has participado.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border border-gray-800 dark:bg-input/30">
                    <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium text-gray-400 border-b border-gray-800">
                      <div className="col-span-5 md:col-span-6">Sorteo</div>
                      <div className="col-span-3 md:col-span-2 text-right">Puntos</div>
                      <div className="col-span-2 text-right hidden md:block">Fecha</div>
                      <div className="col-span-4 md:col-span-2 text-right">Estado</div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 p-4 items-center border-b border-gray-800">
                      <div className="col-span-5 md:col-span-6 font-medium text-white">Sorteo Mensual - Abril</div>
                      <div className="col-span-3 md:col-span-2 text-right text-purple-500 font-medium">5,000</div>
                      <div className="col-span-2 text-right text-gray-400 hidden md:block">05/04/2023</div>
                      <div className="col-span-4 md:col-span-2 text-right">
                        <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2.5 py-0.5 text-xs font-medium text-yellow-500">
                          En Curso
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 p-4 items-center border-b border-gray-800">
                      <div className="col-span-5 md:col-span-6 font-medium text-white">
                        Sorteo Especial - Tarjeta Gráfica
                      </div>
                      <div className="col-span-3 md:col-span-2 text-right text-purple-500 font-medium">50,000</div>
                      <div className="col-span-2 text-right text-gray-400 hidden md:block">01/04/2023</div>
                      <div className="col-span-4 md:col-span-2 text-right">
                        <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2.5 py-0.5 text-xs font-medium text-yellow-500">
                          En Curso
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 p-4 items-center">
                      <div className="col-span-5 md:col-span-6 font-medium text-white">Sorteo Mensual - Marzo</div>
                      <div className="col-span-3 md:col-span-2 text-right text-purple-500 font-medium">5,000</div>
                      <div className="col-span-2 text-right text-gray-400 hidden md:block">15/03/2023</div>
                      <div className="col-span-4 md:col-span-2 text-right">
                        <span className="inline-flex items-center rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-500">
                          No Ganado
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
