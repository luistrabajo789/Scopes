import anydesk from "public/anydesk.jpg";
import teamviewer from "public/teamviewer.jpg";
import burnintest from "public/burnintest.png";
import { StaticImageData } from "next/image";

export type ObjectCard = {
  titleCard: string;
  descriptionCard: string;
  link: string;
  image: any;
  alt:string
};

export const dataPageDownload:ObjectCard[] = [
  {
    titleCard: "AnyDesk",
    descriptionCard: "Software para soporte a distancia",
    link: "https://anydesk.com/es/downloads/linux",
    image: { anydesk },
    alt:''
  },
  {
    titleCard: "Team Viewer",
    descriptionCard: "Software para soporte a distancia",
    link: "https://www.teamviewer.com/es/",
    image: { teamviewer },
    alt:''
  },
  {
    titleCard: "BurninTest",
    descriptionCard:
      "Software para comprobar el estado de los componentes del equipo",
    link: "https://www.passmark.com/products/burnintest/download.php",
    image: { burnintest },
    alt:''
  },
  {
    titleCard: "Microsoft Office",
    descriptionCard: "Herramientas Ofimaticas (Word, excel, PowerPoint e.t.c)",
    link: "#!",
    image: "",
    alt:''
  },
  {
    titleCard: "Crystal Disk",
    descriptionCard: "Comprueba el estado de tu disco duro",
    link: "#!",
    image: "",
    alt:''
  },
  {
    titleCard: "Paquete de activacion programas",
    descriptionCard: "Activadores para programas basicos",
    link: "#!",
    image: "",
    alt:''
  },
];
