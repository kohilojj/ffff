// ==========================================
// 🏥 SAIRAALA 300 - TAUTITIETOKANTA
// ==========================================

// --- KATEGORIA: SYDÄN JA VERENKIERTO ---
const sydanTaudit = [
    { q: "Rintaa puristaa ja hiki valuu, kipu säteilee vasempaan käteen.", lab: "Troponiini koholla", img: "EKG: ST-tason nousu", opt: ["Sydäninfarkti", "Paniikkikohtaus", "Närästys"], ans: "Sydäninfarkti", info: "Infarkti vaatii välitöntä hoitoa!" },
    { q: "Hengittäminen sattuu pistävästi toiselle puolelle rintaa.", lab: "D-dimeeri korkea", img: "Varjoainekuva: Tukos keuhkoissa", opt: ["Keuhkoveritulppa", "Lihaskipu", "Keuhkokuume"], ans: "Keuhkoveritulppa", info: "Vaatii nopean liuotus- tai estohoidon." },
    { q: "Jalkani on turvonnut, punainen ja todella kipeä pohkeesta.", lab: "CRP 20", img: "UÄ: Laskimotukos havaittu", opt: ["Laskimotukos", "Ruusu", "Lihasvamma"], ans: "Laskimotukos", info: "Tukos voi lähteä liikkeelle keuhkoihin." },
    { q: "Sydän hakkaa miten sattuu ja olo on hutera.", lab: "Verenpaine 130/80", img: "EKG: Eteisvärinä (ei P-aaltoja)", opt: ["Eteisvärinä", "Sydäninfarkti", "Paniikki"], ans: "Eteisvärinä", info: "Flimmeri eli eteisvärinä nostaa tukosriskiä." }
];

// --- KATEGORIA: VATSA JA SISÄELIMET ---
const vatsaTaudit = [
    { q: "Vatsaan sattuu oikealle alas, hyppiminen tekee kipeää.", lab: "CRP 95, leukosyytit koholla", img: "UÄ: Turvonnut umpisuoli", opt: ["Umpisuolentulehdus", "Vatsatauti", "Munuaiskivi"], ans: "Umpisuolentulehdus", info: "Appendisiitti on yleinen leikkausaihe." },
    { q: "Söin ulkomailla ja nyt ripuli on veristä ja vatsa kramppaa.", lab: "F-Bak-seulonta positiivinen", img: "Suoliäänet vilkkaat", opt: ["Salmonella", "Nestehukka", "Keliakia"], ans: "Salmonella", info: "Ruokamyrkytys vaatii usein nesteytystä." },
    { q: "Vatsa on kova kuin kivi ja pallo-mainen, ei toimi.", lab: "Elektrolyytit pielessä", img: "Röntgen: Suoli mutkalla", opt: ["Suolitukos", "Ummetus", "Lihavuus"], ans: "Suolitukos", info: "Ileus vaatii usein kirurgin arviota." },
    { q: "Kova vatsakipu, joka säteilee vyömäisesti selkään.", lab: "Amylaasi pilvissä", img: "CT: Turvonnut haima", opt: ["Haimatulehdus", "Mahahaava", "Närästys"], ans: "Haimatulehdus", info: "Alkoholi tai sappikivet ovat yleisimmät syyt." }
];

// --- KATEGORIA: PÄÄ JA HERMOSTO ---
const paaTaudit = [
    { q: "Päässäni tuntuu pahinta kipua koskaan, kuin salama.", lab: "Verenpaine 195/110", img: "CT: Verta aivoissa", opt: ["SAV-vuoto", "Migreeni", "Jännityspäänsärky"], ans: "SAV-vuoto", info: "Lukinkalvonalainen vuoto on hengenvaarallinen." },
    { q: "En pysty liikuttamaan vasenta kättäni ja puhe sammaltaa.", lab: "Sokeri 5.5 (normaali)", img: "Aivoissa tukos havaittu", opt: ["Aivoinfarkti", "Alkoholi", "Migreeni"], ans: "Aivoinfarkti", info: "Aika on aivoja - liuotushoito heti!" },
    { q: "Naamani on toiselta puolelta valunut, en saa silmää kiinni.", lab: "Normaali", img: "CT: Puhdas", opt: ["Kasvohalvaus", "Aivoinfarkti", "Migreeni"], ans: "Kasvohalvaus", info: "Bellin pareesi on usein hermotulehdus." }
];

// --- KATEGORIA: TAPATURMAT JA LUUT ---
const tapaturmat = [
    { q: "Kaaduin liukkaalla, ranteeni on aivan mutkalla.", lab: "Ei tarvita", img: "Röntgen: Luu poikki", opt: ["Rannemurtuma", "Nyrjähdys", "Kramppi"], ans: "Rannemurtuma", info: "Murtuma vaatii kipsauksen tai leikkauksen." },
    { q: "Polvi vääntyi sählyssä, kuului 'poks' ja se turposi.", lab: "Ei tarvita", img: "MRI: Eturistiside poikki", opt: ["ACL-vamma", "Kierukkavamma", "Kihti"], ans: "ACL-vamma", info: "Eturistiside repeää usein vääntövammoissa." }
];

// --- KATEGORIA: LISÄÄ TÄHÄN UUSIA LOHKOJA ---
const muutTaudit = [
    { q: "Pissatessa polttaa ja virtsa on sameaa.", lab: "Virtsassa bakteereja", img: "Ei muutoksia", opt: ["Virtsatulehdus", "Munuaiskivi", "Sukupuolitauti"], ans: "Virtsatulehdus", info: "Hoidetaan yleensä antibiootilla." },
    { q: "Silmäni rähmii ja on aivan punainen.", lab: "CRP normaali", img: "Sidekalvon punoitus", opt: ["Silmätulehdus", "Kaihi", "Glaukooma"], ans: "Silmätulehdus", info: "Erittäin tarttuva vaiva." }
];

// ==========================================
// 🛠️ AUTOMAATTINEN YHDISTÄMINEN (Älä koske)
// ==========================================

const allDiseases = [
    ...sydanTaudit,
    ...vatsaTaudit,
    ...paaTaudit,
    ...tapaturmat,
    ...muutTaudit
];

// 👤 POTILASPROFIILIT
const patientProfiles = [
    { age: 5, sex: "Poika", job: "Päiväkotilainen" },
    { age: 24, sex: "Nainen", job: "Opiskelija" },
    { age: 42, sex: "Mies", job: "Rakennusmies" },
    { age: 58, sex: "Mies", job: "Rekkakuski" },
    { age: 82, sex: "Nainen", job: "Eläkeläinen" },
    { age: 19, sex: "Mies", job: "Varusmies" },
    { age: 35, sex: "Nainen", job: "Arkkitehti" }
];
