import Link from "next/link";

export default function SectionHeader({
  title,
  describe,
  link,
  more,
}: {
  title: string;
  describe?: string;
  link?: string;
  more?: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-stretch">
        <div>
          {link ? (
            <Link href={link}>
              <h2 className="md:text-2xl text-xl font-bold bg-gradient-to-r from-[#1161A2] to-[#77C2B8] bg-clip-text text-transparent">
                {title}
              </h2>
            </Link>
          ) : (
            <h2 className="md:text-2xl text-xl font-bold bg-gradient-to-r from-[#1161A2] to-[#77C2B8] bg-clip-text text-transparent">
              {title}
            </h2>
          )}

          <div className=" my-3 w-[250px] bg-gradient-to-r from-[#1161A2] to-[#77C2B8] h-[4px]"></div>
        </div>
        {link && (
          <div className="hidden sm:block">
            <Link href={link}>
              <h2 className="text-md hover:text-blue-400 hover:underline">
                {more}
              </h2>
            </Link>
            <div className=" my-3 w-full bg-gradient-to-r from-[#1161A2] to-[#77C2B8] h-[4px]"></div>
          </div>
        )}
      </div>
      {describe ? (
        <p className="md:w-2/3 text-wrap md:text-md text-sm">{describe}</p>
      ) : undefined}
    </div>
  );
}
