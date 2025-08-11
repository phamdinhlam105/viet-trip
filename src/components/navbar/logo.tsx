import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/homepage/MainLogo.svg"
      alt="Việp trip Tourist"
      title="Du Lịch và Lữ Hành Việt Trip"
      width={150}
      height={75}
      className="object-cover"
    />
  );
}
