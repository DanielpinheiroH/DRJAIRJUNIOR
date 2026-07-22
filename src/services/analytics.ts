import type { AnalyticsEvent } from '../types';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  parameters: Record<string, string | number | boolean | undefined> = {},
) {
  const payload = { event, page: window.location.pathname, ...parameters };
  window.dataLayer?.push(payload);
}
