import type { Meta, StoryObj } from '@storybook/react'
import { Box, Toast, ToastProps } from '@pedrohenriquefernandes-ignite-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            height: '$64',
          }}
        >
          {story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
