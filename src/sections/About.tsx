import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { aboutParagraphs } from "../utils/content";
import { fadeIn, staggerContainer } from "../utils/motion";

export function About() {
  const [
    intro = "",
    productApproach = "",
    formation = "",
    agile = "",
    projectsHighlight = "",
    portfolio = "",
    currentFocus = "",
  ] = aboutParagraphs;

  const techMatch = "React, TypeScript, Tailwind CSS";
  const [introPrefix = "", introSuffixRaw = ""] = intro.split(techMatch);
  const [introSuffixBeforeMicro = "", introSuffixAfterMicro = ""] =
    introSuffixRaw.split("microinterações");

  const [approachIntro = ""] = productApproach.split(
    "Em todos os meus projetos, busco aplicar boas práticas como "
  );

  const [formationPrefix = "", formationAfterTrybe = ""] = formation.split("Trybe");
  const [formationMiddle = "", formationAfterDevQuest = ""] =
    formationAfterTrybe.split("DevQuest");
  const [formationTailPrefix = "", formationTailSuffix = ""] =
    formationAfterDevQuest.split("Marketing");

  const [agilePrefix = "", agileAfterFrameworks = ""] = agile.split("(Scrum/Kanban)");
  const [agileBeforeTools = "", agileAfterTools = ""] =
    agileAfterFrameworks.split("Jira, Notion e GitHub Projects");

  const projectSections = projectsHighlight.split("\n").filter(Boolean);
  const [projectsLead = "", ...projectLines] = projectSections;
  const cleanProjectLines = projectLines.map((line) => line.replace("- ", ""));

  const [portfolioPrefix = "", portfolioSuffix = ""] = portfolio.split("IA Codex");

  const [currentPrefix = "", currentAfterReact = ""] = currentFocus.split("React avançado");
  const [currentMiddle = "", currentSuffix = ""] =
    currentAfterReact.split("Inteligência Artificial");

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 sm:scroll-mt-32 sm:px-8 sm:py-24 lg:scroll-mt-36 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 opacity-40 blur-3xl" aria-hidden />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <SectionHeader
          eyebrow="sobre mim"
          title="Transformo interfaces em experiências digitais fluídas com atenção a código limpo, design e experiência do usuário."
          className="mx-auto text-left text-pretty lg:text-center"
        />

        <motion.div
          variants={staggerContainer()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto w-full max-w-4xl"
          >
            <motion.div
              variants={fadeIn("up", 0.05)}
              className="space-y-6 text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              <div className="space-y-3">
                <p className="text-pretty break-words">
                  {introPrefix}
                  <span className="font-medium">React</span>,{" "}
                  <span className="font-medium">TypeScript</span>,{" "}
                  <span className="font-medium">Tailwind CSS</span>
                  {introSuffixBeforeMicro}
                  <span className="font-medium">microinterações</span>
                  {introSuffixAfterMicro}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-pretty break-words">{approachIntro}</p>
                <p className="text-pretty break-words">
                  Em todos os meus projetos, busco aplicar boas práticas como{" "}
                  <span className="font-medium">componentização</span>,{" "}
                  <span className="font-medium">tipagem estática</span>,{" "}
                  <span className="font-medium">arquitetura limpa</span> e{" "}
                  <span className="font-medium">integração contínua</span>.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-pretty break-words">
                  {formationPrefix}
                  <span className="font-medium">Trybe</span>
                  {formationMiddle}
                  <span className="font-medium">DevQuest</span>
                  {formationTailPrefix}
                  <span className="font-medium">Marketing</span>
                  {formationTailSuffix}
                </p>
                <p className="text-pretty break-words">
                  {agilePrefix}
                  (<span className="font-medium">Scrum/Kanban</span>)
                  {agileBeforeTools}
                  <span className="font-medium">Jira</span>,{" "}
                  <span className="font-medium">Notion</span> e{" "}
                  <span className="font-medium">GitHub Projects</span>
                  {agileAfterTools}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-pretty break-words">{projectsLead}</p>
                <ul className="list-disc space-y-2 pl-5 text-pretty">
                  {cleanProjectLines.map((item) => {
                    const [projectName, projectDescription = ""] = item.split(" – ");
                    return (
                      <li key={projectName} className="leading-relaxed">
                        <span className="font-medium">{projectName}</span>
                        {" – "}
                        {projectDescription}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-pretty break-words">
                  {portfolioPrefix}
                  <span className="font-medium">IA Codex</span>
                  {portfolioSuffix}
                </p>
                <p className="text-pretty break-words">
                  {currentPrefix}
                  <span className="font-medium">React avançado</span>
                  {currentMiddle}
                  <span className="font-medium">Inteligência Artificial</span>
                  {currentSuffix}
                </p>
              </div>

              <div className="noise-overlay relative mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
                <div className="absolute -top-6 right-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/40 sm:-top-8 sm:right-6">
                  <Sparkles className="text-white" size={22} />
                </div>
                <p className="text-lg font-semibold text-white text-pretty">
                  "Meu objetivo é transformar requisitos complexos em jornadas
                intuitivas, com microinterações que contam histórias e
                performance de primeira."
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.4em] text-slate-400">
                foco em produto e experiência
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
