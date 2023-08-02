import { FC } from "react";

export interface BannerProps {
  content: string;
  title: string;
}

export const Banner: FC<BannerProps> = (props) => {
  const { title, content } = props;
  return (
    <div>
        <h1>{title}</h1>
        {content}
    </div>
  )
}