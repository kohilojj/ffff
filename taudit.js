const allDiseases = [
    { 
        q: "Rintaa puristaa ja hiki valuu, kipu säteilee vasempaan käteen.", 
        lab: "Troponiini koholla", 
        img: "EKG: ST-tason nousu", 
        opt: ["Sydäninfarkti", "Paniikkikohtaus", "Närästys"], 
        ans: "Sydäninfarkti", 
        info: "Infarkti vaatii välitöntä hoitoa!" 
    },
    { 
        q: "Vatsaan sattuu oikealle alas, hyppiminen tekee kipeää.", 
        lab: "CRP 95, leukosyytit koholla", 
        img: "UÄ: Turvonnut umpisuoli", 
        opt: ["Umpisuolentulehdus", "Vatsatauti", "Munuaiskivi"], 
        ans: "Umpisuolentulehdus", 
        info: "Appendisiitti on yleinen leikkausaihe." 
    },
    { 
        q: "Pissatessa polttaa ja selkään jomottaa.", 
        lab: "Virtsanäyte: Bakteereja ++", 
        img: "Munuaiset ok", 
        opt: ["Virtsatulehdus", "Munuaiskivi", "Sukupuolitauti"], 
        ans: "Virtsatulehdus", 
        info: "Naisilla hyvin yleinen bakteerivaiva." 
    }
    // Jatka listaa tähän...// Lisää nämä allDiseases-taulukkoon:

    { q: "Silmäni on aivan punainen, kutisee ja rähmii aamuisin.", lab: "CRP normaali", img: "Sidekalvot voimakkaasti punoittavat", opt: ["Silmätulehdus", "Glaukooma", "Kaihi"], ans: "Silmätulehdus", info: "Sidekalvotulehdus on erittäin tarttuva." },
    { q: "Virtsaaminen tuntuu kuin hiekkapaperia tulisi ulos, selkään jomottaa.", lab: "Virtsassa bakteereja ja verta", img: "Munuaisallas hieman turvoksissa", opt: ["Virtsatulehdus", "Munuaiskivi", "Sukupuolitauti"], ans: "Virtsatulehdus", info: "Naisilla hyvin yleinen bakteerivaiva." },
    { q: "Oikea sääri on kuuma, turvonnut ja siinä on kirkkaanpunainen alue.", lab: "CRP 145", img: "Iho on pingottunut ja tulipunainen", opt: ["Ruusu", "Mustelma", "Laskimotukos"], ans: "Ruusu", info: "Erysipelas eli ruusu vaatii vahvan antibioottikuurin." },
    { q: "Söin ulkomailla ja nyt ripuli on kestänyt 4 päivää ja on veristä.", lab: "F-Bak-seulonta positiivinen", img: "Suolistoäänet vilkkaat", opt: ["Salmonella", "Nestehukka", "Keliakia"], ans: "Salmonella", info: "Ruokamyrkytys vaatii joskus sairaalahoitoa nesteytykseen." },
    { q: "Hengittäminen sattuu pistävästi toiselle puolelle rintaa, henki ei kulje.", lab: "D-dimeeri korkea", img: "Varjoainekuva: Tukos keuhkoissa", opt: ["Keuhkoveritulppa", "Lihaskipu", "Keuhkokuume"], ans: "Keuhkoveritulppa", info: "Hengenvaarallinen tila, vaatii liuotushoitoa." },
    { q: "Olen väsynyt, kalpea ja hengästyn jo lyhyestä kävelystä.", lab: "Hb 82 (alhainen)", img: "Verisoluissa koon muutoksia", opt: ["Anemia", "Sydänvika", "Laiskuus"], ans: "Anemia", info: "Raudanpuute on anemiaan yleisin syy." },
    { q: "Kaaduin liukkaalla, ranteeni on 'ruokailuveitsi'-asennossa ja kipeä.", lab: "Ei tarvita", img: "Röntgen: Murtuma värttinäluussa", opt: ["Rannemurtuma", "Nyrjähdys", "Jännetulehdus"], ans: "Rannemurtuma", info: "Collesin murtuma on yleisin rannemurtuma." },
    { q: "Lapsella on kova haukkuva yskä ja hengitys vinkuu sisäänpäin.", lab: "Happisaturaatio ok", img: "Kurkunpää turvoksissa", opt: ["Laryngiitti", "Astma", "Keuhkokuume"], ans: "Laryngiitti", info: "Viileä ulkoilma usein helpottaa oireita nopeasti." },
    { q: "Nielu on todella kipeä, kuumetta 39C ja hengitys haisee pahalle.", lab: "Strep-A positiivinen", img: "Nielurisat turvoksissa ja peitteiset", opt: ["Angiina", "Pusutauti", "Flunssa"], ans: "Angiina", info: "Bakteerin aiheuttama nielutulehdus hoidetaan penisilliinillä." },
    { q: "Huimaa niin kovaa, että maailma pyörii ja oksennan heti kun nousen.", lab: "Normaali", img: "Tasapainoelinärsytys", opt: ["Asentohuimaus", "Aivovamma", "Korkea verenpaine"], ans: "Asentohuimaus", info: "Johtuu sisäkorvan 'kivien' irtoamisesta." },
    { q: "Olen laihtunut 10kg, minua janottaa koko ajan ja väsyttää.", lab: "Verensokeri 24.5 mmol/l", img: "Virtsassa sokeria", opt: ["Diabetes", "Munuaistauti", "Masennus"], ans: "Diabetes", info: "Uusi diabetes vaatii välitöntä hoidon aloitusta." },
    { q: "Päässäni on hirveä jomotus, valo ja äänet sattuvat silmiin.", lab: "Normaali", img: "CT-kuva normaali", opt: ["Migreeni", "Aivoverenvuoto", "Aivokalvontulehdus"], ans: "Migreeni", info: "Migreeni on invalidisoiva särkysairaus." },
    { q: "Olen sekava, minulla on kova niskajäykkyys ja korkea kuume.", lab: "Selkäydinneste sameaa", img: "Pään CT normaali", opt: ["Aivokalvontulehdus", "Flunssa", "Krapula"], ans: "Aivokalvontulehdus", info: "Meningiitti on hengenvaarallinen hätätilanne!" },
    { q: "Söin pähkinää ja nyt kurkku turpoaa ja iholle nousee paukamia.", lab: "Ei ehdi ottaa", img: "Hengitystiet ahtaat", opt: ["Anafylaksia", "Kurkkukipu", "Paniikki"], ans: "Anafylaksia", info: "Vakava allerginen reaktio vaatii adrenaliinia." },
    { q: "Päässäni tuntuu pahinta kipua koskaan, kuin salama olisi iskenyt.", lab: "Verenpaine korkea", img: "CT: Verta lukinkalvonalaisessa tilassa", opt: ["SAV-vuoto", "Migreeni", "Jännityspäänsärky"], ans: "SAV-vuoto", info: "Lukinkalvonalainen vuoto vaatii neurokirurgia." },
    { q: "Vatsa on ollut toimimatta viikon, on pallo-mainen ja kipeä.", lab: "Elektrolyytit pielessä", img: "Röntgen: Suoli on mutkalla ja tukossa", opt: ["Suolitukos", "Ummetus", "Lihavuus"], ans: "Suolitukos", info: "Ileus eli suolitukos on kirurginen hätätilanne." },
    { q: "Kaaduin jalkapallossa, polvesta kuului 'poks' ja se turposi heti.", lab: "Ei otettu", img: "MRI: Eturistiside poikki", opt: ["ACL-vamma", "Nyrjähdys", "Kihti"], ans: "ACL-vamma", info: "Eturistisiteen repeämä vaatii usein leikkauksen." },
    { q: "Hampaaseen sattuu niin kovaa, että puoli naamaa on turvoksissa.", lab: "CRP 60", img: "Röntgen: Juuren päässä paise", opt: ["Hammaspaise", "Ientulehdus", "Poskiontelotulehdus"], ans: "Hammaspaise", info: "Vaatii hampaan avaamisen ja antibiootin." },
    { q: "En pysty liikuttamaan vasenta kättäni ja puheeni sammaltaa.", lab: "Sokeri normaali", img: "Aivoissa tukos havaittu", opt: ["Aivoinfarkti", "Alkoholi", "Migreeni"], ans: "Aivoinfarkti", info: "Liuotushoito on aloitettava heti vaurioiden estämiseksi." },
    { q: "Kurkkuni on kipeä ja nielaiseminen on mahdotonta, kuola valuu suusta.", lab: "CRP 180", img: "Kurkunkansi on kirkkaanpunainen ja turvonnut", opt: ["Kurkunkansitulehdus", "Angiina", "Kurkkukipu"], ans: "Kurkunkansitulehdus", info: "Epiglottiitti voi tukkia hengitystiet hetkessä!" }
];

const patientProfiles = [
    { age: 24, sex: "Nainen", job: "Opiskelija" },
    { age: 58, sex: "Mies", job: "Rekkakuski" },
    { age: 82, sex: "Nainen", job: "Eläkeläinen" },
    { age: 35, sex: "Mies", job: "IT-tuki" },
    { age: 12, sex: "Mies", job: "Koululainen" }
];
