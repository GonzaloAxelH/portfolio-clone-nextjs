import { useState } from "react";
import Image from "next/image";
import Modal from "../Modals/ModalMenu.js";

import {
  Wrappernavbar,
  WrapperHeader,
  WrapperIcon,
  WrapperUserImage,
  Options,
  WrapperRedSocials,
} from "./HeaderStyles.jsx";
import Navbar from "../Navbar/Navbar";
import ToogleTheme from "../Icons/ToogleTheme";
import MenuIcon from "../Icons/MenuIcon";
import Link from "next/link";
import RedSocials from "../BlogComponents/RedSocials/RedSocials.js";

const Header = ({ onToggleTheme }) => {
  const [showModal, setShowModal] = useState(false);
  // get the context value

  return (
    <WrapperHeader>
      <WrapperUserImage>
        <Link href="/">
          <a>
            <Image
              src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Programmer-512.png"
              alt="Photo"
              width={48}
              objectFit="cover"
              height={48}
            />
          </a>
        </Link>
      </WrapperUserImage>
      <Wrappernavbar>
        <Navbar />
      </Wrappernavbar>
      <Options>
        <WrapperIcon menu={true} onClick={() => setShowModal(true)}>
          <MenuIcon />
        </WrapperIcon>
        <WrapperIcon fixed theme={true} onClick={onToggleTheme}>
          <ToogleTheme />
        </WrapperIcon>
      </Options>
      <Modal
        onToggleTheme={onToggleTheme}
        onClose={() => setShowModal(false)}
        show={showModal}
      />
    </WrapperHeader>
  );
};

export default Header;
