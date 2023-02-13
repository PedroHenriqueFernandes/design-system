import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '5px',
  padding: '$3 $4',
  fontSize: '$sm',
  lineHeight: '$short',
  color: '$gray100',
  backgroundColor: '$gray900',
  userSelect: 'none',
  fontFamily: '$default',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})
