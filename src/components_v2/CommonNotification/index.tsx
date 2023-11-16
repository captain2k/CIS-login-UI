import { Avatar, Badge, Popover } from "antd";
import { AvatarSize } from "antd/lib/avatar/AvatarContext";
import { Notification } from "assets/svg";
import React from "react";

type TypeShape = 'shape' | 'circle';
interface IProps {
  count?: number,
  shape?: 'square' | 'circle',
  size?: AvatarSize,
  customContent: any,
  content: HTMLElement
}

const CommonNotification = ({ count = 0, shape = "square", size = "small", customContent, content } : IProps) => {
  let DefaultContent = () => {
    return <>{content}</>;
  };

  return (
    <Popover placement="topRight" content={!customContent ? <DefaultContent /> : customContent} overlayInnerStyle={{ borderRadius: "15px"}}>
      <div style={{ marginRight: 12 }}>
        <Badge count={count}>
          <Avatar shape={shape} size={size} icon={<Notification />} style={{ background: "transparent",cursor:"pointer" }} />
        </Badge>
      </div>
    </Popover>
  );
};

export default CommonNotification;
