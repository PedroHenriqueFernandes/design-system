import { ComponentProps, useEffect, useRef, useState } from 'react'
import { Text } from '../Text'
import { Button } from '../Button'
import {
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewPort,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {}

export function Toast() {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  const dateFormatted = new Date().toLocaleString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function oneWeekAway() {
    const now = new Date()
    const inOneWeek = now.setDate(now.getDate() + 7)
    return new Date(inOneWeek)
  }

  return (
    <ToastProvider>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway()
            setOpen(true)
          }, 100)
        }}
      >
        <Text>Open Toast</Text>
      </Button>
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>Agendamento realizado</ToastTitle>

        <ToastDescription>{dateFormatted}</ToastDescription>

        <ToastClose asChild>
          <X size={20} />
        </ToastClose>
      </ToastRoot>
      <ToastViewPort />
    </ToastProvider>
  )
}
