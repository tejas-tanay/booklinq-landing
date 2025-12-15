"use client";

import React from "react";

type Item = { q: string; a: string };

const ITEMS: Item[] = [
	{
		q: "What is Booklinq, exactly?",
		a: "Booklinq is your link-in-bio booking engine. Share one link anywhere (Instagram, WhatsApp, Google Maps, QR) and capture bookings directly—without aggregator commissions.",
	},
	{
		q: "Who is it for first?",
		a: "Hospitality owners: vacation rentals, homestays, boutique hotels, hostels. Ticketing for events arrives next.",
	},
	{
		q: "Why not use aggregators?",
		a: "They’re great for discovery, but you pay 15–20% and lose guest data. Booklinq helps you convert your audience directly and keep both the margin and the relationship.",
	},
	{
		q: "Do I own the guest data?",
		a: "Yes. Names, emails, phone numbers, stay details—yours to export and use for remarketing, loyalty, and service.",
	},
	{
		q: "How do payments work?",
		a: "You connect a payment gateway in your country and get paid out to your account. We don’t hold your funds. (Country options vary; we’ll guide you during onboarding.)",
	},
	{
		q: "What’s pricing?",
		a: "Simple monthly plan. No per-booking commission from us. (The calculator shows how fast that beats aggregator fees.)",
	},
	{
		q: "Can I run this alongside OTAs?",
		a: "Yes. Keep OTAs for discovery if you wish—use Booklinq for repeat and direct traffic (bio links, WhatsApp replies, QR at property, Google Maps website link).",
	},
	{
		q: "Can I manage multiple properties or rooms?",
		a: "Yes. Create property profiles, room types, availability, and base rules; guests can book in a few taps.",
	},
	{
		q: "Refunds and cancellations?",
		a: "You set policies. Booklinq enforces them at checkout and in the confirmation emails shown to guests.",
	},
	{
		q: "When does it launch?",
		a: "Hospitality: November 2025. Ticketing: December 2025. Join the waitlist to get early access.",
	},
];

export default function Faq() {
	return (
		<section id="faq" className="mx-auto max-w-3xl px-6 py-16">
			<div className="mb-6 text-center">
				<h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
				<p className="mt-2 text-[#1D0B5B]/70">Quick answers to common questions.</p>
			</div>
			<div className="divide-y divide-[#1D0B5B]/10 rounded-xl border border-[#1D0B5B]/10 bg-white/70 backdrop-blur">
				{ITEMS.map((item, idx) => (
					<details key={idx} className="group px-4 md:px-6 open:bg-[#02A6A5]/5">
						<summary className="cursor-pointer list-none py-4 flex items-center justify-between">
							<span className="text-sm md:text-base font-medium">{item.q}</span>
							<span className="ml-3 rounded-md bg-white text-[#02A6A5] w-6 h-6 grid place-items-center border border-[#1D0B5B]/10">
								<span className="transition group-open:hidden">+</span>
								<span className="transition hidden group-open:inline">–</span>
							</span>
						</summary>
						<div className="pb-4 -mt-1">
							<p className="text-sm text-[#1D0B5B]/70 md:text-base">{item.a}</p>
						</div>
					</details>
				))}
			</div>

			{/* tiny CTA */}
			<div className="mt-6 text-center text-sm text-[#1D0B5B]/80">
				Still have a question?{" "}
				<a href="mailto:hello@mybooklinq.com" className="underline hover:text-[#02A6A5]">
					Email us
				</a>{" "}
				or{" "}
				<a href="#hero" className="underline hover:text-[#02A6A5]">
					join the waitlist
				</a>
				.
			</div>
		</section>
	);
}


