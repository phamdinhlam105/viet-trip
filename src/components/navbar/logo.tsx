import Image from "next/image";

export default function Logo() {
    return <Image src="/homepage/MainLogo.svg" alt="Logo chính" width={300} height={200} className="object-cover"/>
}
