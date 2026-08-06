export default function() {
  return {
    locales: {
      pl: 'Polski',
      en: 'Angielski'
    },
    statuses: {
      live: 'Live',
      developing: 'Developing',
      ended: 'Ended',
      suspended: 'Suspended',
    },
    links: {
      about: 'O mnie',
      projects: 'Projekty',
      experience: 'Doświadczenie',
      stack: 'Stack',
      contact: 'Kontakt',
    },
    profile: {
      tagline: 'Tworzę systemy backendowe oraz aplikacje mobilne dla firm.',
      intro: 'Fullstack developer skupiony na inżynierii backendu, API oraz infrastrukturze chmurowej. Pomagam firmom przekształcać złożone wymagania w niezawodne oprogramowanie — od warstwy bazy danych i API aż po aplikacje mobilne, z których faktycznie korzystają użytkownicy.',
      stats: {
        years: 'Lat tworzenia aplikacji',
        projects: 'Dostarczonych projektów',
        ownership: 'Realizacja od początku do końca.'
      },
    },
    projects: {
      'yshop-pl': {
        description: 'Platforma SaaS dostarczająca zautomatyzowane sklepy ItemShop dla serwerów gier, umożliwiająca sprzedaż oraz natychmiastową realizację zakupów graczy przez całą dobę.',
        highlight: 'Skalowalna infrastruktura SaaS automatyzująca sprzedaż cyfrowych usług dla społeczności graczy.',
        overview: 'yshop.pl to platforma SaaS typu ItemShop przeznaczona dla właścicieli serwerów gier. Umożliwia tworzenie, konfigurację oraz zarządzanie sklepami internetowymi, w których gracze mogą kupować rangi, przedmioty oraz dodatkowe usługi. Platforma automatyzuje cały proces zakupowy — od obsługi płatności, przez przetwarzanie zamówienia, aż po automatyczne nadanie zakupionych dodatków na serwerze gry.',
        problem: 'Właściciele serwerów gier często musieli samodzielnie integrować wiele różnych systemów odpowiedzialnych za sklep, płatności oraz dostarczanie zakupionych usług graczom. Brakowało jednego rozwiązania, które pozwalałoby szybko uruchomić własny ItemShop, obsługiwać wiele metod płatności i całkowicie zautomatyzować proces sprzedaży.',
        challenge: 'Głównym wyzwaniem było stworzenie elastycznej platformy SaaS obsługującej wiele niezależnych sklepów, różne konfiguracje klientów, własne domeny oraz integracje z wieloma systemami płatności i serwerami gier. System musiał być skalowalny, łatwy w utrzymaniu oraz umożliwiać niezależny rozwój poszczególnych komponentów.',
        solution: 'Platforma została zaprojektowana jako zestaw niezależnych aplikacji i mikroserwisów odpowiedzialnych za konkretne obszary systemu. Architektura obejmuje dashboard administracyjny, główne API SaaS, system dynamicznego renderowania sklepów, mikroserwis obsługi płatności oraz integracji z serwerami gier. Dzięki takiemu podziałowi każdy element może być rozwijany i skalowany niezależnie.',
        decisions: [
          "Podział systemu na niezależne aplikacje umożliwiający niezależne wdrażanie i rozwój poszczególnych komponentów",
          "Centralne API SaaS odpowiedzialne za logikę biznesową, zarządzanie sklepami oraz komunikację z panelem administracyjnym",
          "Dynamiczny system szablonów sklepów oparty o Vue i Vite, pozwalający na pełną personalizację wyglądu sklepu",
          "Dedykowany mikroserwis odpowiedzialny za obsługę bramek płatności oraz komunikację z serwerami gier",
          "Obsługa własnych domen klientów poprzez Cloudflare Custom Hostnames",
          "Konteneryzacja całego środowiska z wykorzystaniem Dockera i docker-compose",
        ],
        responsibilities: [
          "Projektowanie architektury całego systemu SaaS",
          "Tworzenie głównego API oraz logiki biznesowej platformy",
          "Projektowanie struktury bazy danych i zarządzanie wieloma sklepami klientów",
          "Implementacja dashboardu administracyjnego w Nuxt oraz TailwindCSS",
          "Budowa systemu dynamicznego renderowania sklepów",
          "Integracja systemów płatności oraz komunikacji z serwerami gier",
          "Przygotowanie infrastruktury CI/CD oraz procesów automatycznego wdrażania",
        ],
        infrastructure: [
          "Docker oraz docker-compose do uruchamiania całego środowiska jednym poleceniem",
          "Osobne repozytoria GitHub dla każdego serwisu wraz z dedykowanymi workflow",
          "Automatyczne budowanie obrazów Docker i publikacja w GitHub Container Registry",
          "Nginx jako reverse proxy oraz warstwa obsługi ruchu HTTP/HTTPS",
          "Cloudflare odpowiedzialny za DNS, bezpieczeństwo, cache oraz obsługę domen niestandardowych",
          "Redis wykorzystywany do cache oraz komunikacji pomiędzy usługami",
          "MariaDB jako główna relacyjna baza danych",
        ],
        features: [
          "Obsługa ponad 30 bramek płatności z możliwością jednoczesnego wykorzystania kilku operatorów",
          "Automatyczne nadawanie zakupionych rang, przedmiotów oraz usług na serwerach gier",
          "Obsługa własnych domen sklepów poprzez Cloudflare Custom Hostnames",
          "Konfigurowalne szablony sklepów zarządzane z poziomu dashboardu",
          "Automatyczny proces zakupowy dostępny dla graczy 24/7",
          "Architektura multi-tenant pozwalająca obsługiwać wiele niezależnych sklepów",
        ],
        outcome: [
          "Pełna automatyzacja procesu sprzedaży i dostarczania usług dla graczy",
          "Połączenie zarządzania sklepem, płatnościami oraz integracjami serwerów gier w jednej platformie",
          "Modularna architektura umożliwiająca szybkie dodawanie nowych integracji i funkcjonalności",
          "Stabilne środowisko produkcyjne z automatycznym procesem wdrażania aplikacji",
        ],
      },
      'gdziebusik': {
        description: 'Aplikacja do wyszukiwania połączeń komunikacji publicznej integrująca największych przewoźników z okolic Rzeszowa, umożliwiająca planowanie tras z wykorzystaniem danych rozkładowych GTFS oraz informacji o bieżącej lokalizacji pojazdów.',
        highlight: 'Modularna platforma integrująca rozkłady jazdy, routing oraz dane realtime wielu przewoźników w jednym systemie.',
        overview: 'gdziebusik.pl to aplikacja webowa stworzona z myślą o osobach dojeżdżających do pracy, szkoły oraz podróżujących po Rzeszowie i okolicznych miejscowościach. Projekt integruje rozkłady jazdy największych lokalnych przewoźników, takich jak MPK Rzeszów, MKS (zgpks) oraz Marcel-Bus, umożliwiając wyszukiwanie optymalnych połączeń w jednym miejscu. Centralnym elementem systemu jest autorski silnik routingu oparty o dane GTFS oraz moduły odpowiedzialne za integrację z systemami informacji pasażerskiej.',
        problem: 'Pasażerowie korzystający z komunikacji w regionie Rzeszowa byli zmuszeni korzystać z wielu niezależnych stron internetowych i aplikacji poszczególnych przewoźników. Brakowało jednego narzędzia pozwalającego wyszukać połączenia obejmujące różnych operatorów oraz wykorzystującego aktualne dane o kursujących pojazdach.',
        challenge: 'Największym wyzwaniem było stworzenie wydajnego silnika wyznaczania tras obsługującego dane GTFS wielu przewoźników oraz zaprojektowanie architektury umożliwiającej integrację danych statycznych z informacjami realtime pochodzącymi z systemów informacji pasażerskiej. System musiał być łatwy do rozbudowy o kolejnych przewoźników oraz zapewniać szybkie wyszukiwanie połączeń.',
        solution: 'Projekt został podzielony na zestaw wyspecjalizowanych aplikacji i usług. Główną logikę wyszukiwania tras realizuje autorska biblioteka napisana w języku Rust, odpowiedzialna za wczytywanie danych GTFS oraz wyznaczanie optymalnych połączeń. Nad biblioteką działa API stworzone w Kotlin Ktor, które udostępnia jednolity interfejs dla aplikacji webowej i planowanej aplikacji mobilnej. Dodatkowe mikroserwisy odpowiadają za integrację z systemami informacji pasażerskiej oraz narzędzia wspierające rozwój i analizę danych GTFS.',
        decisions: [
          "Podział projektu na niezależne serwisy odpowiedzialne za konkretne obszary systemu",
          "Implementacja własnego silnika routingu w języku Rust zapewniającego wysoką wydajność przetwarzania danych GTFS",
          "Centralne API w Kotlin Ktor stanowiące jedyny punkt komunikacji dla aplikacji klienckich",
          "Oddzielenie integracji z systemami SIP do dedykowanego mikroserwisu",
          "Stworzenie wewnętrznego dashboardu do wizualizacji i analizy danych GTFS",
          "Przygotowanie architektury umożliwiającej przyszły rozwój aplikacji mobilnej",
        ],
        responsibilities: [
          "Projektowanie architektury całego systemu",
          "Implementacja autorskiego silnika wyznaczania tras w Rust",
          "Tworzenie API odpowiedzialnego za wyszukiwanie połączeń i integrację usług",
          "Projektowanie struktury danych oraz przetwarzania plików GTFS",
          "Budowa aplikacji webowej oraz przygotowanie aplikacji mobilnej",
          "Integracja z systemami informacji pasażerskiej i pobieraniem pozycji pojazdów",
          "Tworzenie narzędzi developerskich wspierających analizę danych GTFS",
        ],
        infrastructure: [
          "routing-lib jako niezależna biblioteka Rust odpowiedzialna za wyznaczanie tras",
          "Web API oparte o Kotlin Ktor integrujące wszystkie komponenty systemu",
          "Frontend webowy (NuxtJs) jako główny interfejs użytkownika",
          "Dedykowany serwis SIP Proxy API komunikujący się z systemami informacji pasażerskiej",
          "GTFS Manager zbudowany w Laravel + Inertia do przeglądania i analizy danych GTFS",
          "Architektura oparta na wielu współpracujących serwisach z jasno wydzielonymi odpowiedzialnościami",
        ],
        features: [
          "Wyszukiwanie połączeń pomiędzy miejscowościami z wykorzystaniem danych GTFS",
          "Integracja rozkładów jazdy MPK Rzeszów, MKS oraz Marcel-Bus",
          "Wyznaczanie optymalnych tras z uwzględnieniem przesiadek",
          "Pobieranie aktualnych pozycji pojazdów z systemów informacji pasażerskiej",
          "Jednolity interfejs wyszukiwania połączeń niezależnie od przewoźnika",
          "Narzędzia developerskie do wizualizacji oraz analizy danych GTFS",
        ],
        outcome: [
          "Powstanie prototypu platformy integrującej największych przewoźników z regionu Rzeszowa",
          "Stworzenie wydajnego, autorskiego silnika routingu opartego o dane GTFS",
          "Modularna architektura umożliwiająca dalszy rozwój projektu i integrację kolejnych operatorów",
          "Projekt został wstrzymany przed ukończeniem, jednak opracowane komponenty stanowią solidną bazę do jego dalszego rozwoju",
        ],
      },
      'loyaltyhub': {
        description: 'Platforma SaaS umożliwiająca małym firmom usługowym tworzenie i obsługę cyfrowych programów lojalnościowych bez konieczności budowania własnej aplikacji mobilnej. System pozwala klientom korzystać z wirtualnych kart lojalnościowych dostępnych w jednej aplikacji mobilnej.',
        highlight: 'Kompleksowy ekosystem SaaS łączący zarządzanie programami lojalnościowymi, aplikację mobilną klientów oraz narzędzia sprzedażowe dla firm.',
        overview: 'LoyaltyHub to platforma zaprojektowana dla małych przedsiębiorców z branży usługowej, którzy chcą wdrożyć własny program lojalnościowy bez kosztownego tworzenia dedykowanej aplikacji. Każda firma otrzymuje możliwość konfiguracji własnego programu, zarządzania klientami oraz obsługi punktów lub nagród. Klient końcowy korzysta z jednej aplikacji mobilnej, w której przechowuje wszystkie swoje karty lojalnościowe dodane poprzez zeskanowanie kodu QR lub otwarcie dedykowanego linku firmy.',
        problem: 'Małe firmy usługowe często nie posiadają budżetu ani zasobów technicznych pozwalających stworzyć własną aplikację lojalnościową. Tradycyjne karty papierowe są trudne w zarządzaniu, nie dostarczają danych o klientach oraz nie pozwalają na skuteczną automatyzację procesów marketingowych. Brakowało prostego rozwiązania SaaS, które umożliwiłoby szybkie uruchomienie cyfrowego programu lojalnościowego.',
        challenge: 'Największym wyzwaniem było stworzenie wielofirmowej platformy SaaS obsługującej wiele niezależnych programów lojalnościowych przy zachowaniu prostoty użytkowania dla małych przedsiębiorców. System musiał umożliwiać bezproblemowe dołączanie klientów do programów, obsługę punktów i nagród oraz zapewnić osobne narzędzia dla właścicieli firm i ich pracowników.',
        solution: 'Platforma została zaprojektowana jako zestaw współpracujących aplikacji odpowiedzialnych za różne obszary systemu. Centralne API napisane w Laravel odpowiada za logikę biznesową, zarządzanie firmami, użytkownikami oraz programami lojalnościowymi. Panel administracyjny umożliwia właścicielom konfigurację usług, klientów i statystyk, natomiast aplikacja POS pozwala pracownikom szybko obsługiwać klientów podczas wizyty. Aplikacja mobilna Flutter pełni rolę uniwersalnego portfela kart lojalnościowych dostępnego dla wszystkich użytkowników platformy.',
        decisions: [
          "Architektura multi-tenant umożliwiająca obsługę wielu niezależnych firm w jednej platformie",
          "Podział systemu na osobne aplikacje frontendowe dopasowane do konkretnych grup użytkowników",
          "Centralne API Laravel odpowiedzialne za całą logikę biznesową i komunikację pomiędzy usługami",
          "Wykorzystanie aplikacji mobilnej jako wspólnego portfela kart lojalnościowych dla wszystkich klientów",
          "Zastosowanie kodów QR i dedykowanych linków jako prostego mechanizmu dołączania do programów",
          "Stworzenie osobnej aplikacji POS dla pracowników obsługujących klientów w punktach usługowych",
        ],
        responsibilities: [
          "Projektowanie architektury całej platformy SaaS",
          "Tworzenie API oraz logiki biznesowej systemu w Laravel",
          "Projektowanie struktury bazy danych PostgreSQL",
          "Implementacja dashboardu administracyjnego w NuxtJS",
          "Budowa aplikacji POS w technologii Vue PWA",
          "Rozwój aplikacji mobilnej Flutter z wykorzystaniem Firebase",
          "Projektowanie procesów obsługi klientów, kart lojalnościowych oraz systemu nagród",
        ],
        infrastructure: [
          "API Laravel jako centralny backend całego ekosystemu",
          "PostgreSQL jako główna relacyjna baza danych",
          "Admin Dashboard oparty o NuxtJS dla właścicieli firm",
          "POS App jako aplikacja PWA dla pracowników",
          "Mobile App Flutter wykorzystująca Firebase jako infrastrukturę mobilną",
          "Architektura SaaS umożliwiająca skalowanie wielu niezależnych klientów biznesowych",
        ],
        features: [
          "Tworzenie cyfrowych kart lojalnościowych dla wielu firm usługowych",
          "Jedna aplikacja mobilna obsługująca karty wielu różnych przedsiębiorców",
          "Dołączanie do programu poprzez kod QR lub dedykowany link",
          "Panel administracyjny do zarządzania programem lojalnościowym",
          "Aplikacja POS dla pracowników umożliwiająca obsługę klientów",
          "Zarządzanie klientami, punktami oraz systemem nagród",
          "Architektura multi-tenant pozwalająca obsługiwać wielu przedsiębiorców jednocześnie",
        ],
        outcome: [
          "Stworzenie kompletnej platformy SaaS umożliwiającej małym firmom wdrożenie cyfrowych programów lojalnościowych",
          "Połączenie narzędzi administracyjnych, sprzedażowych oraz aplikacji mobilnej w jeden spójny ekosystem",
          "Eliminacja potrzeby tworzenia osobnych aplikacji dla każdej firmy",
          "Modularna architektura pozwalająca na dalszy rozwój funkcji marketingowych i analitycznych",
        ],
      },
      'hookscope': {
        description: 'Open-source narzędzie developerskie do testowania i debugowania webhooków, umożliwiające tworzenie endpointów odbierających żądania HTTP, analizowanie payloadów oraz symulowanie różnych odpowiedzi bez konieczności budowania własnej infrastruktury testowej.',
        highlight: 'Samodzielnie hostowana platforma do przechwytywania, analizowania i symulowania webhooków dla integracji API.',
        overview: 'Hookscope to narzędzie stworzone dla developerów pracujących z integracjami webhooków, takimi jak płatności, systemy SaaS, automatyzacje czy zdarzenia GitHub. Platforma pozwala wygenerować dedykowany endpoint webhooka, odbierać przychodzące żądania HTTP, przeglądać nagłówki, parametry oraz treść wiadomości, a następnie odtwarzać i symulować różne scenariusze odpowiedzi. Projekt eliminuje potrzebę ręcznego wystawiania lokalnych aplikacji lub tworzenia własnych narzędzi do debugowania integracji.',
        problem: 'Debugowanie webhooków często wymaga dodatkowych narzędzi, publicznego dostępu do lokalnej aplikacji oraz ręcznej analizy przychodzących requestów. Developerzy muszą sprawdzać strukturę payloadów, nagłówki oraz zachowanie zewnętrznych usług, co bez dedykowanego narzędzia jest czasochłonne i utrudnia szybkie testowanie integracji.',
        challenge: 'Największym wyzwaniem było stworzenie elastycznego systemu umożliwiającego nie tylko odbieranie webhooków, ale również ich analizowanie oraz definiowanie własnych scenariuszy odpowiedzi. System musiał obsługiwać różne formaty requestów, umożliwiać symulację błędów oraz pozwalać na łatwe uruchomienie zarówno lokalnie, jak i na własnej infrastrukturze.',
        solution: 'Hookscope został zaprojektowany jako kompletna platforma składająca się z aplikacji frontendowej, backendowego API oraz warstwy przechowywania danych. Backend odpowiada za obsługę endpointów webhooków, zapis otrzymanych zdarzeń oraz wykonywanie zdefiniowanych strategii odpowiedzi. Frontend zapewnia interfejs do przeglądania requestów i zarządzania sesjami webhooków. Dodatkowo projekt posiada możliwość self-hostingu poprzez Docker Compose.',
        decisions: [
          "Podział systemu na niezależny frontend oraz backend API",
          "Stworzenie dedykowanego mechanizmu endpointów webhooków dla każdego użytkownika lub sesji",
          "Możliwość definiowania własnych reguł obsługi webhooków poprzez konfigurację strategy.yml",
          "Obsługa symulowania różnych odpowiedzi HTTP bez modyfikacji kodu aplikacji testowanej",
          "Przygotowanie projektu jako narzędzia open-source możliwego do uruchomienia na własnej infrastrukturze",
          "Wykorzystanie konteneryzacji Docker Compose w celu uproszczenia wdrożenia",
        ],
        responsibilities: [
          "Projektowanie architektury całej aplikacji",
          "Implementacja backendu odpowiedzialnego za obsługę webhooków",
          "Projektowanie mechanizmu przechwytywania oraz przechowywania requestów HTTP",
          "Budowa interfejsu użytkownika do analizy zdarzeń webhooków",
          "Implementacja systemu definiowania własnych scenariuszy odpowiedzi",
          "Przygotowanie konfiguracji self-hostingu oraz środowiska developerskiego",
        ],
        infrastructure: [
          "Frontend aplikacji webowej odpowiedzialny za wizualizację i zarządzanie webhookami",
          "Backend API oparty o NestJS odpowiedzialny za logikę systemu",
          "PostgreSQL jako baza danych przechowująca konfiguracje oraz historię zdarzeń",
          "Docker oraz docker-compose do uruchamiania całego środowiska",
          "Nginx jako warstwa reverse proxy obsługująca ruch HTTP",
          "Architektura przygotowana pod łatwe wdrożenie lokalne oraz produkcyjne",
        ],
        features: [
          "Przechwytywanie i analiza przychodzących requestów HTTP",
          "Podgląd payloadów, nagłówków oraz metadanych żądań",
          "Historia otrzymanych webhooków",
          "Symulowanie odpowiedzi webhooków poprzez własne reguły",
          "Konfiguracja zachowania endpointów za pomocą pliku strategy.yml",
          "Możliwość uruchomienia projektu na własnej infrastrukturze",
        ],
        outcome: [
          "Stworzenie kompletnego narzędzia open-source upraszczającego proces testowania integracji webhookowych",
          "Połączenie funkcji webhook inbox, request inspector oraz response simulator w jednym systemie",
          "Przygotowanie rozwiązania możliwego do wykorzystania zarówno przez pojedynczych developerów, jak i zespoły tworzące integracje API",
          "Stworzenie modularnej architektury umożliwiającej dalszy rozwój funkcji debugowania i automatyzacji",
        ],
      }
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
        intro: "Przegląd projektów, w których architektura, wydajność, infrastruktura i doświadczenie użytkownika połączyły się w spójną całość.",

        viewCaseStudy: 'Zobacz więcej',

        caseStudy: 'Projekt',
        challenge: 'wyzwanie',
        architecture: 'architektura',
        decisions: 'decyzje projektowe',
        responsibilities: 'odpowiedzialność',
        infrastructure: 'infrastruktura & wdrożenie',
        outcome: 'rezultat',
        stack: 'technologie'
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
        intro: "Sprawdzony zestaw technologii używany na co dzień — wybierany z myślą o stabilności, rozwoju i łatwym utrzymaniu.",
        categories: {
          backend: {
            title: 'Backend',
            summary: "Domain-driven services, clean boundaries, predictable APIs.",
          },
          frontend: {
            title: "Frontend",
            summary: "Interfaces that stay fast under real production data.",
          },
          databases: {
            title: "Bazy danych",
            summary: "Schemas designed for correctness first, speed always.",
          },
          devops: {
            title: "DevOps & Infrastructure",
            summary: "Repeatable delivery from local commit to production edge.",
          }
        }
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