// ==========================================
// 🏥 SAIRAALA 300 - TAUTILISTA
// ==========================================

const raakaData = [
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
