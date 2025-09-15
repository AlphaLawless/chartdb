import { createContext, useContext } from 'react';
import type { BaseAlertDialogProps } from '@/dialogs/base-alert-dialog/base-alert-dialog';
import { emptyFn } from '@/lib/utils';

export interface AlertContext {
  showAlert: (params: BaseAlertDialogProps) => void;
  closeAlert: () => void;
}

export const alertContext = createContext<AlertContext>({
  closeAlert: emptyFn,
  showAlert: emptyFn,
});

export const useAlert = () => useContext(alertContext);
