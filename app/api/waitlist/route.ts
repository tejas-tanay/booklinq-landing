export async function POST(req: Request) {
	try {
		const { email, businessType, country, source } = await req.json();
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return Response.json({ error: "Invalid email" }, { status: 400 });
		}
		const endpoint = process.env.GOOGLE_APPS_SCRIPT_WEB_APP_URL;
		if (!endpoint) {
			return Response.json(
				{ error: "Missing GOOGLE_APPS_SCRIPT_WEB_APP_URL env var" },
				{ status: 500 },
			);
		}
		const payload = {
			email,
			businessType: businessType ?? "",
			country: country ?? "",
			source: source ?? "landing",
			timestamp: new Date().toISOString(),
		};
		const upstream = await fetch(endpoint, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
			// Allow 5s timeout via AbortSignal if desired (left default)
		});
		if (!upstream.ok) {
			const text = await upstream.text();
			return Response.json({ error: "Upstream error", detail: text?.slice(0, 500) }, { status: 502 });
		}
		return Response.json({ ok: true });
	} catch (e) {
		return Response.json({ error: "Bad request" }, { status: 400 });
	}
}


