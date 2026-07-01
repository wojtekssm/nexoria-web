//Translation data
const items = [
  {
    name: "Header",
    translations: [
      {id: 1, pl: "Stawy Rybne", de: "Fischteiche" }
    ]
  },
  // {
  //   name: "Introduction",
  //   translations: [
  //     {id: 1, pl: "Serdecznie państwa zapraszamy nad nasze stawy wędkarskie!", de: "Herzlich willkommen an unseren Angelteichen!" },
  //     {id: 2, pl: "Zapraszamy do rodzinnego wędkowania i aktywnego wypoczynku w naszym gospodarstwie rybacko-agroturystycznym. Nasze stawy powstały w 1987 roku - 38 lat temu, wracają do działalności po 8 latach suszy. Oferujemy łowiska specjalne na stawach w Stokach oraz jeziorach: Mętno (140ha), Ostrów (86ha), Orzechów (39ha) i Czachów (18ha) - idealne miejsca dla miłośników natury i relaksu.", de: "Wir laden Sie herzlich ein zum Familienangeln und aktiven Erholen in unserem fischereiwirtschaftlich und agrotouristisch geführten Betrieb. Wir bieten Sonderangelreviere an unseren Teichen in Stoki sowie an den Seen: Mętno (140 ha), Ostrów (86 ha), Orzechów (39 ha) und Czachów (18 ha) – ideale Orte für Naturliebhaber und Freunde der Erholung." },
  //     {id: 3, pl: "Nasze gospodarstwo agroturystyczne znajduje się 3 km od Chojny, w sercu Cedyńskiego Parku Krajobrazowego. Dojazd jest łatwy - pociągiem do Chojny, dalej transportem zorganizowanym przez gospodarzy.", de: "Unser Agrotourismusbetrieb liegt 3 km von Chojna im Herzen des Landschaftsparks Cedynia. Die Anreise ist einfach: mit dem Zug nach Chojna und anschließend mit dem von uns organisierten Transport hierher." }
  //   ]
  // },
//   {
//     name: "Offer",
//     translations: [
//       {id: 1, pl: "Oferujemy:", de: "Wir bieten:" },
//       {id: 2, pl: `<li>strzeżony parking</li>
//                 <li>pole namiotowe z naturalnym basenem kąpielowym</li>
//                 <li>ciche, spokojne miejsca do wypoczynku</li>
//                 <li>WC z umywalką</li>
//                 <li>możliwość zamówienia posiłków i napojów</li>
//                 <li>woda zdrojowa z własnego źródła</li>
//                 <li>przyjazną, wykształconą obsługę</li>`, de: `<li>bewachten Parkplatz</li>
//                 <li>Zeltplatz mit natürlichem Badeteich</li>
//                 <li>ruhige, erholsame Plätze zum Ausspannen</li>
//                 <li>WC mit Waschbecken</li>
//                 <li>Möglichkeit, Mahlzeiten und Getränke zu bestellen</li>
//                 <li>Quellwasser aus eigener Quelle</li>
//                 <li>freundlichen und gut ausgebildeten Service</li>` },
//       {id: 3, pl: "Zapraszamy do relaksu w przyjaznej atmosferze i atrakcyjnych cenach!", de: "Genießen Sie die Entspannung in freundlicher Atmosphäre und zu attraktiven Preisen!" },
//       {id: 4, pl: "Co ważne, nasz chów jest w pełni ekologiczny, prowadzony na naturalnych stawach z roślinnością. Nie korzystamy z żadnych chemikaliów ani sztucznych dodatków. Nasze ryby nie są zatłoczone! Na naszych stawach w Stokach koło Chojny od ponad 38 lat gościmy wędkarzy. Oferujemy trzy wydzielone łowiska z warunkami specjalnymi, parking, pole namiotowe, basen i sanitariaty. Wędkowanie wyłączne z brzegu na spławik, grunt i spinning. Połów dostępny po wykupieniu karty wstępu, złowione ryby można wykupić według naszego cennika.", de: "Seit 38 Jahren begrüßen wir Angler an unseren Teichen in Stoki bei Chojna. Wir bieten drei abgeteilte Sonderangelplätze, Parkplatz, Zeltplatz, Naturbad und Sanitäranlagen. Geangelt wird ausschließlich vom Ufer aus mit Schwimmer, Grundmontage oder Spinnangeln. Der Fang ist nach Erwerb einer Eintrittskarte erlaubt, gefangene Fische können nach unserer Preisliste erworben werden." }
//     ]
//  },
  // {
  //   name: "Experienced Offer",
  //   translations: [
  //     {id: 1, pl: "Oferta dla doświadczonych wędkarzy", de: "Angebot für erfahrene Angler" },
  //     {id: 2, pl: "Pasjonatów wędkarstwa o większym doświadczeniu zapraszamy do skorzystania z wyjątkowej możliwości połowów na naszych dzierżawionych jeziorach. Oferujemy dostęp do malowniczych akwenów:", de: "Für passionierte Angler mit mehr Erfahrung bieten wir die außergewöhnliche Möglichkeit, an unseren gepachteten Seen zu fischen. Wir bieten Zugang zu malerischen Gewässern:" },
  //     {id: 3, pl: `<li>Jezioro Mętno - 136 hektarów</li>
  //                   <li>Jezioro Ostrów - Stoki - 86 hektarów</li>
  //                   <li>Jezioro Czachów - 18 hektarów</li>
  //                   <li>Jezioro Orzechów - 39 hektarów</li>`, de: `<li>Mętnosee – 136 Hektar</li>
  //               <li>Ostrówsee – Stoki – 86 Hektar</li>
  //               <li>Czachówsee – 18 Hektar</li>
  //               <li>Orzechówsee – 39 Hektar</li>` },
  //     {id: 4, pl: "Każde z jezior zapewnia doskonałe warunki do połowu oraz niezapomniane chwile w otoczeniu natury. Zapraszamy do odkrywania nowych wyzwań i czerpania radości z wędkowania na naszych łowiskach!", de: "Jeder See bietet hervorragende Angelbedingungen und unvergessliche Momente inmitten der Natur. Entdecken Sie neue Herausforderungen und genießen Sie die Freude am Angeln in unseren Gewässern!" }
  //   ]
  // },
  {
    name: "Lakes",
    translations: [
      {id: 1, pl: "Sprzedaż", de: "Verkaufen" },
      /* {id: 2, pl: "Jezioro Mętno", de: "Mętnosee"  },
      {id: 3, pl: `<p>Jezioro Mętno, o powierzchni 141 ha i maksymalnej głębokości około 4 metrów, leży w centrum Cedyńskiego Parku Krajobrazowego, zaledwie 3 km od Chojny. Otoczone lasami, z ograniczonym dostępem do brzegu, wędkowanie odbywa się głównie z łodzi i pontonów.</p>
                <p>W jeziorze można złowić m.in. szczupaki, liny, sandacze, węgorze, karpie, karasie, leszcze i sumy. To jedno z najlepiej zarybionych jezior w województwie zachodniopomorskim.</p>
                <p>Nad jeziorem znajduje się parking, a latem organizowane są tu spinningowe zawody wędkarskie. Przed przyjazdem warto sprawdzić aktualne zasady połowów i wymagane zezwolenia.</p>`, de: `<p>Der Mętnosee hat eine Fläche von 141 ha und eine maximale Tiefe von ca. 4 m. Er liegt im Zentrum des Landschaftsparks Cedynia, nur 3 km von Chojna entfernt. Umgeben von Wäldern und mit eingeschränktem Uferzugang wird hier vor allem vom Boot oder Schlauchboot aus geangelt.</p>
            <p>Gefangen werden können u. a. Hechte, Schleien, Zander, Aale, Karpfen, Karauschen, Brassen und Welse. Es ist eines der am besten besetzten Gewässer in der Woiwodschaft Westpommern. </p>
            <p>Am See gibt es einen Parkplatz, im Sommer werden Spinnfisch-Wettbewerbe organisiert. Vor der Anreise ist es empfehlenswert, die aktuellen Angelbestimmungen und erforderlichen Genehmigungen zu prüfen.</p>`  },
      {id: 4, pl: "Jezioro Ostrów", de: "Ostrówsee"  },
      {id: 5, pl: `<p>Jezioro Ostrów ma powierzchnię 86 ha i maksymalną głębokość 11 m, ze średnią około 5 m. Znajduje się w Cedyńskim Parku Narodowym, 10 km od przejścia granicznego w Krajniku Dolnym.</p>
                <p>Można tu łowić szczupaki, sumy, karpie, karasie złociste, okonie, węgorze, liny i inne ryby karpiowate. Połowy odbywają się z brzegu (pomostów), łodzi i pontonów.</p>
                <p>Nad jeziorem jest duże pole biwakowe i parking na około 1 ha, plaża kąpielowa oraz możliwość wypożyczenia łodzi wędkarskich. To idealne miejsce na rodzinny wypoczynek także ze zwierzakiem.</p>`, de: `<p>Der Ostrówsee hat eine Fläche von 86 ha und eine maximale Tiefe von 11 m, die durchschnittliche Tiefe beträgt ca. 5 m. Er befindet sich im Landschaftspark Cedynia, 10 km vom Grenzübergang Krajnik Dolny entfernt.</p>
            <p>Hier kann man Hechte, Welse, Karpfen, Goldkarauschen, Barsche, Aale, Schleien und andere Karpfenfische angeln. Das Angeln erfolgt vom Ufer (Stegen), Booten und Schlauchbooten.</p>
            <p>Am See gibt es ein großes Campingareal und einen Parkplatz auf ca. 1 ha Fläche, einen Badestrand sowie die Möglichkeit, Angelboote zu mieten. Dies ist der perfekte Ort für einen Familienurlaub – auch mit Haustier.</p>`  },
      {id: 6, pl: "Jezioro Czachów", de: "Czachówsee"  },
      {id: 7, pl: `<p>Jezioro Czachów o powierzchni 18 ha i maksymalnej głębokości 11 m, położone jest 1 km od jeziora Orzechów. Dojazd od szosy Chojna - Cedynia - Osinów Dolny wynosi 0,5 km.</p>
                <p>Można tu łowić szczupaki, sumy, węgorze, okonie, leszcze, liny, karpie i inne ryby karpiowate. Jezioro oferuje około 50 stanowisk wędkarskich z brzegu oraz możliwość połowu z łodzi.</p>
                <p>Nad jeziorem znajduje się pole biwakowe, parking i naturalne kąpielisko. Od wiosny do jesieni organizujemy zawody wędkarskie, a teren jest idealny na rodzinny wypoczynek w namiotach i kampingach.</p>`, de: `<p>Der Czachówsee mit einer Fläche von 18 ha und einer maximalen Tiefe von 11 m liegt 1 km vom See Orzechów entfernt. Die Zufahrt von der Straße Chojna – Cedynia – Osinów Dolny beträgt 0,5 km.</p>
            <p>Hier können Hechte, Welse, Aale, Barsche, Brassen, Schleien, Karpfen und andere Karpfenfische gefangen werden. Etwa 50 Ufer-Angelplätze sowie das Angeln vom Boot aus stehen zur Verfügung.</p>
            <p>Am See befinden sich ein Campingplatz, Parkplatz und ein Naturbad. Von Frühling bis Herbst werden Angelwettbewerbe organisiert, das Gelände ist ideal für Familienurlaub im Zelt oder Wohnwagen.</p>`  },
      {id: 8, pl: "Jezioro Orzechów", de: "Orzechówsee"  },
      {id: 9, pl: `<p>Jezioro Orzechów ma powierzchnię 42 ha, maksymalną głębokość 22 m i średnią 6 m. Położone jest 12 km od przejścia granicznego w Osinowie Dolnym oraz 6 km od Cedyni.</p>
                <p>W jeziorze można złowić szczupaki, okonie, liny, węgorze, sandacze, leszcze, karpie, karasie złociste i inne ryby karpiowate. Połowy prowadzone są z brzegów, nielicznych pomostów oraz ze środków pływających, z możliwością wypożyczenia łodzi.</p>
                <p>Od strony wschodniej znajduje się duży parking z ogrodzonym polem namiotowym o powierzchni 1,4 ha, a także urządzone kąpielisko z plażą. W sezonie letnim odbywają się tu spinningowe zawody wędkarskie organizowane przez krajowe i zagraniczne koła wędkarskie.</p>`, de: `<p>Der Orzechówsee hat eine Fläche von 42 ha, eine maximale Tiefe von 22 m und eine durchschnittliche Tiefe von 6 m. Er liegt 12 km vom Grenzübergang Osinów Dolny und 6 km von Cedynia entfernt.</p>
            <p>Im See lassen sich Hechte, Barsche, Schleien, Aale, Zander, Brassen, Karpfen, Goldkarauschen und andere Karpfenfische fangen. Geangelt wird vom Ufer, von wenigen Stegen oder vom Boot, das gemietet werden kann.</p>
            <p>Auf der Ostseite befindet sich ein großer Parkplatz mit umzäuntem Zeltplatz von 1,4 ha sowie ein angelegtes Badegelände mit Strand. Im Sommer werden hier Spinnfisch-Wettbewerbe von in- und ausländischen Angelvereinen veranstaltet.</p>`  } */
            {id: 10, pl: "Świąteczny karp", de: "Weihnachtskarpfen" },
            {id: 11, pl: `<p>Tradycja, która smakuje najlepiej! Zbliżają się Święta, a wraz z nimi czas rodzinnych spotkań i wyjątkowych smaków. Nic tak nie kojarzy się z wigilijnym stołem jak świeży, złocisty karp! Nasze ryby pochodzą ze sprawdzonych, lokalnych hodowli, gdzie dorastają w czystej wodzie i naturalnych warunkach.</p>`, de: `<p>Eine Tradition, die am besten schmeckt! Die Feiertage stehen vor der Tür, eine Zeit für Familientreffen und besondere Geschmäcker. Nichts erinnert so sehr an den Heiligabend-Tisch wie frischer, goldener Karpfen! Unsere Fische stammen aus bewährten, lokalen Zuchtbetrieben, wo sie in sauberem Wasser und natürlichen Bedingungen aufwachsen.</p>`}
    ]
  },
  {
    name: "Fish and Info",
    translations: [
      /* {id: 1, pl: "W powyższych jeziorach można złowić imponujące ryby, takie jak szczupaki, okonie, leszcze, sandacze, węgorze, sumy oraz liczne, mniejsze gatunki płociowatych. W sezonie letnim gospodarze nad jeziorami Ostrów i Orzechów udostępniają komfortowe pola do wypoczynku z przyczepami kempingowymi i namiotami, tworząc idealne warunki na relaks w otoczeniu natury.", de: "In den genannten Seen können beeindruckende Fische gefangen werden, darunter Hechte, Barsche, Brassen, Zander, Aale, Welse sowie zahlreiche kleinere Weißfischarten. Im Sommer stehen an den Seen Ostrów und Orzechów komfortable Plätze für Wohnwagen und Zelte zur Verfügung – perfekte Bedingungen für Erholung in der Natur." }, */
      /* {id: 2, pl: "Sprzedajemy naturalnie hodowane ryby handlowe bez użycia żadnych chemikaliów - Karpie", de: "Wir verkaufen natürlich gezüchtete Speisefische ohne Einsatz von Chemikalien – Karpfen" }, */
      {id: 3, pl: "Jeśli masz pytania lub chcesz zarezerwować miejsce, skontaktuj się z nami:", de: "Wenn Sie Fragen haben oder einen Platz reservieren möchten, kontaktieren Sie uns bitte:" }
    ]
  },
  {
    name: "Contact",
    translations: [
      {id: 1, pl: `Telefon/FAX: <a href="tel:+48914143050">+48 91 414 30 50</a>`, de: `Telefon/FAX: <a href="tel:+48914143050">+48 91 414 30 50</a>` },
      {id: 2, pl: `E-Mail:<a href="mailto:abareco@abareco.eu">abareco@abareco.eu</a>`, de: `E-Mail:<a href="mailto:abareco@abareco.eu">abareco@abareco.eu</a>` },
      {id: 3, pl: "Adres: Wilkoszyce 4, 74-500 Chojna", de: "Adresse: Wilkoszyce 4, 74-500 Chojna" }
    ]
  }
];





let i = 0;
//translate function
function translate(element, section) {
  const currentLang = localStorage.getItem('selectedLanguage') || 'pl';
  const category = items.find(item => item.name === section);

  if (category && category.translations[i]) {
    element.innerHTML = category.translations[i][currentLang];
  }

  i++;
}

function changeLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang); // Zapisuje 'pl' lub 'de'
  window.location.reload(); // Odświeża stronę, by zastosować zmiany
}

const url = new URL(window.location.href);
const langParam = url.searchParams.get('lang');

let currentLang = langParam || localStorage.getItem('selectedLanguage') || 'pl';

if (langParam) {
    localStorage.setItem('selectedLanguage', langParam);
    
    url.searchParams.delete('lang');
    
    window.history.replaceState({}, '', url.pathname + url.search);
}


//Translate sections
const headerTexts = document.querySelectorAll('.header-text');
i = 0;
headerTexts.forEach(el => translate(el, "Header"));

const introductionTexts = document.querySelectorAll('.introduction-text');
i = 0;
introductionTexts.forEach(el => translate(el, "Introduction"));

const offerTexts = document.querySelectorAll('.offer-text');
i = 0;
offerTexts.forEach(el => translate(el, "Offer"));

const offerForExperiencedTexts = document.querySelectorAll('.offer-for-experienced-text');
i = 0;
offerForExperiencedTexts.forEach(el => translate(el, "Experienced Offer"));

const lakesTexts = document.querySelectorAll('.lakes-text');
i = 0;
lakesTexts.forEach(el => translate(el, "Lakes"));

const fishAndInfoTexts = document.querySelectorAll('.fish-info-text');
i = 0;
fishAndInfoTexts.forEach(el => translate(el, "Fish and Info"));

const contactTexts = document.querySelectorAll('.contact-text');
i = 0;
contactTexts.forEach(el => translate(el, "Contact"));