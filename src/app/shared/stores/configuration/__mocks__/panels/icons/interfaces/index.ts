import type { Names } from '@components/base/base-icon/types'

export interface IDefaultIcons {
  id: string
  icon: Names
}

export interface IIcons {
  icons?: IDefaultIcons[]
  actions?: IDefaultIcons[]
}
