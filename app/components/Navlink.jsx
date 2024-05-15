import Link from "next/link";

const Navlink = ({ href, title }) => {
  return (
    <a>
      <Link
        href={href}
        prefetch={false}
        className="block py-2 pl-3 pr-4 text-[#e3ebf0] sm:text-xl rounded md:p-0 hover:text-white"
      >
        {title}
      </Link>
    </a>
  );
};

export default Navlink;
