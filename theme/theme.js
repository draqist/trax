import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    progress: '#545DAD'
  },
  components: {
    Input: {
      baseProps: {
        focusBorderColor: 'transparent'
      }
    },
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        }
      },
      MenuButton: {
        baseStyle: {
          _focus: {
            boxShadow: 'none',
          }
        },
      },
      Link: {
        baseStyle: {
          _focus: {
            focusBorderColor: 'none',
          }
        },
      }
    }
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
})

export default theme