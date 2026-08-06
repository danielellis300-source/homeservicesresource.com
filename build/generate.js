// One-time static site generator for HomeServicesResource.com.
// Run with `node build/generate.js` from the project root. Output is plain
// static HTML/CSS/JS with no runtime dependency on this script or on Node.
const fs = require("fs");
const path = require("path");

const services = require("./services-data");
const cities = require("./cities-data");

const ROOT = path.join(__dirname, "..");
const SITE = "https://homeservicesresource.com";
const SITE_NAME = "HomeServicesResource.com";

// --- small helpers -----------------------------------------------------

function attrEscape(str) {
  return String(str).replace(/"/g, "&quot;");
}

function writeFile(relPath, content) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf8");
}

// Generic outbound-partner support. A service with a `partner` field gets
// one contextual link on its own page (via [text](url) markdown in its
// `overview`, converted below) plus one outbound link per city page on that
// service's row, replacing the usual internal link. All known partner sites
// use the same URL shape: baseUrl + citySlug + extension, with Indianapolis
// mapping to the partner's homepage. Add a new partner by adding a `partner`
// field to a service in services-data.js — no other data changes needed as
// long as the partner site follows this same per-city URL pattern.
function partnerCityUrl(partner, city) {
  if (city.slug === "indianapolis") return partner.baseUrl;
  return `${partner.baseUrl}${city.slug}${partner.extension}`;
}

const PARTNER_ANCHOR_TEMPLATES = [
  (label, city) => `${label} in ${city.name}`,
  (label, city) => `${label} services in ${city.name}`,
  (label, city) => `local ${label} in ${city.name}`,
  (label, city) => `${label} near ${city.name}`,
  (label, city) => `${label} companies serving ${city.name}`,
  (label, city) => `${city.name} ${label}`,
  (label, city) => `trusted ${label} in ${city.name}`,
  (label, city) => `${label} providers in ${city.name}`,
  (label, city) => `${city.name}-area ${label}`,
  (label, city) => `professional ${label} in ${city.name}`,
  (label, city) => `${label} pros serving ${city.name}`,
  (label, city) => `${city.name} ${label} services`,
  (label, city) => `reliable ${label} in ${city.name}`,
  (label, city) => `${label} options in ${city.name}`
];

const logoMark = `<svg class="logo-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9"/><path d="M9.5 20v-6h5v6"/></svg>`;

// --- shared layout pieces ------------------------------------------------

function head({ title, description, canonicalPath, ogType, jsonLd, extraMeta }) {
  const canonical = canonicalPath === "/" ? `${SITE}/` : `${SITE}${canonicalPath}`;
  const ldBlocks = jsonLd.map((obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`).join("\n");
  return `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${attrEscape(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="${ogType || "website"}">
<meta property="og:site_name" content="${SITE_NAME}">
<meta property="og:title" content="${attrEscape(title)}">
<meta property="og:description" content="${attrEscape(description)}">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#1c1f4c">
${extraMeta || ""}<link rel="stylesheet" href="${rel(canonicalPath, "assets/style.css")}">
<script defer src="${rel(canonicalPath, "assets/nav.js")}"></script>
${ldBlocks}`;
}

// compute relative path prefix from a page's canonical path to root assets
function rel(canonicalPath, assetPath) {
  const depth = canonicalPath.split("/").filter(Boolean).length - (canonicalPath.endsWith("/") ? 0 : 1);
  const prefix = depth > 0 ? "../".repeat(depth) : "";
  return prefix + assetPath;
}

function siteOrgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE}/`,
    description: "An independently maintained local resource guide to home services and reputable providers in the Indianapolis, Indiana metro area."
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: `${SITE}/`
  };
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url
    }))
  };
}

function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
}

function header(canonicalPath) {
  const r = (p) => rel(canonicalPath, p);
  return `<header class="site-header">
  <div class="header-inner">
    <a class="logo" href="${r("index.html")}">${logoMark}Home<span class="logo-accent">Services</span>Resource</a>
    <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>
    <nav class="main-nav" id="main-nav">
      <ul>
        <li><a href="${r("index.html")}">Home</a></li>
        <li><a href="${r("index.html")}#services">Services</a></li>
        <li><a href="${r("index.html")}#areas">Areas</a></li>
        <li><a href="${r("about.html")}">About</a></li>
      </ul>
    </nav>
  </div>
</header>`;
}

function footer(canonicalPath) {
  const r = (p) => rel(canonicalPath, p);
  const serviceLinks = services.slice(0, 8).map((s) => `<li><a href="${r("services/" + s.slug + ".html")}">${s.name}</a></li>`).join("");
  const cityLinks = cities.slice(0, 8).map((c) => `<li><a href="${r("areas/" + c.slug + ".html")}">${c.name}</a></li>`).join("");
  return `<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <h4>HomeServicesResource.com</h4>
        <p>An independent, honestly-written guide to home services in the Indianapolis metro. We're not a contractor and we don't sell services &mdash; we help homeowners understand a project before they hire someone. <a href="${r("about.html")}">Read more about this site &rarr;</a></p>
      </div>
      <div>
        <h4>Popular Services</h4>
        <ul>${serviceLinks}</ul>
      </div>
      <div>
        <h4>Popular Areas</h4>
        <ul>${cityLinks}</ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; ${new Date().getFullYear()} HomeServicesResource.com &mdash; Independent local resource guide. Not affiliated with any single contractor or service provider.
    </div>
  </div>
</footer>`;
}

function page({ canonicalPath, title, description, ogType, jsonLd, bodyHtml, bodyClass, extraMeta }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
${head({ title, description, canonicalPath, ogType, jsonLd, extraMeta })}
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ""}>
${header(canonicalPath)}
${bodyHtml}
${footer(canonicalPath)}
</body>
</html>
`;
}

function breadcrumbHtml(canonicalPath, items) {
  const r = (p) => rel(canonicalPath, p);
  const parts = items.map((it, i) => {
    if (i === items.length - 1) return `<span>${it.name}</span>`;
    return `<a href="${it.href === "/" ? r("index.html") : r(it.href)}">${it.name}</a>`;
  });
  return `<div class="container"><nav class="breadcrumb" aria-label="Breadcrumb">${parts.join(" &rsaquo; ")}</nav></div>`;
}

function faqHtml(faqs) {
  return faqs.map((f) => `<details class="faq-item"><summary>${f.q}</summary><p>${f.a}</p></details>`).join("\n");
}

function costTableHtml(costInfo) {
  const rows = costInfo.items.map((it) => `<tr><td>${it.label}</td><td class="range">${it.range}</td></tr>`).join("");
  return `<p>${costInfo.intro}</p>
<table class="cost-table">
  <thead><tr><th>Project / Size</th><th>Typical Cost</th></tr></thead>
  <tbody>${rows}</tbody>
</table>
<p class="cost-note">${costInfo.note}</p>`;
}

// --- page builders --------------------------------------------------------

function buildServicePage(svc) {
  const canonicalPath = `/services/${svc.slug}.html`;
  const title = `${svc.name} in Indianapolis, IN | Cost Guide & How to Choose | HomeServicesResource`;
  const description = svc.metaDesc;

  const overviewHtml = svc.overview.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
    (m, label, url) => `<a href="${url}" rel="noopener" target="_blank">${label}</a>`
  );

  const areaLinks = cities
    .map((c) => `<li><a href="${rel(canonicalPath, "areas/" + c.slug + ".html")}">${svc.name} in ${c.name}, IN</a></li>`)
    .join("\n");

  const jsonLd = [
    siteOrgSchema(),
    breadcrumbSchema([
      { name: "Home", url: `${SITE}/` },
      { name: "Services", url: `${SITE}/index.html#services` },
      { name: svc.name, url: `${SITE}${canonicalPath}` }
    ]),
    faqSchema(svc.faqs)
  ];

  const bodyHtml = `${breadcrumbHtml(canonicalPath, [
    { name: "Home", href: "/" },
    { name: "Services", href: "index.html#services" },
    { name: svc.name }
  ])}
<main>
  <div class="container page-head">
    <h1>${svc.name} in the Indianapolis Metro</h1>
    <p class="lede">What ${svc.name.toLowerCase()} involves, what it typically costs in the Indianapolis area, and how to choose a reputable local provider.</p>
  </div>

  <div class="container">
    <section class="section prose">
      <h2>What ${svc.name} Involves</h2>
      <p>${overviewHtml}</p>
    </section>

    <section class="section prose">
      <h2>Typical Costs in the Indianapolis Metro</h2>
      ${costTableHtml(svc.costInfo)}
    </section>

    <section class="section prose">
      <h2>How to Choose a ${svc.name} Provider</h2>
      <ul class="tips-list">
        ${svc.howToChoose.map((t) => `<li>${t}</li>`).join("\n")}
      </ul>
    </section>

    <section class="section prose">
      <h2>Frequently Asked Questions</h2>
      ${faqHtml(svc.faqs)}
    </section>

    <section class="section">
      <h2>Serving These Areas</h2>
      <p>${svc.name} providers referenced on this site typically serve homeowners throughout the Indianapolis metro, including:</p>
      <ul class="link-list">
        ${areaLinks}
      </ul>
    </section>
  </div>
</main>`;

  writeFile(`services/${svc.slug}.html`, page({ canonicalPath, title, description, ogType: "article", jsonLd, bodyHtml }));
}

function buildCityPage(city, index) {
  const canonicalPath = `/areas/${city.slug}.html`;
  const title = `Home Services in ${city.name}, IN | Local Guide & Directory | HomeServicesResource`;
  const description = `A local guide to home services in ${city.name}, Indiana: cost guides, tips for choosing a provider, and links to trusted resources for every major home project.`;

  const seasonalFaq = {
    q: `What's the best time of year to schedule exterior home projects in ${city.name}?`,
    a: `Like the rest of central Indiana, ${city.name} sees cold, freeze-prone winters and hot, humid summers, so most exterior work — painting, concrete leveling, deck building, roofing, and fencing — goes best in the late spring through early fall window when temperatures are consistently mild and rainfall is more predictable. Scheduling early in that window also tends to mean shorter wait times, since local contractors get busier as the weather warms and demand picks up across the metro.`
  };
  const cityFaqs = city.faqs.concat([seasonalFaq]);

  const serviceLinks = services
    .map((s, i) => {
      if (s.partner) {
        const template = PARTNER_ANCHOR_TEMPLATES[(index + i) % PARTNER_ANCHOR_TEMPLATES.length];
        const anchor = template(s.partner.anchorLabel, city);
        return `<li><a href="${partnerCityUrl(s.partner, city)}" rel="noopener" target="_blank">${anchor}</a><span class="external-tag">&#8599; external</span></li>`;
      }
      return `<li><a href="${rel(canonicalPath, "services/" + s.slug + ".html")}">${s.name}</a></li>`;
    })
    .join("\n");

  const jsonLd = [
    siteOrgSchema(),
    breadcrumbSchema([
      { name: "Home", url: `${SITE}/` },
      { name: "Areas", url: `${SITE}/index.html#areas` },
      { name: city.name, url: `${SITE}${canonicalPath}` }
    ]),
    faqSchema(cityFaqs)
  ];

  const bodyHtml = `${breadcrumbHtml(canonicalPath, [
    { name: "Home", href: "/" },
    { name: "Areas", href: "index.html#areas" },
    { name: city.name }
  ])}
<main>
  <div class="container page-head">
    <h1>Home Services in ${city.name}, IN</h1>
    <p class="lede">A local guide to finding reputable help for home projects in ${city.name}, Indiana (${city.county}).</p>
  </div>

  <div class="container">
    <section class="section prose">
      <h2>About ${city.name}</h2>
      <p>${city.intro}</p>
    </section>

    <section class="section">
      <h2>Services Available in ${city.name}</h2>
      <p>Below are the home services covered on this site, all relevant to homeowners in ${city.name}:</p>
      <ul class="link-list">
        ${serviceLinks}
      </ul>
    </section>

    <section class="section prose">
      <h2>What Homeowners in ${city.name} Ask</h2>
      ${faqHtml(cityFaqs)}
    </section>
  </div>
</main>`;

  writeFile(`areas/${city.slug}.html`, page({ canonicalPath, title, description, ogType: "article", jsonLd, bodyHtml }));
}

function buildHomepage() {
  const canonicalPath = "/";
  const title = "HomeServicesResource.com | Indianapolis Home Services Guide & Directory";
  const description = `An independent guide to home services in the Indianapolis, IN metro area — cost guides, tips for choosing a provider, and local resources for ${services.length} common home projects across ${cities.length} cities.`;

  const serviceCards = services
    .map((s) => `<a class="card" href="${rel(canonicalPath, "services/" + s.slug + ".html")}"><div class="card-title">${s.name}</div><div class="card-sub">Cost guide &amp; how to choose &rarr;</div></a>`)
    .join("\n");

  const cityCards = cities
    .map((c) => `<a class="card" href="${rel(canonicalPath, "areas/" + c.slug + ".html")}"><div class="card-title">${c.name}, IN</div><div class="card-sub">${c.county} &middot; local guide &rarr;</div></a>`)
    .join("\n");

  const jsonLd = [siteOrgSchema(), websiteSchema()];

  const bodyHtml = `<section class="hero">
  <div class="container">
    <h1>Your Independent Guide to Home Services in the <span class="accent">Indianapolis Metro</span></h1>
    <p>HomeServicesResource.com helps Indianapolis-area homeowners understand a home project before they hire anyone &mdash; typical costs, what to expect, and how to vet a provider. We're a resource site, not a business: we don't sell services or take jobs ourselves.</p>
  </div>
</section>
<main>
  <div class="container">
    <section class="section prose" style="border-top:none;">
      <p>Whether you're planning a kitchen-adjacent deck build, dealing with a sunken driveway after another Indiana winter, or just trying to figure out a fair price for gutter cleaning, this site is built to answer the questions homeowners actually have: what does this cost around Indianapolis, what does the work actually involve, and what should I ask before hiring someone. Browse by service to get a full cost and planning guide, or browse by city to see what's relevant where you live.</p>
    </section>

    <section class="section" id="services">
      <h2>Browse by Service</h2>
      <p>Cost guides and provider-selection tips for ${services.length} common home projects in the Indianapolis metro.</p>
      <div class="grid">
        ${serviceCards}
      </div>
    </section>

    <section class="section" id="areas">
      <h2>Browse by City</h2>
      <p>Local guides for 14 cities and towns across the Indianapolis metro area.</p>
      <div class="grid">
        ${cityCards}
      </div>
    </section>
  </div>
</main>`;

  const extraMeta = `<meta name="msvalidate.01" content="808074A1FFBD0E552399BF038F7929D9">\n`;
  writeFile("index.html", page({ canonicalPath, title, description, ogType: "website", jsonLd, bodyHtml, extraMeta }));
}

function buildAboutPage() {
  const canonicalPath = "/about.html";
  const title = "About HomeServicesResource.com | Independent Indianapolis Home Services Guide";
  const description = "HomeServicesResource.com is an independently maintained guide to home services in the Indianapolis metro. Learn how the site is put together and why it exists.";

  const jsonLd = [
    siteOrgSchema(),
    breadcrumbSchema([
      { name: "Home", url: `${SITE}/` },
      { name: "About", url: `${SITE}${canonicalPath}` }
    ])
  ];

  const bodyHtml = `${breadcrumbHtml(canonicalPath, [{ name: "Home", href: "/" }, { name: "About" }])}
<main>
  <div class="container page-head">
    <span class="about-badge">Independent &middot; Non-commercial</span>
    <h1>About This Site</h1>
    <p class="lede">HomeServicesResource.com is an independently maintained resource for homeowners in the Indianapolis metro area &mdash; not a contractor, and not a lead-generation service.</p>
  </div>

  <div class="container prose section" style="border-top:none;">
    <h2>What This Site Is</h2>
    <p>HomeServicesResource.com exists to answer a simple set of questions that come up before almost any home project: what does this typically cost around Indianapolis, what does the work actually involve, and what should a homeowner ask before hiring someone. We publish plain-language guides covering ${services.length} common home services and ${cities.length} cities and towns across the metro, and we keep the writing informational rather than promotional.</p>

    <h2>What This Site Is Not</h2>
    <p>We're not a home services company. We don't perform any of the work described on this site, we don't take job requests, and we don't display a phone number as though we're the ones showing up at your door. We're also not a directory that accepts paid listings from every contractor who wants to appear on the page &mdash; the goal is to be a useful, honest reference first.</p>

    <h2>How the Cost Guides Are Put Together</h2>
    <p>The cost ranges on this site reflect typical pricing patterns for each type of project in the Indianapolis metro, based on general industry pricing norms for the region. They're meant as a starting point for budgeting and comparing quotes, not a quote itself &mdash; actual pricing depends on the specifics of your property, the materials or scope you choose, and the provider you hire. We always recommend getting at least two or three written quotes before committing to a project.</p>

    <h2>A Note on Links</h2>
    <p>Most of the links on this site point to other pages within HomeServicesResource.com, since dense internal linking between our service guides and city guides is how we help homeowners find related information. For a handful of services &mdash; where we reference outside specialist providers &mdash; we link to outside businesses we think are relevant to what a reader is looking for. Those links are clearly written in context, marked when they lead off-site, and are not advertisements.</p>

    <h2>Corrections and Updates</h2>
    <p>Home service pricing and provider availability change over time. If you notice something on this site that looks outdated or inaccurate, we'd rather fix it than leave it wrong &mdash; this is meant to be a genuinely useful reference for Indianapolis-area homeowners, not a thin placeholder for search engines.</p>
  </div>
</main>`;

  writeFile("about.html", page({ canonicalPath, title, description, ogType: "website", jsonLd, bodyHtml }));
}

function buildSitemap() {
  const urls = [];
  urls.push({ loc: `${SITE}/`, priority: "1.0", changefreq: "monthly" });
  urls.push({ loc: `${SITE}/about.html`, priority: "0.5", changefreq: "yearly" });
  services.forEach((s) => urls.push({ loc: `${SITE}/services/${s.slug}.html`, priority: "0.9", changefreq: "monthly" }));
  cities.forEach((c) => urls.push({ loc: `${SITE}/areas/${c.slug}.html`, priority: "0.8", changefreq: "monthly" }));

  const body = urls
    .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  writeFile("sitemap.xml", xml);
}

function buildRobots() {
  const txt = `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`;
  writeFile("robots.txt", txt);
}

function buildNoJekyll() {
  writeFile(".nojekyll", "");
}

// --- run -------------------------------------------------------------

buildHomepage();
buildAboutPage();
services.forEach(buildServicePage);
cities.forEach(buildCityPage);
buildSitemap();
buildRobots();
buildNoJekyll();

console.log(`Generated ${2 + services.length + cities.length} HTML pages, sitemap.xml, robots.txt.`);
