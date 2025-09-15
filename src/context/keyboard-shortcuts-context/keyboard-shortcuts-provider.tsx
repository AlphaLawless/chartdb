import { useReactFlow } from '@xyflow/react';
import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useChartDB } from '@/hooks/use-chartdb';
import { useDialog } from '@/hooks/use-dialog';
import { useHistory } from '@/hooks/use-history';
import { useLayout } from '@/hooks/use-layout';
import {
  KeyboardShortcutAction,
  keyboardShortcutsForOS,
} from './keyboard-shortcuts';
import { keyboardShortcutsContext } from './keyboard-shortcuts-context';

export const KeyboardShortcutsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { redo, undo } = useHistory();
  const { openOpenDiagramDialog } = useDialog();
  const { updateDiagramUpdatedAt } = useChartDB();
  const { toggleSidePanel } = useLayout();
  const { fitView } = useReactFlow();

  useHotkeys(
    keyboardShortcutsForOS[KeyboardShortcutAction.REDO].keyCombination,
    redo,
    {
      preventDefault: true,
    },
    [redo]
  );
  useHotkeys(
    keyboardShortcutsForOS[KeyboardShortcutAction.UNDO].keyCombination,
    undo,
    {
      preventDefault: true,
    },
    [undo]
  );
  useHotkeys(
    keyboardShortcutsForOS[KeyboardShortcutAction.OPEN_DIAGRAM].keyCombination,
    () => openOpenDiagramDialog(),
    {
      preventDefault: true,
    },
    [openOpenDiagramDialog]
  );
  useHotkeys(
    keyboardShortcutsForOS[KeyboardShortcutAction.SAVE_DIAGRAM].keyCombination,
    updateDiagramUpdatedAt,
    {
      preventDefault: true,
    },
    [updateDiagramUpdatedAt]
  );
  useHotkeys(
    keyboardShortcutsForOS[KeyboardShortcutAction.TOGGLE_SIDE_PANEL]
      .keyCombination,
    toggleSidePanel,
    {
      preventDefault: true,
    },
    [toggleSidePanel]
  );
  useHotkeys(
    keyboardShortcutsForOS[KeyboardShortcutAction.SHOW_ALL].keyCombination,
    () => {
      fitView({
        duration: 500,
        padding: 0.1,
        maxZoom: 0.8,
      });
    },
    {
      preventDefault: true,
    },
    [fitView]
  );

  return (
    <keyboardShortcutsContext.Provider value={{}}>
      {children}
    </keyboardShortcutsContext.Provider>
  );
};
