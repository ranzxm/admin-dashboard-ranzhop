import Image from "next/image";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Image src="/assets/images/ranzhop-dark.png" width={120} height={100} alt="logo-brand" />
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
