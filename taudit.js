// ==========================================
// 🏥 SAIRAALA 300 - TAUTILISTA & ENNUSTEET
// ==========================================

const raakaData = [
    // TAPPAVAT / KRIITTISET (Ennuste tunneissa/minuuteissa)
    { q: "Lapsi niellyt nappipariston, valittaa poltetta.", l: "Röntgen: Paristo ruokatorvessa", i: "Kudossyöpymä alussa", o: ["Vieras esine", "Flunssa", "Närästys"], a: "Vieras esine", info: "Paristo syövyttää reiän ruokatorveen nopeasti!", vakava: true, aika: "2-4 tuntia" },
    { q: "Hengitys vinkuu, kasvot turvoksissa, söi pähkinää.", l: "Verenpaine laskee", i: "Kurkunpää turvoksissa", o: ["Anafylaksia", "Astma", "Angiina"], a: "Anafylaksia", info: "Vakava allerginen reaktio.", vakava: true, aika: "15-30 minuuttia" },
    { q: "Mies 80v, sekava, kova kuume ja niskajäykkyys.", l: "Likvor: Samea", i: "CT: Puhdas", o: ["Aivokalvontulehdus", "Dementia", "Virtsatulehdus"], a: "Aivokalvontulehdus", info: "Meningiitti on hengenvaarallinen infektio.", vakava: true, aika: "6-12 tuntia" },
    { q: "Rintakipu säteilee selkään, tuntuu 'repeävältä'.", l: "D-dimeeri korkea", i: "CT: Aortan seinämä revennyt", o: ["Aortan dissektio", "Infarkti", "Lihaskipu"], a: "Aortan dissektio", info: "Päävaltimo repeää sisältäpäin.", vakava: true, aika: "1-2 tuntia" },
    { q: "Ei virtsaa 24 tuntiin, sekavuutta ja turvotusta.", l: "Kreatiniini 800", i: "Munuaiset kutistuneet", o: ["Munuaisten vajaatoiminta", "Ummetus", "Nestehukka"], a: "Munuaisten vajaatoiminta", info: "Kuona-aineet myrkyttävät kehon.", vakava: true, aika: "24-48 tuntia" },

    // TAVALLISET (Ennuste toipumisajassa)
    { q: "Päässä sähköiskuja katsetta kääntäessä.", l: "MRI: Plakkeja", i: "Näköhermo tulehtunut", o: ["MS-tauti", "Migreeni", "Huimaus"], a: "MS-tauti", info: "Keskushermoston sairaus.", vakava: false, aika: "Elinikäinen seuranta" },
    { q: "Kyynärpäissä valkoista hilseilyä.", l: "Normaali", i: "Paksuntunut iho", o: ["Psoriaasi", "Sieni", "Ihottuma"], a: "Psoriaasi", info: "Autoimmuunitauti iholla.", vakava: false, aika: "Oireet aaltoilevat" },
    { q: "Vatsa kramppaa ja uloste rasvaista.", l: "S-Keli-Ab koholla", i: "Suolinukka kadonnut", o: ["Keliakia", "Laktoosi", "Vatsatauti"], a: "Keliakia", info: "Gluteeniton ruokavalio parantaa.", vakava: false, aika: "3-6 kuukautta (toipuminen)" },
    { q: "Kova kuorsaus ja heräily öisin.", l: "Uniapnearekisteröinti +", i: "Ahdas nielu", o: ["Uniapnea", "Väsymys", "Närästys"], a: "Uniapnea", info: "CPAP-laite auttaa.", vakava: false, aika: "Heti hoidon alettua" },
    { q: "Isovarvas kasvaa vinoon, kenkä puristaa.", l: "Röntgen: Luun vinouma", i: "Nivel tulehtunut", o: ["Vaivaisenluu", "Kihti", "Murtuma"], a: "Vaivaisenluu", info: "Leikkaus korjaa asennon.", vakava: false, aika: "6 viikkoa kipsissä" },
    { q: "Silmä sumea, kuin katsoisi likaisen lasin läpi.", l: "Normaali", i: "Mykiö samea", o: ["Kaihi", "Glaukooma", "Sokeus"], a: "Kaihi", info: "Yleinen ikääntymiseen liittyvä vaiva.", vakava: false, aika: "Päiväkirurginen toipuminen" },
    { q: "Lapsi kastelee sängyn joka yö.", l: "Virtsa puhdas", i: "Normaali", o: ["Yökastelu", "Diabetes", "Tulehdus"], a: "Yökastelu", info: "Yleensä kypsymiskysymys.", vakava: false, aika: "Vuosia (kasvun myötä)" },
    { q: "Polvessa kitinää ja aamujäykkyyttä.", l: "Röntgen: Kaventuma", i: "Rustokato", o: ["Nivelrikko", "Reuma", "Vamma"], a: "Nivelrikko", info: "Liike on lääke.", vakava: false, aika: "Krooninen" },
    { q: "Sienimyrkytys epäily, söi valkoisia sieniä.", l: "Maksa-arvot pilvissä", i: "Maksavaurio", o: ["Sienimyrkytys", "Vatsatauti", "Stressi"], a: "Sienimyrkytys", info: "Hengenvaarallinen ilman vastalääkettä!", vakava: true, aika: "12-24 tuntia" },
    { q: "Sähköiskuvarpaisiin kävellessä.", l: "Hermo puristuksessa", i: "Neurooma", o: ["Mortonin neurooma", "Murtuma", "Kihti"], a: "Mortonin neurooma", info: "Pohjalliset voivat auttaa.", vakava: false, aika: "Viikkoja" },
    { q: "Rakkuloita huulessa flunssan jälkeen.", l: "Normaali", i: "Rakkularypäs", o: ["Huuliherpes", "Sieni", "Allergia"], a: "Huuliherpes", info: "Tarttuva virus.", vakava: false, aika: "7-10 päivää" },
    { q: "Kova vatsakipu, virtsa on veristä.", l: "Virtsa: Verta", i: "UÄ: Kivi", o: ["Virtsakivikohtaus", "Syöpä", "Tulehdus"], a: "Virtsakivikohtaus", info: "Kivi raapii putkea.", vakava: false, aika: "Muutama päivä" },
    { q: "Sormet muuttuvat valkoisiksi kylmässä.", l: "Verenkiertohäiriö", i: "Supistuneet suonet", o: ["Valkosormisuus", "Anemia", "Tukos"], a: "Valkosormisuus", info: "Raynaud’n ilmiö.", vakava: false, aika: "Menet ohi lämpimässä" },
    { q: "Korva haisee pahalle ja kutisee.", l: "Bakteeriviljely", i: "Käytävä turvonnut", o: ["Uimarin korva", "Vaikku", "Tulehdus"], a: "Uimarin korva", info: "Puhdistus ja tipat.", vakava: false, aika: "1 viikko" },
    { q: "Vatsa löysällä stressissä.", l: "Kokeet puhtaat", i: "Normaali", o: ["Ärtyvä suoli", "Keliakia", "Syöpä"], a: "Ärtyvä suoli", info: "IBS on yleinen vaiva.", vakava: false, aika: "Elinikäinen hallinta" },
    { q: "Niska jumissa, sormet puutuvat.", l: "Normaali", i: "Kulumia rangassa", o: ["Niskaperäinen oire", "Halvaus", "Migreeni"], a: "Niskaperäinen oire", info: "Fysioterapia auttaa.", vakava: false, aika: "1-2 kuukautta" },
    { q: "Lapsi nykii ja tuijottaa tyhjyyteen.", l: "EEG: Häiriöitä", i: "Aivosähkökäyrä muuttunut", o: ["Epilepsia", "Säpsähdys", "Kuumekouristus"], a: "Epilepsia", info: "Lääkitys estää kohtaukset.", vakava: false, aika: "Elinikäinen lääkitys" },
    { q: "Sääret ruskeat ja turvonneet.", l: "Laskimopaine korkea", i: "Vajaatoiminta", o: ["Laskimoiden vajaatoiminta", "Sieni", "Ruusu"], a: "Laskimoiden vajaatoiminta", info: "Tukisukat auttavat.", vakava: false, aika: "Krooninen" },
    { q: "Toinen silmä punainen ja kova särky.", l: "Normaali", i: "Ei muutoksia", o: ["Sarjoittainen päänsärky", "Migreeni", "Glaukooma"], a: "Sarjoittainen päänsärky", info: "Hortonin syndrooma.", vakava: false, aika: "Kohtaus 1-3h" },
    { q: "Laihtumista ja jatkuva lievä kuume.", l: "Keuhkokuvat poikkeavat", i: "Sarkoidoosi", o: ["Sarkoidoosi", "Flunssa", "Astma"], a: "Sarkoidoosi", info: "Tulehdussairaus.", vakava: false, aika: "Vuosia" },
    { q: "Kynsi murenee ja on keltainen.", l: "Sieni +", i: "Kynsivaurio", o: ["Kynsisieni", "Psoriaasi", "Lika"], a: "Kynsisieni", info: "Lääkekuuri on pitkä.", vakava: false, aika: "6-12 kuukautta" },
    { q: "Mato vatsassa, söi raakaa kalaa.", l: "Ulostenäyte +", i: "Lapamato", o: ["Lapamato", "Vatsatauti", "Nälkä"], a: "Lapamato", info: "Häädetään lääkkeellä.", vakava: false, aika: "1 päivä (lääke)" },
    { q: "Sydän tykyttää ja jättää väliin.", l: "EKG: Lisälyönti", i: "Normaali", o: ["Lisälyönnit", "Infarkti", "Paniikki"], a: "Lisälyönnit", info: "Yleensä vaatonta.", vakava: false, aika: "Hetkellinen" },
    { q: "Leuat kipeät aamulla.", l: "Hampaat kuluneet", i: "Bruksismi", o: ["Bruksismi", "Reikä", "Särky"], a: "Bruksismi", info: "Purentakisko auttaa.", vakava: false, aika: "Yöllinen vaiva" },
    { q: "Raskaana, jalat turvoksissa, päänsärky.", l: "Paineet 160/110", i: "Proteiinia virtsassa", o: ["Raskausmyrkytys", "Normaali", "Flunssa"], a: "Raskausmyrkytys", info: "Vaatii tarkkaa seurantaa.", vakava: true, aika: "Päiviä (synnytys)" },
    { q: "Kasvot punottavat ja on näppyjä.", l: "Normaali", i: "Rosacea", o: ["Ruusufinni", "Akne", "Allergia"], a: "Ruusufinni", info: "Ihosairaus.", vakava: false, aika: "Jatkuva hoito" },
    { q: "Lapsella kutinaa takapuolessa yöllä.", l: "Teippinäyte +", i: "Kihomadot", o: ["Kihomadot", "Pukamat", "Sieni"], a: "Kihomadot", info: "Lääke koko perheelle.", vakava: false, aika: "2 viikkoa (uusinta)" },
    { q: "Yöyskä vinkuu, henkeä ahdistaa.", l: "PEF-muutos", i: "Astma", o: ["Astma", "Flunssa", "Sydänvika"], a: "Astma", info: "Lääkitys kuntoon.", vakava: false, aika: "Elinikäinen" },
    { q: "Paukahdus kantapäässä, jalka ei toimi.", l: "MRI: Poikki", i: "Akillesjänne", o: ["Akillesjänteen repeämä", "Nyrjähdys", "Murtuma"], a: "Akillesjänteen repeämä", info: "Leikkaus tai kipsi.", vakava: false, aika: "3-6 kuukautta" },
    { q: "Uloste mustaa rautalääkkeen jälkeen.", l: "Normaali", i: "Värjäymä", o: ["Rautalääkkeen sivuaine", "Vuoto", "Vatsatauti"], a: "Rautalääkkeen sivuaine", info: "Vaaton sivuoire.", vakava: false, aika: "Kuuri loppuun" },
    { q: "Selkä S-muotoinen koululaisella.", l: "Röntgen: Käyrä", i: "Skolioosi", o: ["Skolioosi", "Noidannuoli", "Kipu"], a: "Skolioosi", info: "Fysioterapia tai korsetti.", vakava: false, aika: "Kasvun ajan" },
    { q: "Pehmeä patti ranteessa.", l: "UÄ: Nestettä", i: "Ganglio", o: ["Ganglio", "Syöpä", "Murtuma"], a: "Ganglio", info: "Hyvänlaatuinen hyytelöpatti.", vakava: false, aika: "Voi hävitä itsestään" },
    { q: "Korvissa soi koko ajan.", l: "Kuulotesti", i: "Tinnitus", o: ["Tinnitus", "Kuurous", "Tulehdus"], a: "Tinnitus", info: "Melusuojaus tärkeää.", vakava: false, aika: "Pysyvä tai aaltoileva" },
    { q: "Kädet tärisevät kahvia juodessa.", l: "Normaali", i: "Essentiellivapina", o: ["Essentiellivapina", "Parkinson", "Alkoholi"], a: "Essentiellivapina", info: "Perinnöllinen tärinä.", vakava: false, aika: "Pysyvä" },
    { q: "Punainen kieli ja näppyjä iholla.", l: "Strep-A +", i: "Tulirokko", o: ["Tulirokko", "Vesirokko", "Angiina"], a: "Tulirokko", info: "Antibioottihoito.", vakava: false, aika: "10 päivää" },
    { q: "Valkoisia läiskiä iholla, väri häviää.", l: "Normaali", i: "Valkopälvi", o: ["Valkopälvi", "Sieni", "Ihottuma"], a: "Valkopälvi", info: "Pigmenttihäiriö.", vakava: false, aika: "Pysyvä" },
    { q: "Uinnin jälkeen korva tosi kipeä.", l: "Bakteeritulehdus", i: "Käytävä", o: ["Korvakäytävätulehdus", "Välikorva", "Vaikku"], a: "Korvakäytävätulehdus", info: "Lääketipat.", vakava: false, aika: "5-7 päivää" },
    { q: "Yöhikoilua, yskii verta, laihtunut.", l: "Tuberkuloosi +", i: "Keuhko-onkalo", o: ["Tuberkuloosi", "Syöpä", "Keuhkokuume"], a: "Tuberkuloosi", info: "Eristys ja pitkä hoito.", vakava: true, aika: "Kuukausia (hoito)" },
    { q: "Pissatessa verta, hirveä selkäkipu.", l: "Kivi virtsajohtimessa", i: "Kivi", o: ["Munuaiskivi", "Syöpä", "Lumbago"], a: "Munuaiskivi", info: "Poistuu yleensä itsestään.", vakava: false, aika: "1-3 päivää" },
    { q: "Kyhmy kaulalla joka liikkuu nieltäessä.", l: "UÄ: Kilpirauhaskyhmy", i: "Kyhmy", o: ["Kilpirauhaskyhmy", "Imusolmuke", "Kasvain"], a: "Kilpirauhaskyhmy", info: "Tutkittava biopsialla.", vakava: false, aika: "Elinikäinen seuranta" },
    { q: "Kämmen kireä, sormet ei suoristu.", l: "Sidekudoskutistuma", i: "Dupuytren", o: ["Dupuytren", "Murtuma", "Reuma"], a: "Dupuytren", info: "Voi vaatia leikkauksen.", vakava: false, aika: "Krooninen" },
    { q: "Pikkuvauva uninen, iholla tummia pisteitä.", l: "Veriviljely: Bakteeri", i: "Sepsis", o: ["Aivokalvontulehdus", "Vesirokko", "Allergia"], a: "Aivokalvontulehdus", info: "Verenmyrkytys ja meningiitti!", vakava: true, aika: "1-4 tuntia" },
    { q: "Jalkaterässä syylä joka on kipeä.", l: "HPV-virus", i: "Syylä", o: ["Jalkasyylä", "Sieni", "Murtuma"], a: "Jalkasyylä", info: "Hoitona jäädytys tai aineet.", vakava: false, aika: "Kuukausia" },
    { q: "Silmäluomessa kipeä patti.", l: "Rauhastukos", i: "Näärännäppy", o: ["Näärännäppy", "Glaukooma", "Kaihi"], a: "Näärännäppy", info: "Lämpöhoito auttaa.", vakava: false, aika: "1 viikko" }
];

// ==========================================
// ⚙️ PELIN TOIMINNOT
// ==========================================

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Sekoitetaan ja valmistetaan taudit
const allDiseases = shuffle(raakaData.map(d => ({
    q: d.q, lab: d.l, img: d.i, opt: d.o, ans: d.a, info: d.info,
    vakava: d.vakava, aika: d.aika
})));

const patientProfiles = [
    { age: 5, sex: "Poika", job: "Päiväkotilainen" },
    { age: 12, sex: "Tyttö", job: "Koululainen" },
    { age: 19, sex: "Mies", job: "Varusmies" },
    { age: 24, sex: "Nainen", job: "Opiskelija" },
    { age: 42, sex: "Mies", job: "Rakennusmies" },
    { age: 67, sex: "Nainen", job: "Eläkeläinen" },
    { age: 85, sex: "Mies", job: "Sotaveteraani" }
];
