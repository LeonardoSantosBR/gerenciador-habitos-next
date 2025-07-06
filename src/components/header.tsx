import Image from "next/image";

export default function Header() {
  return (
    <div className="flex ">
      <Image
        alt="Imagem check"
        src="/images/checked.svg"
        width={30}
        height={200}
        className="mr-3"
      />
      <Image
        alt="Logo - meta diária"
        src="/images/meta.diaria.svg"
        width={170}
        height={200}
      />
    </div>
  );
}
