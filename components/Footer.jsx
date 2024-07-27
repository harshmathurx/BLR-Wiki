import Link from "next/link";

const Footer = () => {
  return (
    <div className="inset-x-0 bottom-0 p-4 flex flex-row justify-around items-center">
      <div className="">
        <div className="mx-0.5">
          <span>Have more places in mind? Share them</span>
          <Link
            className="mx-1 underline"
            target="_blank"
            href="https://airtable.com/appgj3zR7clC0nFDc/shrk2vyPGgCNKXyrm"
          >
            here!
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
