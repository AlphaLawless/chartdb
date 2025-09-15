import { createContext } from 'react';
import { emptyFn } from '@/lib/utils';

export interface HistoryContext {
  undo: () => void;
  redo: () => void;
  hasUndo: boolean;
  hasRedo: boolean;
}

export const historyContext = createContext<HistoryContext>({
  undo: emptyFn,
  redo: emptyFn,
  hasUndo: false,
  hasRedo: false,
});
