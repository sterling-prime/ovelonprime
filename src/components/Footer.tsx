import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { X, Cog, Wrench, LifeBuoy, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";

import badgeIso from "@/assets/badge-iso27001.png";
import badgeSoc2 from "@/assets/badge-soc2.png";
import badgeGdpr from "@/assets/badge-gdpr.png";
import badgeNis2 from "@/assets/badge-nis2.png";

import isoModal from "@/assets/popup-iso27001.jpg";
import socModal from "@/assets/popup-soc2.jpeg";
import gdprModal from "@/assets/popup-gdpr.webp";
import nisModal from "@/assets/popup-nis2.jpeg";

const LinkedInIcon = ({ className }: { className?: string }) => (
<svg viewBox="0 0 24 24" fill="currentColor" className={className}>
<path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 23.5h4V7.98h-4V23.5zM8.5 7.98h3.8v2.12h.05c.53-1 1.82-2.12 3.75-2.12 4 0 4.74 2.63 4.74 6.05v7.47h-4v-6.62c0-1.58-.03-3.62-2.21-3.62-2.21 0-2.55 1.72-2.55 3.5v6.74h-4V7.98z"/>
</svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
<svg viewBox="0 0 24 24" fill="currentColor" className={className}>
<path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z"/>
</svg>
);

type FooterLink = {
labelKey: string;
section?: string;
href?: string;
};

export const Footer = () => {

const { t } = useTranslation();
const location = useLocation();
const navigate = useNavigate();

const [selectedBadge, setSelectedBadge] = useState<number | null>(null);
const [bookingOpen, setBookingOpen] = useState(false);

const scrollToSection = (section: string) => {

if (location.pathname !== "/") {
navigate("/", { state: { scrollTo: section } });
return;
}

document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });

};

const footerLinks: FooterLink[] = [
{ labelKey: "nav.services", section: "services" },
{ labelKey: "nav.pricing", section: "pricing" },
{ labelKey: "nav.about", section: "about" },
{ labelKey: "nav.contact", section: "contact" },
{ labelKey: "footer.privacy", href: "/privacy" },
{ labelKey: "footer.terms", href: "/terms" }
];

const badges = [
{
img: badgeIso,
title: "ISO 27001",
desc: "Information Security Management Standard",
modalImg: isoModal,
description: "ISO 27001 ensures organizations systematically manage sensitive information and apply risk-based security controls.",
help: [
"Secure infrastructure architecture",
"Encrypted communication pipelines",
"Strict authentication and access control",
"Protection of operational data"
]
},
{
img: badgeSoc2,
title: "SOC 2 Type II",
desc: "Service Organization Control",
modalImg: socModal,
description: "SOC 2 Type II certifies that systems securely process customer data across security, availability and privacy standards.",
help: [
"Secure platform infrastructure",
"Controlled system access",
"Reliable uptime for operations",
"Continuous monitoring"
]
},
{
img: badgeGdpr,
title: "GDPR",
desc: "General Data Protection Regulation",
modalImg: gdprModal,
description: "GDPR regulates how organizations collect, process and protect personal data of individuals in the EU.",
help: [
"Privacy-first architecture",
"Secure data processing",
"Minimal data retention",
"Compliance aligned workflows"
]
},
{
img: badgeNis2,
title: "NIS2",
desc: "EU Cybersecurity Directive",
modalImg: nisModal,
description: "NIS2 strengthens cybersecurity requirements for essential and important organizations across Europe.",
help: [
"Secure digital infrastructure",
"Reliable communication systems",
"Operational security best practices",
"Resilient system architecture"
]
}
];

return (

<>

<footer className="bg-muted/40 border-t border-border">

<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

<div className="mb-20">

<div className="relative rounded-[28px] overflow-hidden text-white bg-[#0b1626] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

<div className="relative px-8 sm:px-12 py-16 grid lg:grid-cols-2 gap-14 items-center">

<div>

<h2 className="text-3xl font-semibold mb-4 text-center lg:text-left">
Ovelon Prime for Enterprise
</h2>

<p className="text-white/80 text-lg mb-8 max-w-md text-center lg:text-left mx-auto lg:mx-0">
Deploy secure communication systems that automate requests,
scheduling, and operational workflows — built for organizations
that require reliability, security, and scale.
</p>

<div className="flex justify-center lg:justify-start">
<Button
size="lg"
onClick={() => setBookingOpen(true)}
className="bg-[#4A8F95] text-white font-semibold rounded-xl px-8 py-4"
>
Discovery Call
</Button>
</div>

</div>

<div className="grid sm:grid-cols-2 gap-10">

<div>
<div className="flex items-center gap-3 mb-2">
<Cog className="w-6 h-6 text-[#4A8F95]" />
<h4 className="font-semibold">Operational Automation</h4>
</div>
<p className="text-white/80 text-sm">
Automate service requests, phone calls and scheduling across facility management, logistics and repair teams.
</p>
</div>

<div>
<div className="flex items-center gap-3 mb-2">
<Wrench className="w-6 h-6 text-[#4A8F95]" />
<h4 className="font-semibold">Dedicated Implementation</h4>
</div>
<p className="text-white/80 text-sm">
Work directly with Ovelon specialists to deploy automation into your existing operational workflows.
</p>
</div>

<div>
<div className="flex items-center gap-3 mb-2">
<LifeBuoy className="w-6 h-6 text-[#4A8F95]" />
<h4 className="font-semibold">Priority Enterprise Support</h4>
</div>
<p className="text-white/80 text-sm">
Receive guaranteed response times and priority assistance for mission-critical automation environments.
</p>
</div>

<div>
<div className="flex items-center gap-3 mb-2">
<ShieldCheck className="w-6 h-6 text-[#4A8F95]" />
<h4 className="font-semibold">Security & Compliance</h4>
</div>
<p className="text-white/80 text-sm">
Enterprise-grade architecture aligned with GDPR, ISO security standards and secure communication pipelines.
</p>
</div>

</div>

</div>

</div>

</div>

{/* BADGES */}

<div className="mb-16">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

{badges.map((badge, index) => (

<button
key={badge.title}
onClick={() => setSelectedBadge(index)}
className="bg-white rounded-[2rem] shadow-sm hover:shadow-lg text-center p-10 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
>

<div className="flex justify-center mb-6">

<div className="relative h-20 w-32 flex items-center justify-center overflow-hidden rounded-xl bg-white">

<img
src={badge.img}
alt={badge.title}
loading="lazy"
className="object-contain max-w-[300%] max-h-[300%] scale-[1.25]"
/>

</div>

</div>

<h3 className="text-xl font-semibold text-foreground mb-2">
{badge.title}
</h3>

<p className="text-sm text-muted-foreground">
{badge.desc}
</p>

</button>

))}

</div>

<p className="text-center text-sm text-muted-foreground mt-8">
Trusted by security-conscious organizations across United States and Europe.
</p>

</div>

</div>

</footer>

<BookingModal
isOpen={bookingOpen}
onClose={() => setBookingOpen(false)}
/>

</>

);

};