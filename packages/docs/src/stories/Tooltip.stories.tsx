import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Tooltip,
  TooltipProps,
} from '@pedrohenriquefernandes-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    date: new Date(),
    isAvailable: true,
  },
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '$6',
            height: '$6',
          }}
        >
          {story()}
        </Box>
      )
    },
  ],
  argTypes: {
    date: {
      control: {
        type: null,
      },
    },
    isAvailable: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
