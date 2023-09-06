import React from "react";
import Link from "next/link";
import Image from "next/image";

import facebook_icon from "@/images/facebook.png";
import instagran_icon from "@/images/instagram.png";
import github_icon from "@/images/github.png";
import mail_icon from "@/images/mail.png";

const BoxContact = ({ className }: { className: React.ReactNode }) => {
  const img_size = 28;

  return (
    <div
      className={`contacts-content flex flex-row space-x-3 item-center ${className}`}
    >
      <Link href="https://github.com/IvaStival">
        <Image
          src={github_icon}
          alt="github link"
          width={img_size}
          height={img_size}
        />
      </Link>
      <Link href="https://instagram.com/ivastival?igshid=MzMyNGUyNmU2YQ==">
        <Image
          src={instagran_icon}
          alt="instagran link"
          width={img_size}
          height={img_size}
        />
      </Link>
      <Link href="https://www.facebook.com/iva.stival">
        <Image
          src={facebook_icon}
          alt="facebook link"
          width={img_size}
          height={img_size}
        />
      </Link>
      <Link href="mailto:ivastival@gmail.com">
        <Image
          src={mail_icon}
          alt="mail link"
          width={img_size}
          height={img_size}
        />
      </Link>
    </div>
  );
};

export default BoxContact;
