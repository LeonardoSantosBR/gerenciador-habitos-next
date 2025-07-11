import Image from "next/image";

export default function DayStates({ day }: { day: boolean | undefined }) {
  let properties: [string, string, number?] = [
    "/images/current.svg",
    "gray-mark-icon",
    18,
  ];

  switch (day) {
    case true:
      properties = ["/images/done.svg", "green-mark-icon", 21];
      break;
    case false:
      properties = ["/images/not-done.svg", "red-mark-icon", 18];
      break;
  }

  const [src, alt, size] = properties;
  return (
    <div>
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  );
}
