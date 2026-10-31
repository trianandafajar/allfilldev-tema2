import { siteConfig } from "@/config/site";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function serializeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
