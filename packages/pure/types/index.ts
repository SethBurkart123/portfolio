import { Icons } from '../libs/icons'

export type { IntegrationUserConfig } from './integrations-config'
export type { ThemeUserConfig } from './theme-config'
export type { UserInputConfig as Config, UserConfig as ConfigOutput } from './user-config'

export interface SiteMeta {
  title: string
  description?: string
  ogImage?: string | undefined
  articleDate?: string | undefined
}

export type TimelineEvent = {
  date: string
  content: string
}

export type iconsType = keyof typeof Icons

export { socialLinks } from './constants'
