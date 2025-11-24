type Props = { title: string };

export function RegistrosHeader({ title }: Props) {
  return (
    <header className="px-2 text-center py-5 capitalize bg-white border-b border-b-neutral-700/10">
      <h1 className="text-center text-3xl font-bold">{title}</h1>
    </header>
  );
}
