import Link from "next/link";

export default function BackCard({title, url}:any) {
  return (
    <div className="h-full bg-black/75 w-full absolute top-0 left-0 flex flex-col items-center justify-center text-white p-4">
      <h3 className="font-bold text-center first-letter:uppercase text-xl mb-2">{title}</h3>
      <div className="mb-4 text-sm">Pequeña descripción</div>
      <Link href={url} type='button' className=" bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-lg">
        Descargar
      </Link>
    </div>
  );
}
