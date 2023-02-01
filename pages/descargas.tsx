import Layout from "components/Layout/Layout";

export type ObjectCardDownload = {
  id: any;
  titleCard: string;
  descriptionCard: string;
  link: string;
  logo: string;
  alt: string;
};

const dataPageDownload: ObjectCardDownload[] = [
  {
    id: 1,
    titleCard: "AnyDesk",
    descriptionCard: "Software para soporte a distancia",
    link: "https://anydesk.com/es/downloads/linux",
    logo: "../public/anydesk.jpg",
    alt: "AnyDesk logo",
  },
  {
    id: 2,
    titleCard: "Team Viewer",
    descriptionCard: "Software para soporte a distancia",
    link: "https://www.teamviewer.com/es/",
    logo: "../public/anydesk.jpg",
    alt: "TeamViewer logo",
  },
  {
    id: 3,
    titleCard: "BurninTest",
    descriptionCard:
      "Software para comprobar el estado de los componentes del equipo",
    link: "https://www.passmark.com/products/burnintest/download.php",
    logo: "../public/anydesk.jpg",
    alt: "BurninTest logo",
  },
  {
    id: 4,
    titleCard: "Microsoft Office",
    descriptionCard: "Herramientas Ofimaticas (Word, excel, PowerPoint e.t.c)",
    link: "#!",
    logo: "../public/anydesk.jpg",
    alt: "Microsoft Office logo",
  },
  {
    id: 5,
    titleCard: "Crystal Disk",
    descriptionCard: "Comprueba el estado de tu disco duro",
    link: "#!",
    logo: "../public/anydesk.jpg",
    alt: "CrystalDisk logo",
  },
  {
    id: 6,
    titleCard: "Paquete de activacion programas",
    descriptionCard: "Activadores para programas basicos",
    link: "#!",
    logo: "../public/anydesk.jpg",
    alt: "Activators logo",
  },
];

export default function Descargas() {
  return (
    <Layout>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-28 mx-auto">
          <div className="grid grid-cols-12 gap-3">
            {dataPageDownload.map((e) => (
              <div
                className="col-span-12 sm:col-span-6 lg:col-span-3 shadow-lg shadow-stone-600 h-60 text-center gap-5 grid place-content-center"
                key={e.id}
                style={{ background: `url(${e.logo})` }}
              >
                <div className="">
                  <h1 className="font-bold text-xl">{e.titleCard}</h1>
                  <p>{e.descriptionCard}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
