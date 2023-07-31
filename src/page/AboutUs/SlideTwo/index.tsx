import React from "react";
import { useNavigate } from "react-router";
import { URLS } from "utils/router";
import style from "./style.module.scss";

const SlideTwo = () => {
  const navigate = useNavigate();
  const pageNumber = 5;

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.boxText}>
          <p className={style.boldText}>
            Waarom GoFilm? Onze missie is duidelijk: wij gaan alle bedrijven,
            die ervoor openstaan, te voorzien van hoge kwaliteit video’s om hun
            doelgroep op een creatieve manier te bereiken. We streven erna om
            video’s te produceren die niet alleen beelden tonen, maar ook
            daadwerkelijk impact maken bij jullie doelgroep.
          </p>

          <p className={style.text}>
            Wat ons echt uniek maakt, is onze snelle en persoonlijke
            samenwerking met onze klanten. We geloven sterk in het belang van
            transparantie en kwaliteit in alles wat we doen. Bij elke opdracht
            zetten we onze creativiteit en expertise in om moderne en
            innovatieve video's te creëren. Of het nu gaat om bedrijfsfilms,
            commercials of campagnevideo's. Wij streven er altijd naar om een
            film te maken die naadloos aansluit bij jouw bedrijf en perfect
            inspeelt op de behoeften van je doelgroep. Bij GoFilm gaat onze
            betrokkenheid verder dan alleen jouw bedrijf. We nemen de tijd om
            jouw doelgroep grondig te begrijpen en doen altijd het benodigde
            onderzoek om te weten waar en hoe we de juiste snaar kunnen raken.
            Creativiteit is als een drijfveer voor ons team. Bij elke video
            streven we ernaar om verrassend en vernieuwend te zijn. We willen
            niet alleen een boodschap overbrengen, maar ook een blijvende indruk
            achterlaten bij jouw publiek. Wij zijn niet bang om samen te werken
            met andere experts en professionals. We hechten juist waarde aan de
            input van marketing- en communicatiebureaus om gezamenlijk tot de
            meest effectieve campagnevideo's en commercials te komen. We kijken
            er naar uit om van jullie te horen! <br />
            <i>Team GoFilm</i>
          </p>
        </div>
        <div className={style.buttonBox}>
          <button
            className={style.button}
            onClick={() => {
              const url = `${URLS.MAIN}${pageNumber}`;
              navigate(url);
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SlideTwo);
