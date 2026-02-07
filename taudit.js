// ==========================================
// 🏥 SAIRAALA 300 - TAUTILISTA
// ==========================================

const raakaData = [{ q: "Silmä on punainen, särkee ja näkö on sumea, pupilli ei reagoi.", l: "Paine 55", i: "Sarveiskalvo samea", o: ["Glaukooma", "Silmätulehdus", "Kaihi"], a: "Glaukooma", info: "Välitön hätätilanne näön pelastamiseksi!" },
    { q: "Lapsi valittaa korvakipua ja haroo korvaansa flunssan jälkeen.", l: "CRP 40", i: "Tärykalvo punoittaa", o: ["Korvatulehdus", "Vaikku", "Sieni"], a: "Korvatulehdus", info: "Erittäin yleinen lapsilla flunssan yhteydessä." },
    { q: "Nenästä vuotaa verta eikä se lopu painamalla.", l: "Hb 130", i: "Verenvuoto takaosasta", o: ["Nenäverenvuoto", "Murtuma", "Syöpä"], a: "Nenäverenvuoto", info: "Voi vaatia lappoamisen tai polttamisen." },
    { q: "Polvessa on kova kipu, kuumotus ja se on aivan punainen.", l: "Nivelnesteessä kiteitä", i: "UÄ: Nestettä", o: ["Kihti", "Nyrjähdys", "Kuluma"], a: "Kihti", info: "Ruokavalio ja alkoholi vaikuttavat kohtauksiin." },
    { q: "Olen jatkuvasti janoisena ja virtsaan usein, paino laskee.", l: "Sokeri 18.5", i: "Virtsassa ketoaineita", o: ["Diabetes", "Munuaisvika", "Stressi"], a: "Diabetes", info: "Hoidon aloitus on kriittistä." },
    { q: "Kova nuha, painetta poskissa ja haju-aisti on kadonnut.", l: "Normaali", i: "UÄ: Nestettä poskissa", o: ["Poskiontelotulehdus", "Korona", "Allergia"], a: "Poskiontelotulehdus", info: "Nenäsuihkeet ja huuhtelu auttavat." },
    { q: "Iho on kirkkaanpunainen ja siinä on selvä raja terveeseen ihoon.", l: "CRP 150", i: "Iho kuumottaa", o: ["Ruusu", "Allergia", "Mustelma"], a: "Ruusu", info: "Vaatii vahvan antibioottikuurin." },
    { q: "Lapsella on haukkuva yskä, joka pahenee makuulla.", l: "Happi 98%", i: "Kurkunpää turvoksissa", o: ["Laryngiitti", "Astma", "Nielutulehdus"], a: "Laryngiitti", info: "Pystyasento ja viileä ilma helpottavat." },
    { q: "Oksennan ja ripuloin verta, vatsa on todella kipeä.", l: "Hb 95 (laskussa)", i: "Skopia: Verenvuoto", o: ["Mahahaava", "Vatsatauti", "Närästys"], a: "Mahahaava", info: "Voi johtua liiallisesta särkylääkkeiden käytöstä." },
    { q: "Kurkku on kipeä, niskassa on palloja ja olen todella uupunut.", l: "Mononukleoosi-koe +", i: "Perna suurentunut", o: ["Pusutauti", "Angiina", "Flunssa"], a: "Pusutauti", info: "Virusperäinen, paranee levolla." },
    { q: "Iholle nousee paukamia heti kun kosken tiettyihin metalleihin.", l: "Normaali", i: "Kosketusihottuma", o: ["Nikkeli-allergia", "Syyhy", "Ihottuma"], a: "Nikkeli-allergia", info: "Vältä kyseistä metallia jatkossa." },
    { q: "Hengitys vinkuu ja uloshengitys on vaikeaa.", l: "Happi 91%", i: "Keuhkoäänet: Vinkuna", o: ["Astmakohtaus", "Keuhkokuume", "Närästys"], a: "Astmakohtaus", info: "Avaava lääkitys on tärkein." },
    { q: "Virtsaaminen polttaa ja joudun juoksemaan vessassa koko ajan.", l: "Virtsanäyte: Bakteereja", i: "Ei löydöksiä", o: ["Virtsatulehdus", "Klamydia", "Kivi"], a: "Virtsatulehdus", info: "Juominen ja antibiootti auttavat." },
    { q: "Ranteessa on kova kipu peukalon tyvessä, kun puristan nyrkkiä.", l: "Finkelsteinin testi +", i: "Jänneturvotus", o: ["Jännetulehdus", "Murtuma", "Reuma"], a: "Jännetulehdus", info: "Lepo ja lastoitus auttavat." },
    { q: "Silmät kutisevat, aivastuttaa ja nenä on tukossa ulkona.", l: "Normaali", i: "Limakalvot turvoksissa", o: ["Siitepölyallergia", "Korona", "Flunssa"], a: "Siitepölyallergia", info: "Antihistamiini on paras lääke." },
    { q: "Kova kipu selässä, säteilee jalkaan ja varpaat puutuvat.", l: "Normaali", i: "MRI: Välilevyn pullistuma", o: ["Välilevyn pullistuma", "Noidannuoli", "Murtuma"], a: "Välilevyn pullistuma", info: "Voi parantua jumpalla tai vaatia leikkauksen." },
    { q: "Huimaa, oksettaa ja tuntuu kuin maailma pyörisi karusellissa.", l: "Normaali", i: "Asentokoe positiivinen", o: ["Asentohuimaus", "Aivovamma", "Heikotus"], a: "Asentohuimaus", info: "Hoitona on erityiset pään liikesarjat." },
    { q: "Lapsi on erittäin uninen ja hänellä on kova kuume ja niskajäykkyys.", l: "Likvor: Samea", i: "CT: Puhdas", o: ["Aivokalvontulehdus", "Flunssa", "Laryngiitti"], a: "Aivokalvontulehdus", info: "Hätätilanne, vaatii välitöntä hoitoa!" },
    { q: "Päässä tuntuu puristava rengas, särky on molemmin puolin.", l: "Normaali", i: "Ei löydöksiä", o: ["Jännityspäänsärky", "Migreeni", "SAV-vuoto"], a: "Jännityspäänsärky", info: "Johtuu usein niska-hartia-alueen jumeista." },
    { q: "Olen laihtunut, kädet tärisevät ja sydän tykyttää levossa.", l: "T4V koholla", i: "Kilpirauhanen suurentunut", o: ["Kilpirauhasen liikatoiminta", "Stressi", "Diabetes"], a: "Kilpirauhasen liikatoiminta", info: "Aineenvaihdunta käy ylikierroksilla." },
    { q: "Vatsa on kova, ulostetta ei ole tullut ja olo on tuskainen.", l: "Normaali", i: "Röntgen: Ummetus", o: ["Ummetus", "Suolitukos", "Vatsatauti"], a: "Ummetus", info: "Kuitu ja vesi auttavat ehkäisemään." },
    { q: "Silmä on punainen ja siinä tuntuu roskan tunnetta ja kutinaa.", l: "Normaali", i: "Sidekalvon punoitus", o: ["Silmätulehdus", "Kaihi", "Glaukooma"], a: "Silmätulehdus", info: "Vältä silmän koskettelua tartunnan leviämisen takia." },
    { q: "Söin etelänmatkalla mereneläviä ja nyt iho on keltainen.", l: "Bilirubiini koholla", i: "Maksatulehdus", o: ["Hepatiitti", "Sappikivi", "Myrkytys"], a: "Hepatiitti", info: "Virusperäinen maksatulehdus." },
    { q: "Kaaduin polvelleni, se on aivan valtava pallo ja kipeä.", l: "Nivelnesteessä verta", i: "MRI: Eturistiside poikki", o: ["ACL-vamma", "Kierukkavamma", "Nyrjähdys"], a: "ACL-vamma", info: "Yleinen vamma urheilussa." },
    { q: "Olen väsynyt, kalpea ja kynnet ovat lusikkamaiset.", l: "Hb 80", i: "Verisolu-muutoksia", o: ["Anemia", "Laiskuus", "Maksatulehdus"], a: "Anemia", info: "Raudanpuute on yleisin syy." },
    { q: "Vatsaan sattuu heti ruokailun jälkeen, tuntuu polttelua.", l: "Normaali", i: "Ei löydöksiä", o: ["Närästys", "Mahahaava", "Umpisuoli"], a: "Närästys", info: "Vältä happamia juomia." },
    { q: "Korvassa tuntuu painetta ja kuulen oman puheeni kaikuvan.", l: "Normaali", i: "Korva on lukossa", o: ["Vaikkutukos", "Tulehdus", "Kuurous"], a: "Vaikkutukos", info: "Puhdistus vedellä tai tipoilla auttaa." },
    { q: "Iholle ilmestyi vyömäinen, erittäin kivulias rakkulainen ihottuma.", l: "Normaali", i: "Rakkuloita kyljessä", o: ["Vyöruusu", "Vesirokko", "Allergia"], a: "Vyöruusu", info: "Aiheuttaja on sama virus kuin vesirokossa." },
    { q: "Nilkka vääntyi pelissä, en pysty varaamaan painoa sille.", l: "Ei tarvita", i: "Röntgen: Luu poikki", o: ["Nilkkamurtuma", "Nyrjähdys", "Kramppi"], a: "Nilkkamurtuma", info: "Vaatii kipsauksen." },
    { q: "Aamulla herätessä sormet ovat aivan kankeat ja kipeät.", l: "CRP 30", i: "Röntgen: Nivelmuutoksia", o: ["Reuma", "Nivelrikko", "Murtuma"], a: "Reuma", info: "Autoimmuunitauti, joka tulehduttaa nivelet." },
    { q: "Nenä on tukossa, hajuaisti pois ja otsaa särkee.", l: "Ei tarvita", i: "Normaali", o: ["Korona", "Flunssa", "Poskiontelotulehdus"], a: "Korona", info: "Virusperäinen hengitystieinfektio." },
    { q: "Vauva itkee lohduttomasti ja vetää polvia vatsaan.", l: "Normaali", i: "Vatsa pinkeä", o: ["Koliikki", "Nälkä", "Vatsatauti"], a: "Koliikki", info: "Menee yleensä ohi muutamassa kuukaudessa." },
    { q: "Olen sekava ja hengitykseni tuoksuu asetonilta.", l: "Verensokeri 25", i: "Happamoituminen", o: ["Ketoasidoosi", "Humala", "Väsymys"], a: "Ketoasidoosi", info: "Diabetekseen liittyvä hätätilanne!" },
    { q: "Virtsa on kirkkaan punaista, mutta kipua ei ole.", l: "Virtsassa verta", i: "UÄ: Massa rakossa", o: ["Rakkosyöpä", "Kivi", "Tulehdus"], a: "Rakkosyöpä", info: "Verivirtsaisuus täytyy aina tutkia." },
    { q: "Sormi jäi sirkkeliin ja se irtosi.", l: "Ei ehdi", i: "Amputaatio", o: ["Amputaatio", "Haava", "Mustelma"], a: "Amputaatio", info: "Sormi kylmään ja kirurgille heti." },
    { q: "Olen unohtanut kuka olen ja mistä tulen.", l: "Normaali", i: "CT: Normaali", o: ["Amnesia", "Dementia", "Väsymys"], a: "Amnesia", info: "Muistinmenetys voi johtua traumasta." },
    { q: "Iholla on satoja pieniä pisteitä, jotka eivät häviä painamalla.", l: "Trombosyytit alhaiset", i: "Verenpurkaumia", o: ["Petekiat", "Ihottuma", "Mustelma"], a: "Petekiat", info: "Voi kertoa vakavasta verisairaudesta." },
    { q: "Päässä tuntuu pahinta kipua ikinä, niskat ovat jumissa.", l: "Likvor: Verta", i: "CT: Vuoto aivoissa", o: ["SAV-vuoto", "Migreeni", "Niskakipu"], a: "SAV-vuoto", info: "Aivovaltimon pullistuman puhkeaminen." },
    { q: "Söin pähkinää ja kurkku turposi umpeen välittömästi.", l: "Ei ehdi", i: "Turvotusta", o: ["Anafylaksia", "Angiina", "Paniikki"], a: "Anafylaksia", info: "Adrenaliini on hengenpelastus." },
    { q: "Vatsa on ollut löysällä viikkoja ja vääntää maitoa juodessa.", l: "Laktoosikoe +", i: "Normaali", o: ["Laktoosi-intoleranssi", "Vatsatauti", "Keliakia"], a: "Laktoosi-intoleranssi", info: "Maitosokeri ei imeydy." },
    { q: "Hampaaseen sattuu niin kovaa, etten pysty nukkumaan.", l: "CRP 60", i: "Röntgen: Juuren alla mustaa", o: ["Hammaspaise", "Viisaudenhammas", "Ientulehdus"], a: "Hammaspaise", info: "Vaatii hampaan avaamisen." },
    { q: "Polvessa tuntuu 'irtopala', joka jumittaa liikkeen.", l: "Normaali", i: "Röntgen: Irtokappale", o: ["Nivelhiiri", "Kierukkavamma", "Murtuma"], a: "Nivelhiiri", info: "Voi vaatia tähystysleikkauksen." },
    { q: "Iho kutisee ja sormien välissä on pieniä harmaita viivoja.", l: "Ei tarvita", i: "Syyhypunkki", o: ["Syyhy", "Allergia", "Kuiva iho"], a: "Syyhy", info: "Tarttuu läheisessä kontaktissa." },
    { q: "Rinnassa on kova puristus, joka helpottaa levossa.", l: "Troponiini normaali", i: "EKG: Normaali", o: ["Angina Pectoris", "Infarkti", "Närästys"], a: "Angina Pectoris", info: "Sydämen hapenpuute rasituksessa." },
    { q: "Olen hirveän väsynyt ja kaula on täynnä isoja palloja.", l: "Valkosolut koholla", i: "Imusolmukkeet suuret", o: ["Lymfooma", "Pusutauti", "Flunssa"], a: "Lymfooma", info: "Imusolmukesyöpä vaatii tarkat tutkimukset." },
    { q: "Virtsa on sameaa, kuumetta 39 astetta ja selkään särkee.", l: "CRP 150", i: "UÄ: Munuainen turvonnut", o: ["Munuaisaltaan tulehdus", "Virtsatulehdus", "Kivi"], a: "Munuaisaltaan tulehdus", info: "Vakava tulehdus, vaatii suonensisäisen hoidon." },
    { q: "Naamani puoli on halvaantunut, puhe sammaltaa ja käsi on voimaton.", l: "Sokeri normaali", i: "CT: Veritulppa aivoissa", o: ["Aivoinfarkti", "Kasvohalvaus", "Migreeni"], a: "Aivoinfarkti", info: "Jokainen minuutti on tärkeä hoidossa." },
    { q: "Hengitys haisee asetonille, olen laihtunut ja tosi janoinen.", l: "Sokeri 24", i: "Virtsassa ketoja", o: ["Diabetes", "Nestehukka", "Stressi"], a: "Diabetes", info: "Elinikäinen sairaus." },
    { q: "Kaaduin kämmenen päälle, ranteessa tuntuu kipu nuuskakuopassa.", l: "Ei tarvita", i: "Röntgen: Veneluu poikki", o: ["Veneluun murtuma", "Nyrjähdys", "Murtuma"], a: "Veneluun murtuma", info: "Paranee hitaasti ja vaatii kipsin." },
    { q: "Jalan iho on keltainen ja varvasväleissä on rikki-menoa.", l: "Normaali", i: "Sieni-infektio", o: ["Jalkasieni", "Ruusu", "Allergia"], a: "Jalkasieni", info: "Hoitona paikalliset voiteet." }{ q: "Lapsi löi pään asfalttiin, on uninen ja oksentaa.", l: "Normaali", i: "CT: Ei vuotoa", o: ["Aivotärähdys", "Migreeni", "Flunssa"], a: "Aivotärähdys", info: "Vaatii seurantaa kotona tai osastolla." },
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
