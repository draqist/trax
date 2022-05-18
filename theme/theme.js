import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    progress: '#545DAD'
  },
  components: {
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
            outline: 'none',
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