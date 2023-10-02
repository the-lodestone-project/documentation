import { useConfig } from 'nextra-theme-docs'

let isDevEnvironment =  process.env.NODE_ENV === 'development';

const config = {
  logoLink: '/',
  logo: (
    <>
      <img width={30} height={30} src={isDevEnvironment ? '/logo.png' : 'https://raw.githubusercontent.com/SilkePilon/OpenDeliveryBot-Docs/main/public/logo.png'}/>
      <span style={{ marginLeft: '.4em', fontWeight: 800, color: '#ffff' }}>
        Mineflayer
      </span>
      <sup style={{ fontWeight: 800, color: '#ffff', top: '-0.0em', left: '0.3em' }}>
        .py
      </sup>
    </>// // this double slash stops IDE from freaking out
  ),
  head: () => {
    const { frontMatter } = useConfig()
 
    return (
      <>
        <meta property="og:title" content={frontMatter.title || '🦃'} />
        <meta property="og:description" content={frontMatter.description || 'A beginner friendly guide for mineflayer.py'}
        />
      </>// // this double slash stops IDE from freaking out
    )
  },
  useNextSeoProps: () => {
    const { frontMatter } = useConfig()
    return {
      titleTemplate: '%s – Guide',
      description: frontMatter.description || 'A beginner friendly guide for mineflayer.py'
    }
  },
  footer: {
    text: `MIT License ${new Date().getFullYear()} Mineflayer.py`
  },
  project: {
    link: 'https://github.com/SilkePilon/OpenDeliveryBot-Docs/',
  },
  chat: {
    link: 'https://discord.gg/8udMqB887G',
  },
  nextThemes: {
    defaultTheme: 'dark'
  },
  banner: {
    key: 'pjs-disclaimer',
    text: 'This is not a official package from PrismarineJS'
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 0,
    autoCollapse: false
  },
  toc: {
    float: true
  },
  docsRepositoryBase: 'https://github.com/SilkePilon/Mineflayer.py-docs/tree/main',
  feedback: {
    content: null
  },
  primaryHue: 190
}

export default config
