import { m } from "motion/react";
import { Users, MapPinned, BarChart3, MessagesSquare, ArrowRight } from "lucide-react";
import { Section, SectionTitle } from "./ui/Section";
import { Card } from "./ui/Card";
import { stagger, viewport } from "../lib/motion";

const services = [
  { icon: Users, title: "Integrated HR Management", text: "Kelola data karyawan, kontrak, payroll, leave dalam satu dashboard" },
  { icon: MapPinned, title: "Real-time Field Monitoring", text: "Track kehadiran, aktivitas, dan performa tim lapangan real-time" },
  { icon: BarChart3, title: "Advanced Analytics & Reporting", text: "Dashboard insight mendalam, laporan komprehensif, trend analysis" },
  { icon: MessagesSquare, title: "Team Collaboration Platform", text: "Internal messaging, task management, document sharing terintegrasi" },
];

export function Services() {
  return (
    <Section id="services">
      <SectionTitle eyebrow="Services" title="Our Premium Services" />
      <m.ul
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex">
            <Card className="flex w-full flex-col">
              <Icon className="mb-5 text-gold" size={32} aria-hidden />
              <h3 className="mb-3 text-xl font-semibold">{title}</h3>
              <p className="flex-1 text-sm text-muted">{text}</p>
              <a
                href="#contact"
                aria-label={`Learn more: ${title}`}
                className="mt-5 inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-gold hover:underline"
              >
                Learn more <ArrowRight size={16} aria-hidden />
              </a>
            </Card>
          </li>
        ))}
      </m.ul>
    </Section>
  );
}
