// Ukázkové jednotkové ceny a měsíční příplatky v Kč bez DPH.
window.MXB_CENIK = {
  verze: 'ukazka-1',
  // Každý cenový řádek klientské tabulky se zaokrouhlí nahoru na tento násobek Kč.
  klientZaokrouhleniKrok: 50,
  prijateFaktury: 35,
  vydaneFaktury: 35,
  pokladniDoklady: 35,
  platbyKartou: 35,
  polozkyNaBance: 10,
  // Měsíční složka DPPO = (součet základních cen pěti účetních položek × násobek) / počet měsíců.
  // Přírůstky koeficientů se do základu DPPO nezahrnují.
  dppoPocetMesicu: 12,
  dppoNasobek: 1.5,
  // Pevný příplatek, na který se žádné koeficienty nevztahují.
  priplatekPlatceDph: 1000,
  obsluhaDatovychSchranek: 500,
  generalniPlnaMocFu: 750,
  // Hodinové sazby v Kč bez DPH; minimum je za celé daňové přiznání.
  danovePoradenstviHodina: 2500,
  seniorUcetniHodina: 900,
  itPodporaHodina: 1500,
  danovePriznaniHodina: 900,
  danovePriznaniMinimum: 2500,
  financniAuditHodina: 2000,
  ekonomickePoradenstviHodina: 1500,
  pravniPoradenstviHodina: 2000,
  sluzbyAdvokataHodina: 2800,
  intrastatHodina: 900,
  // Společná hodinová sazba pro zahraniční DPH a podání OSS.
  zahranicniDphOssHodina: 900,
  rekonstrukceUcetnictviHodina: 1150,
  // Každý koeficient přidává základ × (koeficient − 1); přírůstky se sčítají.
  // Základ je součet cen faktur, pokladních dokladů, plateb kartou a položek na bance.
  // Skladový koeficient platí pouze při skladové evidenci Typ A.
  koeficientSkladovaEvidence: 1.2,
  // Násobí ceny dokladů při účtování středisek / zakázek.
  koeficientStrediskaZakazky: 1.1,
  // Násobí ceny dokladů při detailní analytice.
  koeficientDetailniAnalytika: 1.1,
  // Obratová pásma a koeficienty cen dokladů podle převládající činnosti.
  obratovaPasma: {
    zbozi: [
      { popis: 'do 150 mil. Kč', koeficient: 1 },
      { popis: '150 – 500 mil. Kč', koeficient: 1.2 },
      { popis: 'nad 500 mil. Kč', koeficient: 1.4 }
    ],
    sluzby: [
      { popis: 'do 50 mil. Kč', koeficient: 1 },
      { popis: '50 – 100 mil. Kč', koeficient: 1.2 },
      { popis: 'nad 100 mil. Kč', koeficient: 1.4 }
    ],
    nezvoleno: [
      { popis: 'do 50 mil. Kč', koeficient: 1 },
      { popis: 'do 100 mil. Kč', koeficient: 1.2 },
      { popis: 'do 200 mil. Kč', koeficient: 1.2 },
      { popis: 'do 500 mil. Kč', koeficient: 1.4 },
      { popis: 'nad 500 mil. Kč', koeficient: 1.4 }
    ]
  },
  // Pásmo určuje součet HPP a DPP/DPČ. Sazba platí pro každého zaměstnance.
  // Na mzdy se žádné koeficienty nevztahují.
  // Nad poslední hranicí se mzdy oceňují individuálně.
  mzdovaPasma: [
    { doPoctu: 2, cenaZaZamestnance: 500 },
    { doPoctu: 50, cenaZaZamestnance: 350 },
    { doPoctu: 200, cenaZaZamestnance: 300 }
  ]
};
