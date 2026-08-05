export default function() {
  return {
    locales: {
      pl: 'Polski',
      en: 'Angielski'
    },
    navLinks: [
      { label: "O mnie", href: "#about" },
      { label: "Projekty", href: "#projects" },
      { label: "Doświadczenie", href: "#experience" },
      { label: "Stack", href: "#stack" },
      { label: "Kontakt", href: "#contact" },
    ],
    profile: {
      tagline: 'Tworzę systemy backendowe oraz aplikacje mobilne dla firm.',
      intro: 'Fullstack developer skupiony na inżynierii backendu, API oraz infrastrukturze chmurowej. Pomagam firmom przekształcać złożone wymagania w niezawodne oprogramowanie — od warstwy bazy danych i API aż po aplikacje mobilne, z których faktycznie korzystają użytkownicy.',
      stats: [
        { value: "4+", label: "Lat tworzenia aplikacji" },
        { value: "20+", label: "Dostarczonych projektów" },
        { value: "100%", label: "Realizacja od początku do końca." },
      ],
    },
    sections: {
      hero: {
        projectButton: 'Zobacz moje projekty',
        workWithMe: 'Pracuj ze mną',
      },
      about: {
        eyebrow: 'O mnie',
        title: 'Kim jestem i jak pracuję.',
        paragraphs: [
          "Jestem fullstack developerem, który większość czasu spędza przy backendzie — projektując API, modelując dane i dbając o to, aby systemy działały niezawodnie wraz ze wzrostem ruchu, zespołów i wymagań.",
          "Współpracuję z firmami, które potrzebują czegoś więcej niż prototypu — tworzę platformy wewnętrzne, portale dla klientów, integracje oraz aplikacje mobilne, które muszą być rozwijane i utrzymywane przez lata. Prowadzę projekty od architektury, przez implementację, aż po wdrożenie i monitoring.",
          "Stawiam na przejrzystą strukturę, czytelny kod, rzetelne estymacje oraz oprogramowanie, które można łatwo przekazać i dalej rozwijać."
        ],
        facts: [
          { label: "Specjalizacja", value: "Backend, API i aplikacje webowe/mobilne" },
          { label: "Pracuje z", value: "Startupy, agencje i zespoły produktowe" },
          { label: "Współpraca", value: "Projekty freelance i długoterminowe" },
        ],
        focusAreas: [
          {
            id: "backend",
            title: "Backend i rozwój API",
            body: "Bezpieczne, dobrze zaprojektowane usługi z czytelnym podziałem domenowym, uwierzytelnianiem, integracjami oraz procesami działającymi w tle.",
            points: ["REST APIs", "Auth & permissions", "Integrations", "Background jobs"],
          },
          {
            id: "mobile",
            title: "Aplikacje mobilne",
            body: "Aplikacje mobilne dla biznesu oparte na solidnych API — od obsługi danych offline po procesy publikacji w obu sklepach.",
            points: ["Cross-platform apps", "API-driven UX", "Push & offline sync", "Store releases"],
          },
          {
            id: "cloud",
            title: "Chmura i dostarczanie oprogramowania",
            body: "Infrastruktura i procesy wdrożeniowe, które sprawiają, że wydawanie nowych wersji jest przewidywalne: konteneryzowane środowiska, automatyczne wdrożenia i monitoring.",
            points: ["Docker & Linux", "CI/CD", "Cloudflare & Nginx", "Monitoring"],
          },
        ],
      },
      projects: {
        eyebrow: "wybrane projekty",
        title: "Wybrane realizacje.",
        intro: "Przegląd projektów, w których architektura, wydajność, infrastruktura i doświadczenie użytkownika połączyły się w spójną całość."
      },
      contact: {
        eyebrow: 'kontakt',
        title: 'Potrzebujesz systemu backendowego lub aplikacji mobilnej dla swojej firmy?',
        intro: 'Opowiedz mi o swoim pomyśle. Pomogę zaplanować architekturę, stworzyć API i aplikację oraz zadbać o stabilne działanie rozwiązania w środowisku produkcyjnym.',
        description: "Obecnie jestem otwarty na wybrane projekty freelance, długoterminową współpracę oraz ciekawe wyzwania inżynieryjne.",
        buttons: {
          email: 'Napisz do mnie',
        }
      },
      stack: {
        eyebrow: "technologie",
        title: "Technologie i narzędzia, z którymi pracuję.",
        intro: "Sprawdzony zestaw technologii używany na co dzień — wybierany z myślą o stabilności, rozwoju i łatwym utrzymaniu."
      },
      experience: {
        eyebrow: "doświadczenie",
        title: "Doświadczenie budowane poprzez tworzenie realnych produktów.",
      },
      footer: {
        description: 'Projektowanie skalowalnych systemów, solidnych API oraz infrastruktury przygotowanej do wdrożeń produkcyjnych.',
        backTop: 'Idź do góry'
      }
    }
  }
}