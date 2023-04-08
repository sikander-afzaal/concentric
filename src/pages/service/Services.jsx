import ServiceSectionInfo from "../../components/ServiceSectionInfo";
import ServiceRow from "../../components/ServiceRow";

const Services = () => {
  return (
    <div className="wrapper">
      <div
        id="tech"
        className="contain mt-[160px] md:mt-[240px] flex-col justify-start items-center gap-[30px] sm:gap-[80px] lg:gap-[100px]"
      >
        <ServiceSectionInfo
          classes="bg-seaGreen"
          title="Technology"
          sub="Kombinieren Sie innovative Technologien und ausgefeilte Methoden."
          desc1="Das Fundament Ihres erfolgreichen digitalen Auftritts sind das Wissen um die richtigen Technologien und Methoden sowie die Fahigkeit, diese optimal einzusetzen."
          desc2="Nutzen Sie die weitreichenden Potenziale moderner und innovativer Technologien. Wir zeigen Ihnen, wie Ihr Unternehmen nachhaltig, schnell und flexibel auf dem Markt agieren kann."
        />
        <ServiceRow
          img="/tech-service1.png"
          title="Cloud-Native"
          desc="Cloud-Native geht weit uber die reine Nutzung von Cloud-Plattformen
        hinaus. Konsequent umgesetzt, bietet der Ansatz weitreichende
        Potenziale: massive Vorteile in der Geschwindigkeit der Auslieferung,
        der Flexibilitat in Entwicklung und Betrieb, der Reduktion von
        Komplexitat bis hin zu Kostenvorteilen. codecentric hilft in allen
        notwendigen Bereichen - von Planung und Organisation uber Architektur
        und Umsetzung bis hin zum Betrieb."
          link="/"
        />
        <ServiceRow
          order
          img="/tech-service2.png"
          title="Smart Data AI"
          desc="Wir helfen, Daten einen nachhaltigen Sinn zu geben. Systeme konnen sich auf Basis der richtigen Daten stetig verbessern und so Menschen dazu befahigen, bessere Entscheidungen zu treffen. Wir entwickeln die notigen Systeme und unterstutzen Sie dabei, diese in bestehende Anwendungen und Prozesse zu integrieren und fortlaufend zu verbessern."
          link="/"
        />
        <ServiceRow
          img="/tech-service3.png"
          title="Industrial IoT Industrie 4.0"
          desc="IIoT und Industrie 4.0 steht im wesentlichen fur Digitalisierung und intelligente Vernetzung. Die intelligente Vernetzung von Maschinen und Ablaufen bietet Industrieunternehmen viele Vorteile in der Produktion und Fertigung: Mehr Effizienz, flexible Produktion fur zufriedenere Kunden und Wachstumspotenzial. Wir begleiten Sie auf dem Weg in die Industrie 4.0."
          link="/"
        />
      </div>
      <div
        id="empower"
        className="contain mt-[100px] lg:mt-[180px] flex-col justify-start items-center gap-[30px] sm:gap-[80px] lg:gap-[100px]"
      >
        <ServiceSectionInfo
          classes="bg-darkCyan"
          title="Empower"
          sub="Katapultieren Sie Ihre Software auf das nachste Level."
          desc1="Denken Sie Ihre IT neu! Wie schnell Ihr Unternehmen in einem dynamischen Marktumfeld agieren kann, ist masgeblich davon abhangig, ob Ihre IT-Wertschopfungskette stabil, sicher und allzeit verfugbar ist."
          desc2="Wo Sie und Ihr Unternehmen aktuell stehen, welche Verbesserungspotenziale Sie nutzen, wie Sie Ihre Infrastruktur entlasten und zugleich sicher vor Angreifern halten konnen, zeigen wir Ihnen auf."
        />
        <ServiceRow
          order
          img="/empower-service1.png"
          title="IT Acceleration"
          desc="Eine flexible Organisation sowie die dazu passenden Entwicklungsprozesse und ein hoher Automatisierungsgrad: Optimieren Sie anhand fundierter Handlungsschritte Ihre IT-Wertschopfungskette hin zu performanter Software-Entwicklung und -betrieb und bleiben Sie unter den Besten im Markt."
          link="/"
        />
        <ServiceRow
          img="/empower-service2.png"
          title="IT Security"
          desc="Die Sicherheit Ihrer Anwendungen zu gewahrleisten, sollte fur Ihr Unternehmen oberste Prioritat haben. Software-Entwicklung muss heute hohen Sicherheitsstandards genugen, um disruptiven Auswirkungen auf das Unternehmen vorzubeugen. Bei der automatisierten und nachvollziehbaren Sicherung Ihrer IT-Wertschopfungskette stehen Ihnen unsere Sicherheits-Expert*innen zur Seite."
          link="/"
        />
        <ServiceRow
          order
          img="/empower-service2.png"
          title="IT Integration"
          desc="Monolithische IT-Systeme gehoren der Vergangenheit an. Aktuell und zukunftig besteht jede IT-Landschaft aus zahlreichen modularen, flexibel veranderbaren Funktionseinheiten, die effizient miteinander kommunizieren mussen. Erforderlich dafur ist das konzeptionelle und betriebliche API-Management: Sinnvolle Integration ist der Erfolgsfaktor."
          link="/"
        />
        <ServiceRow
          img="/empower-service4.png"
          title="Managed Services"
          desc="Eine Auslagerung in Managed Services kann Ihr Unternehmen entlasten und wertvolle Zeit sparen. Wir zeigen Ihnen, an welchen Stellen dies sinnvoll und moglich ist – von Betrieb und uberwachung bis hin zu Optimierung und Cloud-Hosting. Sie behalten dabei jedoch stets die Hand uber Ihre einzelnen Applikationen, Datacenter oder komplette IT-Infrastrukturen."
          link="/"
        />
        <ServiceRow
          order
          img="/empower-service5.jpg"
          title="Application Performance Management"
          desc="Moderne Applikationslandschaften sind hochkomplex. Kommt es hier zu Ausfallen, bedeutet das im schlimmsten Fall, dass Ihre IT alle vorhandenen und verknupften Services einzeln unter die Lupe nehmen muss, um das Problem zu finden, zu verstehen und zu losen. APM hilft, Ihre Applikationslandschaft automatisiert zu uberwachen und Service Levels sicherzustellen."
          link="/"
        />
      </div>
      <div
        id="create"
        className="contain mt-[100px] lg:mt-[180px] flex-col justify-start items-center gap-[30px] sm:gap-[80px] lg:gap-[100px]"
      >
        <ServiceSectionInfo
          classes="bg-yellow"
          title="Create together"
          sub="Erschaffen Sie neue digitale Produkte, gemeinsam mit uns."
          desc1="In Ihrem Vorhaben zur digitalen Transformation benotigen Sie einen vertrauensvollen und erfahrenen Partner."
          desc2="Wir wissen um die Herausforderungen, die Ideenfindung, digitale Produktentwicklung und Aneignung neuer Fahigkeiten mit sich bringen. Wir holen Sie dort ab, wo Sie mit Ihrem Unternehmen aktuell stehen und finden mit Ihnen zusammen die beste Losung."
        />
        <ServiceRow
          img="/create-service1.png"
          title="Digital Product Development"
          desc="Produktlebenszyklen verkurzen sich dramatisch, Markte werden fur neue Akteur*innen geoffnet und bisher unmogliche oder unvorstellbare Losungsansatze werden Realitat. Gemeinsam mit unseren Kundinnen und Kunden finden wir innovative Produktideen, validieren diese mithilfe von Prototypen innerhalb weniger Wochen und helfen bei der technischen Umsetzung fur eine effektive Marktplatzierung."
          link="/"
        />
        <ServiceRow
          order
          img="/create-service2.png"
          title="Digital Enablement"
          desc="Gemeinsam mit unseren Kundinnen und Kunden setzen wir eine digitale Produktidee um. Dabei verfolgen wir mit ihnen zusatzlich das Ziel, Teams methodisch, technisch und kulturell zu befahigen, als Leuchtturm und Multiplikator im Unternehmen zu agieren. Unsere Kund*innen konnen so grundlegende Umsetzungsfahigkeiten erwerben, die ein digitaler Leader benotigt."
          link="/"
        />
      </div>
    </div>
  );
};

export default Services;
