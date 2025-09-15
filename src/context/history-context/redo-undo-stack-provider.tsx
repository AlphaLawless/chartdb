import React, { useCallback } from 'react';
import type { RedoUndoAction } from './redo-undo-action';
import type { RedoUndoStackContext } from './redo-undo-stack-context';
import { redoUndoStackContext } from './redo-undo-stack-context';

export const RedoUndoStackProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [undoStack, setUndoStack] = React.useState<RedoUndoAction[]>([]);
  const [redoStack, setRedoStack] = React.useState<RedoUndoAction[]>([]);

  const addRedoAction: RedoUndoStackContext['addRedoAction'] = useCallback(
    (action) => {
      setRedoStack((prev) => [...prev, action]);
    },
    []
  );

  const addUndoAction: RedoUndoStackContext['addUndoAction'] = useCallback(
    (action) => {
      setUndoStack((prev) => [...prev, action]);
    },
    []
  );

  const resetRedoStack: RedoUndoStackContext['resetRedoStack'] =
    useCallback(() => {
      setRedoStack([]);
    }, []);

  const resetUndoStack: RedoUndoStackContext['resetUndoStack'] =
    useCallback(() => {
      setUndoStack([]);
    }, []);

  const hasRedo = redoStack.length > 0;
  const hasUndo = undoStack.length > 0;

  return (
    <redoUndoStackContext.Provider
      value={{
        redoStack,
        undoStack,
        addRedoAction,
        addUndoAction,
        resetRedoStack,
        resetUndoStack,
        hasRedo,
        hasUndo,
      }}
    >
      {children}
    </redoUndoStackContext.Provider>
  );
};
