import Layout from "components/Layout/Layout";
import DownloadCard from "components/cards/DownloadCard";
import { dataPageDownload, ObjectCard } from "utils/dataPages/dataPageDownload";


export default function Descargas() {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {dataPageDownload.map((card, index) => 
               <DownloadCard key={index}
               titleCard={card.titleCard}
               descriptionCard={card.descriptionCard}
                link={card.link}
                image={card.image}
                alt={card.alt}
              />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
