"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Faq from "@/components/Faq";
import {
	Button,
} from "@/components/ui/button";
import {
	Input,
} from "@/components/ui/input";
import {
	Slider,
} from "@/components/ui/slider";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import Logo from "@/components/Logo";
import {
	ArrowRight,
	Calculator,
	CalendarClock,
	Ticket,
	Wallet2,
	UserRound,
	Send,
	Linkedin,
	Twitter,
	Instagram,
	Mail,
} from "lucide-react";

function classNames(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(" ");
}

export default function Page() {
	const [waitlistOpen, setWaitlistOpen] = useState(false);
	const [email, setEmail] = useState("");
	const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
	const [businessType, setBusinessType] = useState<string>("");
	const [country, setCountry] = useState<string>("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Calculator state and currency niceties
	const [revenue, setRevenue] = useState<number>(250000);
	const [revenueText, setRevenueText] = useState<string>("250000");
	const [commission, setCommission] = useState<number>(15);
	const [currency, setCurrency] = useState<"INR" | "AED" | "USD">("INR");

	useEffect(() => {
		if (typeof window === "undefined") return;
		try {
			const lang = navigator.language || "";
			if (lang.toUpperCase().includes("-AE")) setCurrency("AED");
			else if (lang.toUpperCase().includes("-US")) setCurrency("USD");
			else setCurrency("INR");
		} catch {
			setCurrency("INR");
		}
	}, []);

	const currencySymbol = useMemo(() => ({ INR: "₹", AED: "AED ", USD: "$" }[currency]), [currency]);
	const moneyFormatter = useMemo(
		() =>
			new Intl.NumberFormat(undefined, {
				style: "currency",
				currency,
				maximumFractionDigits: 0,
			}),
		[currency],
	);
	const integerFormatter = useMemo(() => new Intl.NumberFormat(undefined), []);

	const monthlyLoss = useMemo(() => Math.max(0, Math.round(revenue * (commission / 100))), [revenue, commission]);
	const formattedLoss = moneyFormatter.format(monthlyLoss);
	// v0.2: Plan vs commission helpers
	const planByCurrency = useMemo(() => ({ INR: 499, AED: 25, USD: 9 } as const), []);
	const plan = planByCurrency[currency];
	const commissionRate = useMemo(() => Math.min(22, Math.max(10, commission)) / 100, [commission]);
	const breakEvenRevenue = useMemo(() => Math.ceil(plan / commissionRate), [plan, commissionRate]);
	const planStr = moneyFormatter.format(plan);
	const breakEvenStr = moneyFormatter.format(breakEvenRevenue);

	const fadeIn = {
		hidden: { opacity: 0, y: 12 },
		show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "What is Booklinq, exactly?",
				acceptedAnswer: {
					"@type": "Answer",
					text:
						"Booklinq is your link-in-bio booking engine. Share one link anywhere (Instagram, WhatsApp, Google Maps, QR) and capture bookings directly—without aggregator commissions.",
				},
			},
			{
				"@type": "Question",
				name: "Who is it for first?",
				acceptedAnswer: {
					"@type": "Answer",
					text:
						"Hospitality owners: vacation rentals, homestays, boutique hotels, hostels. Ticketing for events arrives next.",
				},
			},
			{
				"@type": "Question",
				name: "Why not use aggregators?",
				acceptedAnswer: {
					"@type": "Answer",
					text:
						"They’re great for discovery, but you pay 15–20% and lose guest data. Booklinq helps you convert your audience directly and keep both the margin and the relationship.",
				},
			},
			{
				"@type": "Question",
				name: "Do I own the guest data?",
				acceptedAnswer: {
					"@type": "Answer",
					text:
						"Yes. Names, emails, phone numbers, stay details—yours to export and use for remarketing, loyalty, and service.",
				},
			},
			{
				"@type": "Question",
				name: "How do payments work?",
				acceptedAnswer: {
					"@type": "Answer",
					text:
						"You connect a payment gateway in your country and get paid out to your account. We don’t hold your funds. (Country options vary; we’ll guide you during onboarding.)",
				},
			},
			{
				"@type": "Question",
				name: "What’s pricing?",
				acceptedAnswer: {
					"@type": "Answer",
					text:
						"Simple monthly plan. No per-booking commission from us. (The calculator shows how fast that beats aggregator fees.)",
				},
			},
			{
				"@type": "Question",
				name: "Can I run this alongside OTAs?",
				acceptedAnswer: {
					"@type": "Answer",
					text:
						"Yes. Keep OTAs for discovery if you wish—use Booklinq for repeat and direct traffic (bio links, WhatsApp replies, QR at property, Google Maps website link).",
				},
			},
			{
				"@type": "Question",
				name: "Can I manage multiple properties or rooms?",
				acceptedAnswer: {
					"@type": "Answer",
					text:
						"Yes. Create property profiles, room types, availability, and base rules; guests can book in a few taps.",
				},
			},
			{
				"@type": "Question",
				name: "Refunds and cancellations?",
				acceptedAnswer: {
					"@type": "Answer",
					text:
						"You set policies. Booklinq enforces them at checkout and in the confirmation emails shown to guests.",
				},
			},
			{
				"@type": "Question",
				name: "When does it launch?",
				acceptedAnswer: {
					"@type": "Answer",
					text:
						"Hospitality: November 2025. Ticketing: December 2025. Join the waitlist to get early access.",
				},
			},
		],
	};

	return (
		<div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#fbfcff] via-[#f3f6ff] to-[#ecfbfb] text-[#1D0B5B] antialiased">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
			{/* subtle decorative glow */}
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(2,166,165,0.18),transparent_60%)] blur-2xl" />
				<div className="absolute right-[-10%] bottom-[-10%] h-[50vh] w-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(29,11,91,0.10),transparent_60%)] blur-2xl" />
			</div>

			{/* Top nav */}
			<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/40 border-b border-[#1D0B5B]/10">
				<div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
						<a href="#hero" className="inline-flex items-center gap-2">
							<Logo size="sm" showWordmark={true} />
						</a>
					<nav className="hidden sm:flex items-center gap-2">
						<a href="#why" className="rounded-md px-3 py-2 text-sm text-[#1D0B5B]/70 hover:text-[#02A6A5] transition">Why</a>
						<a href="#calculator" aria-label="See savings calculator" className="rounded-md px-3 py-2 text-sm text-[#1D0B5B]/70 hover:text-[#02A6A5] transition">Calculator</a>
						<a href="#roadmap" className="rounded-md px-3 py-2 text-sm text-[#1D0B5B]/70 hover:text-[#02A6A5] transition">Roadmap</a>
						<a href="#faq" className="rounded-md px-3 py-2 text-sm text-[#1D0B5B]/70 hover:text-[#02A6A5] transition">FAQ</a>
						<Button size="sm" className="ml-2 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:content-[''] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent hover:before:translate-x-full before:transition before:duration-700" onClick={() => setWaitlistOpen(true)} aria-expanded={waitlistOpen} data-cta="waitlist-nav">
							Get Early Access
						</Button>
					</nav>
				</div>
			</header>

			<main>
				{/* Hero */}
				<section id="hero" className="relative">
					<div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24 pb-16 sm:pb-28">
						<div className="absolute right-6 top-6 sm:top-8 sm:right-8 opacity-90">
							<span className="shimmer rounded-full bg-white/70 px-3 py-1 text-xs md:text-sm backdrop-blur border border-[#1D0B5B]/10 text-[#1D0B5B]/80">
								Hospitality alpha ships November 2025 • Ticketing in December 2025
							</span>
						</div>
						<motion.div
							variants={fadeIn}
							initial="hidden"
							animate="show"
							className="flex flex-col items-center text-center"
						>
							<div className="mb-6">
								<Logo size="lg" showWordmark={false} />
							</div>
							<motion.h1
								className="text-4xl md:text-6xl font-semibold tracking-tight"
								initial={{ opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
							>
								Your booking link, anywhere.
							</motion.h1>
							<motion.p
								className="mt-4 max-w-xl text-[#1D0B5B]/75"
								initial={{ opacity: 0, y: 8 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
							>
								Stop losing 15–20% to aggregators. Booklinq lets you own your bookings, your data, and your brand.
							</motion.p>
							<div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
								<Button size="lg" onClick={() => setWaitlistOpen(true)} className="gap-2 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:content-[''] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent hover:before:translate-x-full before:transition before:duration-700" aria-expanded={waitlistOpen} data-cta="waitlist-hero">
									Get early access <ArrowRight className="h-4 w-4" />
								</Button>
								<Button size="lg" variant="secondary" asChild className="bg-white/70 text-[#1D0B5B] hover:bg-white border border-[#1D0B5B]/10">
									<a href="#calculator" aria-label="See savings calculator" className="gap-2 inline-flex items-center" data-cta="see-calculator">
										See savings calculator <Calculator className="h-4 w-4" />
									</a>
								</Button>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Why Booklinq */}
				<section id="why" className="relative">
					<div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
						<motion.div
							variants={fadeIn}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: "-80px" }}
							className="text-center"
						>
							<h2 className="text-2xl md:text-3xl font-semibold">The Shopify for bookings.</h2>
						</motion.div>

						<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
							<FeatureCopy icon={<Wallet2 className="h-5 w-5" />} title="Keep your money" body="No 15–20% platform cuts. Keep what you earn." />
							<FeatureCopy icon={<UserRound className="h-5 w-5" />} title="Own your guests" body="Names, emails, check-ins/out — your data, not an aggregator’s." />
							<FeatureCopy icon={<Send className="h-5 w-5" />} title="Convert directly" body="One link that works everywhere — Instagram bio, WhatsApp, Google Maps, QR." />
						</div>
					</div>
				</section>

				{/* Savings Calculator */}
				<section id="calculator" className="relative">
					<div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
						<motion.div
							variants={fadeIn}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: "-80px" }}
							className="grid grid-cols-1 lg:grid-cols-2 gap-6"
						>
							<Card className="bg-white border-[#1D0B5B]/10">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<Calculator className="h-5 w-5 text-[#02A6A5]" />
										See how much commission you’re burning.
									</CardTitle>
									<CardDescription />
								</CardHeader>
								<CardContent className="space-y-6">
									<div>
										<label className="mb-2 block text-sm text-[#1D0B5B]/80">Your average monthly revenue</label>
										<div className="relative">
											<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#1D0B5B]/60">{currencySymbol}</span>
											<Input
												inputMode="numeric"
												className="pl-7 bg-white border-[#1D0B5B]/10 text-[#1D0B5B] placeholder:text-[#1D0B5B]/40"
												placeholder="e.g., 250,000"
												value={revenueText}
												onChange={(e) => {
													const raw = e.target.value.replace(/[^\d]/g, "");
													setRevenue(raw ? Number(raw) : 0);
													setRevenueText(e.target.value);
												}}
												onBlur={() => setRevenueText(integerFormatter.format(revenue))}
											/>
										</div>
										<div className="mt-2 flex items-center gap-2 text-xs text-[#1D0B5B]/70">
											<span>Currency:</span>
											<button className="underline hover:text-[#02A6A5]" onClick={() => setCurrency("INR")} type="button">INR</button>
											<span>·</span>
											<button className="underline hover:text-[#02A6A5]" onClick={() => setCurrency("AED")} type="button">AED</button>
											<span>·</span>
											<button className="underline hover:text-[#02A6A5]" onClick={() => setCurrency("USD")} type="button">USD</button>
										</div>
									</div>

									<div>
										<div className="mb-2 flex items-center justify-between">
											<label className="block text-sm text-[#1D0B5B]/80">Aggregator commission</label>
											<span className="text-sm text-[#1D0B5B]/80">{commission}%</span>
										</div>
										<Slider
											className="cursor-pointer"
											defaultValue={[commission]}
											value={[commission]}
											min={10}
											max={22}
											step={1}
											onValueChange={([v]) => setCommission(v)}
											aria-describedby="commission-help"
										/>
										<div id="commission-help" className="mt-1 text-xs text-[#1D0B5B]/60">
											Typical range: 12–20%
										</div>
									</div>

									<div className="rounded-xl border border-[#1D0B5B]/10 bg-white p-4">
										<p className="mt-1 text-lg">
											You’re losing <strong className="text-[#02A6A5]">{formattedLoss}/mo</strong> to commissions.
										</p>
										<p className="text-[#1D0B5B]/70">With Booklinq: <strong className="text-[#02A6A5]">{currencySymbol}0</strong> lost. Full control.</p>
									</div>

									<Button size="lg" className="w-full gap-2 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:content-[''] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent hover:before:translate-x-full before:transition before:duration-700" onClick={() => setWaitlistOpen(true)} data-cta="calculator-waitlist">
										Get my booking link early <ArrowRight className="h-4 w-4" />
									</Button>
									<div className="mt-4 rounded-xl border border-[#1D0B5B]/10 bg-white p-4">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
											<div className="text-sm text-[#1D0B5B]/80">
												<div className="font-medium">Plan vs commission</div>
												<div className="text-[#1D0B5B]/70">
													Monthly Booklinq plan: <span className="font-semibold">{planStr}</span>
												</div>
											</div>
											<div className="text-sm text-[#1D0B5B]/80">
												Break even after <span className="font-semibold">{breakEvenStr}</span> in bookings.
											</div>
										</div>
										<div className="mt-2 text-xs text-[#1D0B5B]/60">
											At {commission}% commission, you’d pay the same on aggregator fees once monthly revenue hits {integerFormatter.format(breakEvenRevenue)}.
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="bg-white border-[#1D0B5B]/10">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<Logo size="sm" showWordmark={false} />
										How Booklinq helps
									</CardTitle>
									<CardDescription className="text-[#1D0B5B]/60">Convert more, pay less, and build your brand.</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4 text-[#1D0B5B]/80">
									<p>
										Embed your booking link anywhere: Instagram bio, WhatsApp replies, QR on your menu, or Google
										Maps website field. It’s your direct line to revenue.
									</p>
									<ul className="list-disc pl-5 space-y-2">
										<li>No marketplace commissions slicing your margins.</li>
										<li>Own first-party guest data to build lifetime relationships.</li>
										<li>Delightful, mobile-first checkout optimised for conversion.</li>
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</section>

				{/* Roadmap */}
				<section id="roadmap" className="relative">
					<div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
						<motion.div
							variants={fadeIn}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: "-80px" }}
							className="text-center"
						>
							<h2 className="text-2xl md:text-3xl font-semibold">What’s coming.</h2>
						</motion.div>

						<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
							<RoadmapCopy
								icon={<CalendarClock className="h-5 w-5" />}
								eyebrow="November 2025"
								title="Hospitality launch"
								body="Vacation rentals, homestays, boutique hotels — your link-in-bio booking engine with instant confirmations."
								chip="Coming soon"
								gradient="from-[#1D0B5B]/30 to-[#02A6A5]/30"
							/>
							<RoadmapCopy
								icon={<Ticket className="h-5 w-5" />}
								eyebrow="December 2025"
								title="Ticketing launch"
								body="Create, share, and scan tickets. Mobile-first. Direct. No middlemen."
								chip="Coming soon"
								gradient="from-[#02A6A5]/30 to-[#1D0B5B]/30"
							/>
						</div>
					</div>
				</section>
				<Faq />
			</main>

			{/* Footer */}
				<footer className="border-t border-[#1D0B5B]/10 bg-white/70">
				<div className="mx-auto max-w-6xl px-6 py-10">
					<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
						<div className="flex items-center gap-3">
							<Logo size="sm" showWordmark={true} />
							<div>
								<p className="text-xs text-[#1D0B5B]/70">© 2025 Booklinq. All rights reserved.</p>
							</div>
						</div>
						<div className="text-sm text-[#1D0B5B]/60">
							Built by Innobles Technologies LLC — Dubai & India.
						</div>
						<div className="flex items-center gap-4 text-sm">
							<a href="mailto:hello@mybooklinq.com" className="hover:text-[#02A6A5] transition text-[#1D0B5B]/80">hello@mybooklinq.com</a>
							<a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#02A6A5] transition text-[#1D0B5B]/80">LinkedIn</a>
							<a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#02A6A5] transition text-[#1D0B5B]/80">Twitter</a>
							<a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#02A6A5] transition text-[#1D0B5B]/80">Instagram</a>
						</div>
					</div>
				</div>
			</footer>

			{/* Waitlist Modal */}
			<Dialog open={waitlistOpen} onOpenChange={(open) => { setWaitlistOpen(open); if (!open) { setSubmitState("idle"); } }}>
				<DialogTrigger asChild>
					<button className="hidden" aria-hidden />
				</DialogTrigger>
				<DialogContent className="bg-white border-[#1D0B5B]/10 text-[#1D0B5B]">
					<DialogHeader>
						<DialogTitle>Join the early access list</DialogTitle>
						<DialogDescription className="text-[#1D0B5B]/70">
							Be first in line for hospitality (Nov 2025) and ticketing (Dec 2025).
						</DialogDescription>
					</DialogHeader>
					<div className="space-y-4">
						<div>
							<label className="mb-2 block text-sm text-[#1D0B5B]/80">Work email</label>
							<Input
								type="email"
								required
								placeholder="yourname@hotel.com"
								className="bg-white border-[#1D0B5B]/10 text-[#1D0B5B] placeholder:text-[#1D0B5B]/40"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								data-cta="waitlist-email"
							/>
						</div>
						<div>
							<label className="mb-2 block text-sm text-[#1D0B5B]/80">Business type</label>
							<select
								className="mt-1 w-full rounded-md bg-white p-2 outline-none border border-[#1D0B5B]/10 text-[#1D0B5B]"
								value={businessType}
								onChange={(e) => setBusinessType(e.target.value)}
							>
								<option value="">Select…</option>
								<option>Vacation rental</option>
								<option>Homestay</option>
								<option>Boutique hotel</option>
								<option>Hostel</option>
								<option>Event organizer</option>
								<option>Other</option>
							</select>
						</div>
						<div>
							<label className="mb-2 block text-sm text-[#1D0B5B]/80">Country (optional)</label>
							<Input
								placeholder="UAE / India / …"
								className="bg-white border-[#1D0B5B]/10 text-[#1D0B5B] placeholder:text-[#1D0B5B]/40"
								value={country}
								onChange={(e) => setCountry(e.target.value)}
							/>
						</div>
						<p className="mt-1 text-xs text-[#1D0B5B]/60">
							By joining, you agree to receive limited product updates. No spam, ever.
						</p>
						{submitState === "success" && (
							<p className="mt-2 text-sm text-[#02A6A5]">You’re on the list. We’ll reach out before launch.</p>
						)}
						{submitState === "error" && (
							<p className="mt-2 text-sm text-red-400">Couldn’t submit just now. Try again in a moment.</p>
						)}
					</div>
					<DialogFooter>
						<Button
							className="gap-2"
							disabled={isSubmitting}
							onClick={async () => {
								if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
									setSubmitState("error");
									return;
								}
								setIsSubmitting(true);
								try {
									const res = await fetch("/api/waitlist", {
										method: "POST",
										headers: { "Content-Type": "application/json" },
										body: JSON.stringify({ email, businessType, country, source: "landing" }),
									});
									if (!res.ok) throw new Error("bad");
									setSubmitState("success");
								} catch {
									setSubmitState("error");
								} finally {
									setIsSubmitting(false);
								}
							}}
							data-cta="waitlist"
						>
							{isSubmitting ? "Submitting..." : "Request access"} <ArrowRight className="h-4 w-4" />
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}

function FeatureCopy(props: { icon: React.ReactNode; title: string; body: string }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.4 }}
		>
			<Card className="h-full bg-white border-[#1D0B5B]/10">
				<CardHeader className="flex items-center gap-3 text-left">
					<div className="h-9 w-9 rounded-lg bg-[#1D0B5B] grid place-items-center text-[#02A6A5]">
						{props.icon}
					</div>
					<h3 className="text-lg font-medium">{props.title}</h3>
				</CardHeader>
				<CardContent>
					<p className="text-[#1D0B5B]/70">{props.body}</p>
				</CardContent>
			</Card>
		</motion.div>
	);
}

function RoadmapCopy(props: {
	icon: React.ReactNode;
	eyebrow: string;
	title: string;
	body: string;
	chip: string;
	gradient: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.4 }}
		>
			<div className={classNames("relative overflow-hidden rounded-2xl p-[1px]", "bg-gradient-to-br", props.gradient)}>
				<div className="rounded-2xl h-full w-full bg-[#1D0B5B]/10">
					<div className="p-6">
						<div className="flex items-start justify-between">
							<div className="flex items-start gap-3">
								<div className="h-10 w-10 rounded-xl bg-[#1D0B5B]/10 grid place-items-center text-[#02A6A5]">{props.icon}</div>
								<div>
									<p className="text-xs uppercase tracking-wide text-[#1D0B5B]/60">{props.eyebrow}</p>
									<h3 className="text-xl font-medium">{props.title}</h3>
									<p className="mt-1 text-[#1D0B5B]/70">{props.body}</p>
								</div>
							</div>
							<span className="rounded-full bg-[#02A6A5]/10 px-3 py-1 text-xs leading-none border border-[#02A6A5]/25 text-[#1D0B5B]/80 whitespace-nowrap">{props.chip}</span>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function SocialLink(props: { href: string; label: string; children: React.ReactNode }) {
	return (
		<a
			href={props.href}
			target="_blank"
			rel="noreferrer"
			aria-label={props.label}
			className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white hover:bg-[#02A6A5]/10 border border-[#1D0B5B]/10 transition text-[#1D0B5B]/80"
		>
			{props.children}
		</a>
	);
}



