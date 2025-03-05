import type { NodeDefault } from '../../types'
import type { LoopStartNodeType } from './types'
import { ALL_CHAT_AVAILABLE_BLOCKS, ALL_COMPLETION_AVAILABLE_BLOCKS } from '@/app/components/workflow/blocks'

const nodeDefault: NodeDefault<LoopStartNodeType> = {
  defaultValue: {},
  getAvailablePrevNodes() {
    return []
  },
  getAvailableNextNodes(isChatMode: boolean) {
    const nodes = isChatMode ? ALL_CHAT_AVAILABLE_BLOCKS : ALL_COMPLETION_AVAILABLE_BLOCKS
    return nodes
  },
  checkValid() {
    return {
      isValid: true,
    }
  },
}

export default nodeDefault
