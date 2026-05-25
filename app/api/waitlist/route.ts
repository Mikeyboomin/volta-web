import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.toLowerCase().trim()

    // Save to Supabase
    const { error: dbError } = await supabase
      .from('waitlist_signups')
      .insert({ email: normalizedEmail })

    if (dbError) {
      if (dbError.code === '23505') {
        // Unique constraint - already signed up
        return NextResponse.json(
          { error: "You're already on the waitlist. We'll be in touch soon." },
          { status: 409 }
        )
      }
      console.error('Supabase error:', dbError)
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 500 }
      )
    }

    // Send confirmation email via Resend
    await resend.emails.send({
      from: 'Volta Finance <hello@voltafinance.tech>',
      to: normalizedEmail,
      subject: "You're on the Volta waitlist",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body style="margin: 0; padding: 0; background-color: #09090F; font-family: -apple-system, sans-serif;">
            <div style="max-width: 560px; margin: 0 auto; padding: 48px 24px;">
              
              <div style="margin-bottom: 32px;">
                <div style="display: inline-flex; align-items: center; gap: 10px;">
                  <div style="width: 32px; height: 32px; background: #5534FC; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-weight: 900; font-size: 18px;">V</span>
                  </div>
                  <span style="color: #F0F0FA; font-weight: 700; font-size: 18px;">Volta Finance</span>
                </div>
              </div>

              <h1 style="color: #F0F0FA; font-size: 28px; font-weight: 900; margin: 0 0 16px 0; line-height: 1.2;">
                You're on the waitlist.
              </h1>
              
              <p style="color: #9999BB; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                Thanks for signing up. You'll be among the first to access Volta when we launch.
              </p>

              <div style="background: #111118; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 24px; margin: 0 0 32px 0;">
                <p style="color: #9999BB; font-size: 14px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">What you're waiting for</p>
                <p style="color: #F0F0FA; font-size: 16px; font-weight: 700; margin: 0; line-height: 1.4;">
                  Spend whatever you hold, as whatever you need.
                </p>
                <p style="color: #9999BB; font-size: 14px; margin: 12px 0 0 0; line-height: 1.6;">
                  Hold NGN, USD, and USDC in one app. Spend from any balance anywhere with one card. No P2P. No friction.
                </p>
              </div>

              <p style="color: #55557A; font-size: 14px; margin: 0;">
                Follow our journey on 
                <a href="https://x.com/voltafinance" style="color: #5534FC; text-decoration: none;">X (Twitter)</a>
                for updates.
              </p>

              <div style="margin-top: 48px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.07);">
                <p style="color: #55557A; font-size: 12px; margin: 0;">
                  © 2026 Volta Finance. Abuja, Nigeria.<br>
                  You received this because you signed up at voltafinance.tech
                </p>
              </div>

            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json(
      { message: "You're on the waitlist. Check your email for confirmation." },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
