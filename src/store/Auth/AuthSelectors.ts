import { useAppSelector } from '../index.ts';

export const useAuthSelector = () => useAppSelector((state) => state.auth);
