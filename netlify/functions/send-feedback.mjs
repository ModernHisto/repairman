// netlify/functions/send-feedback.mjs
import type { Context } from "@netlify/functions";

// Получаем URL сайта из переменных окружения для CORS
const ALLOWED_ORIGIN = process.env.SITE_URL?.replace(/\/$/, "") ?? "";

// CORS-заголовки
const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default async (req: Request, context: Context) => {
  // Обработка preflight-запроса
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // Разрешаем только POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const { name, phone, description } = await req.json();

    // Валидация на сервере
    if (!name || !phone || !description) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Формируем письмо
    const emailBody = {
      from: "onboarding@resend.dev", // Или ваш подтвержденный домен в Resend
      to: process.env.NOTIFICATION_EMAIL, // Ваш Gmail
      subject: `🔔 Новая заявка с сайта от ${name}`,
      text: `Имя: ${name}\nТелефон: ${phone}\nОписание: ${description}`,
      html: `<h2>Новая заявка</h2><p><strong>Имя:</strong> ${name}</p><p><strong>Телефон:</strong> ${phone}</p><p><strong>Описание:</strong> ${description.replace(/\n/g, "<br>")}</p>`,
    };

    // Отправляем через Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailBody),
    });

    const resendResult = await resendResponse.json();

    if (!resendResponse.ok) {
      throw new Error(resendResult.message || "Resend API error");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

export const config = {
  path: "/api/send-feedback", // Прямой путь к функции
};