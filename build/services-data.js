// Service data for HomeServicesResource.com
module.exports = [
  {
    slug: "dumpster-rental",
    name: "Dumpster Rental",
    metaDesc: "How dumpster rental works in the Indianapolis metro, typical sizes and costs, and how to pick the right size for your cleanout or renovation project.",
    partner: { baseUrl: "https://dumpsterrentalindianapolis.org/", extension: "", anchorLabel: "dumpster rental" },
    overview: `Renting a dumpster is usually the fastest way to deal with the debris from a home renovation, garage cleanout, roofing job, or move. A rental company drops an open-top container in your driveway or another approved spot, you fill it over an agreed rental period (typically 7 to 10 days), and the company hauls it away and disposes of the contents. The main decision homeowners face is size: dumpsters are generally rented in 10, 20, 30, and 40 cubic-yard containers, with larger sizes suited to whole-home cleanouts or major renovation debris and smaller sizes fitting a single room remodel or yard cleanup. Most companies price rentals with a flat rate that includes delivery, pickup, and a set weight allowance, with additional per-ton fees if you go over. Some materials, like certain construction debris, tires, or hazardous waste, may require special handling or aren't accepted at all, so it's worth confirming what you're allowed to put in the container before you start filling it. If you'd rather skip sizing a container yourself, a local outfit like [Dumpster Rental Indianapolis](https://dumpsterrentalindianapolis.org/) can help you pick the right size and handle delivery and pickup on a schedule that fits your project.`,
    costInfo: {
      intro: "Dumpster rental pricing in the Indianapolis metro depends mainly on container size and rental duration, with most companies quoting an all-in flat rate:",
      items: [
        { label: "10-yard dumpster (small cleanout, single room)", range: "$300–$380" },
        { label: "20-yard dumpster (medium renovation, garage cleanout)", range: "$375–$475" },
        { label: "30-yard dumpster (major renovation, large cleanout)", range: "$425–$550" },
        { label: "40-yard dumpster (whole-home projects, new construction)", range: "$475–$650" }
      ],
      note: "Prices vary by hauler, rental length, and disposal weight; ask about overage fees before booking."
    },
    howToChoose: [
      "Estimate your debris volume honestly — it's usually cheaper to size up slightly than to pay for a second rental.",
      "Ask what's included in the base price (delivery, pickup, weight allowance) and what triggers extra fees.",
      "Confirm what materials are and aren't accepted, especially for renovation or yard debris.",
      "Check whether you'll need a permit to place a dumpster on the street versus your driveway.",
      "Ask about typical delivery windows, especially if you're working around a tight renovation schedule."
    ],
    faqs: [
      { q: "What size dumpster do I need for a garage cleanout?", a: "Most single-car garage cleanouts fit comfortably in a 10- or 15-yard dumpster, while larger or multi-car garages with heavier debris often need a 20-yard container." },
      { q: "Do I need a permit to have a dumpster placed in my driveway?", a: "Placing a dumpster entirely on your own driveway typically doesn't require a permit, but placing one on the street or public right-of-way usually does. Check with your city or town before booking if you don't have driveway space." },
      { q: "How long can I keep a rented dumpster?", a: "Most rental periods run 7 to 10 days by default, with extensions available for an additional daily fee. Confirm the included rental window before you book." },
      { q: "What items are usually not allowed in a rental dumpster?", a: "Most companies restrict hazardous materials, tires, batteries, paint, and certain electronics. Some also limit or charge extra for heavy materials like concrete, dirt, or shingles, so ask before loading them in." }
    ]
  },
  {
    slug: "epoxy-flooring",
    name: "Epoxy Flooring",
    metaDesc: "What epoxy floor coating involves, typical garage and basement flooring costs in the Indianapolis area, and tips for choosing an installer.",
    overview: `Epoxy flooring is a durable resin-based coating applied over concrete, most commonly in garages, basements, and workshops, though some homeowners also use it on patios or utility rooms. The appeal is straightforward: a properly installed epoxy floor resists stains, chemicals, and abrasion far better than bare or painted concrete, and it can dramatically improve the look of a space with solid colors, flake systems, or metallic finishes. Installation involves several steps that matter a lot for long-term durability — the concrete needs to be properly cleaned, ground or etched to help the coating adhere, and any cracks or moisture issues addressed before the epoxy goes down. Skipping surface prep is the most common reason DIY or budget epoxy jobs fail early, with peeling or bubbling showing up within a year or two. Cure times vary by product, but most floors need at least 24 to 72 hours before light foot traffic and several days before parking a vehicle on them.`,
    costInfo: {
      intro: "Professionally installed epoxy flooring is typically priced per square foot, including surface prep and materials:",
      items: [
        { label: "Basic single-color epoxy coating", range: "$3–$5 per sq ft" },
        { label: "Flake or decorative epoxy system", range: "$5–$7 per sq ft" },
        { label: "Typical 2-car garage (approx. 400–500 sq ft)", range: "$1,500–$3,500 total" }
      ],
      note: "Metallic or high-build industrial systems run higher; extensive concrete repair before coating adds to the total."
    },
    howToChoose: [
      "Ask specifically how the installer preps the concrete — grinding is generally more durable than acid etching alone.",
      "Request details on the coating system used (number of coats, topcoat type) rather than just a total price.",
      "Ask about warranty coverage for peeling, bubbling, or hot-tire lifting.",
      "Check reviews or photos of past garage or basement projects, not just general contracting work.",
      "Confirm the cure and return-to-service timeline so you can plan around not using the space."
    ],
    faqs: [
      { q: "How long does an epoxy garage floor last?", a: "A properly installed epoxy floor with good surface prep typically lasts 10 to 20 years in a residential garage before it needs recoating, though heavy use or poor prep can shorten that significantly." },
      { q: "Can epoxy be applied over a cracked or damaged concrete floor?", a: "Minor cracks can usually be filled and coated over, but significant cracking or moisture issues should be addressed first, since epoxy won't fix underlying structural or moisture problems and may fail faster over them." },
      { q: "How long do I need to stay off a new epoxy floor?", a: "Most floors need 24 to 48 hours before light foot traffic and around 5 to 7 days before parking vehicles, though this varies by product, so confirm the specific timeline with your installer." },
      { q: "Is DIY epoxy a good alternative to hiring a professional?", a: "DIY kits can work for low-traffic areas, but professional-grade coatings and proper concrete grinding generally hold up much longer than store-bought kits, especially in a garage that sees regular vehicle traffic." }
    ]
  },
  {
    slug: "concrete-leveling",
    name: "Concrete Leveling",
    metaDesc: "How concrete leveling (mudjacking and polyjacking) fixes sunken driveways, walkways, and patios in the Indianapolis metro, plus typical costs.",
    overview: `Concrete leveling repairs sunken or uneven slabs — driveways, walkways, patios, and garage floors — without the cost and mess of full replacement. Indiana's freeze-thaw cycles and clay-heavy soil make settling a common problem, especially on older concrete or slabs poured without adequate soil compaction. There are two main methods: traditional mudjacking, which pumps a cement-based slurry beneath the slab to raise it, and polyurethane foam leveling (sometimes called polyjacking), which injects a lightweight expanding foam through small holes to lift the concrete. Foam leveling is generally faster to cure and lighter weight, which can matter on slabs with marginal soil support, while mudjacking is often less expensive for larger areas. Both methods are typically much cheaper and faster than tearing out and repouring a slab, and most repairs are completed in a matter of hours with the surface ready for light use the same day.`,
    costInfo: {
      intro: "Concrete leveling is usually priced by the square foot or per project, and costs less than full slab replacement:",
      items: [
        { label: "Mudjacking (traditional slurry method)", range: "$3–$6 per sq ft" },
        { label: "Polyurethane foam leveling", range: "$5–$25 per sq ft" },
        { label: "Typical driveway or walkway section repair", range: "$500–$1,500" }
      ],
      note: "Larger slabs, significant height differences, or difficult access can push costs toward the higher end."
    },
    howToChoose: [
      "Ask whether the company offers both mudjacking and foam leveling, and why they'd recommend one for your situation.",
      "Get a clear explanation of why the slab settled in the first place — leveling won't fix an ongoing drainage or soil issue.",
      "Ask about expected lifespan of the repair versus full replacement.",
      "Check how quickly the surface can be used after the work is done.",
      "Get a written quote that specifies the exact area being leveled."
    ],
    faqs: [
      { q: "Is concrete leveling as durable as replacing the slab?", a: "A well-executed leveling repair can last many years, but it doesn't fix cracked or badly deteriorated concrete — it's best suited to slabs that are structurally sound but have settled unevenly." },
      { q: "Why does concrete sink in the Indianapolis area?", a: "Freeze-thaw cycles, clay-heavy soil, poor original compaction, and water erosion under the slab are all common causes of settling in central Indiana." },
      { q: "How long does concrete leveling take?", a: "Most residential leveling jobs, like a driveway or walkway section, are completed in a few hours to a single day, with the surface typically usable again shortly after." },
      { q: "Can concrete leveling fix a sloped driveway causing drainage issues toward my house?", a: "In many cases yes, since leveling can adjust the slab's pitch, but severe grading problems may need additional drainage work alongside the leveling itself." }
    ]
  },
  {
    slug: "deck-building",
    name: "Deck Building",
    metaDesc: "What to expect when building a deck in the Indianapolis area, typical material and labor costs, and how to choose a qualified deck builder.",
    overview: `A well-built deck extends usable living space outdoors and is one of the more visible, high-impact home improvement projects a homeowner can take on. The process usually starts with design decisions — size, layout, railing style, and whether it will be attached to the house or freestanding — followed by choosing a decking material. Pressure-treated lumber remains the most common and affordable option, while composite decking (made from wood fiber and recycled plastic) costs more upfront but requires far less maintenance over time, since it doesn't need regular staining or sealing. Structural elements like footings, ledger board attachment, and railing height are all governed by local building codes, and most municipalities in the Indianapolis metro require a permit and inspection for a new deck, particularly if it's attached to the house or elevated more than a certain height. Indiana's winters also mean footings typically need to be set below the frost line for long-term stability.`,
    costInfo: {
      intro: "Deck costs vary significantly by material and size, and are usually quoted per square foot installed:",
      items: [
        { label: "Pressure-treated wood deck", range: "$25–$40 per sq ft" },
        { label: "Composite decking", range: "$40–$65 per sq ft" },
        { label: "Typical 200–400 sq ft deck project", range: "$8,000–$20,000+" }
      ],
      note: "Multi-level decks, built-in seating, pergolas, or premium railing systems add to the total cost."
    },
    howToChoose: [
      "Ask whether the builder pulls the required permit and schedules the inspection as part of the project.",
      "Compare quotes on the same material and specs — a lower bid using thinner joists or fewer footings isn't a fair comparison.",
      "Ask how footings are set relative to the frost line for long-term stability.",
      "Request references or photos from decks built at least a few years ago to see how the material has held up.",
      "Clarify what warranty covers labor versus material defects."
    ],
    faqs: [
      { q: "Do I need a permit to build a deck in the Indianapolis metro?", a: "Most cities and towns in the metro require a permit for new decks, especially if attached to the house or elevated above a certain height. A licensed builder should handle this as part of the project." },
      { q: "How deep do deck footings need to be in Indiana?", a: "Footings generally need to extend below the local frost line, which in central Indiana is typically around 30 to 36 inches, to prevent heaving from winter freeze-thaw cycles." },
      { q: "Is composite decking worth the extra cost over wood?", a: "Composite costs more upfront but avoids the annual staining and sealing wood requires, so many homeowners find it pays off in reduced maintenance over a 10+ year timeframe." },
      { q: "How long does it take to build a typical deck?", a: "A standard single-level deck usually takes one to two weeks from start to finish, depending on size, weather, and how quickly permits and inspections are processed." }
    ]
  },
  {
    slug: "tree-service",
    name: "Tree Service",
    metaDesc: "Tree trimming, removal, and storm cleanup in the Indianapolis metro: what it costs, when it's needed, and how to pick a qualified tree service.",
    overview: `Tree service covers a range of work, from routine trimming and pruning to full removal of dead, diseased, or hazardous trees, as well as emergency storm cleanup. Regular trimming keeps trees healthy, improves their shape, and reduces the risk of falling limbs, while removal is typically reserved for trees that are dead, structurally compromised, too close to a structure, or causing damage to foundations, driveways, or utility lines. Central Indiana's mix of mature hardwoods and occasional severe storms — including summer thunderstorms and ice events — makes tree service a fairly regular need for homeowners with established trees on their property. Because tree work often involves climbing, heavy equipment, and the risk of falling limbs near a house or power line, it's one of the home services where hiring a properly insured and experienced crew matters most; a mistake can cause serious property damage or injury.`,
    costInfo: {
      intro: "Tree service costs vary widely based on tree size, condition, and accessibility:",
      items: [
        { label: "Trimming or pruning per tree", range: "$200–$800" },
        { label: "Small to medium tree removal", range: "$400–$1,200" },
        { label: "Large tree removal", range: "$1,200–$3,000+" }
      ],
      note: "Trees near power lines, structures, or with difficult access typically cost more; emergency storm work may carry a premium."
    },
    howToChoose: [
      "Confirm the company carries liability insurance and workers' compensation — tree work has real injury and property-damage risk.",
      "Ask whether an ISA Certified Arborist is on staff or available for tree health assessments.",
      "Get a written estimate that specifies removal, stump handling, and debris cleanup separately.",
      "Ask how they handle trees near power lines or structures.",
      "Check for local reviews specifically mentioning removal or storm cleanup work, not just trimming."
    ],
    faqs: [
      { q: "How do I know if a tree needs to be removed versus just trimmed?", a: "Signs a tree may need removal include large dead sections, fungus at the base, significant leaning, or visible trunk damage. An arborist can assess whether the tree is salvageable or poses a safety risk." },
      { q: "Does tree removal include stump grinding?", a: "Not always — stump removal is often quoted separately from tree removal, so ask specifically if you want the stump ground down or removed as part of the job." },
      { q: "What should I do about storm-damaged trees?", a: "If a tree is leaning, has broken limbs hanging, or is near power lines after a storm, treat it as urgent and contact a tree service promptly, especially if it threatens a structure or walkway." },
      { q: "Is it cheaper to remove a tree in winter?", a: "Some tree services offer lower rates in the off-season (late fall through winter) when demand is lower and trees are bare, though this varies by company." }
    ]
  },
  {
    slug: "junk-removal",
    name: "Junk Removal",
    metaDesc: "How junk removal works in the Indianapolis metro, typical pricing for full and partial loads, and how to choose a hauler for your cleanout.",
    partner: { baseUrl: "https://indianapolisjunkremoval.org/", extension: ".html", anchorLabel: "junk removal" },
    overview: `Junk removal is a full-service alternative to renting a dumpster: instead of filling a container yourself, a crew comes to your home, does the loading and hauling for you, and takes the debris away in one visit. It's a popular choice for garage and basement cleanouts, furniture and appliance removal, estate cleanouts, and situations where you need items gone quickly without the time commitment of a multi-day dumpster rental. Most junk removal companies price jobs by volume — how much space your items take up in the truck — rather than by weight, and many offer same-day or next-day service, which makes it a good fit for time-sensitive situations like move-outs or preparing a home for sale. Reputable companies also sort out items that can be donated or recycled rather than sending everything straight to a landfill, which is worth asking about if that matters to you. For same-day junk removal in the Indianapolis area, providers like [Indianapolis Junk Removal](https://indianapolisjunkremoval.org/) offer upfront pricing and full-service hauling, handling everything from single-item pickups to whole-house cleanouts.`,
    costInfo: {
      intro: "Junk removal is typically priced by how much of the truck your items fill, rather than a flat per-item rate:",
      items: [
        { label: "Single item or minimum load", range: "$100–$300" },
        { label: "Partial truckload (quarter to half)", range: "$250–$450" },
        { label: "Full truckload", range: "$400–$700" }
      ],
      note: "Large appliances, mattresses, or items requiring special disposal (like electronics) may carry additional fees."
    },
    howToChoose: [
      "Ask whether pricing is based on volume, weight, or a flat rate, and get an estimate before the crew starts loading.",
      "Check whether the company donates or recycles usable items rather than landfilling everything.",
      "Confirm same-day or next-day availability if your timeline is tight.",
      "Ask what's excluded — most haulers won't take hazardous materials, and some limit certain appliances.",
      "Look for a company that provides upfront, on-site pricing before work begins rather than vague phone estimates."
    ],
    faqs: [
      { q: "What's the difference between junk removal and a dumpster rental?", a: "Junk removal includes labor — a crew loads and hauls everything away in one visit — while a dumpster rental leaves a container for you to fill yourself over several days. Junk removal is generally better for quick jobs; dumpsters suit ongoing renovation debris." },
      { q: "How is junk removal typically priced?", a: "Most companies price by volume, essentially how much of their truck your items take up, rather than by individual item or weight, though large or special items may have added fees." },
      { q: "Can junk removal companies take furniture and appliances?", a: "Most can, including couches, mattresses, and major appliances, though some appliances with refrigerants (like refrigerators or AC units) may require special handling or an added fee." },
      { q: "Do junk removal companies recycle or donate items?", a: "Many reputable companies sort loads to donate usable furniture and recycle scrap metal or electronics rather than sending everything to a landfill — worth asking about if that's important to you." }
    ]
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    metaDesc: "Why regular gutter cleaning matters for Indianapolis homes, typical service costs, and what to look for in a gutter cleaning provider.",
    overview: `Gutters channel rainwater away from your roof and foundation, and when they clog with leaves, seeds, and debris, that water has nowhere to go but over the edge — often right next to your foundation or under your roofline. Over time, clogged gutters can contribute to basement moisture, foundation cracking, fascia board rot, and ice dams in winter. Central Indiana's tree cover means most homes need gutter cleaning at least once or twice a year, typically in late spring after seed and bloom debris and again in late fall after leaves drop, with homes under heavy tree canopy sometimes needing more frequent attention. A thorough cleaning includes clearing debris from the gutters and downspouts, checking that water flows freely through the downspout extensions, and a visual check for loose brackets, sagging sections, or minor damage that could turn into a bigger repair if ignored.`,
    costInfo: {
      intro: "Gutter cleaning is typically priced by home size and linear footage of gutter:",
      items: [
        { label: "Single-story home", range: "$100–$200" },
        { label: "Two-story home", range: "$150–$300" },
        { label: "Homes with heavy tree cover or steep roofs", range: "$200–$400" }
      ],
      note: "Many companies offer discounts for recurring seasonal service compared to one-time cleanings."
    },
    howToChoose: [
      "Ask whether the price includes downspout flushing, not just clearing the gutter troughs themselves.",
      "Confirm the crew carries insurance, since gutter work involves ladders and roof-adjacent work.",
      "Ask if they'll flag any damage they notice, like loose brackets or sagging sections.",
      "Consider a recurring seasonal plan if you have significant tree cover.",
      "Ask about debris disposal — most companies bag and remove debris rather than leaving it in your yard."
    ],
    faqs: [
      { q: "How often should gutters be cleaned in the Indianapolis area?", a: "Most homes benefit from cleaning twice a year, in late spring and late fall, though homes under heavy tree cover may need service three or four times a year." },
      { q: "What happens if I don't clean my gutters regularly?", a: "Clogged gutters can lead to water overflowing near your foundation, fascia board rot, basement moisture issues, and ice dams in winter that can damage your roof." },
      { q: "Can I clean my own gutters instead of hiring a service?", a: "You can, but it involves ladder work at height, which carries fall risk, and it's easy to miss downspout clogs from the ground. Many homeowners choose to hire it out for safety and thoroughness." },
      { q: "Do gutter guards eliminate the need for cleaning?", a: "Gutter guards reduce how often cleaning is needed but don't eliminate it entirely — fine debris and seeds can still accumulate over time, just more slowly." }
    ]
  },
  {
    slug: "fence-installation",
    name: "Fence Installation",
    metaDesc: "Fence installation costs and options for Indianapolis-area homeowners, from wood privacy fencing to vinyl and chain link, plus how to choose a installer.",
    overview: `A new fence can define your property line, add privacy, contain pets, or simply improve curb appeal, and the right choice depends heavily on budget, purpose, and neighborhood requirements. Wood privacy fencing remains a popular choice for its classic look and relatively moderate cost, though it requires periodic staining or sealing to hold up against Indiana's humid summers and freeze-thaw winters. Vinyl fencing costs more upfront but needs virtually no maintenance and resists rot and fading well. Chain link is the most budget-friendly option and works well for containment purposes, though it offers little privacy. Before installing any fence, it's important to confirm your exact property line (a survey may be needed), check local setback and height requirements, and if you're in an HOA community, get architectural approval, since many HOAs regulate fence height, material, and even color.`,
    costInfo: {
      intro: "Fence installation is typically priced per linear foot, including materials and labor:",
      items: [
        { label: "Chain link fence", range: "$10–$20 per linear ft" },
        { label: "Wood privacy fence", range: "$20–$35 per linear ft" },
        { label: "Vinyl fence", range: "$25–$40 per linear ft" },
        { label: "Typical yard (150–200 linear ft)", range: "$3,000–$7,000 total" }
      ],
      note: "Gates, decorative posts, and difficult terrain or tree roots can add to the total cost."
    },
    howToChoose: [
      "Confirm your property line before installation — a survey can prevent disputes with neighbors.",
      "Check your city's or HOA's height, material, and setback requirements before finalizing a design.",
      "Ask whether the installer pulls any required permit.",
      "Compare material warranties, especially for vinyl and pressure-treated wood.",
      "Get a written quote specifying post spacing and depth, since closer post spacing generally means a sturdier fence."
    ],
    faqs: [
      { q: "Do I need a permit to install a fence in the Indianapolis metro?", a: "Many cities and towns in the metro require a permit for fences over a certain height, and some restrict front-yard fence height more than backyard fencing. Check with your local building department." },
      { q: "How do I find my exact property line before installing a fence?", a: "Check your property survey if you have one, or hire a licensed surveyor if the boundary isn't clear. Installing a fence over the property line can create disputes with neighbors down the road." },
      { q: "Which fence material lasts longest in Indiana's climate?", a: "Vinyl generally holds up best against Indiana's freeze-thaw winters and humid summers with minimal maintenance, while wood requires periodic staining or sealing to prevent warping and rot." },
      { q: "Will my HOA restrict what kind of fence I can install?", a: "Many HOA communities in the metro do regulate fence height, material, and sometimes color, so check your covenants and get approval before installation." }
    ]
  },
  {
    slug: "lawn-care",
    name: "Lawn Care",
    metaDesc: "Lawn mowing, fertilization, and seasonal lawn care programs for Indianapolis-area homes, plus typical costs and what to ask a provider.",
    overview: `Lawn care in central Indiana generally falls into two categories: routine mowing service and seasonal treatment programs that include fertilization, weed control, and aeration. Regular mowing keeps a lawn looking maintained and is priced primarily by lot size and mowing frequency, with most services offering weekly or biweekly visits during the growing season from roughly April through October. Seasonal treatment programs are more about long-term lawn health — a typical program includes several rounds of fertilizer and pre-emergent or post-emergent weed control timed to Indiana's growing season, along with core aeration and overseeding in fall to fill in thin spots and improve soil health ahead of winter. Indiana's clay-heavy soil in many areas can benefit especially from aeration, which relieves compaction and helps water and nutrients reach grass roots more effectively.`,
    costInfo: {
      intro: "Lawn care pricing depends on lot size, service frequency, and whether you're booking mowing only or a full treatment program:",
      items: [
        { label: "Weekly mowing (average residential lot)", range: "$40–$75 per visit" },
        { label: "Full-season fertilization & weed control program", range: "$300–$700 per year" },
        { label: "Core aeration & overseeding (one-time, fall)", range: "$150–$400" }
      ],
      note: "Larger lots, steep terrain, or extensive landscaping beds typically raise mowing costs above these baseline ranges."
    },
    howToChoose: [
      "Ask whether pricing is based on an accurate measurement of your lot, not just a rough estimate.",
      "For treatment programs, ask how many rounds are included per year and what's applied at each visit.",
      "Check whether the company is licensed to apply pesticides and fertilizers, as required in Indiana.",
      "Ask about pet and child safety guidance after treatments.",
      "Confirm whether mowing service includes edging, trimming, and clipping cleanup, or just the mow itself."
    ],
    faqs: [
      { q: "How often should my lawn be mowed during the Indiana growing season?", a: "Most lawns do well with weekly mowing during peak growth (May through July) and can often move to biweekly in the cooler shoulder months of spring and fall." },
      { q: "When is the best time to aerate a lawn in Indiana?", a: "Fall, typically September through October, is the best time to aerate cool-season lawns common in central Indiana, since it allows grass to recover and fill in before winter." },
      { q: "Is it worth paying for a full lawn treatment program versus doing it myself?", a: "A professional program ensures proper timing and licensed product application, which can be harder to match with DIY store-bought products, especially for weed control timing." },
      { q: "Do lawn care companies need a license in Indiana?", a: "Companies applying pesticides or herbicides commercially in Indiana are generally required to hold applicator licensing through the state, which is worth confirming before hiring." }
    ]
  },
  {
    slug: "home-inspection",
    name: "Home Inspection",
    metaDesc: "What a home inspection covers, typical costs in the Indianapolis metro, and how to choose a qualified inspector for buying, selling, or routine checkups.",
    partner: { baseUrl: "https://indianapolishomeinspectionservices.com/", extension: "", anchorLabel: "home inspection" },
    overview: `A home inspection is a visual, non-invasive evaluation of a home's major systems and components — roof, foundation, plumbing, electrical, HVAC, and structural elements — typically performed before a home purchase, though many homeowners also get periodic inspections to catch maintenance issues early. A standard inspection takes two to four hours depending on home size and results in a detailed written report, often with photos, flagging both urgent safety concerns and general maintenance items. Buyers commonly use the inspection report to negotiate repairs or credits before closing. Some issues fall outside a standard inspection's scope and require specialists — radon testing, sewer scope inspections, and mold testing are common add-ons in the Indianapolis area, where radon levels can be elevated in certain neighborhoods due to regional soil and geology. Local firms like [Indianapolis Home Inspection Services](https://indianapolishomeinspectionservices.com/) handle these standard and specialty inspections together, which can simplify scheduling if you need more than a basic walkthrough.`,
    costInfo: {
      intro: "Home inspection costs typically scale with home size and any additional testing requested:",
      items: [
        { label: "Standard single-family home inspection", range: "$325–$500" },
        { label: "Radon testing add-on", range: "$125–$175" },
        { label: "Sewer scope inspection add-on", range: "$150–$300" }
      ],
      note: "Larger or older homes, and homes with crawl spaces or additional structures, are often priced at the higher end."
    },
    howToChoose: [
      "Confirm the inspector is licensed in Indiana and carries errors and omissions insurance.",
      "Ask for a sample report so you know what level of detail to expect.",
      "Check whether radon and sewer scope testing are offered, especially important in parts of the Indianapolis metro.",
      "Ask if you can attend the inspection in person to ask questions on-site.",
      "Look for inspectors with specific experience on homes of a similar age to the one you're buying."
    ],
    faqs: [
      { q: "Is radon testing important for Indianapolis-area homes?", a: "Yes — parts of Indiana, including areas within the Indianapolis metro, have elevated radon potential due to regional soil and geology, so many buyers add radon testing to their inspection." },
      { q: "How long does a typical home inspection take?", a: "Most standard single-family home inspections take two to four hours on-site, with the written report typically delivered within 24 to 48 hours afterward." },
      { q: "Should I get a home inspection even if I'm not buying or selling?", a: "Periodic inspections can help homeowners catch developing issues, like roof wear or HVAC problems, before they become expensive emergencies, so it's a reasonable investment even outside a transaction." },
      { q: "What's not covered in a standard home inspection?", a: "Standard inspections are visual and non-invasive, so they generally don't include radon, mold, pest, or sewer scope testing unless specifically added — and don't involve opening up walls or moving furniture." }
    ]
  },
  {
    slug: "painting",
    name: "Painting",
    metaDesc: "Interior and exterior painting costs for Indianapolis-area homes, what affects pricing, and how to choose a reliable painting contractor.",
    overview: `Professional painting covers everything from a single accent wall to a full exterior repaint, and pricing and prep work vary a lot depending on scope. Interior painting typically involves surface prep (patching holes, sanding, taping trim), primer where needed, and two coats of finish paint, with pricing usually based on square footage or a per-room estimate. Exterior painting is more weather-dependent and labor-intensive, often requiring pressure washing, scraping and sanding peeling areas, caulking gaps, and priming bare wood before finish coats go on — skipping this prep is the most common reason exterior paint jobs fail early. In central Indiana's climate, exterior painting is generally best scheduled in the late spring through early fall when temperatures reliably stay within the range most exterior paints require to cure properly, typically above 50°F with low humidity and no rain in the forecast.`,
    costInfo: {
      intro: "Painting costs depend heavily on square footage, surface condition, and number of coats:",
      items: [
        { label: "Interior painting (per room)", range: "$300–$800" },
        { label: "Interior painting (per sq ft of wall area)", range: "$2–$4" },
        { label: "Exterior painting (average single-family home)", range: "$3,000–$7,000+" }
      ],
      note: "Extensive prep work, wood repair, or premium paint lines can push totals above these ranges."
    },
    howToChoose: [
      "Ask exactly what prep work is included — scraping, sanding, caulking, and priming matter more than the paint brand.",
      "Get quotes specifying the number of coats, not just a flat total price.",
      "Ask about the paint brand and line being used, since quality varies significantly.",
      "Check whether the crew is insured, especially for exterior work involving ladders.",
      "Ask about weather contingency plans for exterior projects."
    ],
    faqs: [
      { q: "What's the best time of year to paint a house exterior in Indiana?", a: "Late spring through early fall is generally ideal, when temperatures reliably stay above 50°F with manageable humidity, giving paint the best conditions to cure properly." },
      { q: "How many coats of paint does a typical exterior repaint need?", a: "Most exterior repaints use two finish coats over primed bare wood or one coat over sound existing paint, though this varies based on color change and surface condition." },
      { q: "How long does interior paint take to fully cure?", a: "Interior paint is typically dry to the touch within hours, but full curing — when the surface reaches maximum hardness — can take up to two to four weeks, so it's best to handle painted surfaces gently during that window." },
      { q: "Is it worth paying for premium paint versus a budget option?", a: "Premium paints generally offer better coverage, durability, and fade resistance, which often means fewer coats needed and a longer time before repainting, offsetting some of the higher upfront cost." }
    ]
  },
  {
    slug: "roofing-siding",
    name: "Roofing and Siding",
    metaDesc: "Roof replacement and siding costs for Indianapolis-area homes, signs you need repairs, and how to choose a roofing and siding contractor.",
    overview: `Roofing and siding are two of the most important protective layers on a home, and both take a beating from Indiana's weather extremes — hot, humid summers, cold winters, and occasional severe storms with hail and high wind. Asphalt shingle roofing remains the most common choice for its balance of cost and durability, typically lasting 20 to 30 years depending on the shingle grade and installation quality, while architectural (dimensional) shingles offer better wind resistance and a longer lifespan than basic three-tab shingles. Siding replacement is often triggered by storm damage, fading, warping, or simply reaching the end of its service life; vinyl siding remains the most budget-friendly option, while fiber cement siding costs more but offers better durability and fire resistance. Because hail and wind damage are common triggers for roofing and siding claims in central Indiana, it's worth understanding your homeowners insurance coverage and getting a professional damage assessment after any major storm.`,
    costInfo: {
      intro: "Roofing and siding are major projects typically priced for the whole home rather than per square foot alone:",
      items: [
        { label: "Asphalt shingle roof replacement (average home)", range: "$8,000–$16,000" },
        { label: "Vinyl siding replacement (average home)", range: "$9,000–$16,000" },
        { label: "Fiber cement siding replacement", range: "$14,000–$25,000+" }
      ],
      note: "Roof pitch, home size, number of stories, and material grade all significantly affect the final price."
    },
    howToChoose: [
      "Confirm the contractor is licensed and carries liability and workers' compensation insurance.",
      "Ask about manufacturer certifications, which can affect warranty coverage on materials.",
      "Get a written estimate detailing tear-off, underlayment, and disposal, not just the visible shingle or siding cost.",
      "Ask how they handle storm damage insurance claims if that applies to your situation.",
      "Check for local reviews and ask for addresses of recently completed jobs you can drive by."
    ],
    faqs: [
      { q: "How long does an asphalt shingle roof last in Indiana's climate?", a: "A well-installed asphalt shingle roof typically lasts 20 to 30 years in central Indiana, though severe hail or wind storms can shorten that lifespan and trigger earlier replacement." },
      { q: "How do I know if storm damage to my roof or siding is covered by insurance?", a: "Most homeowners policies cover sudden storm damage like hail or wind, but coverage details vary. A professional inspection after a major storm can help document damage for a claim." },
      { q: "What's the difference between three-tab and architectural shingles?", a: "Architectural (dimensional) shingles are thicker, offer better wind resistance, and typically carry longer warranties than basic three-tab shingles, though they cost somewhat more." },
      { q: "Is vinyl or fiber cement siding better for Indiana weather?", a: "Both perform well, but fiber cement offers greater durability against hail and wind and better fire resistance, while vinyl is more budget-friendly and still holds up reasonably well in the region's climate." }
    ]
  },
  {
    slug: "windows",
    name: "Windows",
    metaDesc: "Replacement window costs for Indianapolis-area homes, energy efficiency considerations, and how to choose a window installer.",
    overview: `Replacing old windows can meaningfully improve a home's comfort and energy efficiency, especially in older homes with single-pane or poorly sealed windows that let conditioned air escape. Modern replacement windows are typically double-pane (sometimes triple-pane) with insulating gas fill and low-E coatings that reduce heat transfer, which matters a lot in central Indiana's climate with both cold winters and hot, humid summers. Vinyl-framed windows are the most common and budget-friendly choice for residential replacement, offering good insulation without the maintenance that wood frames require, while fiberglass and wood-clad options cost more but can offer better durability or a specific aesthetic for historic homes. Beyond the frame material, look for windows with a good National Fenestration Rating Council (NFRC) U-factor rating for the climate zone, since that number reflects real-world insulating performance better than marketing claims alone.`,
    costInfo: {
      intro: "Window replacement is typically priced per window, including removal of the old unit and installation:",
      items: [
        { label: "Vinyl replacement window (installed)", range: "$400–$900 per window" },
        { label: "Fiberglass or wood-clad window (installed)", range: "$800–$1,600 per window" },
        { label: "Whole-home replacement (10–20 windows)", range: "$6,000–$16,000+" }
      ],
      note: "Custom sizes, grid patterns, or historic-style windows typically cost more than standard sizes."
    },
    howToChoose: [
      "Ask for the NFRC U-factor and solar heat gain coefficient ratings rather than relying on general energy-efficiency claims.",
      "Confirm whether the quote includes full-frame replacement or an insert into the existing frame.",
      "Ask about warranty coverage for both the glass unit and installation labor separately.",
      "Get multiple quotes for the same window brand and specs to compare pricing fairly.",
      "Ask how they handle disposal of old windows and any lead paint precautions in older homes."
    ],
    faqs: [
      { q: "How much can new windows lower my energy bills?", a: "Savings vary by home and old window condition, but replacing older single-pane windows with efficient double-pane units commonly reduces heating and cooling costs noticeably, especially in homes with visible drafts or condensation issues." },
      { q: "What's the difference between full-frame replacement and an insert?", a: "An insert fits a new window into the existing frame and is faster and cheaper, while full-frame replacement removes everything down to the studs — usually necessary if the existing frame is damaged or rotted." },
      { q: "Do older homes need special consideration when replacing windows?", a: "Homes built before 1978 may have lead-based paint, which requires specific safety precautions (EPA RRP rules) during window removal, so confirm your contractor follows lead-safe practices." },
      { q: "How long does a whole-home window replacement take?", a: "Most whole-home projects (10-20 windows) are completed in one to three days, depending on window count and any structural repairs needed at individual openings." }
    ]
  },
  {
    slug: "tree-stump-removal",
    name: "Tree Stump Removal",
    metaDesc: "Stump grinding versus full removal for Indianapolis-area yards, typical costs, and what to consider before choosing a method.",
    overview: `After a tree is removed, the stump often remains — and left alone, it can be an eyesore, a tripping hazard, and a magnet for pests like carpenter ants that can eventually spread to nearby structures. There are two main approaches: stump grinding, which uses a specialized machine to grind the stump and surface roots down below ground level (leaving the deeper root system to decompose naturally), and full stump removal, which extracts the entire stump and major root ball, typically with heavy equipment. Grinding is faster, less disruptive to the surrounding yard, and generally cheaper, making it the more common choice for most residential situations. Full removal is usually reserved for cases where you plan to build or landscape directly over the area and need the root system completely gone. Either way, it's worth deciding what you want to do with the space afterward — grindings can be removed and the hole filled with topsoil for new grass or landscaping.`,
    costInfo: {
      intro: "Stump removal pricing usually depends on the stump's diameter and the method used:",
      items: [
        { label: "Stump grinding (per stump)", range: "$100–$400" },
        { label: "Stump grinding (per inch of diameter)", range: "$2–$5 per inch" },
        { label: "Full stump and root removal", range: "$300–$800+" }
      ],
      note: "Multiple stumps, difficult access, or very large diameters can increase total cost."
    },
    howToChoose: [
      "Ask whether pricing is per stump or per inch of diameter, since that affects the total for larger trees.",
      "Confirm whether grindings/debris removal and hole backfilling are included or cost extra.",
      "Ask if the equipment can access your yard without damaging lawn, driveways, or nearby landscaping.",
      "Check whether they handle surface roots that may be causing sidewalk or driveway damage.",
      "If you plan to plant a new tree in the same spot, ask how deep they'll grind."
    ],
    faqs: [
      { q: "Is stump grinding or full removal better?", a: "Grinding is faster, cheaper, and less disruptive, and works well for most yards. Full removal is generally only necessary if you're building or landscaping directly over the area and need the root system completely gone." },
      { q: "How long does it take for a ground stump area to be usable again?", a: "The ground surface can often be raked, backfilled with topsoil, and reseeded within a day or two, though the deeper roots will continue decomposing underground for years without causing issues." },
      { q: "Can I plant a new tree where a stump was removed?", a: "Yes, especially after grinding, though it's best to remove as much of the ground material as possible and amend the soil, since decomposing wood can temporarily affect nutrient availability nearby." },
      { q: "Does a stump attract pests if left in place?", a: "Over time, decaying stumps can attract carpenter ants, termites, and other wood-boring insects, which is one reason many homeowners choose to have them removed rather than left to decompose naturally near the house." }
    ]
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    metaDesc: "Landscaping design and installation for Indianapolis-area yards, typical project costs, and how to choose a landscaping company.",
    overview: `Landscaping covers everything from a simple mulch and bed refresh to a full yard redesign with new plantings, hardscaping, and drainage improvements. Smaller projects, like renewing mulch beds, adding foundation plantings, or installing edging, are relatively affordable and can noticeably improve curb appeal in a weekend. Larger projects often start with a design consultation covering plant selection suited to central Indiana's growing zone (generally zone 6a), sun and shade patterns across the yard, and any drainage issues that need to be addressed before planting. Native and regionally adapted plants tend to require less watering and maintenance once established than non-native ornamentals, which is worth discussing with a designer if low-maintenance results matter to you. Hardscaping elements — patios, retaining walls, walkways — are often bundled into larger landscaping projects and typically require more planning around drainage and, in some cases, permits.`,
    costInfo: {
      intro: "Landscaping costs vary enormously by scope, from simple refreshes to full redesigns:",
      items: [
        { label: "Mulch bed renewal / basic plantings", range: "$500–$2,000" },
        { label: "Mid-size landscape design & install", range: "$3,000–$8,000" },
        { label: "Full yard redesign with hardscaping", range: "$8,000–$15,000+" }
      ],
      note: "Retaining walls, patios, irrigation systems, and mature tree/shrub installation significantly affect total cost."
    },
    howToChoose: [
      "Ask whether the company offers design services or only installation, especially for larger projects.",
      "Check if plant selections are suited to central Indiana's growing zone and your yard's sun/shade conditions.",
      "Ask about warranty coverage on new plantings, since some companies guarantee replacement if plants don't establish.",
      "For hardscaping, confirm whether drainage was factored into the design.",
      "Ask about typical timelines, since plant availability can vary seasonally."
    ],
    faqs: [
      { q: "What growing zone is the Indianapolis area in?", a: "Most of the Indianapolis metro falls in USDA hardiness zone 6a, which is useful to know when selecting plants that will reliably survive the local winter." },
      { q: "What's the best time of year to start a landscaping project in Indiana?", a: "Spring and fall are generally the best windows for planting, since temperatures are moderate and there's typically more consistent rainfall than in peak summer heat." },
      { q: "Are native plants really lower maintenance?", a: "Generally yes — plants native or well-adapted to central Indiana's climate and soil typically need less supplemental watering and fertilizing once established compared to non-native ornamentals." },
      { q: "Do I need a permit for a patio or retaining wall?", a: "Retaining walls above a certain height often require a permit and sometimes engineering review, while smaller patios usually don't, but requirements vary by city, so check with your local building department." }
    ]
  },
  {
    slug: "general-contractor",
    name: "General Contractor",
    metaDesc: "When to hire a general contractor for an Indianapolis-area home project, how pricing works, and what to look for before signing a contract.",
    overview: `A general contractor manages a construction or renovation project from start to finish, coordinating subcontractors (electricians, plumbers, framers, etc.), scheduling inspections, and handling permits so the homeowner doesn't have to manage each trade individually. This is typically the right choice for larger, multi-trade projects — kitchen or bathroom remodels, home additions, basement finishing, or whole-home renovations — where coordinating the sequence of work matters and mistakes in that sequence can be costly. For single-trade projects, like just replacing a roof or installing a fence, hiring that specialist directly is often more cost-effective than going through a general contractor, since GCs typically add a markup to cover project management. A good general contractor should provide a detailed written contract covering scope, payment schedule tied to project milestones, and an estimated timeline, and should be willing to explain how they select and vet their subcontractors.`,
    costInfo: {
      intro: "General contractor costs are usually a mix of the underlying project cost plus a management fee:",
      items: [
        { label: "GC management fee (typical range)", range: "10%–20% of project cost" },
        { label: "Kitchen remodel (mid-range)", range: "$25,000–$60,000" },
        { label: "Whole-home renovation", range: "$50,000–$150,000+" }
      ],
      note: "Costs vary enormously by project scope, materials selected, and whether structural changes are involved."
    },
    howToChoose: [
      "Confirm the contractor is licensed and insured, and ask for proof of both.",
      "Ask for a detailed written contract with a payment schedule tied to completed milestones, not large upfront payments.",
      "Ask how subcontractors are selected and whether they're regular partners or hired per-project.",
      "Check references from projects of similar size and scope to yours.",
      "Clarify who is responsible for pulling permits and scheduling inspections."
    ],
    faqs: [
      { q: "When should I hire a general contractor instead of a single-trade specialist?", a: "General contractors make the most sense for larger projects involving multiple trades, like a kitchen remodel or home addition. For a single-trade job, like just a new roof, hiring that specialist directly is usually more cost-effective." },
      { q: "How much should I pay upfront to a general contractor?", a: "Reputable contractors typically ask for a modest deposit (often 10-20%) with the remainder tied to completed project milestones, rather than large payments upfront before work begins." },
      { q: "Who is responsible for permits on a general contractor project?", a: "Typically the general contractor pulls required permits and schedules inspections as part of managing the project, but confirm this explicitly in your contract." },
      { q: "How do I verify a general contractor is properly licensed in Indiana?", a: "Licensing requirements can vary by city and county in Indiana, so ask the contractor directly for their license and insurance information and confirm it with your local building department if unsure." }
    ]
  },
  {
    slug: "handyman",
    name: "Handyman",
    metaDesc: "What handyman services cover, typical hourly rates in the Indianapolis metro, and how to decide between a handyman and a specialized contractor.",
    overview: `Handyman services cover the wide range of smaller home repair and maintenance tasks that don't require a specialized trade license or a full contracting crew — think drywall patching, fixture installation, minor carpentry, furniture assembly, caulking, small tile repairs, or hanging shelves and TVs. It's a good fit for homeowners with a running list of small projects that individually aren't worth hiring a specialist for, but collectively take real time and skill to do well. Most handymen work on an hourly basis with a minimum charge, though some offer flat rates for very common, predictable jobs. Knowing when to call a handyman versus a licensed specialist matters: electrical and plumbing work beyond very basic fixture swaps typically requires a licensed electrician or plumber in most Indiana municipalities, and a good handyman should be upfront about which jobs are outside their scope rather than taking on work that needs a licensed trade.`,
    costInfo: {
      intro: "Handyman services are typically priced hourly, often with a minimum charge:",
      items: [
        { label: "Hourly rate", range: "$60–$100 per hour" },
        { label: "Typical minimum charge", range: "1–2 hours" },
        { label: "Small flat-rate jobs (e.g., TV mounting, shelf install)", range: "$75–$200" }
      ],
      note: "Multi-item task lists are often more cost-effective per hour than single small jobs, since you avoid multiple minimum-charge visits."
    },
    howToChoose: [
      "Batch smaller tasks into a single visit when possible to avoid paying multiple minimum-charge fees.",
      "Ask upfront whether a task is within their scope or needs a licensed electrician or plumber.",
      "Get an hourly rate and estimated time for the job list before work begins.",
      "Check whether they carry liability insurance for work in your home.",
      "Ask about experience with the specific type of task, since skill can vary across the wide range of handyman work."
    ],
    faqs: [
      { q: "What tasks are outside the scope of a typical handyman?", a: "Most handymen avoid major electrical panel work, gas line work, and significant plumbing beyond basic fixture replacement, since Indiana generally requires a licensed electrician or plumber for that kind of work." },
      { q: "Is it cheaper to hire a handyman or a specialist for small jobs?", a: "For small, general tasks, a handyman is usually more cost-effective than hiring a specialized trade, which often has higher minimum service fees for a comparably small job." },
      { q: "How should I prepare for a handyman visit to save money?", a: "Make a full list of tasks and batch them into a single visit rather than calling separately for each one, since most handymen charge a minimum visit fee regardless of job size." },
      { q: "Do handymen need to be licensed in Indiana?", a: "General handyman work typically doesn't require a specific state license in Indiana, though some cities have local registration requirements, and any electrical or plumbing work beyond minor fixture swaps generally does require a licensed trade." }
    ]
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    metaDesc: "Pressure washing (power washing) costs in the Indianapolis metro for driveways, siding, decks, and roofs, plus how to choose a provider who won't damage your surfaces.",
    partner: { baseUrl: "https://powerwashingindianapolisin.com/", extension: "", anchorLabel: "power washing" },
    overview: `Pressure washing uses a high-pressure water spray to strip away dirt, algae, mildew, and grime that build up on exterior surfaces over time — driveways, sidewalks, siding, decks, fences, and patios are the most common jobs. You'll often hear it called "power washing" instead; technically, power washing uses heated water while pressure washing uses water at ambient temperature, but most homeowners and even many service providers use the two terms interchangeably, and either search term generally gets you the same service. Central Indiana's humid summers and shaded, tree-heavy yards make algae and mildew growth a fairly regular problem on siding and shaded concrete, and winter road salt tracked onto driveways and garage floors is another common reason homeowners book a cleaning each spring. Not every surface should be cleaned the same way: concrete driveways and sidewalks can generally handle high-pressure spraying, but roofs, painted or vinyl siding, and softwood decking are more easily damaged by too much pressure or the wrong nozzle, and are usually cleaned with "soft washing" — a lower-pressure spray combined with a cleaning solution that lifts grime without stripping material or forcing water behind siding panels. Companies like [Power Washing Indianapolis](https://powerwashingindianapolisin.com/) specialize in matching pressure and technique to the surface, which is worth it for anything beyond a straightforward concrete cleaning.`,
    costInfo: {
      intro: "Pressure washing is typically priced by the project or square footage, depending on the surface:",
      items: [
        { label: "Driveway or sidewalk", range: "$150–$300" },
        { label: "Deck or patio", range: "$150–$300" },
        { label: "House siding (single-story)", range: "$250–$450" },
        { label: "House siding (two-story)", range: "$400–$700" },
        { label: "Roof soft washing", range: "$300–$600" }
      ],
      note: "Roofs need low-pressure soft washing rather than high-pressure spraying, which can strip shingle granules — a reputable provider should already know this without being asked."
    },
    howToChoose: [
      "Ask whether they use soft washing (lower pressure plus a cleaning solution) for roofs, siding, and wood decking rather than high-pressure spraying, which can cause real damage.",
      "Confirm the company carries liability insurance, since incorrect pressure near windows, siding, or the roofline can cause costly damage.",
      "Ask what cleaning solutions are used and whether they're safe for nearby landscaping, pets, and lawn.",
      "Get a price based on square footage or a clearly defined project scope rather than a vague hourly estimate.",
      "Look for reviews or photos specific to the surface you need cleaned — driveway experience doesn't necessarily mean roof or siding expertise."
    ],
    faqs: [
      { q: "What's the difference between power washing and pressure washing?", a: "Technically, power washing uses heated water while pressure washing uses water at normal temperature, both at high pressure. In practice, most homeowners and many companies use the terms interchangeably to mean the same general service." },
      { q: "Is pressure washing safe for my roof?", a: "High-pressure spraying can strip granules off asphalt shingles and shorten their lifespan, so roofs are typically cleaned with a lower-pressure \"soft washing\" method using a cleaning solution instead. Ask specifically which method a provider uses on roofs." },
      { q: "How often should a driveway or siding be pressure washed?", a: "Most homeowners in the Indianapolis area wash driveways and siding about once a year, typically in spring after winter salt and grime have accumulated, though shaded or heavily wooded properties with more algae growth may benefit from twice a year." },
      { q: "Can pressure washing damage my siding or deck?", a: "Yes, if the pressure is too high or the wrong nozzle and technique are used — vinyl siding can crack or let water intrude behind panels, and softwood decking can splinter or gouge. This is why asking about soft-washing technique and PSI settings matters when hiring." }
    ]
  }
];
