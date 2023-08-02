import { FC } from "react";

export interface TitleProps {
   name: string;
}

export const Title: FC<TitleProps> = (props) => (
   <h1>{props.name}</h1> 
)

export default Title
