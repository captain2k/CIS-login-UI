import { AntProvider } from './AntProvider';
import { ReduxProvider } from './ReduxProvider';
import {ReactNode} from "react";

export const Providers = ({ children }: {children: ReactNode}) => {
  return (
    <ReduxProvider>
      <AntProvider>{children}</AntProvider>
    </ReduxProvider>
  );
};
