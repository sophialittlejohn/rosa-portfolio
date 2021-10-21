import { ComponentLinksLink } from "../../utils/@types/strapi";
import Link from "next/link";

type CustomLinkProps = {
  link?: ComponentLinksLink;
  styles?: string;
};

const CustomLink: React.FC<CustomLinkProps> = ({
  link,
  styles = "",
  children,
}) => {
  const isInternalLink = link?.url.startsWith("/");

  // For internal links, use the Next.js Link component
  if (isInternalLink) {
    return (
      <Link href="/[[...slug]]" as={link?.url} passHref>
        <a className={styles}>{children}</a>
      </Link>
    );
  }

  // Plain <a> tags for external links
  if (link?.newTab) {
    return (
      <a href={link?.url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <a href={link?.url} target="_self">
      {children}
    </a>
  );
};

export default CustomLink;
