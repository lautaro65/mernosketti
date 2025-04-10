import { Award, Trophy, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data for leaderboard
const leaderboardData = [
  {
    id: 1,
    username: "SuperFan123",
    points: 25000,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    username: "MernoLover",
    points: 22500,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    username: "StreamKing",
    points: 20000,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    username: "PuntosLocos",
    points: 18500,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    username: "ViewerPro",
    points: 17200,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    username: "FanNumber1",
    points: 16800,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 7,
    username: "MernoViewer",
    points: 15500,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 8,
    username: "StreamAddict",
    points: 14200,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 9,
    username: "PointCollector",
    points: 13800,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 10,
    username: "TopFan2023",
    points: 12500,
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function LeaderboardPage() {
  return (
    <div className=" px-4 py-12 md:px-6 md:py-24 bg-[#0b0b11]">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Tabla de <span className="text-purple-500">Clasificación</span>
          </h1>
          <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Compite con otros fans de Mernosketti y alcanza la cima de la
            clasificación.
          </p>
        </div>
      </div>

      <Tabs defaultValue="all-time" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3  dark:bg-input/30 ">
          <TabsTrigger value="all-time">Todo el Tiempo</TabsTrigger>
          <TabsTrigger value="monthly">Mensual</TabsTrigger>
          <TabsTrigger value="weekly">Semanal</TabsTrigger>
        </TabsList>
        <TabsContent value="all-time">
          <LeaderboardContent  data={leaderboardData} />
        </TabsContent>
        <TabsContent value="monthly">
          <LeaderboardContent
            data={leaderboardData.slice().sort(() => 0.5 - Math.random())}
          />
        </TabsContent>
        <TabsContent value="weekly">
          <LeaderboardContent
            data={leaderboardData.slice().sort(() => 0.5 - Math.random())}
          />
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 mt-12 md:grid-cols-3">
        <Card className=" dark:bg-input/30  border-purple-400">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Total de Usuarios
            </CardTitle>
            <Users className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12,345</div>
            <p className="text-xs text-gray-400">+15% desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card className=" dark:bg-input/30  border-purple-400">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Puntos Totales
            </CardTitle>
            <Award className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,234,567</div>
            <p className="text-xs text-gray-400">+23% desde el mes pasado</p>
          </CardContent>
        </Card>
        <Card className=" dark:bg-input/30  border-purple-400">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">
              Promedio de Puntos
            </CardTitle>
            <Trophy className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">8,765</div>
            <p className="text-xs text-gray-400">+5% desde el mes pasado</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function LeaderboardContent({ data }: { data: typeof leaderboardData }) {
  return (
    <div className="rounded-md border  dark:bg-input/30 ">
      <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium text-gray-400 border-b   ">
        <div className="col-span-1 text-center">#</div>
        <div className="col-span-7">Usuario</div>
        <div className="col-span-4 text-right">Puntos</div>
      </div>
      {data.map((user, index) => (
        <div
          key={user.id}
          className={`grid grid-cols-12 gap-4 p-4 items-center ${
            index < 3 ? " dark:bg-input/20 " : ""
          } ${index !== data.length - 1 ? "border-b border-gray-800" : ""}`}
        >
          <div className="col-span-1 text-center font-bold">
            {index === 0 ? (
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-black">
                1
              </div>
            ) : index === 1 ? (
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-black">
                2
              </div>
            ) : index === 2 ? (
              <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-700 text-white">
                3
              </div>
            ) : (
              index + 1
            )}
          </div>
          <div className="col-span-7 flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} alt={user.username} />
              <AvatarFallback>
                {user.username.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="font-medium text-white">{user.username}</span>
          </div>
          <div className="col-span-4 text-right font-bold text-purple-500">
            {user.points.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}
