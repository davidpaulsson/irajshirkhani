import Image from "next/image";
import irajPhoto from "./Iraj_foto_oskar_omne01.jpg";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between p-8 md:p-16 lg:py-32 sm:items-start">
        <div className="flex flex-col gap-6 sm:items-start mb-8 md:mb-16">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Iraj Shirkhani
          </h1>
          <Image
            src={irajPhoto}
            alt="Iraj Shirkhani"
            className="w-full max-w-md h-auto rounded-xs"
            width={448}
          />
          <Paragraph>
            Jag är lärare med snart 20 års erfarenhet av att arbeta med barn i
            riskzon, barn och unga som hamnat snett, burit på trauma eller vuxit
            upp i utsatta miljöer och haft en dysfunktionell skolgång. Mitt driv
            har alltid varit detsamma: att möta de barn som ofta glöms bort och
            ge dem trygghet, struktur och en vuxen som aldrig ger upp.
          </Paragraph>
          <Paragraph>
            Min karriär började på Rosengårdsskolan i Malmö. Efter flytten till
            Stockholm arbetade jag på Rinkebyskolan och senare på
            Västerholmsskolan i Skärholmen – alla skolor där behovet av trygga,
            stabila vuxna är stort.
          </Paragraph>
          <Paragraph>
            Idag arbetar jag på Skolakuten Östermalm, en akutskola för elever i
            årskurs 6–9 som tillfälligt stängts av från sina ordinarie skolor.
            Här får de undervisning i små grupper, tydliga ramar och en chans
            att hitta tillbaka till studierna. Parallellt arbetar jag på uppdrag
            av Utbildningsförvaltningen i Stockholm med frågor om trygghet och
            studiero ute på stadens skolor.
          </Paragraph>
          <h2 className="text-xl font-semibold -mb-3 tracking-tight text-black dark:text-zinc-50">
            Mitt perspektiv
          </h2>
          <Paragraph>
            Jag ser skolan som en av de viktigaste skyddsfaktorerna för barn i
            utsatta situationer. Undervisning är viktigt, men lika viktigt är
            relationen, närvaron, värmen och de tydliga, kärleksfulla gränserna.
            Genom åren har jag mött barn med trauma, oro, diagnoser och
            kriminalitet i bagaget. Jag vet att förändring är möjlig, men det
            kräver tid, tålamod och vuxna som står kvar.
          </Paragraph>
          <h2 className="text-xl font-semibold -mb-3 tracking-tight text-black dark:text-zinc-50">
            Föreläsningar
          </h2>
          <Paragraph>
            Jag föreläser om mitt arbete och om hur skolan kan arbeta effektivt
            och hållbart med barn i riskzon – med fokus på trygghet, relationer,
            studiero och samverkan med hem och samhälle.
          </Paragraph>
          <Paragraph>
            Kontakta mig gärna om du vill boka en föreläsning eller veta mer.
          </Paragraph>
          {/* 
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p> */}
        </div>
        <div className="w-full flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="mailto:hej@irajshirkhani.se"
          >
            hej@irajshirkhani.se
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="https://www.instagram.com/irajshirkhani/"
          >
            Instagram
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="https://www.linkedin.com/in/irajshirkhani/"
          >
            LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
}

const Paragraph = (props: { children: React.ReactNode }) => {
  return (
    <p className="text-lg leading-8 text-zinc-600 max-w-prose dark:text-zinc-400">
      {props.children}
    </p>
  );
};
