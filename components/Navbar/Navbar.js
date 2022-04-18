import { Nav, TextLink, Tag } from "./NavbarStyles.jsx";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <Nav>
      <ul>
        <Link href="/">
          <a>
            <TextLink select={pathName === "/"}>Home</TextLink>
          </a>
        </Link>

        <Link href="/about">
          <a>
            <TextLink select={pathName === "/about"}>About</TextLink>
          </a>
        </Link>

        <Link href="/proyects">
          <a>
            <TextLink select={pathName === "/proyects"}>Proyects</TextLink>
          </a>
        </Link>
        <Link href="/blog">
          <a>
            <TextLink select={pathName === "/blog"}>Blog</TextLink>
          </a>
        </Link>
        <Link href="#">
          <a>
            <TextLink select={pathName === "/stats"}>
              Videos
              <Tag>Beta</Tag>
            </TextLink>
          </a>
        </Link>

      </ul>
    </Nav>
  );
};

export default Navbar;
