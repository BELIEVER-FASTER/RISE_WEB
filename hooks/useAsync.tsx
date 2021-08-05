/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useReducer } from 'react';
import { EmailNotiRes } from 'utils/requests';
type Action =
  | { type: 'LOADING' }
  | { type: 'SUCCESS'; payload: EmailNotiRes }
  | { type: 'ERROR'; payload: unknown };
type AsyncStateType = {
  loading: boolean;
  success: boolean | EmailNotiRes;
  error: boolean | unknown;
};

const initialState: AsyncStateType = {
  loading: false,
  success: false,
  error: false,
};
function reducer(_: AsyncStateType, action: Action): AsyncStateType {
  switch (action.type) {
    case 'LOADING':
      return { loading: true, success: false, error: false };
    case 'SUCCESS':
      return { loading: false, success: action.payload, error: false };
    case 'ERROR':
      return { loading: false, success: false, error: action.payload };
    default:
      throw new Error('Cannot find Action.type');
  }
}

export default function useAsync(
  callback: any,
  param: any
): [AsyncStateType, () => Promise<void>] {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchApi = async () => {
    try {
      dispatch({ type: 'LOADING' });
      const payload = await callback(param);
      dispatch({ type: 'SUCCESS', payload });
    } catch (e) {
      console.error(e);
      dispatch({ type: 'ERROR', payload: e });
    }
  };

  return [state, fetchApi];
}
