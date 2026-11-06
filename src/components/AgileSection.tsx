import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { ChevronDown, CheckCircle2, Circle, Clock } from "lucide-react";
import agile from "../data/agile.json";

type PanelId = "charter" | "userStories" | "productBacklog" | "sprintBacklog" | "logbook";

const PANELS: { id: PanelId; label: string; tag: string }[] = [
  { id: "charter", label: "Agile Team Charter", tag: "Charter" },
  { id: "userStories", label: "User Stories & Tasks", tag: "Stories" },
  { id: "productBacklog", label: "Product Backlog", tag: "Backlog" },
  { id: "sprintBacklog", label: "Sprint Backlog", tag: "Sprint" },
  { id: "logbook", label: "Agile Logbook", tag: "Logbook" },
];

const statusIcon = (status: string) => {
  if (status === "Done") return <CheckCircle2 size={14} className="text-accent flex-shrink-0" />;
  if (status === "In progress") return <Clock size={14} className="text-muted-foreground flex-shrink-0" />;
  return <Circle size={14} className="text-muted-foreground/50 flex-shrink-0" />;
};

const Reflection = ({ text }: { text: string }) => (
  <div className="mt-6 pt-6 border-t border-border">
    <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">Reflection</p>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

const CharterPanel = () => {
  const c = agile.charter;
  return (
    <div className="space-y-6">
      <div>
        <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">Purpose</p>
        <p className="font-body text-sm text-foreground leading-relaxed">{c.purpose}</p>
      </div>
      <div>
        <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">Team</p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{c.team}</p>
      </div>
      <div>
        <p className="font-body text-xs text-accent tracking-widest uppercase mb-3">Core Values</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {c.values.map((v) => (
            <div key={v.title} className="bg-secondary/40 rounded-md p-4">
              <p className="font-body text-sm text-foreground mb-1">{v.title}</p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{v.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">Working Agreements</p>
          <ul className="space-y-2">
            {c.workingAgreements.map((a, i) => (
              <li key={i} className="font-body text-xs text-muted-foreground leading-relaxed flex gap-2">
                <span className="text-accent">—</span>{a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">Operational Boundaries</p>
          <ul className="space-y-2">
            {c.boundaries.map((b, i) => (
              <li key={i} className="font-body text-xs text-muted-foreground leading-relaxed flex gap-2">
                <span className="text-accent">—</span>{b}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Reflection text={c.reflection} />
    </div>
  );
};

const UserStoriesPanel = () => (
  <div className="space-y-4">
    {agile.userStories.map((s, i) => (
      <div key={i} className="bg-secondary/40 rounded-md p-4">
        <p className="font-body text-sm text-foreground leading-relaxed">
          <span className="text-accent">As a</span> {s.asA}, <span className="text-accent">I want</span> {s.iWant}, <span className="text-accent">so that</span> {s.soThat}.
        </p>
        <ul className="mt-3 space-y-1.5">
          {s.tasks.map((t, j) => (
            <li key={j} className="font-body text-xs text-muted-foreground flex gap-2 items-start">
              <Circle size={10} className="mt-1 text-muted-foreground/50 flex-shrink-0" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    ))}
    <Reflection text={agile.reflections.userStories} />
  </div>
);

const ProductBacklogPanel = () => (
  <div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-border">
            <th className="font-body text-xs text-accent tracking-widest uppercase pb-3 pr-4">Item</th>
            <th className="font-body text-xs text-accent tracking-widest uppercase pb-3 pr-4">Priority</th>
            <th className="font-body text-xs text-accent tracking-widest uppercase pb-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {agile.productBacklog.map((p, i) => (
            <tr key={i} className="border-b border-border/50 align-top">
              <td className="py-3 pr-4">
                <p className="font-body text-sm text-foreground">{p.item}</p>
                <p className="font-body text-xs text-muted-foreground/70 mt-1">{p.note}</p>
              </td>
              <td className="py-3 pr-4 font-body text-xs text-muted-foreground whitespace-nowrap">{p.priority}</td>
              <td className="py-3 font-body text-xs text-muted-foreground whitespace-nowrap">
                <span className="flex items-center gap-1.5">{statusIcon(p.status)}{p.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Reflection text={agile.reflections.productBacklog} />
  </div>
);

const SprintBacklogPanel = () => {
  const s = agile.sprintBacklog;
  return (
    <div>
      <div className="mb-5">
        <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">Sprint Goal</p>
        <p className="font-body text-sm text-foreground leading-relaxed">{s.sprintGoal}</p>
      </div>
      <div className="grid sm:grid-cols-5 gap-3 mb-5">
        {s.days.map((d) => (
          <div key={d.day} className="bg-secondary/40 rounded-md p-3">
            <p className="font-body text-xs text-accent tracking-widest uppercase mb-1.5">{d.day}</p>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">{d.focus}</p>
          </div>
        ))}
      </div>
      <div>
        <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">Definition of Done</p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.definitionOfDone}</p>
      </div>
      <Reflection text={agile.reflections.sprintBacklog} />
    </div>
  );
};

const LogbookPanel = () => (
  <div className="space-y-5">
    {agile.logbook.map((m) => (
      <div key={m.period}>
        <p className="font-body text-xs text-accent tracking-widest uppercase mb-2">{m.period}</p>
        <ul className="space-y-1.5">
          {m.entries.map((e, i) => (
            <li key={i} className="font-body text-xs text-muted-foreground leading-relaxed flex gap-2">
              <span className="text-accent">—</span>{e}
            </li>
          ))}
        </ul>
      </div>
    ))}
    <Reflection text={agile.reflections.logbook} />
  </div>
);

const PANEL_COMPONENTS = {
  charter: CharterPanel,
  userStories: UserStoriesPanel,
  productBacklog: ProductBacklogPanel,
  sprintBacklog: SprintBacklogPanel,
  logbook: LogbookPanel,
};

const AgileSection = () => {
  const { ref, inView } = useInView();
  const [openId, setOpenId] = useState<PanelId | null>("charter");

  return (
    <section id="agile" className="min-h-screen py-24 px-6 md:px-12 bg-background" ref={ref}>
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-3">INDUSTRY PLACEMENT</h2>
        <p className="font-body text-sm text-muted-foreground tracking-widest uppercase mb-2">
          Agile Portfolio · PRP370S
        </p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-2xl mb-10">
          {agile.project.context}
        </p>

        <div className="space-y-4">
          {PANELS.map(({ id, label, tag }, i) => {
            const isOpen = openId === id;
            const Panel = PANEL_COMPONENTS[id];
            return (
              <div
                key={id}
                className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-accent/40"
                style={{ animation: inView ? `cascade-in 0.5s ease-out ${i * 0.1}s both` : "none" }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span className="px-2 py-0.5 bg-accent/20 text-accent text-[10px] font-body tracking-widest uppercase rounded">
                      {tag}
                    </span>
                    <h3 className="font-display text-lg md:text-xl text-foreground group-hover:text-accent transition-colors">
                      {label}
                    </h3>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-8 border-t border-border pt-6">
                      <Panel />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgileSection;
