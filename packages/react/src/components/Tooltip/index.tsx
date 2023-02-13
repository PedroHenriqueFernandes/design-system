import { ComponentProps } from 'react'
import { Text } from '../Text'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  date: Date
  isAvailable: boolean
}

export function Tooltip(props: TooltipProps) {
  const dateFormatted = props.date.toLocaleDateString('pt-BR', {
    month: 'long',
    day: 'numeric',
  })

  const day = dateFormatted.split(' ')[0]
  const available = props.isAvailable ? 'Disponível' : 'Indisponível'

  return (
    <TooltipProvider>
      <TooltipContainer {...props}>
        <TooltipTrigger asChild>
          <Text size="sm">{day}</Text>
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            {dateFormatted} - {available}
            <TooltipArrow className="TooltipArrow" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}
