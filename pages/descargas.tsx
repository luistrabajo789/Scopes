import Layout from "components/Layout/Layout";

import anydesk from "public/anydesk.jpg";
import teamviewer from "public/teamviewer.jpg";
import burnin from "public/burnintest.png";
import Link from "next/link";
import Image from "next/image";

export type ObjectCardDownload = {
  titleCard: string;
  descriptionCard: string;
  link: string;
  image: any;
  alt: string;
};

const dataPageDownload: ObjectCardDownload[] = [
  {
    titleCard: "AnyDesk",
    descriptionCard: "Software para soporte a distancia",
    link: "https://anydesk.com/es/downloads/linux",
    image: { anydesk },
    alt: "",
  },
  {
    titleCard: "Team Viewer",
    descriptionCard: "Software para soporte a distancia",
    link: "https://www.teamviewer.com/es/",
    image: { teamviewer },
    alt: "",
  },
  {
    titleCard: "BurninTest",
    descriptionCard:
      "Software para comprobar el estado de los componentes del equipo",
    link: "https://www.passmark.com/products/burnintest/download.php",
    image: { burnin },
    alt: "",
  },
  {
    titleCard: "Microsoft Office",
    descriptionCard: "Herramientas Ofimaticas (Word, excel, PowerPoint e.t.c)",
    link: "#!",
    image: "",
    alt: "",
  },
  {
    titleCard: "Crystal Disk",
    descriptionCard: "Comprueba el estado de tu disco duro",
    link: "#!",
    image: "",
    alt: "",
  },
  {
    titleCard: "Paquete de activacion programas",
    descriptionCard: "Activadores para programas basicos",
    link: "#!",
    image: "",
    alt: "",
  },
];

export default function Descargas() {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-32 mx-auto">
          <div className="flex flex-wrap gap-2 -m-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={anydesk}
                alt="anydesk"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  DESCARGA 1
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  AnyDesk
                </h1>
                <p className="leading-relaxed mb-3">
                  Software para soporte a distancia
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link
                    href="https://anydesk.com/es/downloads/linux"
                    className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Descargar
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>

            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={teamviewer}
                alt="anydesk"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  DESCARGA 2
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  TeamViewer
                </h1>
                <p className="leading-relaxed mb-3">
                  Software para soporte a distancia
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link
                    href="https://www.teamviewer.com/es/"
                    className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Descargar
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>

            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={burnin}
                alt="anydesk"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  DESCARGA 3
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  BurninTest
                </h1>
                <p className="leading-relaxed mb-3">
                  Software para comprobar el estado de los componentes del
                  equipo
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link
                    href="https://www.passmark.com/products/burnintest/download.php"
                    className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Descargar
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3"></div>
      </section>
    </Layout>
  );
}
