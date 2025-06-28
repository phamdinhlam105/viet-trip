import Image from "next/image";

export default function Logo() {
    return <Image src="/homepage/MainLogo.svg" alt="Logo chính" width={150} height={75} className="object-cover"/>
}
