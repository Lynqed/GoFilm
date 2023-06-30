import A1Photo1 from "assets/Projects/A1/Photo/1.jpeg";
import A1Photo2 from "assets/Projects/A1/Photo/2.jpeg";
import A1Photo3 from "assets/Projects/A1/Photo/3.jpeg";
import A1Photo4 from "assets/Projects/A1/Photo/4.jpeg";
import A1Photo5 from "assets/Projects/A1/Photo/5.jpeg";
import A1Photo6 from "assets/Projects/A1/Photo/6.jpeg";
import A1Photo7 from "assets/Projects/A1/Photo/7.jpeg";
import WeeterPhoto1 from "assets/Projects/Wetterskip/Photo/1.png";
import WeeterPhoto2 from "assets/Projects/Wetterskip/Photo/2.png";
import WeeterPhoto3 from "assets/Projects/Wetterskip/Photo/3.png";
import WeeterPhoto4 from "assets/Projects/Wetterskip/Photo/4.png";
import WeeterPhoto5 from "assets/Projects/Wetterskip/Photo/5.png";
import WeeterPhoto6 from "assets/Projects/Wetterskip/Photo/6.png";
import WeeterPhoto7 from "assets/Projects/Wetterskip/Photo/7.png";
import LunaPhoto1 from "assets/Projects/Luna/Photo/1.png";
import LunaPhoto2 from "assets/Projects/Luna/Photo/2.png";
import LunaPhoto3 from "assets/Projects/Luna/Photo/3.png";
import LunaPhoto4 from "assets/Projects/Luna/Photo/4.png";
import LunaPhoto5 from "assets/Projects/Luna/Photo/5.png";
import LunaPhoto6 from "assets/Projects/Luna/Photo/6.png";
import LunaPhoto7 from "assets/Projects/Luna/Photo/7.png";
import LeePhoto1 from "assets/Projects/Lee/Photo/1.png";
import LeePhoto2 from "assets/Projects/Lee/Photo/2.png";
import LeePhoto3 from "assets/Projects/Lee/Photo/3.png";
import LeePhoto4 from "assets/Projects/Lee/Photo/4.png";
import LeePhoto5 from "assets/Projects/Lee/Photo/5.png";
import LeePhoto6 from "assets/Projects/Lee/Photo/6.png";
import HenryPhoto1 from "assets/Projects/Henry/Photo/1.png";
import HenryPhoto2 from "assets/Projects/Henry/Photo/2.png";
import HenryPhoto3 from "assets/Projects/Henry/Photo/3.png";
import HenryPhoto4 from "assets/Projects/Henry/Photo/4.png";
import { IProjectSlide, VideoLinks } from "types";

interface IProps extends IProjectSlide {}
export const ProjectsData: IProps[] = [
  {
    id: 1,
    projectName: "A1 Betononderhoud",
    video: VideoLinks.A1Beton,
    title: "Merkfilm",
    aboutProject:
      "Meedenken vanaf het eerste moment. Dan kan A1 Betononderhoud met haar kennis en kunde het fundament leggen voor de beste maatwerk oplossing.",
    photo: [
      A1Photo1,
      A1Photo2,
      A1Photo3,
      A1Photo4,
      A1Photo5,
      A1Photo6,
      A1Photo7,
    ],
    aboutVideo:
      "“Hoe maken we een video die de kennis en kunde laat zien van ons bedrijf?, was de vraag die ons gesteld werd. We hebben hiervoor de werknemers centraal gesteld en vanuit hun ogen het bedrijf gepresenteerd. De diversiteit van het bedrijf komt naar voren in verschillende projecten die wij met strakke beelden in kaart hebben gebracht. Door af te wisselen met POV shots nemen de werknemers van A1 betononderhoud je mee door een scala aan werkzaamheden dat dit bedrijf op dagelijkse basis uitvoert.",
  },
  {
    id: 2,
    projectName: "Wetterskip Fryslân",
    video: VideoLinks.Wette,
    title: "Zichtbaarheid door film",
    aboutProject:
      "Wij hebben meegewerkt aan een campagne om Wetterskip Fryslân toegankelijker te maken voor de inwoners van Friesland.",
    photo: [
      WeeterPhoto1,
      WeeterPhoto2,
      WeeterPhoto3,
      WeeterPhoto4,
      WeeterPhoto5,
      WeeterPhoto6,
      WeeterPhoto7,
    ],
    aboutVideo:
      " De oplevering van dit project bestaat uit een serie video’s die voorbijgangers meer informatie geven over wat de taken van een waterschap zijn in, bij en rond een gemaal. Deze gemalen staan verspreid door de gehele provincie en hebben een belangrijke functie als het gaat om waterbeheer.",
  },
  {
    id: 3,
    projectName: "LUNA YOUNG MASTERS 2023",
    video: VideoLinks.Luna,
    title: "Media Art Friesland",
    aboutProject:
      "Bijna drie weken lang genoten we van mediakunst van jong talent uit binnen- en buitenland in het Stationskwartier in Leeuwarden, hierbij hebben wij gezorgd voor de aftermovie die dit evenement samenvat.",
    photo: [
      LunaPhoto1,
      LunaPhoto2,
      LunaPhoto3,
      LunaPhoto4,
      LunaPhoto5,
      LunaPhoto6,
      LunaPhoto7,
    ],
    aboutVideo:
      " In het centrum van Leeuwarden vind je prachtige lichtshows en kunstwerken van nationale en internationale kunstenaars. Om hier een blijvende herinnering van te maken zijn wij op pad geweest om de gehele omgeving vast te leggen en op een creatieve manier te verwerken tot een aftermovie die een duidelijk overzicht geeft van de diverse creatieve uitingen.",
  },
  {
    id: 4,
    projectName: "Leeuwerikhoeve",
    video: VideoLinks.Lee,
    title: "Rebranding campagne",
    aboutProject:
      "Een volledige visuele vertaling van alle onderdelen van dit wellnessresort, om een duidelijk beeld te geven waar toekomstige bezoekers komen.",
    photo: [LeePhoto1, LeePhoto2, LeePhoto3, LeePhoto4, LeePhoto5, LeePhoto6],
    aboutVideo:
      "Het gevoel van wellness is een rustgevende ervaring voor lichaam en geest. Perfect om bezoekers mee te nemen naar een droomwereld die samenkomt met de realiteit bij de Leeuwerikhoeve.",
  },
  {
    id: 5,
    projectName: "Henry Schein Medical",
    video: VideoLinks.Henry,
    title: "Event",
    aboutProject:
      "Zien en gezien worden, maar hoe blijf je voorop lopen in jouw sector? Contentmarketing in de gezondheidszorg komt nog niet heel vaak voor. Samen met Henry Schein werken wij aan de zichtbaarheid van dit bedrijf.",
    photo: [HenryPhoto1, HenryPhoto2, HenryPhoto3, HenryPhoto4],
    aboutVideo:
      "Afgelopen jaren hebben wij diverse keren mogen werken voor Henry Schein Medical. Dit internationale bedrijf neemt het voortouw als het gaat om verduurzaming. Samen met Trees for All werken ze aan een groenere toekomst. Deze transitie leggen ze vast met video’s, om later ook terug te kunnen kijken op de stappen die gezet zijn.",
  },
];
