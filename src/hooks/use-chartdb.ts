import { useContext } from 'react';
import { chartDBContext } from '@/context/chartdb-context/chartdb-context';

export const useChartDB = () => useContext(chartDBContext);
