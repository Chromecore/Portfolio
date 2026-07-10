const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str)
{
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

export async function onRequestPost({ request, env })
{
    const origin = new URL(request.url).origin;
    const redirect = (path) => Response.redirect(`${origin}${path}`, 303);

    const formData = await request.formData();
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();
    const turnstileToken = formData.get('cf-turnstile-response');

    if (!name || !message || !EMAIL_RE.test(email) || !turnstileToken)
    {
        return redirect('/error#contact');
    }

    const verifyBody = new FormData();
    verifyBody.append('secret', env.TURNSTILE_SECRET_KEY);
    verifyBody.append('response', turnstileToken);
    const ip = request.headers.get('CF-Connecting-IP');
    if (ip) verifyBody.append('remoteip', ip);

    const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: verifyBody,
    });
    const verifyResult = await verifyResponse.json();

    if (!verifyResult.success)
    {
        return redirect('/error#contact');
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: 'Portfolio Contact <contact@tayinwallace.dev>',
            to: 'tayin.wallace@outlook.com',
            reply_to: email,
            subject: `New message from ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #111;">New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap; background: #f4f4f4; padding: 12px; border-radius: 8px;">${escapeHtml(message)}</p>
                </div>
            `,
        }),
    });

    if (!emailResponse.ok)
    {
        return redirect('/error#contact');
    }

    return redirect('/success#contact');
}
