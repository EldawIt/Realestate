"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconPage() {
  const icon = [
    {
      src: "https://res.cloudinary.com/dpiie27st/image/upload/v1714981737/5296499_fb_facebook_facebook_logo_icon_wi1sze.png",
    },
    {
      src: "https://res.cloudinary.com/dpiie27st/image/upload/v1714981853/8598119_twiter_chat_message_comment_icon_xdhbb3.png",
    },
    {
      src: "https://res.cloudinary.com/dpiie27st/image/upload/v1714981904/4102606_applications_media_social_whatsapp_icon_rmds5f.png",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        cursor:"pointer"
      }}
    >
      {icon.map((item,index) => {
        return (
          <img
key={index}
            style={{ width: "45px", height: "45px" }}
            src={item.src}
            loading="lazy"
          />
        );
      })}
    </div>
  );
}

export default IconPage;
