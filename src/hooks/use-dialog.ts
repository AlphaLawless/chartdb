import { useContext } from 'react';
import { dialogContext } from '@/context/dialog-context/dialog-context';

export const useDialog = () => useContext(dialogContext);
