// shared utilities
import { useIsString } from '@validators/typeCheckers/useIsString'

export const removeFileNameExtension = (name: string): string => {
  const currentName = new useIsString(name).value
  return currentName.replace(/\.[^/.]+$/, '')
}

export const escapeRegExp = (string: string): string | undefined => {
  return new useIsString(string).value.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
}
