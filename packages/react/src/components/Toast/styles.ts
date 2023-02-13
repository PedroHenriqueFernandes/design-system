import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
})

export const ToastRoot = styled(Toast.Root, {
  borderRadius: '5px',
  backgroundColor: '$ignite500',
  width: '$80',
  padding: '$3 $5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: 'translate(x) 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  },

  '&[data-swipe="cancel"]': {
    transform: 'translate(0) 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    animation: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-ou;`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$white',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$normal',
  color: '$gray200',
  lineHeight: '$base',
})

export const ToastAction = styled(Toast.Action, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  width: '20px',
  height: '20px',

  svg: {
    fill: '$gray200',
  },
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  width: '20px',
  height: '20px',

  svg: {
    fill: '$gray200',
  },
})

export const ToastViewPort = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
  display: 'flex',
  width: '$80',
  height: '$20',
  listStyle: 'none',
  maxWidth: '100vw',
})
