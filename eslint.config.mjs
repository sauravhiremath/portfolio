import nextConfig from 'eslint-config-next/core-web-vitals'
import prettierConfig from 'eslint-config-prettier'

const config = [
  { ignores: ['.next/**', 'node_modules/**'] },
  ...nextConfig,
  prettierConfig,
  {
    rules: {
      // setMounted(true) in useEffect is an intentional SSR hydration guard pattern in Next.js
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]

export default config
