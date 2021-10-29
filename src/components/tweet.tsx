import { FC } from "react";

export const Tweet: FC<{ tweet: string }> = ({ tweet }) => {
  return <div className="tweet">{tweet}</div>;
};
