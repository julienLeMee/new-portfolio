// app/api/verifyRecaptcha/route.js

import { NextResponse } from 'next/server';

export async function POST(req) {
  const { recaptchaResponse } = await req.json();

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: recaptchaResponse,
    }),
  });

  const data = await response.json();

  if (data.success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, errorCodes: data['error-codes'] }, { status: 400 });
  }
}
