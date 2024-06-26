import type { NextPage } from "next";
import SocialButton from "@/components/ui2/social-button";
import { ButtonProps } from "@/components/ui2/social-button";

const YoutubeButton: NextPage<ButtonProps> = ({
  url,
  title = "Go to the YouTube Channel",
  target,
  external,
}) => {
  return (
    <SocialButton
      link={url}
      text={title}
      target={target}
      external={external}
      iconSrc="youtube.svg"
      iconAlt="YouTube Logo"
      className="color-black bg-[#000000]"
    />
  );
};

export default YoutubeButton;
