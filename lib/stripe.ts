import { SITE, TIERS } from './constants';

export function getStripeUrl(tierName: string): string {
  const tier = TIERS.find((t) => t.name === tierName);
  if (!tier) return `mailto:${SITE.email}`;

  const envUrl = process.env[tier.stripeEnvKey];

  if (envUrl) return envUrl;

  return `mailto:${SITE.email}?subject=Interested%20in%20${encodeURIComponent(tier.name)}%20plan`;
}
