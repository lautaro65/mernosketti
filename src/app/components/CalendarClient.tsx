// crea este archivo aparte: components/CalendarClient.tsx
"use client"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { es } from "date-fns/locale"
import { DayPickerSingleProps } from "react-day-picker"


export default function CalendarClient(props: DayPickerSingleProps) {
    return <CalendarComponent {...props} locale={es} />
  }