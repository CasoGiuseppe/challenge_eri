import type { SEMANTIC_RULES } from './constants'
import * as EXPORTED_ICONS from '../../icons'
export interface SemanticIconInterface {
  [key: string]: SemanticRule
}

export type SemanticRule = (typeof SEMANTIC_RULES)[keyof typeof SEMANTIC_RULES]
export type Names = keyof typeof EXPORTED_ICONS
