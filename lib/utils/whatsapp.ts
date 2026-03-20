export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254798900032";

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = message ?? "Hello, I'd like to inquire about your construction services.";
  return `${base}?text=${encodeURIComponent(text)}`;
}
