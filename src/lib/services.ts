import {
  UserSearch,
  Briefcase,
  ClipboardList,
  TrendingUp,
  Users,
  CheckSquare,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: UserSearch,
    title: "Recruitment",
    description:
      "End-to-end hiring from job brief to signed offer letter. We source, screen, and deliver candidates who fit your culture and goals.",
  },
  {
    icon: Briefcase,
    title: "Executive Search",
    description:
      "Identify and secure senior leadership talent with precision. We navigate competitive markets to find the leaders who move businesses forward.",
  },
  {
    icon: ClipboardList,
    title: "HR Consulting",
    description:
      "Strategic HR advisory that aligns your people practices with business objectives. From policy design to organizational restructuring.",
  },
  {
    icon: TrendingUp,
    title: "Talent Management",
    description:
      "Performance frameworks, retention programs, and career pathing that keep your best people engaged and growing.",
  },
  {
    icon: Users,
    title: "Staffing Solutions",
    description:
      "Flexible workforce options — temporary, contract, or permanent — tailored to your operational needs and budget.",
  },
  {
    icon: CheckSquare,
    title: "Onboarding",
    description:
      "Structured onboarding programs that reduce time-to-productivity, boost satisfaction, and set new hires up for long-term success.",
  },
];
