export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  const { name, email, projectType, budget, message } = req.body || {};

  if (!name || !email || !projectType || !message) {
    res.status(400).json({ error: "Please fill out the required fields." });
    return;
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!resendApiKey || !contactEmail) {
    res.status(503).json({
      error: "The contact form is not configured yet. Add RESEND_API_KEY and CONTACT_EMAIL in Vercel."
    });
    return;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [contactEmail],
        reply_to: email,
        subject: `New portfolio inquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Project type: ${projectType}`,
          `Budget: ${budget || "Not provided"}`,
          "",
          "Message:",
          message
        ].join("\n")
      })
    });

    if (!response.ok) {
      const details = await response.text();
      throw new Error(details || "Email delivery failed.");
    }

    res.status(200).json({ message: "Thanks. Your message has been delivered." });
  } catch (error) {
    res.status(500).json({
      error: "Your message could not be sent right now. Please try again in a moment."
    });
  }
}
