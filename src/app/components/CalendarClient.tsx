// crea este archivo aparte: components/CalendarClient.tsx
"use client"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { es } from "date-fns/locale"

export default function CalendarClient(props: any) {
  return <CalendarComponent {...props} locale={es} />
}
