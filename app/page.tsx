"use client";

import { motion } from "framer-motion";
import {
	Button,
} from "@/components/ui/button";
import Logo from "@/components/Logo";
import {
	ArrowRight,
} from "lucide-react";

export default function Page() {
	const fadeUp = {
		hidden: { opacity: 0, y: 10 },
		show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
	};

	return (
		<div className="min-h-screen bg-[#fbfcff] text-[#1D0B5B]">
			<header className="sticky top-0 z-20 border-b border-[#1D0B5B]/10 bg-white/80 backdrop-blur">
				<div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
					<a href="#top" className="inline-flex items-center gap-2">
						<Logo size="sm" showWordmark />
					</a>
					<nav className="hidden sm:flex items-center gap-6 text-sm text-[#1D0B5B]/70">
						<a className="hover:text-[#02A6A5] transition" href="#reality">Why</a>
						<a className="hover:text-[#02A6A5] transition" href="#how">How</a>
						<a className="hover:text-[#02A6A5] transition" href="#contrast">Compare</a>
						<a className="hover:text-[#02A6A5] transition" href="#final">Create</a>
					</nav>
				</div>
			</header>

			<main id="top">
				{/* SECTION 1 — HERO */}
				<section className="mx-auto max-w-5xl px-6 pt-20 sm:pt-28 pb-16">
					<motion.div variants={fadeUp} initial="hidden" animate="show">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-xl">
							Your booking link.
							<br />
							Your guests.
							<br />
							Your terms.
						</h1>
						<p className="mt-6 max-w-2xl text-base sm:text-lg text-[#1D0B5B]/70 leading-relaxed">
							A direct booking page for independent hotels and short-stay hosts —
							without commissions or lock-in.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
							<Button asChild size="lg" data-cta="create-booking-link">
								<a href="mailto:hello@mybooklinq.com?subject=Booklinq%20%E2%80%94%20Create%20my%20booking%20link">
									Create your booking link <ArrowRight className="h-4 w-4" />
								</a>
							</Button>
							<a
								href="#how"
								className="text-sm font-medium text-[#1D0B5B]/80 hover:text-[#02A6A5] transition underline underline-offset-4"
								data-cta="see-how-it-works"
							>
								See how it works
							</a>
						</div>
					</motion.div>
				</section>

				{/* SECTION 2 — REALITY CHECK */}
				<section id="reality" className="mx-auto max-w-5xl px-6 py-16">
					<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
						<div className="max-w-2xl space-y-5 text-[#1D0B5B]/80 leading-relaxed">
							<p>Most guests already find you.</p>
							<p>
								They see your property on Google Maps, Instagram, or through a WhatsApp message.
							</p>
							<p>
								But when it comes time to book, that moment is usually handed over to a platform —
								along with a commission for traffic you already earned.
							</p>
							<p className="pt-2 text-[#1D0B5B]">Booklinq exists to fix that one moment.</p>
						</div>
					</motion.div>
				</section>

				{/* SECTION 3 — THE PRINCIPLE */}
				<section className="mx-auto max-w-5xl px-6 py-16">
					<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
						<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
							Direct booking shouldn’t feel complicated.
						</h2>
						<div className="mt-6 max-w-2xl space-y-3 text-[#1D0B5B]/80 leading-relaxed">
							<p>You don’t need a full website.</p>
							<p>You don’t need a marketplace.</p>
							<p>You don’t need to change how you operate.</p>
							<p className="pt-2 text-[#1D0B5B]">You just need a place where guests can book you — directly.</p>
						</div>
					</motion.div>
				</section>

				{/* SECTION 4 — WHAT BOOKLINQ IS */}
				<section id="how" className="mx-auto max-w-5xl px-6 py-16">
					<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
						<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How Booklinq fits in</h2>
						<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
							<div className="max-w-sm">
								<h3 className="text-base font-medium">Create</h3>
								<p className="mt-2 text-[#1D0B5B]/75 leading-relaxed">
									Set up your property once — pricing, availability, and policies.
								</p>
							</div>
							<div className="max-w-sm">
								<h3 className="text-base font-medium">Share</h3>
								<p className="mt-2 text-[#1D0B5B]/75 leading-relaxed">
									Use your booking link anywhere guests already find you.
								</p>
							</div>
							<div className="max-w-sm">
								<h3 className="text-base font-medium">Accept</h3>
								<p className="mt-2 text-[#1D0B5B]/75 leading-relaxed">
									Receive bookings and payments directly, on your terms.
								</p>
							</div>
						</div>
					</motion.div>
				</section>

				{/* SECTION 5 — CONTRAST */}
				<section id="contrast" className="mx-auto max-w-5xl px-6 py-16">
					<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
						<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
							A simpler alternative to aggregators
						</h2>
						<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
							<div className="rounded-2xl border border-[#1D0B5B]/10 bg-white p-8">
								<h3 className="text-base font-medium">With aggregators</h3>
								<div className="mt-4 space-y-2 text-[#1D0B5B]/75 leading-relaxed">
									<p>Commission on every booking</p>
									<p>Guest relationship owned by the platform</p>
									<p>Price-driven competition</p>
									<p>Limited control over policies</p>
								</div>
							</div>
							<div className="rounded-2xl border border-[#1D0B5B]/10 bg-white p-8">
								<h3 className="text-base font-medium">With Booklinq</h3>
								<div className="mt-4 space-y-2 text-[#1D0B5B]/75 leading-relaxed">
									<p>Simple, predictable pricing</p>
									<p>Guest relationship stays with you</p>
									<p>Your brand stays front and center</p>
									<p>Full control over rules and cancellations</p>
								</div>
							</div>
						</div>
					</motion.div>
				</section>

				{/* SECTION 6 — CONTROL & TRUST */}
				<section className="mx-auto max-w-5xl px-6 py-16">
					<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
						<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">You stay in control</h2>
						<div className="mt-6 max-w-2xl space-y-3 text-[#1D0B5B]/80 leading-relaxed">
							<p>You decide your pricing.</p>
							<p>You set your cancellation rules.</p>
							<p>You choose how guests check in.</p>
							<p>Payments go directly to your bank.</p>
						</div>
					</motion.div>
				</section>

				{/* SECTION 7 — BUILT FOR REAL HOSTS */}
				<section className="mx-auto max-w-5xl px-6 py-16">
					<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
						<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Built for independent hosts</h2>
						<div className="mt-6 max-w-2xl space-y-5 text-[#1D0B5B]/80 leading-relaxed">
							<p>
								Booklinq is designed for independent hotels, homestays, and short-stay rentals —
								not large chains or marketplaces.
							</p>
							<p>
								Whether you manage one property or a few,
								it fits into how you already work.
							</p>
						</div>
					</motion.div>
				</section>

				{/* SECTION 8 — NO LOCK-IN */}
				<section className="mx-auto max-w-5xl px-6 py-16">
					<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
						<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">No lock-in</h2>
						<div className="mt-6 max-w-2xl space-y-2 text-[#1D0B5B]/80 leading-relaxed">
							<p>No long-term contracts.</p>
							<p>No exclusivity.</p>
							<p>Edit or remove your listing anytime.</p>
						</div>
					</motion.div>
				</section>

				{/* SECTION 9 — FINAL CTA */}
				<section id="final" className="mx-auto max-w-5xl px-6 pt-16 pb-24">
					<motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
						<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
							Set up once.
							<br />
							Start accepting direct bookings.
						</h2>
						<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
							<Button asChild size="lg" data-cta="final-create-booking-link">
								<a href="mailto:hello@mybooklinq.com?subject=Booklinq%20%E2%80%94%20Create%20my%20booking%20link">
									Create your booking link <ArrowRight className="h-4 w-4" />
								</a>
							</Button>
							<p className="text-sm text-[#1D0B5B]/70">Takes just a few minutes.</p>
						</div>
					</motion.div>
				</section>
			</main>

			<footer className="border-t border-[#1D0B5B]/10 bg-white">
				<div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
					<div className="flex items-center gap-3">
						<Logo size="sm" showWordmark />
					</div>
					<div className="text-sm text-[#1D0B5B]/70">© 2025 Booklinq. All rights reserved.</div>
				</div>
			</footer>
		</div>
	);
}



