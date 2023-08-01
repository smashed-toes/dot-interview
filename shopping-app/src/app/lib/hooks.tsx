import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { ReduxState, ReduxDispatch } from "./redux/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => ReduxDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
