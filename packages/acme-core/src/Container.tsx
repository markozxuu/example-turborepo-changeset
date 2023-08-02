import { FC, ReactElement } from "react";

export interface ContainerProps {
  children: ReactElement;
}

export const Container: FC<ContainerProps> = (props) => (
    <div>
        {props.children}
    </div>
)
