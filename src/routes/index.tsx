import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MessageSquare,
  X,
  Send,
  Handshake,
  ShieldCheck,
  Clock,
  LayoutGrid,
  Puzzle,
  Globe2,
  Headphones,
  Wrench,
  Network,
  Settings,
  LifeBuoy,
  ClipboardList,
  Code2,
  Brush,
  GraduationCap,
  Receipt,
  HardDriveDownload,
  ChevronDown,
  Phone,
  Menu,
  Quote,
  PhoneCall,
  MapPin,
  Mail,
  ArrowRight,
} from "lucide-react";
import nocViz from "@/assets/noc-visualization.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NetOpsPro — White-Label NetSapiens Support & 24/7 NOC" },
      { name: "description", content: "Elite white-label NetSapiens support. SNAPaccel, SNAPmobile, NDP portal experts on standby 24/7 for ITSPs and UCaaS partners." },
      { property: "og:title", content: "NetOpsPro — White-Label NetSapiens Support" },
      { property: "og:description", content: "Scale your UCaaS operations with a NetSapiens-certified NOC built for partners." },
    ],
  }),
  component: Index,
});

const capabilityTabs = {
  voice: [
    { title: "SNAPaccel Provisioning", desc: "Automated tenant build-outs and bulk extension provisioning across your NetSapiens core.", tag: "Automated Flow" },
    { title: "SIP Trunk Triage", desc: "Carrier-side troubleshooting, codec negotiation, and SBC config reviews.", tag: "Tier 2 / 3" },
    { title: "Call Routing Logic", desc: "Time-of-day, auto-attendants, queue strategies, and failover routes.", tag: "Dial-Plan Ops" },
    { title: "E911 & DID Porting", desc: "End-to-end LOA orchestration and address validation for compliant E911.", tag: "Lifecycle" },
  ],
  mobile: [
    { title: "SNAPmobile White-Label", desc: "iOS / Android binary branding, push certificates, and release management.", tag: "iOS / Android" },
    { title: "NDP Portal Skinning", desc: "End-user portal customization mapped to your brand system.", tag: "User Experience" },
    { title: "Device Zero-Touch", desc: "Poly, Yealink, and Cisco endpoint provisioning via your NDP.", tag: "Endpoints" },
    { title: "MMS / SMS Setup", desc: "10DLC, brand registration, and campaign approval support.", tag: "Messaging" },
  ],
  ops: [
    { title: "24/7 White-Label Helpdesk", desc: "Tier 1 answer-as-your-brand coverage with SLA-bound response times.", tag: "Live Agents" },
    { title: "Proactive Monitoring", desc: "NOC dashboards watching SIP registrations, MOS, and outage signals.", tag: "Always-On" },
    { title: "Escalation to Engineering", desc: "Direct path to NetSapiens-certified engineers for complex tickets.", tag: "Tier 3" },
    { title: "Reporting & QA", desc: "Weekly CSAT, ticket trend, and SLA reports delivered to your inbox.", tag: "Insights" },
  ],
} as const;

type TabKey = keyof typeof capabilityTabs;

const servicesAccordion = [
  {
    title: "White-Label NetSapiens Technical Support",
    desc: "End-to-end Tier 1–3 support delivered as your brand — SNAPsolution config, SBC issues, codec negotiation, and call-path troubleshooting handled by certified engineers.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 NetSapiens Helpdesk",
    desc: "Always-on coverage for your customers. Live agents answer chats, calls and tickets under your brand with SLA-bound response times — including weekends and holidays.",
    icon: Headphones,
  },
  {
    title: "Installation & Onboarding Support",
    desc: "Tenant build-outs, partition setup, NDP portal skinning, endpoint zero-touch provisioning (Poly, Yealink, Cisco) and customer cutover orchestration.",
    icon: HardDriveDownload,
  },
  {
    title: "Troubleshooting & Incident Management",
    desc: "Real-time triage of SIP registration drops, MOS degradation, one-way audio, and carrier-side faults — with full war-room incident response on Sev-1 events.",
    icon: LifeBuoy,
  },
  {
    title: "Advanced Configuration & Customization",
    desc: "Complex dial plans, time-of-day routing, auto-attendants, queues, call recording retention, 10DLC messaging, and SNAPmobile white-label binaries.",
    icon: Settings,
  },
  {
    title: "Network & System Monitoring",
    desc: "Proactive NOC dashboards watching trunk health, registration status, jitter, and outage signals — auto-failover and customer notifications under your brand.",
    icon: Network,
  },
  {
    title: "Maintenance & Platform Updates",
    desc: "Scheduled maintenance windows, NetSapiens version upgrades, security patches, firmware rollouts and regression testing — coordinated around your customers.",
    icon: Wrench,
  },
];

const tools = [
  "Slack",
  "Zoho CliQ",
  "Google Chat / Spaces",
  "Cisco Webex Teams",
  "Mattermost",
  "Discord",
  "Workplace from Meta",
  "Chanty",
  "Spike",
  "Microsoft Exchange",
  "Microsoft Office 365",
  "Microsoft Outlook",
  "Gmail (Google Workspace)",
  "Zoho Mail",
  "Proton Mail",
  "Zendesk",
  "Freshdesk",
  "ConnectWise",
  "HubSpot",
  "Jira",
  "Salesforce",
  "PagerDuty",
];

const team = [
  { name: "NetSapiens Engineering Team", count: "50+", icon: Settings, desc: "Certified VoIP engineers trained deep on NetSapiens SNAPsolution, NDP, SNAPmobile, NMS and SBC integrations." },
  { name: "Development Team", count: "20+", icon: Code2, desc: "Full-stack developers building portal extensions, API integrations and custom NetSapiens add-ons in React, Node.js and Python." },
  { name: "UI / UX Design Team", count: "8+", icon: Brush, desc: "Designers crafting white-label NDP portal skins, customer-facing dashboards and intuitive admin experiences." },
  { name: "Billing & Provisioning", count: "12+", icon: Receipt, desc: "Specialists handling rate decks, CDR reconciliation, taxation, LOA orchestration and end-to-end number porting." },
  { name: "Training Department", count: "Inhouse", icon: GraduationCap, desc: "Continuous enablement on NetSapiens releases so every agent answers as a confident expert under your brand." },
  { name: "Project Management", count: "Always-On", icon: ClipboardList, desc: "Dedicated PMs running onboarding, migrations and Sev-1 incident bridges to keep your customers informed." },
];

const whyChoose = [
  { t: "100% White-Label Service", d: "We work entirely under your brand — email signatures, hold music, portal styling and ticket templates.", icon: Handshake },
  { t: "NetSapiens-Certified Engineers", d: "Our team holds certifications across the full SNAPsolution, NDP and SNAPmobile stack.", icon: ShieldCheck },
  { t: "24/7 Availability", d: "Round-the-clock coverage across every time zone — weekends, holidays and Sev-1 nights included.", icon: Clock },
  { t: "NetSapiens Stack Mastery", d: "Deep expertise across SNAPsolution, NDP, SNAPmobile, NMS and SBC integrations — no learning curve.", icon: LayoutGrid },
  { t: "Seamless Integration", d: "We slot into your existing ticketing, chat and monitoring tools so your team keeps working the way they already do.", icon: Puzzle },
  { t: "Global Time-Zone Coverage", d: "Follow-the-sun NOC across five regions — no after-hours blackouts, no missed escalations.", icon: Globe2 },
];

const managedBullets = [
  "Round-the-clock NetSapiens support",
  "Global time-zone coverage",
  "Real-time issue handling",
  "Incident and outage management",
  "Carrier coordination and follow-ups",
  "Emergency and after-hours response",
  "Weekend support",
  "Holiday backup support",
  "Continuous service availability",
];

const regions = [
  { name: "United States", code: "US", dot: "Primary NOC" },
  { name: "India", code: "IN", dot: "Follow-the-sun" },
  { name: "Canada", code: "CA", dot: "North America" },
  { name: "United Kingdom", code: "UK", dot: "EMEA" },
  { name: "Ireland", code: "IE", dot: "EMEA" },
];

const platforms = [
  { name: "SNAPsolution Core", tag: "Provisioning & Dial Plans" },
  { name: "SNAPmobile", tag: "White-Label iOS / Android" },
  { name: "NDP Portal", tag: "End-User & Admin UI" },
  { name: "SNAPbuilder", tag: "API & Integration Layer" },
  { name: "SNAPcube", tag: "Video Conferencing" },
  { name: "SNAPfax", tag: "Digital Fax Services" },
  { name: "NMS", tag: "Network Management" },
  { name: "SBC / SIP Trunking", tag: "Carrier Interconnect" },
];

const howItWorks = [
  { n: "01", t: "Consultation", d: "We learn about your NetSapiens stack, partition, customer base, and current support gaps." },
  { n: "02", t: "Integration", d: "We slot into your portal, ticketing, chat, and monitoring tools — fully white-labeled under your brand." },
  { n: "03", t: "Ongoing Support", d: "Your customers get seamless, expert support — 24/7 — as if it always came from your in-house team." },
];

const testimonials = [
  { quote: "Partnering with this team has been a game-changer. Our clients never experience downtime, and we get to focus on scaling the business.", name: "Michael R.", role: "NetSapiens Reseller" },
  { quote: "Their white-label support is flawless. Our customers think they're speaking directly with our in-house team. Highly recommended.", name: "Sarah L.", role: "Managed Service Provider" },
  { quote: "From onboarding to ongoing maintenance, they've handled everything smoothly. Incredible NetSapiens expertise.", name: "Philip D.", role: "Telecom Distributor" },
];

function Index() {
  const [tab, setTab] = useState<TabKey>("voice");
  const [faq, setFaq] = useState<number | null>(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [openService, setOpenService] = useState<number | null>(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[68px] flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5 shrink-0 group">
            <span className="relative grid size-10 place-items-center rounded-xl bg-primary/15 border border-primary/40 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Phone size={18} strokeWidth={2.5} />
              <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-cta [animation:pulse-soft_2s_infinite]" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-extrabold tracking-tight text-[17px]">
                NetSapiens<span className="text-primary">Pro</span>
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground mt-1">White-Label NOC</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1 bg-card/60 border border-border rounded-full px-2 py-1.5">
            {[
              ["Home", "#top"],
              ["Services", "#services"],
              ["Platforms", "#platforms"],
              ["About Us", "#about"],
              ["Case Study", "#testimonials"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-full transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:+18187328277"
              className="hidden md:flex items-center gap-2 px-3 py-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <PhoneCall size={13} />
              <span className="hidden xl:inline">+1 818 732 8277</span>
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-cta text-cta-foreground text-xs font-extrabold uppercase tracking-wider rounded-full hover:shadow-[0_0_24px_-4px_var(--cta)] hover:scale-[1.02] transition-all"
            >
              Request a Quote <ArrowRight size={13} />
            </a>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden size-10 grid place-items-center rounded-lg bg-card border border-border"
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl px-5 py-4 space-y-1 [animation:fade-up_0.25s_ease-out_both]">
            {[
              ["Home", "#top"],
              ["Services", "#services"],
              ["Platforms", "#platforms"],
              ["About Us", "#about"],
              ["Case Study", "#testimonials"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileNavOpen(false)}
                className="block px-4 py-3 text-sm font-medium rounded-lg hover:bg-secondary/60 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileNavOpen(false)}
              className="block mt-2 px-4 py-3 bg-cta text-cta-foreground text-sm font-extrabold uppercase tracking-wider rounded-lg text-center"
            >
              Request a Quote
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="top" className="relative pt-20 pb-24 px-6 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(800px circle at 20% 0%, oklch(0.78 0.19 150 / 0.12), transparent 60%), radial-gradient(700px circle at 90% 30%, oklch(0.78 0.13 210 / 0.10), transparent 60%)" }}
        />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
          <div className="[animation:fade-up_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/30 rounded mb-6">
              <span className="size-1.5 rounded-full bg-accent [animation:pulse-soft_2s_infinite]" />
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">
                Built exclusively for NetSapiens
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-balance mb-6 leading-[0.98]">
              Premium white-label <span className="text-primary">NetSapiens</span> support that grows your business.
            </h1>
            <p className="text-lg text-muted-foreground max-w-[52ch] text-pretty mb-10">
              Seamlessly extend your team with our 24/7 NetSapiens-certified experts. We handle the
              technical support — SNAPsolution, NDP, SNAPmobile — while you focus on scaling your UCaaS business.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-cta text-cta-foreground font-extrabold rounded-lg hover:shadow-[0_0_32px_-4px_var(--cta)] hover:scale-[1.02] transition-all">
                Request a Quote <ArrowRight size={16} />
              </a>
              <a href="#services" className="px-7 py-3.5 bg-card border border-border font-bold rounded-lg hover:bg-secondary hover:border-primary/50 transition-all">
                Explore Services
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span>SOC 2 Aligned</span>
              <span className="text-border">/</span>
              <span>STIR / SHAKEN</span>
              <span className="text-border">/</span>
              <span>HIPAA Workflows</span>
            </div>
          </div>

          {/* Live Console Mock */}
          <div className="relative group [animation:fade-up_1s_ease-out_0.15s_both]">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
              <div className="h-9 bg-background/60 border-b border-border flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <span className="size-2 rounded-full bg-border" />
                  <span className="size-2 rounded-full bg-border" />
                  <span className="size-2 rounded-full bg-border" />
                </div>
                <div className="mx-auto text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  noc_dashboard / netsapiens_core
                </div>
              </div>
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">Active SIP Trunks</span>
                  <span className="text-[10px] font-mono text-primary">4,921 ONLINE</span>
                </div>
                <div className="h-1.5 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[88%] rounded-full" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-background/60 p-3 border border-border rounded">
                    <div className="text-[10px] font-mono uppercase text-muted-foreground mb-1">Avg Response</div>
                    <div className="text-2xl font-mono font-bold text-accent">54<span className="text-[10px] ml-1">SEC</span></div>
                  </div>
                  <div className="bg-background/60 p-3 border border-border rounded">
                    <div className="text-[10px] font-mono uppercase text-muted-foreground mb-1">CSAT</div>
                    <div className="text-2xl font-mono font-bold text-primary">99.4<span className="text-[10px] ml-1">%</span></div>
                  </div>
                </div>
                <img
                  src={nocViz}
                  alt="Live NetSapiens network coverage map"
                  width={1280}
                  height={640}
                  className="w-full aspect-video object-cover rounded border border-border"
                />
                <div className="flex items-center justify-between text-[10px] font-mono uppercase text-muted-foreground">
                  <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary [animation:pulse-soft_2s_infinite]" /> Live feed</span>
                  <span>Updated 0.3s ago</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden md:flex bg-alert/10 border border-alert/40 px-3 py-2 rounded-lg backdrop-blur-sm items-center gap-2">
              <span className="size-2 rounded-full bg-alert" />
              <div>
                <p className="text-[10px] font-mono uppercase text-alert">Alert</p>
                <p className="text-xs font-medium">Carrier SBC degraded — auto-failover engaged</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Ticker */}
      <div className="border-y border-border bg-card/40 overflow-hidden py-3 relative">
        <div className="flex items-center gap-12 whitespace-nowrap [animation:marquee_40s_linear_infinite]">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-12 shrink-0">
              {[
                ["Uptime", "99.999%"],
                ["Active NDP Portals", "14,209"],
                ["Call Recording", "1.2M min/day"],
                ["Median Resolution", "14m 12s"],
                ["Partner Coverage", "5 Regions"],
                ["First-Touch Resolve", "82%"],
              ].map(([k, v]) => (
                <div key={k + idx} className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{k}</span>
                  <span className="text-sm font-bold text-foreground">{v}</span>
                  <span className="text-border ml-12 select-none">/</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Problems we solve */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div className="lg:sticky lg:top-24">
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest">The problem</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mt-3 mb-5">
                Running a NetSapiens stack is not a generic VoIP problem.
              </h2>
              <p className="text-muted-foreground text-pretty">
                Generic IT helpdesks don't know SNAPsolution. Your team burns hours on portal config,
                porting tickets, and 2 AM SIP escalations. We replace that overhead with a NOC built
                only for NetSapiens partners.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { t: "After-hours blackouts", d: "Tickets stack up overnight. Customers churn before you wake up." },
                { t: "Generic Tier-1 confusion", d: "Outsourced agents don't know NDP from NMS. Every ticket escalates." },
                { t: "Porting bottlenecks", d: "LOA cycles, address mismatches, and carrier rejections eat your week." },
                { t: "Branding leakage", d: "Vendor names slip through to your customers' inbox. Trust erodes." },
              ].map((item) => (
                <div key={item.t} className="p-6 bg-card border border-border rounded-xl hover:border-alert/50 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="mt-1 size-2 rounded-full bg-alert shrink-0" />
                    <h3 className="font-bold text-base">{item.t}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capability Matrix (interactive tabs) */}
      <section id="capabilities" className="py-24 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest">What we cover</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mt-3 mb-3 uppercase">
                Capability Matrix
              </h2>
              <p className="text-muted-foreground max-w-[58ch]">
                Every layer of the NetSapiens ecosystem — managed by certified experts who speak SNAPsolution natively.
              </p>
            </div>
            <div className="flex gap-1 p-1 bg-background border border-border rounded-lg w-fit">
              {([
                ["voice", "Voice Ops"],
                ["mobile", "Mobile & Devices"],
                ["ops", "NOC & Support"],
              ] as const).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
                    tab === key ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilityTabs[tab].map((c, i) => (
              <div
                key={c.title}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 group"
                style={{ animation: `fade-up 0.5s ease-out ${i * 0.08}s both` }}
              >
                <div className="size-10 bg-background border border-border rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <span className="size-3 border-2 border-primary rounded-sm" />
                </div>
                <h3 className="text-base font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{c.desc}</p>
                <div className="text-[10px] font-mono text-primary uppercase tracking-wider">{c.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Accordion */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Services</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mt-3 mb-5">
              Your complete <span className="text-primary">NetSapiens</span> support partner.
            </h2>
            <p className="text-muted-foreground text-pretty mb-6">
              Delivering exceptional NetSapiens experiences takes more than great technology — it
              demands reliable, expert support that keeps your customers connected around the clock.
              As your dedicated white-label partner, we work seamlessly under your brand to provide
              end-to-end technical assistance, from onboarding to ongoing maintenance.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
              Talk to our NOC →
            </a>
          </div>
          <div className="space-y-3">
            {servicesAccordion.map((s, i) => {
              const open = openService === i;
              const Icon = s.icon;
              return (
                <div key={s.title} className={`bg-card border rounded-xl overflow-hidden transition-all ${open ? "border-primary/60" : "border-border"}`}>
                  <button
                    onClick={() => setOpenService(open ? null : i)}
                    className="w-full flex items-center gap-4 p-5 text-left hover:bg-secondary/40 transition-colors"
                  >
                    <span className={`size-10 rounded-lg grid place-items-center shrink-0 transition-colors ${open ? "bg-primary text-primary-foreground" : "bg-background border border-border text-primary"}`}>
                      <Icon size={18} />
                    </span>
                    <span className="font-bold text-sm md:text-base flex-1">{s.title}</span>
                    <ChevronDown size={18} className={`text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <div className="px-5 pb-5 pl-[76px] text-sm text-muted-foreground leading-relaxed [animation:fade-up_0.3s_ease-out_both]">
                      {s.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Managed Services bullets */}
      <section className="py-20 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest">VoIP support &amp; managed services</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mt-3 uppercase">24×7×365 Global NetSapiens Support</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Always-on coverage for your VoIP business — no blackouts, no missed escalations.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {managedBullets.map((b) => (
              <div key={b} className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors">
                <span className="size-2 rounded-full bg-primary shrink-0 [animation:pulse-soft_2s_infinite]" />
                <span className="text-sm font-medium uppercase tracking-wide">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Why choose us</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold uppercase tracking-tight mt-3">Built for NetSapiens partners</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-5" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((w, i) => {
              const Icon = w.icon;
              return (
                <div
                  key={w.t}
                  className="p-7 bg-card border border-border rounded-xl hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 group"
                  style={{ animation: `fade-up 0.5s ease-out ${i * 0.06}s both` }}
                >
                  <span className="size-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-lg font-bold mb-2">{w.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Our team</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mt-3 mb-3">The people behind the platform</h2>
              <p className="text-muted-foreground max-w-[58ch]">
                A dedicated team of NetSapiens specialists — engineers, developers, designers, billing experts and
                trainers — working together to deliver seamless, innovative, high-quality communications.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((t, i) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.name}
                  className={`p-7 bg-card border rounded-xl transition-all hover:-translate-y-1 ${i === 0 ? "border-primary/60 shadow-[var(--shadow-glow)]" : "border-border hover:border-primary/40"}`}
                >
                  <span className="size-11 rounded-lg bg-primary/10 text-primary grid place-items-center mb-6">
                    <Icon size={20} />
                  </span>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-base font-bold">{t.name}</h3>
                    <span className="text-[10px] font-mono font-bold text-primary border border-primary/40 px-2 py-0.5 rounded">{t.count}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deployment Timeline */}
      <section id="process" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest">How we deploy</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold uppercase tracking-tight mt-3">The Deployment Path</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-5" />
          </div>

          <div className="relative space-y-10">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-1/2" />

            {[
              { n: "01", t: "NOC Discovery", c: "SYSTEM_INIT_PROBE", d: "Audit of your NetSapiens partition, NDP profiles, active SIP routes, escalation paths, and SLAs." },
              { n: "02", t: "Brand Synthesis", c: "IDENTITY_OVERLAY_ACTIVE", d: "Agent training on your portal customizations, brand voice, ticket templates, and tools." },
              { n: "03", t: "Quiet Cutover", c: "TRAFFIC_SHIFT_STAGED", d: "Overflow first, then full Tier-1 takeover with live monitoring in your Slack or Teams." },
              { n: "04", t: "Continuous Ops", c: "FULL_DEPLOY_SUCCESS", d: "Weekly CSAT, SLA, and incident reviews. Engineering escalations stay close to your team." },
            ].map((s, i) => (
              <div key={s.n} className={`relative flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className={`flex-1 hidden md:block ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <h4 className="text-xl font-bold mb-2 uppercase">{s.t}</h4>
                  <p className="text-sm text-muted-foreground max-w-sm inline-block">{s.d}</p>
                </div>
                <div className="size-10 rounded-full bg-background border-4 border-primary z-10 grid place-items-center shrink-0">
                  <span className="text-[10px] font-bold font-mono">{s.n}</span>
                </div>
                <div className={`flex-1 ${i % 2 === 0 ? "text-left" : "text-right"}`}>
                  <h4 className="text-xl font-bold mb-2 uppercase md:hidden">{s.t}</h4>
                  <div className="p-5 bg-card border border-border rounded-lg inline-block">
                    <code className="text-[10px] font-mono text-primary">{s.c}</code>
                    <p className="text-sm text-muted-foreground mt-2 md:hidden">{s.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Service plans</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mt-3">Choose your coverage tier</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Built around your seat count and on-call posture. Every plan includes NetSapiens-certified engineers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Overflow", price: "From $1.2k", desc: "After-hours and weekend overflow for in-house teams hitting capacity.", feats: ["Tier 1 ticket coverage", "After-hours + weekends", "NetSapiens portal access", "Shared Slack channel"], featured: false },
              { name: "Full NOC", price: "From $3.8k", desc: "Primary 24/7 white-label NOC for partners ready to fully offload support.", feats: ["24/7 Tier 1 + Tier 2", "SNAPmobile + NDP ops", "Porting & E911 desk", "Weekly SLA reviews"], featured: true },
              { name: "Engineering+", price: "Custom", desc: "Full NOC plus dedicated NetSapiens engineering for migrations and integrations.", feats: ["Everything in Full NOC", "Dedicated engineer", "Custom integrations", "Migration program"], featured: false },
            ].map((p) => (
              <div
                key={p.name}
                className={`p-7 rounded-xl border transition-all relative ${
                  p.featured ? "bg-card border-primary/60 shadow-[var(--shadow-glow)]" : "bg-card border-border hover:border-primary/30"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-7 px-3 py-0.5 bg-primary text-primary-foreground text-[10px] font-mono font-bold uppercase tracking-widest rounded">
                    Most chosen
                  </span>
                )}
                <h3 className="text-xl font-extrabold uppercase tracking-tight">{p.name}</h3>
                <div className="mt-3 mb-5">
                  <span className="text-3xl font-mono font-bold">{p.price}</span>
                  <span className="text-xs text-muted-foreground ml-1">/ mo</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 size-1.5 rounded-full bg-primary shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    p.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "bg-background border border-border hover:bg-secondary"
                  }`}
                >
                  Talk to us
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-end mb-10">
            <div>
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Tools we use</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mt-3 uppercase">Works in your existing stack</h2>
            </div>
            <p className="text-muted-foreground lg:text-right">
              We integrate into your existing ticketing, chat and collaboration tools — so your team
              keeps working exactly the way they already do.
            </p>
          </div>
          <div className="p-6 md:p-8 bg-card border border-border rounded-2xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
              {tools.map((tool) => (
                <div key={tool} className="flex items-center gap-3 py-2 group">
                  <span className="size-8 rounded-md bg-background border border-border grid place-items-center text-[10px] font-bold font-mono text-primary group-hover:border-primary/60 transition-colors">
                    {tool.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Global presence &amp; coverage</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mt-3 uppercase">Follow-the-sun NetSapiens NOC</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              We support NetSapiens partners and their customers across five key international markets — zero blackout windows.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {regions.map((r, i) => (
              <div
                key={r.name}
                className="group p-5 bg-card border border-border rounded-xl hover:border-primary/60 hover:-translate-y-1 transition-all text-center"
                style={{ animation: `fade-up 0.5s ease-out ${i * 0.08}s both` }}
              >
                <div className="mx-auto size-14 rounded-full bg-primary/10 border border-primary/30 grid place-items-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-sm font-mono font-extrabold text-primary">{r.code}</span>
                </div>
                <h3 className="text-sm font-bold mb-1">{r.name}</h3>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{r.dot}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NetSapiens Stack */}
      <section id="platforms" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest">NetSapiens Stack</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mt-3 uppercase">
                Every Layer of <span className="text-primary">NetSapiens</span> — Covered
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md md:text-right">
              From SNAPsolution provisioning to SNAPmobile white-label binaries — our engineers are certified across the full NetSapiens ecosystem.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {platforms.map((p, i) => (
              <div
                key={p.name}
                className="relative p-6 rounded-xl border bg-card border-border hover:border-primary/40 transition-all hover:-translate-y-1"
                style={{ animation: `fade-up 0.4s ease-out ${i * 0.05}s both` }}
              >
                <div className="size-10 rounded-lg bg-background/60 border border-border grid place-items-center mb-4">
                  <Network size={18} className="text-primary" />
                </div>
                <h3 className="text-base font-bold mb-1">{p.name}</h3>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{p.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us + How It Works */}
      <section id="about" className="py-24 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
            <div className="lg:sticky lg:top-24">
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest">About us</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mt-3 mb-5">
                Your <span className="text-primary">NetSapiens experts</span> behind the scenes
              </h2>
              <p className="text-muted-foreground text-pretty mb-5">
                We are a passionate team of NetSapiens specialists dedicated to helping ITSPs, MSPs and
                UCaaS providers deliver exceptional communication experiences. With deep expertise across
                the SNAPsolution stack, we pride ourselves on becoming an invisible extension of your support team.
              </p>
              <p className="text-muted-foreground text-pretty mb-8">
                Our certified engineers are available 24/7 to ensure fast resolutions and smooth operations.
                We offer 100% white-label services — meaning we work entirely under your brand — so your customers
                only ever see your name on every ticket, call and email.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["12+", "Years in VoIP"],
                  ["50+", "NetSapiens engineers"],
                  ["99.999%", "NOC uptime"],
                ].map(([k, v]) => (
                  <div key={v} className="p-4 bg-background/60 border border-border rounded-lg text-center">
                    <div className="text-2xl font-mono font-extrabold text-primary">{k}</div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest">How it works</span>
              <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight mt-3 mb-8">A simple, transparent path to white-label support.</h3>
              <div className="space-y-4">
                {howItWorks.map((s, i) => (
                  <div
                    key={s.n}
                    className="group relative p-6 bg-card border border-border rounded-xl hover:border-primary/60 transition-all flex gap-5"
                    style={{ animation: `fade-up 0.5s ease-out ${i * 0.1}s both` }}
                  >
                    <div className="shrink-0">
                      <span className="grid size-12 place-items-center rounded-xl bg-primary/10 border border-primary/30 text-primary font-mono font-extrabold text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {s.n}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-1.5 uppercase tracking-tight">{s.t}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-cta text-cta-foreground text-xs font-extrabold uppercase tracking-wider rounded-lg hover:shadow-[0_0_24px_-4px_var(--cta)] transition-all"
                >
                  Schedule a Call <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Testimonials &amp; case study</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mt-3 uppercase">Hear from NetSapiens partners</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Resellers, MSPs and telecom providers on what it's like to work with our white-label NOC.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-2 text-primary/20">
              <Quote size={80} strokeWidth={1.5} />
            </div>
            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 shadow-[var(--shadow-glow)]">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground text-pretty mb-8">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full bg-primary/15 border border-primary/40 grid place-items-center text-primary font-extrabold">
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{testimonials[activeTestimonial].name}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      aria-label={`Testimonial ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === activeTestimonial ? "w-8 bg-primary" : "w-4 bg-border hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-card/30 border-y border-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono text-primary uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mt-3">Questions NetSapiens partners ask</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "Are you affiliated with NetSapiens / Crexendo?", a: "No. We are an independent support provider that specializes in the NetSapiens SNAPsolution platform. We are not owned by or formally affiliated with Crexendo, Inc." },
              { q: "Do your agents work inside our NetSapiens portal?", a: "Yes. With scoped access we operate inside your partition, run NDP changes, build dial plans, manage call recording retention, and triage SIP issues live." },
              { q: "How do you handle white-labeling?", a: "Agents answer as your brand on every channel — email, chat, phone. Signatures, ticket templates, hold music, and portal styling all match your identity." },
              { q: "What happens during a Sev-1 outage?", a: "We page on-call engineering, open a war-room Slack/Teams channel, and run live status updates to your customers under your brand until resolution." },
              { q: "Do you handle number porting and E911?", a: "Yes. LOA orchestration, address validation, carrier escalations, and post-port E911 testing are part of our standard scope." },
            ].map((item, idx) => {
              const open = faq === idx;
              return (
                <div key={item.q} className="bg-card border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setFaq(open ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-secondary/40 transition-colors"
                  >
                    <span className="font-semibold text-sm md:text-base">{item.q}</span>
                    <span className={`size-7 grid place-items-center rounded-full border border-border text-primary shrink-0 transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {open && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed [animation:fade-up_0.3s_ease-out_both]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(700px circle at 50% 50%, oklch(0.78 0.19 150 / 0.15), transparent 60%)" }}
        />
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-[var(--shadow-glow)]">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Talk to engineering</span>
                <h2 className="text-3xl font-extrabold tracking-tight mt-3 mb-4">Book a 30-minute discovery call.</h2>
                <p className="text-muted-foreground mb-6">
                  We'll walk your NetSapiens setup, map your support gaps, and quote a NOC plan in writing within 48 hours.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-primary" /> No agent contracts to sign for the audit
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-primary" /> Quote within 48 hours
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-primary" /> 14-day pilot available
                  </div>
                </div>
              </div>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks — we'll be in touch within one business day.");
                }}
              >
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                  <input required className="mt-1 w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Jane Operator" />
                </div>
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Work email</label>
                  <input required type="email" className="mt-1 w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="jane@yourcompany.com" />
                </div>
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Seats on NetSapiens</label>
                  <select className="mt-1 w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors">
                    <option>Under 500</option>
                    <option>500 – 2,500</option>
                    <option>2,500 – 10,000</option>
                    <option>10,000+</option>
                  </select>
                </div>
                <button className="w-full px-6 py-3.5 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-xs rounded-lg hover:opacity-90 transition-all">
                  Request Discovery Call
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 px-6 border-t border-border bg-card/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/15 border border-primary/40 text-primary">
                  <Phone size={18} strokeWidth={2.5} />
                </span>
                <span className="font-extrabold text-lg tracking-tight">
                  NetSapiens<span className="text-primary">Pro</span>
                </span>
              </div>
              <p className="text-muted-foreground max-w-sm text-sm leading-relaxed mb-5">
                Premium white-label NetSapiens support for ITSPs, MSPs and telecom providers. Certified engineers, 24/7/365, under your brand.
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full w-fit">
                <span className="size-2 rounded-full bg-primary [animation:pulse-soft_2s_infinite]" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">NetSapiens Certified Partner</span>
              </div>
            </div>
            <div>
              <h5 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-5">Services</h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">24/7 Technical Support</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Setup &amp; Onboarding</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Troubleshooting</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Maintenance</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">White-Label Integration</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-5">NetSapiens Stack</h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#platforms" className="hover:text-primary transition-colors">SNAPsolution Core</a></li>
                <li><a href="#platforms" className="hover:text-primary transition-colors">SNAPmobile</a></li>
                <li><a href="#platforms" className="hover:text-primary transition-colors">NDP Portal</a></li>
                <li><a href="#platforms" className="hover:text-primary transition-colors">SNAPbuilder</a></li>
                <li><a href="#platforms" className="hover:text-primary transition-colors">SNAPcube / SNAPfax</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-5">Contact</h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Mail size={14} className="mt-0.5 text-primary shrink-0" /><span>support@netsapienspro.com</span></li>
                <li className="flex items-start gap-2"><PhoneCall size={14} className="mt-0.5 text-primary shrink-0" /><span>+1 818 732 8277</span></li>
                <li className="flex items-start gap-2"><Clock size={14} className="mt-0.5 text-primary shrink-0" /><span>24 / 7 / 365</span></li>
                <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 text-primary shrink-0" /><span>US · IN · CA · UK · IE</span></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">
              © 2026 NetSapiensPro · All rights reserved · <a href="#" className="hover:text-foreground">Privacy</a> · <a href="#" className="hover:text-foreground">Terms</a>
            </p>
            <p className="text-[10px] text-muted-foreground italic max-w-xl md:text-right">
              NetSapiensPro is an independent support provider and is not affiliated with NetSapiens or Crexendo, Inc. All trademarks belong to their respective owners.
            </p>
          </div>
        </div>
      </footer>
      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {chatOpen && (
          <div className="w-[320px] bg-card border border-border rounded-xl shadow-2xl overflow-hidden [animation:fade-up_0.3s_ease-out_both]">
            <div className="h-12 bg-primary text-primary-foreground flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-background [animation:pulse-soft_2s_infinite]" />
                <span className="text-xs font-bold uppercase tracking-wider">NetOpsBot</span>
              </div>
              <button onClick={() => setChatOpen(false)} className="hover:opacity-80 transition-opacity">
                <X size={16} />
              </button>
            </div>
            <div className="h-64 p-4 bg-background overflow-y-auto space-y-3">
              <div className="flex gap-2">
                <div className="size-7 rounded-full bg-primary/20 grid place-items-center shrink-0">
                  <span className="text-[10px] font-bold text-primary">N</span>
                </div>
                <div className="bg-card border border-border rounded-lg rounded-tl-none px-3 py-2 text-xs leading-relaxed max-w-[80%]">
                  Hi there. How can I help with your NetSapiens support needs today?
                </div>
              </div>
            </div>
            <div className="p-3 bg-card border-t border-border flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-background border border-border rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="size-8 bg-primary text-primary-foreground rounded-md grid place-items-center hover:opacity-90 transition-opacity">
                <Send size={14} />
              </button>
            </div>
          </div>
        )}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="size-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 grid place-items-center hover:scale-105 transition-transform"
        >
          {chatOpen ? <X size={20} /> : <MessageSquare size={20} />}
        </button>
      </div>
    </div>
  );
}
