import { useContext } from 'react';
import { redoUndoStackContext } from '@/context/history-context/redo-undo-stack-context';

export const useRedoUndoStack = () => useContext(redoUndoStackContext);
