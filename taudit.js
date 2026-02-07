// ==========================================
// 🏥 SAIRAALA 300 - TAUTILISTA
// ==========================================

const raakaData = [{ q: "Lapsi löi pään asfalttiin, on uninen ja oksentaa.", l: "Normaali", i: "CT: Ei vuotoa", o: ["Aivotärähdys", "Migreeni", "Flunssa"], a: "Aivotärähdys", info: "Vaatii seurantaa kotona tai osastolla." },
    { q: "Selkäkipu on sietämätön ja säteilee nivusiin, pissa on punaista.", l: "Virtsassa verta", i: "UÄ: Kivi munuaisessa", o: ["Munuaiskivi", "Lumbago", "Virtsatulehdus"], a: "Munuaiskivi", info: "Kivi raapii virtsateitä mennessään." },
    { q: "Olen kalpea, väsynyt ja hengästyn helposti.", l: "Hb 90 (alhainen)", i: "Verisolu-muutoksia", o: ["Anemia", "Laiskuus", "Sydänvika"], a: "Anemia", info: "Raudanpuute on yleisin syy." },
    { q: "Pohje on turvonnut ja todella kipeä kävellessä.", l: "D-dimeeri koholla", i: "UÄ: Veritulppa pohkeessa", o: ["Laskimotukos", "Ruusu", "Suonenveto"], a: "Laskimotukos", info: "Tukos voi kulkeutua keuhkoihin." },
    { q: "Kurkku on niin kipeä, etten saa nieltyä edes vettä.", l: "Strep-A positiivinen", i: "Nielu punainen", o: ["Angiina", "Flunssa", "Allergia"], a: "Angiina", info: "Bakteeritulehdus vaatii antibiootin." },
    { q: "Käsi osui uuniin, nousi isoja vesikelloja.", l: "Ei tarvita", i: "2. asteen palovamma", o: ["Palovamma", "Ihottuma", "Syyhy"], a: "Palovamma", info: "Jäähdytys haalealla vedellä on tärkeää." },
    { q: "Sormivälit kutisevat hulluna varsinkin iltaisin.", l: "Ei otettu", i: "Iholla pieniä käytäviä", o: ["Syyhy", "Kuiva iho", "Allergia"], a: "Syyhy", info: "Syyhypunkki leviää koko perheeseen." },
    { q: "Vatsakipu on kova ja säteilee vyömäisesti selkään.", l: "Amylaasi pilvissä", i: "CT: Haima turvoksissa", o: ["Haimatulehdus", "Mahahaava", "Närästys"], a: "Haimatulehdus", info: "Usein syynä alkoholi tai sappikivet." },
    { q: "Lapsella on kuumetta ja iholla kutisevia vesikelloja.", l: "Ei otettu", i: "Tyypilliset näppylät", o: ["Vesirokko", "Syyhy", "Ihottuma"], a: "Vesirokko", info: "Erittäin tarttuva virustauti." },
    { q: "Ukkovarvas on tulipunainen, turvonnut ja tosi kipeä.", l: "Uraatti koholla", i: "Nivelnestekiteitä", o: ["Kihti", "Murtuma", "Vaivaisenluu"], a: "Kihti",
    // KOPIOI TÄSTÄ ALASPÄIN UUSIA RIVEJÄ:
    { q: "Rintaa puristaa ja hiki valuu.", l: "Troponiini koholla", i: "EKG: ST-nousu", o: ["Sydäninfarkti", "Närästys", "Paniikki"], a: "Sydäninfarkti", info: "Hätätilanne!" },
    { q: "Vatsa oikealta alhaalta kipeä.", l: "CRP 90", i: "UÄ: Umpisuoli turvassa", o: ["Umpisuoli", "Vatsatauti", "Kramppi"], a: "Umpisuoli", info: "Leikataan usein." },
    { q: "Pissatessa polttaa kovasti.", l: "Virtsa: Bakteereja", i: "Ei löydöksiä", o: ["Virtsatulehdus", "Kivi", "Sieni"], a: "Virtsatulehdus", info: "Antibiootti auttaa." },
    { q: "Silmä on punainen ja rähmii.", l: "Normaali", i: "Punoitusta", o: ["Silmätulehdus", "Kaihi", "Sokeus"], a: "Silmätulehdus", info: "Tarttuu herkästi." },
    { q: "Kaaduin ja ranne on mutkalla.", l: "Ei ole", i: "Röntgen: Poikki", o: ["Murtuma", "Nyrjähdys", "Mustelma"], a: "Murtuma", info: "Kipsi 5 viikkoa." },
    { q: "Hengitys vinkuu ja ahdistaa.", l: "Happi 90%", i: "Vinkunaa", o: ["Astma", "Flunssa", "Keuhkokuume"], a: "Astma", info: "Avaava lääke auttaa." },
    { q: "Päässä pahin kipu ikinä.", l: "Paine 190", i: "CT: Verta", o: ["Aivoverenvuoto", "Migreeni", "Krapula"], a: "Aivoverenvuoto", info: "Heti sairaalaan!" },
    { q: "Jalka on punainen ja kuuma.", l: "CRP 120", i: "Iho punainen", o: ["Ruusu", "Tukos", "Lihaskipu"], a: "Ruusu", info: "Antibioottia suoneen." },
    { q: "Huimaa, maailma pyörii.", l: "Normaali", i: "Korvakivet", o: ["Asentohuimaus", "Humala", "Väsymys"], a: "Asentohuimaus", info: "Jumpalla ohi." },
    { q: "Söin kanaa ja nyt ripuli lentää.", l: "F-Bak +", i: "Suoli vilkas", o: ["Salmonella", "Keliakia", "Nälkä"], a: "Salmonella", info: "Muista juoda vettä." }
    // VOIT LISÄTÄ TÄHÄN SATOJA RIVEJÄ SAMALLA TAVALLA
];

// ==========================================
// ⚙️ AUTOMAATIO (Älä koske näihin)
// ==========================================

// Muutetaan lyhenteet pelin ymmärtämään muotoon automaattisesti
const allDiseases = raakaData.map(d => ({
    q: d.q, lab: d.l, img: d.i, opt: d.o, ans: d.a, info: d.info
}));

const patientProfiles = [
    { age: 25, sex: "Nainen", job: "Koodari" },
    { age: 60, sex: "Mies", job: "Eläkeläinen" },
    { age: 10, sex: "Poika", job: "Koululainen" },
    { age: 40, sex: "Nainen", job: "Lääkäri" }
];
