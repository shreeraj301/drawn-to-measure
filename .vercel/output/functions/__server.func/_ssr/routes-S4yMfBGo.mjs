import { i as __toESM } from "../_runtime.mjs";
import { $ as require_react, F as OctahedronGeometry, H as Spherical, P as Object3D, Q as require_jsx_runtime, V as SphereGeometry, W as TorusGeometry, Y as Vector3, a as Canvas, c as useThree, d as BoxGeometry, g as CylinderGeometry, h as ConeGeometry, k as MathUtils, m as Color, n as Line, p as BufferGeometry, r as Html, s as useFrame, t as OrbitControls, w as IcosahedronGeometry, x as Float32BufferAttribute, y as DodecahedronGeometry } from "../_libs/@react-three/drei+[...].mjs";
import { C as ChevronLeft, D as AudioLines, E as AudioWaveform, S as ChevronRight, T as Bot, _ as ExternalLink, a as Sparkles, b as Compass, c as Route, d as Pause, f as MapPin, g as Funnel, h as GraduationCap, i as Square, l as Radio, m as Hexagon, n as UserRound, o as Shapes, p as Layers, s as Search, t as X, u as Play, v as Diamond, w as Box, x as Circle, y as Cone } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { i as Vignette, n as Noise, r as SMAA, t as EffectComposer } from "../_libs/@react-three/postprocessing+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-S4yMfBGo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Muted architectural colours, one per community.
* Saturation stays low so the redline accent still reads.
* Order follows community id 0..12.
*/
var COMMUNITY_COLORS = [
	"#3E6B5C",
	"#3A4446",
	"#8A6A3B",
	"#6E4A3C",
	"#4E5A62",
	"#5C6B4A",
	"#6A5344",
	"#3F5558",
	"#7A6248",
	"#4A5C52",
	"#5A5048",
	"#445058",
	"#6B5E48"
];
function communityColor(id) {
	return COMMUNITY_COLORS[id % COMMUNITY_COLORS.length] ?? COMMUNITY_COLORS[0];
}
var INK = "#14191A";
var TRACE = "#C9CFCC";
var VELLUM = "#F3F4F1";
var PATINA = "#0B6B57";
var REDLINE = "#B3261E";
/** Node radius from degree. Hub stays readable, never a planet. */
function nodeRadius(degree, maxDegree) {
	return .11 + Math.sqrt(degree / Math.max(1, maxDegree)) * .28;
}
var graph_default = {
	directed: false,
	multigraph: false,
	graph: {
		"hyperedges": [
			{
				"id": "thesis_arc",
				"label": "Thesis arc: streets to kit",
				"nodes": [
					"between_the_edges",
					"th_affordances",
					"syntax_of_behavior",
					"th_behavior_making"
				],
				"relation": "form",
				"confidence": "EXTRACTED",
				"confidence_score": 1,
				"source_file": "thesis-manual-1-the-kit.txt"
			},
			{
				"id": "where_i_play",
				"label": "Where I play",
				"nodes": [
					"orbital",
					"warp",
					"ashline",
					"resonance",
					"th_play"
				],
				"relation": "form",
				"confidence": "EXTRACTED",
				"confidence_score": 1,
				"source_file": "showreel-config.json"
			},
			{
				"id": "trust_tools",
				"label": "Tools that earn trust",
				"nodes": [
					"ledger",
					"plain_paper",
					"found_it",
					"th_trust"
				],
				"relation": "participate_in",
				"confidence": "INFERRED",
				"confidence_score": .85,
				"source_file": "resume-product-design.txt"
			}
		],
		"schema_version": 1,
		"graphify_version": "0.9.92"
	},
	nodes: [
		{
			"id": "arks_studio",
			"label": "ARKS Studio, Bandra",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "1,200 sq ft flagship store. With 7 ft beam bottoms making the store feel low, proposed mirror-clad beam fascias reflecting the Barrisol ceiling for perceived height; implemented.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "arks studio, bandra",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [
				{
					"key": "RA",
					"label": "Architecture resume (PDF)",
					"file": "sources/resume-architecture.txt",
					"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
				},
				{
					"key": "RP",
					"label": "Product Design resume (PDF)",
					"file": "sources/resume-product-design.txt",
					"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
				},
				{
					"key": "I24",
					"label": "Internship Portfolio 2024 (Drive PDF)",
					"file": "sources/internship-portfolio-2024.txt",
					"url": "https://drive.google.com/file/d/1bOaRvUbsK_lUJ7mB5m2Wae084o-jVlbR/view"
				}
			]
		},
		{
			"id": "goal_product_research",
			"label": "Product / UX research roles",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Also targets product research roles.",
			"file_type": "document",
			"kind": "Goal/Career path",
			"norm_label": "product / ux research roles",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "workshops_sea",
			"label": "SEA workshops (2022-2026)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Architectural Kitchen and Technological Sensoriums (Dushyant Asher), Network Literacy (Liubov Tupikina), Thinking Through Mobility (Natasha Maru), Urban Information Systems & GIS (Abhijit Ekbote), Parametric Design through Grasshopper, Product Design (Siddhesh Kadam), Professional Practice & Ethics (Prasad Shetty), Landscape Design.",
			"file_type": "document",
			"kind": "Education",
			"norm_label": "sea workshops (2022-2026)",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "syntax_of_behavior",
			"label": "Syntax of Behavior: The Kit (thesis design)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "B.Arch thesis, Aug 2025 - Apr 2026: pre-cast concrete modules grouped by the behaviour they afford (To Sit, Play, Read, Perform, Balance, Refresh), with specs and two manuals, \"exactly like a design system\".",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "syntax of behavior: the kit (thesis design)",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [
				{
					"key": "RP",
					"label": "Product Design resume (PDF)",
					"file": "sources/resume-product-design.txt",
					"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
				},
				{
					"key": "T1",
					"label": "Thesis Manual 1: The Kit",
					"file": "sources/thesis-manual-1-the-kit.txt",
					"url": "https://drive.google.com/drive/folders/1CIPEjaNldF4-NS2vODsrEsmIPL7d4_1N"
				},
				{
					"key": "T2",
					"label": "Thesis Manual 2: The Details",
					"file": "sources/thesis-manual-2-the-details.txt",
					"url": "https://drive.google.com/drive/folders/1CIPEjaNldF4-NS2vODsrEsmIPL7d4_1N"
				},
				{
					"key": "P26",
					"label": "Portfolio 2026 (Drive PDF)",
					"file": "sources/portfolio-2026.txt",
					"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
				},
				{
					"key": "LT",
					"label": "Linktree",
					"file": "sources/linktree.md",
					"url": "https://linktr.ee/shreeraj301"
				}
			]
		},
		{
			"id": "bot_hiring_panel",
			"label": "Hiring Panel",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team. Public on Linktree. Listed as \"Grok Bot resume critic\" on his resume.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "hiring panel",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": "https://x.ai/bot/SIj2ippelru_I06A8RVO7",
			"sources": [
				{
					"key": "M",
					"label": "Memory facts",
					"file": "sources/memory-facts.md",
					"url": null
				},
				{
					"key": "LT",
					"label": "Linktree",
					"file": "sources/linktree.md",
					"url": "https://linktr.ee/shreeraj301"
				},
				{
					"key": "RP",
					"label": "Product Design resume (PDF)",
					"file": "sources/resume-product-design.txt",
					"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
				}
			]
		},
		{
			"id": "bot_in_hand_salary_monthly",
			"label": "In Hand Salary Monthly",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "in hand salary monthly",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "nath_valley",
			"label": "Nath Valley School, Aurangabad (CBSE)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "CBSE Grades I-XII, Jun 2009 - Apr 2021, CGPA 3.86/4. School choir (tenor), basketball, badminton.",
			"file_type": "document",
			"kind": "Education",
			"norm_label": "nath valley school, aurangabad (cbse)",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}, {
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "chetasvi_patel",
			"label": "Chetasvi Patel",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Collaborator named in Portfolio 2026.",
			"file_type": "document",
			"kind": "Person",
			"norm_label": "chetasvi patel",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "esri_storymaps",
			"label": "Winner, Esri StoryMaps contest, CEPT University (2022)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Contest win with certification and trophy.",
			"file_type": "document",
			"kind": "Education",
			"norm_label": "winner, esri storymaps contest, cept university (2022)",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}, {
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "barch_sea",
			"label": "B.Arch, School of Environment & Architecture, Mumbai",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Dec 2021 - Apr 2026, University of Mumbai. CGPA 3.5/4. Class Representative 2021-22.",
			"file_type": "document",
			"kind": "Education",
			"norm_label": "b.arch, school of environment & architecture, mumbai",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [
				{
					"key": "RP",
					"label": "Product Design resume (PDF)",
					"file": "sources/resume-product-design.txt",
					"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
				},
				{
					"key": "M",
					"label": "Memory facts",
					"file": "sources/memory-facts.md",
					"url": null
				},
				{
					"key": "RA",
					"label": "Architecture resume (PDF)",
					"file": "sources/resume-architecture.txt",
					"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
				},
				{
					"key": "P26",
					"label": "Portfolio 2026 (Drive PDF)",
					"file": "sources/portfolio-2026.txt",
					"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
				}
			]
		},
		{
			"id": "skill_autocad",
			"label": "AutoCAD",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Expert (memory; \"Software (advanced)\" on the architecture resume).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "autocad",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_sketchup",
			"label": "SketchUp",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Expert (memory; \"Software (advanced)\" on the architecture resume).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "sketchup",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "coa_registration",
			"label": "CoA registration (pending)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Graduated B.Arch April 2026; not yet registered with the Council of Architecture.",
			"file_type": "document",
			"kind": "Education",
			"norm_label": "coa registration (pending)",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "th_affordances",
			"label": "Affordances (Gibson)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "He read his street findings through Gibson's affordances: what a space affords shifts with gender, age, class and time of day.",
			"file_type": "concept",
			"kind": "Theme",
			"norm_label": "affordances (gibson)",
			"source_file": "thesis-manual-0-research.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/drive/folders/1CIPEjaNldF4-NS2vODsrEsmIPL7d4_1N",
			"sources": [
				{
					"key": "T0",
					"label": "Thesis Manual 0: The Research",
					"file": "sources/thesis-manual-0-research.txt",
					"url": "https://drive.google.com/drive/folders/1CIPEjaNldF4-NS2vODsrEsmIPL7d4_1N"
				},
				{
					"key": "RP",
					"label": "Product Design resume (PDF)",
					"file": "sources/resume-product-design.txt",
					"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
				},
				{
					"key": "RA",
					"label": "Architecture resume (PDF)",
					"file": "sources/resume-architecture.txt",
					"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
				}
			]
		},
		{
			"id": "th_transactional_capacity",
			"label": "Transactional capacity (Gupte & Shetty)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Lens used in the thesis alongside affordances.",
			"file_type": "concept",
			"kind": "Theme",
			"norm_label": "transactional capacity (gupte & shetty)",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "pl_aurangabad",
			"label": "Aurangabad",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "aurangabad",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "pl_india",
			"label": "India",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "india",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "pl_moti_daman",
			"label": "Moti Daman, Gujarat",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "moti daman, gujarat",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "pl_mumbai",
			"label": "Mumbai",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "mumbai",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_behavioral_mapping",
			"label": "Behavioral mapping",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Research / practice method listed on his resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "behavioral mapping",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "fortwall",
			"label": "Micro-climatic Fortwall, Moti Daman",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Semester 3 Environmental Flows, with Chetasvi Patel. Shade modules that make a harsh fort promenade permeable and habitable.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "micro-climatic fortwall, moti daman",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "th_feel",
			"label": "Spaces people feel",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Showreel: \"Now a designer of spaces people feel.\" Outro: \"Making spaces people can feel.\" Portfolio: \"how environments influence the way people live, interact and feel.\"",
			"file_type": "concept",
			"kind": "Theme",
			"norm_label": "spaces people feel",
			"source_file": "showreel-config.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "SR",
				"label": "Showreel draft config",
				"file": "sources/showreel-config.json",
				"url": null
			}, {
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "goal_product_design",
			"label": "Product designer roles, worldwide",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Switching from architecture to product design anywhere in the world.",
			"file_type": "document",
			"kind": "Goal/Career path",
			"norm_label": "product designer roles, worldwide",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "prasad_shetty",
			"label": "Prasad Shetty",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "Thesis supervisor; also taught Professional Practice & Ethics (2025). The thesis uses \"Gupte and Shetty's transactional capacity\".",
			"file_type": "document",
			"kind": "Person",
			"norm_label": "prasad shetty",
			"source_file": "thesis-manual-0-research.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/drive/folders/1CIPEjaNldF4-NS2vODsrEsmIPL7d4_1N",
			"sources": [
				{
					"key": "T0",
					"label": "Thesis Manual 0: The Research",
					"file": "sources/thesis-manual-0-research.txt",
					"url": "https://drive.google.com/drive/folders/1CIPEjaNldF4-NS2vODsrEsmIPL7d4_1N"
				},
				{
					"key": "RA",
					"label": "Architecture resume (PDF)",
					"file": "sources/resume-architecture.txt",
					"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
				},
				{
					"key": "P26",
					"label": "Portfolio 2026 (Drive PDF)",
					"file": "sources/portfolio-2026.txt",
					"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
				}
			]
		},
		{
			"id": "resume_product",
			"label": "Product Design resume",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "\"AI Product Designer | Human-Centered Design & UX Research\".",
			"file_type": "document",
			"kind": "Channel",
			"norm_label": "product design resume",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "th_space_to_interface",
			"label": "Space to interface",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "\"Fascinated by the intersection of physical and digital spaces, always looking for ways to merge form with experience.\" The through-line of his switch.",
			"file_type": "concept",
			"kind": "Theme",
			"norm_label": "space to interface",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [
				{
					"key": "P26",
					"label": "Portfolio 2026 (Drive PDF)",
					"file": "sources/portfolio-2026.txt",
					"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
				},
				{
					"key": "SR",
					"label": "Showreel draft config",
					"file": "sources/showreel-config.json",
					"url": null
				},
				{
					"key": "RP",
					"label": "Product Design resume (PDF)",
					"file": "sources/resume-product-design.txt",
					"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
				}
			]
		},
		{
			"id": "between_the_edges",
			"label": "Between the Edges (B.Arch dissertation)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "\"Spatial Form and Behavioral Patterns in Streets of Aurangabad\", 2025, supervisor Prasad Shetty. 4 street types (market, residential, narrow lane, highway-edge market), 50+ hours of behavioral mapping per site.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "between the edges (b.arch dissertation)",
			"source_file": "thesis-manual-0-research.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/drive/folders/1CIPEjaNldF4-NS2vODsrEsmIPL7d4_1N",
			"sources": [{
				"key": "T0",
				"label": "Thesis Manual 0: The Research",
				"file": "sources/thesis-manual-0-research.txt",
				"url": "https://drive.google.com/drive/folders/1CIPEjaNldF4-NS2vODsrEsmIPL7d4_1N"
			}, {
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "th_behavior_making",
			"label": "From form-making to behavior-making",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "\"The project shifts focus from form-making to behavior-making, where space is defined not just by what is built, but by how it is used.\"",
			"file_type": "concept",
			"kind": "Theme",
			"norm_label": "from form-making to behavior-making",
			"source_file": "thesis-manual-1-the-kit.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/drive/folders/1CIPEjaNldF4-NS2vODsrEsmIPL7d4_1N",
			"sources": [{
				"key": "T1",
				"label": "Thesis Manual 1: The Kit",
				"file": "sources/thesis-manual-1-the-kit.txt",
				"url": "https://drive.google.com/drive/folders/1CIPEjaNldF4-NS2vODsrEsmIPL7d4_1N"
			}]
		},
		{
			"id": "th_systems",
			"label": "Systems thinking / kit of parts",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 0,
			"community_name": "Thesis & the pivot",
			"contributor": "Grok Bot",
			"description": "\"What's underneath? Systems. The architect in me.\" The Kit is described as \"exactly like a design system\".",
			"file_type": "concept",
			"kind": "Theme",
			"norm_label": "systems thinking / kit of parts",
			"source_file": "showreel-config.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "SR",
				"label": "Showreel draft config",
				"file": "sources/showreel-config.json",
				"url": null
			}, {
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "shreeraj",
			"label": "Shreeraj Narwade",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Architect turning into an AI-native product designer & UX researcher (Linktree bio). Substack: \"Designer | Researcher | Architect | Poet\". From India; English, Hindi, Marathi.",
			"file_type": "document",
			"kind": "Person",
			"norm_label": "shreeraj narwade",
			"source_file": "linktree.md",
			"source_location": null,
			"source_url": "https://linktr.ee/shreeraj301",
			"sources": [
				{
					"key": "LT",
					"label": "Linktree",
					"file": "sources/linktree.md",
					"url": "https://linktr.ee/shreeraj301"
				},
				{
					"key": "RP",
					"label": "Product Design resume (PDF)",
					"file": "sources/resume-product-design.txt",
					"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
				},
				{
					"key": "WS",
					"label": "Medium / Substack / Instagram pages",
					"file": "sources/writing-and-social.md",
					"url": null
				}
			]
		},
		{
			"id": "skill_figma_make",
			"label": "Figma Make",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Design / AI-assisted build tool on the product design resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "figma make",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_framer",
			"label": "Framer",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Design / AI-assisted build tool on the product design resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "framer",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_google_ai_studio",
			"label": "Google AI Studio",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Design / AI-assisted build tool on the product design resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "google ai studio",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_grok",
			"label": "Grok",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Design / AI-assisted build tool on the product design resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "grok",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "pref_no_synth_voice",
			"label": "No synthesized voices in reels",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Dislikes synthesized voice-overs in reels.",
			"file_type": "concept",
			"kind": "Preference/Value",
			"norm_label": "no synthesized voices in reels",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "skill_illustrator",
			"label": "Illustrator",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Expert (memory; \"Software (advanced)\" on the architecture resume).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "illustrator",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_photoshop",
			"label": "Photoshop",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Expert (memory; \"Software (advanced)\" on the architecture resume).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "photoshop",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_v_ray",
			"label": "V-Ray",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Expert (memory; \"Software (advanced)\" on the architecture resume).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "v-ray",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "google_ux_cert",
			"label": "Google UX Design Certificate",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Google / Coursera certificate.",
			"file_type": "document",
			"kind": "Education",
			"norm_label": "google ux design certificate",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "languages",
			"label": "English, Hindi, Marathi",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Languages he speaks.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "english, hindi, marathi",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}, {
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_3ds_max",
			"label": "3ds Max",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Listed in his skills (resume / Portfolio 2026).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "3ds max",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "skill_blender",
			"label": "Blender",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Listed in his skills (resume / Portfolio 2026).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "blender",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_davinci_resolve",
			"label": "DaVinci Resolve",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Listed in his skills (resume / Portfolio 2026).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "davinci resolve",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_indesign",
			"label": "InDesign",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Listed in his skills (resume / Portfolio 2026).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "indesign",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_premiere_pro",
			"label": "Premiere Pro",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Listed in his skills (resume / Portfolio 2026).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "premiere pro",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_qgis",
			"label": "QGIS",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Listed in his skills (resume / Portfolio 2026).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "qgis",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_revit",
			"label": "Revit",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Listed in his skills (resume / Portfolio 2026).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "revit",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_twinmotion",
			"label": "Twinmotion",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Listed in his skills (resume / Portfolio 2026).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "twinmotion",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "skill_unreal_engine",
			"label": "Unreal Engine",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Listed in his skills (resume / Portfolio 2026).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "unreal engine",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "skill_journey_mapping",
			"label": "Journey mapping",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Research / practice method listed on his resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "journey mapping",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_personas",
			"label": "Personas",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Research / practice method listed on his resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "personas",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_survey_design",
			"label": "Survey design",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Research / practice method listed on his resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "survey design",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "uiux_courses",
			"label": "UI/UX courses: Minoti Mehta (2026), Kaarwan (2023)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "UI/UX Design workshops listed on the product resume and Portfolio 2026.",
			"file_type": "document",
			"kind": "Education",
			"norm_label": "ui/ux courses: minoti mehta (2026), kaarwan (2023)",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}, {
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "ch_email",
			"label": "Email: shreerajn.work@",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 1,
			"community_name": "Shreeraj's toolkit",
			"contributor": "Grok Bot",
			"description": "Work email (handle only).",
			"file_type": "document",
			"kind": "Channel",
			"norm_label": "email: shreerajn.work@",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "ledger",
			"label": "Ledger",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 10,
			"community_name": "Portfolio runway",
			"contributor": "Grok Bot",
			"description": "A shared record of design decisions for architects and their clients: drawings, decisions, changes, billing, no-account client view. Live on Vercel.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "ledger",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": "https://ledger-chi-rust.vercel.app",
			"sources": [
				{
					"key": "LS",
					"label": "Live-site scrape (projects.json)",
					"file": "sources/live-sites-scrape.json",
					"url": null
				},
				{
					"key": "SR",
					"label": "Showreel draft config",
					"file": "sources/showreel-config.json",
					"url": null
				},
				{
					"key": "LT",
					"label": "Linktree",
					"file": "sources/linktree.md",
					"url": "https://linktr.ee/shreeraj301"
				}
			]
		},
		{
			"id": "bot_super_designer",
			"label": "Super Designer",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 10,
			"community_name": "Portfolio runway",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team. Public on Linktree.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "super designer",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": "https://x.ai/bot/lyPUsFi3GS8V_v1FOP-Hj",
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "goal_portfolio",
			"label": "Product design portfolio (case studies)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 10,
			"community_name": "Portfolio runway",
			"contributor": "Grok Bot",
			"description": "Case-study picks: SpaceKit and Landing.",
			"file_type": "document",
			"kind": "Goal/Career path",
			"norm_label": "product design portfolio (case studies)",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "skill_github",
			"label": "GitHub",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 10,
			"community_name": "Portfolio runway",
			"contributor": "Grok Bot",
			"description": "Design / AI-assisted build tool on the product design resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "github",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_vercel",
			"label": "Vercel",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 10,
			"community_name": "Portfolio runway",
			"contributor": "Grok Bot",
			"description": "Design / AI-assisted build tool on the product design resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "vercel",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "spacekit",
			"label": "SpaceKit (case study pick)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 10,
			"community_name": "Portfolio runway",
			"contributor": "Grok Bot",
			"description": "One of two portfolio case-study picks. The showreel draft shows \"2x faster layouts\" but flags it as demo data.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "spacekit (case study pick)",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "SR",
				"label": "Showreel draft config",
				"file": "sources/showreel-config.json",
				"url": null
			}]
		},
		{
			"id": "landing",
			"label": "Landing (case study pick)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 10,
			"community_name": "Portfolio runway",
			"contributor": "Grok Bot",
			"description": "One of two portfolio case-study picks. The showreel draft shows \"40% fewer drop-offs\" but flags it as demo data.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "landing (case study pick)",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "SR",
				"label": "Showreel draft config",
				"file": "sources/showreel-config.json",
				"url": null
			}]
		},
		{
			"id": "skill_information_architecture",
			"label": "Information architecture",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 10,
			"community_name": "Portfolio runway",
			"contributor": "Grok Bot",
			"description": "Research / practice method listed on his resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "information architecture",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "goal_runway",
			"label": "6-7 month runway from Oct 2026",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 10,
			"community_name": "Portfolio runway",
			"contributor": "Grok Bot",
			"description": "Time to learn, build a portfolio and apply.",
			"file_type": "document",
			"kind": "Goal/Career path",
			"norm_label": "6-7 month runway from oct 2026",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "ch_instagram",
			"label": "Instagram @_shreeraj__",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 11,
			"community_name": "Linktree & social",
			"contributor": "Grok Bot",
			"description": "339 followers, 483 following, 1 post (public meta, 17 Oct 2026).",
			"file_type": "document",
			"kind": "Channel",
			"norm_label": "instagram @_shreeraj__",
			"source_file": "writing-and-social.md",
			"source_location": null,
			"source_url": "https://instagram.com/_shreeraj__",
			"sources": [{
				"key": "WS",
				"label": "Medium / Substack / Instagram pages",
				"file": "sources/writing-and-social.md",
				"url": null
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "bitebudget",
			"label": "BiteBudget",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 11,
			"community_name": "Linktree & social",
			"contributor": "Grok Bot",
			"description": "A budget recipe engine & AI sous-chef.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "bitebudget",
			"source_file": "linktree.md",
			"source_location": null,
			"source_url": "https://bite-budget-six.vercel.app",
			"sources": [{
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "pawpal",
			"label": "PawPal",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 11,
			"community_name": "Linktree & social",
			"contributor": "Grok Bot",
			"description": "A dog walking app (Figma Sites).",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "pawpal",
			"source_file": "linktree.md",
			"source_location": null,
			"source_url": "https://foyer-drawn-59924504.figma.site",
			"sources": [{
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "zoo_payment",
			"label": "Zoo payment flow concept",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 11,
			"community_name": "Linktree & social",
			"contributor": "Grok Bot",
			"description": "A payment flow concept for a zoo website (Figma Sites).",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "zoo payment flow concept",
			"source_file": "linktree.md",
			"source_location": null,
			"source_url": "https://portal-safe-87289165.figma.site",
			"sources": [{
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "instagram_trial_reel",
			"label": "Instagram trial reel (planned)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 11,
			"community_name": "Linktree & social",
			"contributor": "Grok Bot",
			"description": "He planned an Instagram trial reel for Type City / Voice Garden.",
			"file_type": "document",
			"kind": "Goal/Career path",
			"norm_label": "instagram trial reel (planned)",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "ch_linktree",
			"label": "Linktree /shreeraj301",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 11,
			"community_name": "Linktree & social",
			"contributor": "Grok Bot",
			"description": "Hub for resumes, portfolios, thesis, vibe-coded projects and bots.",
			"file_type": "document",
			"kind": "Channel",
			"norm_label": "linktree /shreeraj301",
			"source_file": "linktree.md",
			"source_location": null,
			"source_url": "https://linktr.ee/shreeraj301",
			"sources": [{
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "ch_linkedin",
			"label": "LinkedIn /shreerajnarwade301",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 11,
			"community_name": "Linktree & social",
			"contributor": "Grok Bot",
			"description": "Profile; not publicly readable without login.",
			"file_type": "document",
			"kind": "Channel",
			"norm_label": "linkedin /shreerajnarwade301",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": "https://www.linkedin.com/in/shreerajnarwade301/",
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "pref_uiux_pro_max",
			"label": "UI UX Pro Max skill",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 12,
			"community_name": "Design guidance",
			"contributor": "Grok Bot",
			"description": "All his bots follow the UI UX Pro Max skill.",
			"file_type": "concept",
			"kind": "Preference/Value",
			"norm_label": "ui ux pro max skill",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "bot_designer_skills",
			"label": "Designer Skills",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 12,
			"community_name": "Design guidance",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "designer skills",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "bot_hci_research_assistant",
			"label": "HCI Research Assistant",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "hci research assistant",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "bot_hci_sop_writer",
			"label": "HCI SOP Writer",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "hci sop writer",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "berkeley_mims",
			"label": "UC Berkeley MIMS",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Compared on Bench; not on his memory shortlist.",
			"file_type": "document",
			"kind": "Program/University",
			"norm_label": "uc berkeley mims",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "LS",
				"label": "Live-site scrape (projects.json)",
				"file": "sources/live-sites-scrape.json",
				"url": null
			}]
		},
		{
			"id": "michigan_msi",
			"label": "Michigan MSI",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Compared on Bench; not on his memory shortlist.",
			"file_type": "document",
			"kind": "Program/University",
			"norm_label": "michigan msi",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "LS",
				"label": "Live-site scrape (projects.json)",
				"file": "sources/live-sites-scrape.json",
				"url": null
			}]
		},
		{
			"id": "tcd_idm",
			"label": "TCD MSc Interactive Digital Media",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Ireland option (Trinity College Dublin).",
			"file_type": "document",
			"kind": "Program/University",
			"norm_label": "tcd msc interactive digital media",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "ucd_hci",
			"label": "UCD MSc HCI",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Ireland option (University College Dublin).",
			"file_type": "document",
			"kind": "Program/University",
			"norm_label": "ucd msc hci",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "dublin_budget",
			"label": "Dublin budget: EUR 2,000 / month",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Living budget assumed for Ireland.",
			"file_type": "document",
			"kind": "Goal/Career path",
			"norm_label": "dublin budget: eur 2,000 / month",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "fifth_tbd",
			"label": "Fifth US program (TBD)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Not chosen yet.",
			"file_type": "document",
			"kind": "Program/University",
			"norm_label": "fifth us program (tbd)",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "uw_mhcid",
			"label": "UW MHCI+D",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "On the US shortlist.",
			"file_type": "document",
			"kind": "Program/University",
			"norm_label": "uw mhci+d",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "cmu_mhci",
			"label": "CMU MHCI",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "On the US shortlist; Bench calls it the \"best default if you can fund a one-year program\".",
			"file_type": "document",
			"kind": "Program/University",
			"norm_label": "cmu mhci",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "ut_austin",
			"label": "UT Austin (MSIS)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "On the US shortlist; Bench lists UT Austin MSIS.",
			"file_type": "document",
			"kind": "Program/University",
			"norm_label": "ut austin (msis)",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "pl_atlanta",
			"label": "Atlanta",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "atlanta",
			"source_file": "pranay-kotadia-about.txt",
			"source_location": null,
			"source_url": "https://pranaykotadia.in",
			"sources": [{
				"key": "PK",
				"label": "pranaykotadia.in About page (capture)",
				"file": "sources/pranay-kotadia-about.txt",
				"url": "https://pranaykotadia.in"
			}]
		},
		{
			"id": "pl_germany",
			"label": "Germany (explored earlier)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "germany (explored earlier)",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "pl_ireland",
			"label": "Dublin, Ireland",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "dublin, ireland",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "pl_uk",
			"label": "United Kingdom (ruled out)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "united kingdom (ruled out)",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "pl_usa",
			"label": "United States",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "united states",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "bench",
			"label": "Bench",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Six HCI programs, compared: CMU MHCI, Georgia Tech MS-HCI, UC Berkeley MIMS, UW MHCI+D, Michigan MSI, UT Austin MSIS. A working rank for a product-design move from India. Live on Vercel.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "bench",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": "https://bench-mu-two.vercel.app",
			"sources": [
				{
					"key": "LS",
					"label": "Live-site scrape (projects.json)",
					"file": "sources/live-sites-scrape.json",
					"url": null
				},
				{
					"key": "SR",
					"label": "Showreel draft config",
					"file": "sources/showreel-config.json",
					"url": null
				},
				{
					"key": "LT",
					"label": "Linktree",
					"file": "sources/linktree.md",
					"url": "https://linktr.ee/shreeraj301"
				}
			]
		},
		{
			"id": "goal_masters",
			"label": "Master's in HCI, 2027 intake",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Top choice Georgia Tech MS-HCI; US plus Ireland shortlist; UK ruled out; Germany looked at earlier.",
			"file_type": "document",
			"kind": "Goal/Career path",
			"norm_label": "master's in hci, 2027 intake",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "gt_mshci",
			"label": "Georgia Tech MS-HCI (Interactive Computing)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "Top choice for 2027.",
			"file_type": "document",
			"kind": "Program/University",
			"norm_label": "georgia tech ms-hci (interactive computing)",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "pranay",
			"label": "Pranay Kotadia",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 2,
			"community_name": "HCI master's, 2027",
			"contributor": "Grok Bot",
			"description": "\"Designer, once an architect.\" Product designer in Atlanta; MS HCI at Georgia Tech, B Arch from SEA, University of Mumbai. \"Mostly interested in what makes people trust a product, especially an AI one.\" His case studies are the quality bar for Shreeraj's case-study prompt.",
			"file_type": "document",
			"kind": "Person",
			"norm_label": "pranay kotadia",
			"source_file": "pranay-kotadia-about.txt",
			"source_location": null,
			"source_url": "https://pranaykotadia.in",
			"sources": [{
				"key": "PK",
				"label": "pranaykotadia.in About page (capture)",
				"file": "sources/pranay-kotadia-about.txt",
				"url": "https://pranaykotadia.in"
			}]
		},
		{
			"id": "miglani_residence",
			"label": "Miglani Residence, Gurugram",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "12,800 sq ft. Floor plans, internal zoning, massing and light study models, site visits, interior detailing.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "miglani residence, gurugram",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}, {
				"key": "I24",
				"label": "Internship Portfolio 2024 (Drive PDF)",
				"file": "sources/internship-portfolio-2024.txt",
				"url": "https://drive.google.com/file/d/1bOaRvUbsK_lUJ7mB5m2Wae084o-jVlbR/view"
			}]
		},
		{
			"id": "goenka_residence",
			"label": "Goenka Residence, Varanasi",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "15,800 sq ft high-end boutique home.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "goenka residence, varanasi",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}, {
				"key": "I24",
				"label": "Internship Portfolio 2024 (Drive PDF)",
				"file": "sources/internship-portfolio-2024.txt",
				"url": "https://drive.google.com/file/d/1bOaRvUbsK_lUJ7mB5m2Wae084o-jVlbR/view"
			}]
		},
		{
			"id": "portfolio_2024",
			"label": "Internship Portfolio 2024 (Anagram)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "15-page internship portfolio.",
			"file_type": "document",
			"kind": "Channel",
			"norm_label": "internship portfolio 2024 (anagram)",
			"source_file": "internship-portfolio-2024.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1bOaRvUbsK_lUJ7mB5m2Wae084o-jVlbR/view",
			"sources": [{
				"key": "I24",
				"label": "Internship Portfolio 2024 (Drive PDF)",
				"file": "sources/internship-portfolio-2024.txt",
				"url": "https://drive.google.com/file/d/1bOaRvUbsK_lUJ7mB5m2Wae084o-jVlbR/view"
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "hanuman_mandir_residence",
			"label": "Hanuman Mandir Residence, Saket",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "6,400 sq ft. Plan options for a dense urban site against client feedback.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "hanuman mandir residence, saket",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}, {
				"key": "I24",
				"label": "Internship Portfolio 2024 (Drive PDF)",
				"file": "sources/internship-portfolio-2024.txt",
				"url": "https://drive.google.com/file/d/1bOaRvUbsK_lUJ7mB5m2Wae084o-jVlbR/view"
			}]
		},
		{
			"id": "palm_springs_iiid",
			"label": "Palm Springs Villa, IIID Design Excellence Awards",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "Curated award entries in two categories, both winning; redrafted plans, drew a new sectional perspective, rendered views and photographed the built villa.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "palm springs villa, iiid design excellence awards",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}, {
				"key": "I24",
				"label": "Internship Portfolio 2024 (Drive PDF)",
				"file": "sources/internship-portfolio-2024.txt",
				"url": "https://drive.google.com/file/d/1bOaRvUbsK_lUJ7mB5m2Wae084o-jVlbR/view"
			}]
		},
		{
			"id": "goal_junior_architect",
			"label": "Junior Architect roles (public, urban, institutional)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "In Mumbai, Delhi and Bengaluru.",
			"file_type": "document",
			"kind": "Goal/Career path",
			"norm_label": "junior architect roles (public, urban, institutional)",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "prakriti_school",
			"label": "Prakriti School, Greater Noida",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "Institutional, 1,03,200 sq ft, basement + 6 floors. Owned plans, sections, renders and client presentations from concept to execution-set release; coordinated structural and MEP. \"A project I consider my own from foundation to finish.\"",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "prakriti school, greater noida",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [
				{
					"key": "RA",
					"label": "Architecture resume (PDF)",
					"file": "sources/resume-architecture.txt",
					"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
				},
				{
					"key": "RP",
					"label": "Product Design resume (PDF)",
					"file": "sources/resume-product-design.txt",
					"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
				},
				{
					"key": "I24",
					"label": "Internship Portfolio 2024 (Drive PDF)",
					"file": "sources/internship-portfolio-2024.txt",
					"url": "https://drive.google.com/file/d/1bOaRvUbsK_lUJ7mB5m2Wae084o-jVlbR/view"
				}
			]
		},
		{
			"id": "odarkhet_hotel",
			"label": "Odarkhet Hotel, Uttarakhand",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "Luxury retreat; early-stage plans and conceptual development.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "odarkhet hotel, uttarakhand",
			"source_file": "internship-portfolio-2024.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1bOaRvUbsK_lUJ7mB5m2Wae084o-jVlbR/view",
			"sources": [{
				"key": "I24",
				"label": "Internship Portfolio 2024 (Drive PDF)",
				"file": "sources/internship-portfolio-2024.txt",
				"url": "https://drive.google.com/file/d/1bOaRvUbsK_lUJ7mB5m2Wae084o-jVlbR/view"
			}]
		},
		{
			"id": "anagram",
			"label": "Architectural Intern, Anagram Architects (New Delhi)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "Nov 2024 - Apr 2025. Studio founded by Vaibhav Dimri and Madhav Raman. Worked across institutional, retail, luxury residential and award work.",
			"file_type": "document",
			"kind": "Experience",
			"norm_label": "architectural intern, anagram architects (new delhi)",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [
				{
					"key": "RA",
					"label": "Architecture resume (PDF)",
					"file": "sources/resume-architecture.txt",
					"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
				},
				{
					"key": "RP",
					"label": "Product Design resume (PDF)",
					"file": "sources/resume-product-design.txt",
					"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
				},
				{
					"key": "I24",
					"label": "Internship Portfolio 2024 (Drive PDF)",
					"file": "sources/internship-portfolio-2024.txt",
					"url": "https://drive.google.com/file/d/1bOaRvUbsK_lUJ7mB5m2Wae084o-jVlbR/view"
				}
			]
		},
		{
			"id": "pl_bengaluru",
			"label": "Bengaluru",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "bengaluru",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "pl_delhi",
			"label": "New Delhi",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "new delhi",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "pl_greater_noida",
			"label": "Greater Noida",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "greater noida",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "pl_gurugram",
			"label": "Gurugram",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "gurugram",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "pl_saket",
			"label": "Saket, New Delhi",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "saket, new delhi",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "pl_uttarakhand",
			"label": "Uttarakhand",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "uttarakhand",
			"source_file": "internship-portfolio-2024.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1bOaRvUbsK_lUJ7mB5m2Wae084o-jVlbR/view",
			"sources": [{
				"key": "I24",
				"label": "Internship Portfolio 2024 (Drive PDF)",
				"file": "sources/internship-portfolio-2024.txt",
				"url": "https://drive.google.com/file/d/1bOaRvUbsK_lUJ7mB5m2Wae084o-jVlbR/view"
			}]
		},
		{
			"id": "pl_varanasi",
			"label": "Varanasi",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "varanasi",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_working_drawings_boq",
			"label": "Working drawings & BOQ",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "Research / practice method listed on his resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "working drawings & boq",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "working_drawings",
			"label": "Working Drawings, Bimbisar Nagar, Goregaon",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "Semester 6 Building Making: a community building (day-care, hall, kitchen, clinic, library) resolved to a construction documentation set.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "working drawings, bimbisar nagar, goregaon",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "resume_arch",
			"label": "Architecture resume",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 3,
			"community_name": "Anagram practice",
			"contributor": "Grok Bot",
			"description": "\"Architectural Designer (B.Arch. 2026)\".",
			"file_type": "document",
			"kind": "Channel",
			"norm_label": "architecture resume",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "paper_trail_poems",
			"label": "Paper Trail: 33 poems",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "33 poems tagged with six moods: Tender, Longing, Grief, Joy, Anger, Wonder. Includes Hindi/Urdu poems (\"laapata\", \"khabar banke milo\").",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "paper trail: 33 poems",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [
				{
					"key": "M",
					"label": "Memory facts",
					"file": "sources/memory-facts.md",
					"url": null
				},
				{
					"key": "LS",
					"label": "Live-site scrape (projects.json)",
					"file": "sources/live-sites-scrape.json",
					"url": null
				},
				{
					"key": "PTC",
					"label": "Paper Trail reel copy",
					"file": "sources/paper-trail-reel-copy.json",
					"url": null
				}
			]
		},
		{
			"id": "th_memory_longing",
			"label": "Memory & longing",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "A recurring subject of the poems: remembering, strangers, staying.",
			"file_type": "concept",
			"kind": "Theme",
			"norm_label": "memory & longing",
			"source_file": "paper-trail-reel-copy.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "PTC",
				"label": "Paper Trail reel copy",
				"file": "sources/paper-trail-reel-copy.json",
				"url": null
			}]
		},
		{
			"id": "mood_anger",
			"label": "Mood: Anger",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "One of the six moods used to filter Paper Trail.",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "mood: anger",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "mood_grief",
			"label": "Mood: Grief",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "One of the six moods used to filter Paper Trail.",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "mood: grief",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "mood_joy",
			"label": "Mood: Joy",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "One of the six moods used to filter Paper Trail.",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "mood: joy",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "mood_longing",
			"label": "Mood: Longing",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "One of the six moods used to filter Paper Trail.",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "mood: longing",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "mood_tender",
			"label": "Mood: Tender",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "One of the six moods used to filter Paper Trail.",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "mood: tender",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "mood_wonder",
			"label": "Mood: Wonder",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "One of the six moods used to filter Paper Trail.",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "mood: wonder",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "poem_laapata",
			"label": "\"laapata\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "Poem on the Paper Trail wall, mood Grief. \"sheher se poochha mera pata\" (Hindi/Urdu).",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "\"laapata\"",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "LS",
				"label": "Live-site scrape (projects.json)",
				"file": "sources/live-sites-scrape.json",
				"url": null
			}]
		},
		{
			"id": "poem_does_love_live_here",
			"label": "\"does love live here?\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "Poem on the Paper Trail wall, mood Grief. \"the garden still waits,\"",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "\"does love live here?\"",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "LS",
				"label": "Live-site scrape (projects.json)",
				"file": "sources/live-sites-scrape.json",
				"url": null
			}]
		},
		{
			"id": "poem_no_bad_blood",
			"label": "\"no bad blood\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "Poem on the Paper Trail wall, mood Grief. \"there was no last conversation,\"",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "\"no bad blood\"",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "LS",
				"label": "Live-site scrape (projects.json)",
				"file": "sources/live-sites-scrape.json",
				"url": null
			}]
		},
		{
			"id": "poem_becoming_strangers",
			"label": "\"becoming strangers\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "Poem on the Paper Trail wall, mood Grief. \"there wasn't a moment\"",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "\"becoming strangers\"",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "LS",
				"label": "Live-site scrape (projects.json)",
				"file": "sources/live-sites-scrape.json",
				"url": null
			}]
		},
		{
			"id": "poem_three_days",
			"label": "\"three days\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "Poem on the Paper Trail wall, mood Joy. \"It's barely been three days,\"",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "\"three days\"",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "LS",
				"label": "Live-site scrape (projects.json)",
				"file": "sources/live-sites-scrape.json",
				"url": null
			}]
		},
		{
			"id": "poem_allow_me_this_much",
			"label": "\"allow me this much\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "Poem on the Paper Trail wall, mood Longing. \"i know we'll never be together,\"",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "\"allow me this much\"",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "LS",
				"label": "Live-site scrape (projects.json)",
				"file": "sources/live-sites-scrape.json",
				"url": null
			}]
		},
		{
			"id": "poem_khabar_banke_milo",
			"label": "\"khabar banke milo\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "Poem on the Paper Trail wall, mood Longing. \"socha tha tujhe bhool ke aa...\" (Hindi/Urdu).",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "\"khabar banke milo\"",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "LS",
				"label": "Live-site scrape (projects.json)",
				"file": "sources/live-sites-scrape.json",
				"url": null
			}]
		},
		{
			"id": "poem_not_violently",
			"label": "\"not violently\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "Poem on the Paper Trail wall, mood Tender. \"I don't love you violently. My love is restraint.\"",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "\"not violently\"",
			"source_file": "paper-trail-reel-copy.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "PTC",
				"label": "Paper Trail reel copy",
				"file": "sources/paper-trail-reel-copy.json",
				"url": null
			}]
		},
		{
			"id": "poem_where_i_stayed",
			"label": "\"where i stayed\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "Poem on the Paper Trail wall, mood Tender. \"and for once, memory led me somewhere i wanted to stay.\" Signed ~shreeraj.",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "\"where i stayed\"",
			"source_file": "paper-trail-reel-copy.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "PTC",
				"label": "Paper Trail reel copy",
				"file": "sources/paper-trail-reel-copy.json",
				"url": null
			}]
		},
		{
			"id": "poem_three_feet_away",
			"label": "\"three feet away\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "Poem on the Paper Trail wall, mood Wonder. \"i could have been standing, three feet from the moment ...\" Signed ~shreeraj.",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "\"three feet away\"",
			"source_file": "paper-trail-reel-copy.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "PTC",
				"label": "Paper Trail reel copy",
				"file": "sources/paper-trail-reel-copy.json",
				"url": null
			}]
		},
		{
			"id": "poem_people_who_remember_me",
			"label": "\"people who remember me\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 4,
			"community_name": "Paper Trail poems",
			"contributor": "Grok Bot",
			"description": "Poem on the Paper Trail wall, mood Wonder. \"there are people who still know me\"",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "\"people who remember me\"",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "LS",
				"label": "Live-site scrape (projects.json)",
				"file": "sources/live-sites-scrape.json",
				"url": null
			}]
		},
		{
			"id": "pref_karpathy",
			"label": "Karpathy guidelines",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "All his bots follow the Karpathy guidelines.",
			"file_type": "concept",
			"kind": "Preference/Value",
			"norm_label": "karpathy guidelines",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "th_restraint",
			"label": "Restraint & slowness",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "BRB prioritises \"clarity, restraint, and intentional interaction\"; a poem says \"My love is restraint\".",
			"file_type": "concept",
			"kind": "Theme",
			"norm_label": "restraint & slowness",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}, {
				"key": "PTC",
				"label": "Paper Trail reel copy",
				"file": "sources/paper-trail-reel-copy.json",
				"url": null
			}]
		},
		{
			"id": "bot_ai_agency",
			"label": "AI Agency",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team. Public on Linktree.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "ai agency",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": "https://x.ai/bot/qDnrrHdDp3FKKqqepl0pF",
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "bot_board_room",
			"label": "Board Room",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team. Public on Linktree.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "board room",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": "https://x.ai/bot/0z4VBCn_VtdMIAuAsDWLA",
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "bot_logo_design",
			"label": "Logo Design",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team. Public on Linktree.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "logo design",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": "https://x.ai/bot/Oamyed1bSn6NY35WQRKu1",
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "bot_critiquito",
			"label": "Critiquito",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "critiquito",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "bot_figma_bro",
			"label": "figma bro",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "figma bro",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "bot_garu",
			"label": "Garu",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "garu",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "bot_hallmark",
			"label": "Hallmark",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "hallmark",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "bot_humanizer",
			"label": "Humanizer",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "humanizer",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "bot_last30days",
			"label": "last30days",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "last30days",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "bot_opendesign",
			"label": "OpenDesign",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "opendesign",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "bot_product_idea_stress_test",
			"label": "Product Idea Stress Test",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "Bot in his AI team.",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "product idea stress test",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "skill_figma",
			"label": "Figma",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "Design / AI-assisted build tool on the product design resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "figma",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "bot_team",
			"label": "AI bot team (17 Grok Bots)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "His team of bots; five are linked publicly on Linktree under \"My Bots\".",
			"file_type": "document",
			"kind": "Bot/Agent",
			"norm_label": "ai bot team (17 grok bots)",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "brb",
			"label": "BRB: the feed can wait",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "Semester 9 UX case study: a minimal, anti-addictive digital-detox app for Gen Z, with daily colour prompts and a private 3x3 collage; no gamification or notifications.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "brb: the feed can wait",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "pref_no_ai_slop",
			"label": "Tasteful, non-AI-slop design and writing",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 5,
			"community_name": "Bots & taste rules",
			"contributor": "Grok Bot",
			"description": "Wants work that looks and reads as made, not generated.",
			"file_type": "concept",
			"kind": "Preference/Value",
			"norm_label": "tasteful, non-ai-slop design and writing",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "localxsociety",
			"label": "Architectural Intern, LocalxSociety (Europe)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "Apr - May 2024. Field research in Paris, Barcelona, Madrid and Lisbon; led a two-person team.",
			"file_type": "document",
			"kind": "Experience",
			"norm_label": "architectural intern, localxsociety (europe)",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [
				{
					"key": "RA",
					"label": "Architecture resume (PDF)",
					"file": "sources/resume-architecture.txt",
					"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
				},
				{
					"key": "RP",
					"label": "Product Design resume (PDF)",
					"file": "sources/resume-product-design.txt",
					"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
				},
				{
					"key": "P26",
					"label": "Portfolio 2026 (Drive PDF)",
					"file": "sources/portfolio-2026.txt",
					"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
				}
			]
		},
		{
			"id": "aaditya_pandit",
			"label": "Aaditya Pandit",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "Collaborator named in Portfolio 2026.",
			"file_type": "document",
			"kind": "Person",
			"norm_label": "aaditya pandit",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "pref_sport",
			"label": "Basketball, badminton, squash",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "District-level basketball, inter-school badminton champions; a 9th-grade squash final recalled in his essay.",
			"file_type": "concept",
			"kind": "Preference/Value",
			"norm_label": "basketball, badminton, squash",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}, {
				"key": "WS",
				"label": "Medium / Substack / Instagram pages",
				"file": "sources/writing-and-social.md",
				"url": null
			}]
		},
		{
			"id": "essay_understood",
			"label": "What Being Understood Actually Feels Like",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "Essay (16 Aug 2026): \"On the difference between being heard and being understood.\"",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "what being understood actually feels like",
			"source_file": "writing-and-social.md",
			"source_location": null,
			"source_url": "https://medium.com/@shreerajnarwade301/what-being-understood-actually-feels-like-530dddfa8e4f",
			"sources": [{
				"key": "WS",
				"label": "Medium / Substack / Instagram pages",
				"file": "sources/writing-and-social.md",
				"url": null
			}]
		},
		{
			"id": "essay_gut_feeling",
			"label": "The Psychology of My \"Gut Feeling\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "Essay (Substack 5 Sep, Medium 9 Oct 2026): \"Trying to decode the subconscious algorithm that drives our hardest decisions.\" Opens with a ~shreeraj poem and a 9th-grade squash final.",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "the psychology of my \"gut feeling\"",
			"source_file": "writing-and-social.md",
			"source_location": null,
			"source_url": "https://medium.com/@shreerajnarwade301/the-psychology-of-my-gut-feeling-a3c712c2cfa1",
			"sources": [{
				"key": "WS",
				"label": "Medium / Substack / Instagram pages",
				"file": "sources/writing-and-social.md",
				"url": null
			}]
		},
		{
			"id": "skill_enscape",
			"label": "Enscape",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "Expert (memory; \"Software (advanced)\" on the architecture resume).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "enscape",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "ch_medium",
			"label": "Medium @shreerajnarwade301",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "Personal essays.",
			"file_type": "document",
			"kind": "Channel",
			"norm_label": "medium @shreerajnarwade301",
			"source_file": "linktree.md",
			"source_location": null,
			"source_url": "https://medium.com/@shreerajnarwade301",
			"sources": [{
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}, {
				"key": "WS",
				"label": "Medium / Substack / Instagram pages",
				"file": "sources/writing-and-social.md",
				"url": null
			}]
		},
		{
			"id": "pl_europe_cities",
			"label": "Paris, Barcelona, Madrid",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "paris, barcelona, madrid",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "pl_portugal",
			"label": "Lisbon, Portugal",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "Place named in the source.",
			"file_type": "document",
			"kind": "Place",
			"norm_label": "lisbon, portugal",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "poems_portfolio",
			"label": "Portfolio poems: \"her name\", \"unwavering\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "Poems printed in the Creative Musings section of Portfolio 2026.",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "portfolio poems: \"her name\", \"unwavering\"",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "abrir_open",
			"label": "ABRIR / OPEN: Blurring the Boundaries",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "Public adaptive-reuse proposal for the Government of Portugal with FabLab Lisbon (May 2024), with Aaditya Pandit. Flexible, collaborative workshop spaces.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "abrir / open: blurring the boundaries",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [
				{
					"key": "RA",
					"label": "Architecture resume (PDF)",
					"file": "sources/resume-architecture.txt",
					"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
				},
				{
					"key": "RP",
					"label": "Product Design resume (PDF)",
					"file": "sources/resume-product-design.txt",
					"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
				},
				{
					"key": "P26",
					"label": "Portfolio 2026 (Drive PDF)",
					"file": "sources/portfolio-2026.txt",
					"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
				}
			]
		},
		{
			"id": "ch_substack",
			"label": "Substack @shreeraj301",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "Publication created 1 Jun 2026. \"Designer | Researcher | Architect | Poet\".",
			"file_type": "document",
			"kind": "Channel",
			"norm_label": "substack @shreeraj301",
			"source_file": "writing-and-social.md",
			"source_location": null,
			"source_url": "https://substack.com/@shreeraj301",
			"sources": [{
				"key": "WS",
				"label": "Medium / Substack / Instagram pages",
				"file": "sources/writing-and-social.md",
				"url": null
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "skill_precedent_analysis",
			"label": "Precedent analysis",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "Research / practice method listed on his resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "precedent analysis",
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf",
			"sources": [{
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_user_research",
			"label": "User research",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "Research / practice method listed on his resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "user research",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "poetry",
			"label": "Poetry signed \"~shreeraj\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 6,
			"community_name": "Europe, essays, field",
			"contributor": "Grok Bot",
			"description": "Writes poems signed \"~shreeraj\". Poems also appear in Portfolio 2026 (\"Creative Musings\") and open his Medium essay.",
			"file_type": "document",
			"kind": "Poem/Writing",
			"norm_label": "poetry signed \"~shreeraj\"",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [
				{
					"key": "M",
					"label": "Memory facts",
					"file": "sources/memory-facts.md",
					"url": null
				},
				{
					"key": "P26",
					"label": "Portfolio 2026 (Drive PDF)",
					"file": "sources/portfolio-2026.txt",
					"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
				},
				{
					"key": "WS",
					"label": "Medium / Substack / Instagram pages",
					"file": "sources/writing-and-social.md",
					"url": null
				}
			]
		},
		{
			"id": "portfolio_2026",
			"label": "Portfolio 2026: Selected Works",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "14-page architecture/design portfolio: thesis, fortwall, Shiatsu pod, BRB, Delta printer, ABRIR/OPEN, working drawings, explorations, poems, photography.",
			"file_type": "document",
			"kind": "Channel",
			"norm_label": "portfolio 2026: selected works",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "anika_pugalia",
			"label": "Anika Pugalia",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "Collaborator named in Portfolio 2026.",
			"file_type": "document",
			"kind": "Person",
			"norm_label": "anika pugalia",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "gauri_shinde",
			"label": "Gauri Shinde",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "Collaborator named in Portfolio 2026.",
			"file_type": "document",
			"kind": "Person",
			"norm_label": "gauri shinde",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "skill_python",
			"label": "Python",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "Design / AI-assisted build tool on the product design resume. Basic.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "python",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_claude",
			"label": "Claude",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "Design / AI-assisted build tool on the product design resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "claude",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_cursor",
			"label": "Cursor",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "Design / AI-assisted build tool on the product design resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "cursor",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_lumion",
			"label": "Lumion",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "Expert (memory; \"Software (advanced)\" on the architecture resume).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "lumion",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "creative_explorations",
			"label": "Creative explorations: geodesic sphere, the Gherkin",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "Parametric studies in Grasshopper and renders in Lumion.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "creative explorations: geodesic sphere, the gherkin",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "quiet_observations",
			"label": "Quiet Observations (photography)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "Photography section of Portfolio 2026.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "quiet observations (photography)",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "delta_printer",
			"label": "Delta 3D Printer",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "Semester 3 Architectural Kitchen, with Gauri Shinde (team of 2): rebuilt a Cartesian printer as a delta printer and wrote its code. \"How do the tools shape our idea of form and space?\"",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "delta 3d printer",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [
				{
					"key": "P26",
					"label": "Portfolio 2026 (Drive PDF)",
					"file": "sources/portfolio-2026.txt",
					"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
				},
				{
					"key": "RP",
					"label": "Product Design resume (PDF)",
					"file": "sources/resume-product-design.txt",
					"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
				},
				{
					"key": "RA",
					"label": "Architecture resume (PDF)",
					"file": "sources/resume-architecture.txt",
					"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
				}
			]
		},
		{
			"id": "shiatsu_pod",
			"label": "Shiatsu Pod Massager",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "Semester 7 Product Design, with Anika Pugalia. Dual-function teak and resin-cork massager, lathe-turned, PLA internals.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "shiatsu pod massager",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "th_ai_native",
			"label": "AI-native making",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "Ships working web apps with Claude, Figma Make, Grok, Cursor, Google AI Studio, GitHub and Vercel. Showreel: \"Pen before prompt ... Judging is the job.\"",
			"file_type": "concept",
			"kind": "Theme",
			"norm_label": "ai-native making",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [
				{
					"key": "RP",
					"label": "Product Design resume (PDF)",
					"file": "sources/resume-product-design.txt",
					"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
				},
				{
					"key": "LT",
					"label": "Linktree",
					"file": "sources/linktree.md",
					"url": "https://linktr.ee/shreeraj301"
				},
				{
					"key": "SR",
					"label": "Showreel draft config",
					"file": "sources/showreel-config.json",
					"url": null
				}
			]
		},
		{
			"id": "skill_grasshopper",
			"label": "Grasshopper",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "Strong (memory and architecture resume).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "grasshopper",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_rhino",
			"label": "Rhino",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "Strong (memory and architecture resume).",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "rhino",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}, {
				"key": "RA",
				"label": "Architecture resume (PDF)",
				"file": "sources/resume-architecture.txt",
				"url": "https://ugc.production.linktr.ee/3b30372c-33a0-4bcd-8e99-e2c2186441d1_Architecture-Resume-SAN.pdf"
			}]
		},
		{
			"id": "th_tools_shape_form",
			"label": "Tools shape form",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 7,
			"community_name": "Making: tools & form",
			"contributor": "Grok Bot",
			"description": "\"How do the tools shape our idea of form and space?\" (Delta 3D printer research question).",
			"file_type": "concept",
			"kind": "Theme",
			"norm_label": "tools shape form",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "plainform",
			"label": "Plainform",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 8,
			"community_name": "Trust & generative toys",
			"contributor": "Grok Bot",
			"description": "A form simplification tool (Figma Sites).",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "plainform",
			"source_file": "linktree.md",
			"source_location": null,
			"source_url": "https://verse-snail-93452857.figma.site",
			"sources": [{
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "lease_lens",
			"label": "Lease Lens",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 8,
			"community_name": "Trust & generative toys",
			"contributor": "Grok Bot",
			"description": "A lease clause analysis tool (Figma Sites).",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "lease lens",
			"source_file": "linktree.md",
			"source_location": null,
			"source_url": "https://brook-poppy-87653606.figma.site",
			"sources": [{
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "plain_paper",
			"label": "Plain Paper",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 8,
			"community_name": "Trust & generative toys",
			"contributor": "Grok Bot",
			"description": "AI-assisted research reader: explains jargon while preserving the original text and its limitations; \"focused on comprehension and trust\" (Oct 2026).",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "plain paper",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://trade-verify-42377008.figma.site",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "akshat",
			"label": "Akshat (@art.akshat)",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 8,
			"community_name": "Trust & generative toys",
			"contributor": "Grok Bot",
			"description": "Creator of Type Garden; Voice Garden is a credited skill-test remake of it.",
			"file_type": "document",
			"kind": "Person",
			"norm_label": "akshat (@art.akshat)",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "M",
				"label": "Memory facts",
				"file": "sources/memory-facts.md",
				"url": null
			}]
		},
		{
			"id": "th_privacy",
			"label": "Privacy-first / on-device",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 8,
			"community_name": "Trust & generative toys",
			"contributor": "Grok Bot",
			"description": "Found It uses local statement imports; Voice Garden analyses audio on the device.",
			"file_type": "concept",
			"kind": "Theme",
			"norm_label": "privacy-first / on-device",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}, {
				"key": "VG",
				"label": "Voice Garden README",
				"file": "sources/voice-garden-README.md",
				"url": null
			}]
		},
		{
			"id": "type_city",
			"label": "Type City",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 8,
			"community_name": "Trust & generative toys",
			"contributor": "Grok Bot",
			"description": "His own idea: letters grow into architecture. \"Type anything and watch it grow into a city.\" Scenes: Construction, Day to night, Monsoon, Crowd, Skyline, Sway, Visitor. Canvas 2D + Vite.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "type city",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [
				{
					"key": "M",
					"label": "Memory facts",
					"file": "sources/memory-facts.md",
					"url": null
				},
				{
					"key": "TC",
					"label": "Type City README",
					"file": "sources/type-city-README.md",
					"url": null
				},
				{
					"key": "TCI",
					"label": "Type City index.html",
					"file": "sources/type-city-index-meta.txt",
					"url": null
				},
				{
					"key": "WT",
					"label": "Tech probe of sites and repos",
					"file": "sources/web-tech-probe.md",
					"url": null
				}
			]
		},
		{
			"id": "found_it",
			"label": "Found It",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 8,
			"community_name": "Trust & generative toys",
			"contributor": "Grok Bot",
			"description": "Privacy-first subscription tracker built on local statement imports (Oct 2026).",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "found it",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://final-queue-71535764.figma.site",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}, {
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "th_trust",
			"label": "Trust & explicit agreement",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 8,
			"community_name": "Trust & generative toys",
			"contributor": "Grok Bot",
			"description": "Recurring aim: Ledger records who agreed to what; Plain Paper is \"focused on comprehension and trust\"; Found It is privacy-first.",
			"file_type": "concept",
			"kind": "Theme",
			"norm_label": "trust & explicit agreement",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_competitive_analysis",
			"label": "Competitive analysis",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 8,
			"community_name": "Trust & generative toys",
			"contributor": "Grok Bot",
			"description": "Research / practice method listed on his resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "competitive analysis",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "voice_garden",
			"label": "Voice Garden",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 8,
			"community_name": "Trust & generative toys",
			"contributor": "Grok Bot",
			"description": "Skill-test remake of Type Garden by Akshat, credited publicly. Speak and a garden grows: loudness sets height, pitch picks the species, silence lets it droop. Audio analysed on device.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "voice garden",
			"source_file": "memory-facts.md",
			"source_location": null,
			"source_url": null,
			"sources": [
				{
					"key": "M",
					"label": "Memory facts",
					"file": "sources/memory-facts.md",
					"url": null
				},
				{
					"key": "VG",
					"label": "Voice Garden README",
					"file": "sources/voice-garden-README.md",
					"url": null
				},
				{
					"key": "WT",
					"label": "Tech probe of sites and repos",
					"file": "sources/web-tech-probe.md",
					"url": null
				}
			]
		},
		{
			"id": "th_plain_language",
			"label": "Plain language & comprehension",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 8,
			"community_name": "Trust & generative toys",
			"contributor": "Grok Bot",
			"description": "Tools that make dense things readable: research papers, leases, forms, CSS.",
			"file_type": "concept",
			"kind": "Theme",
			"norm_label": "plain language & comprehension",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "skill_canvas_2d",
			"label": "Canvas 2D",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 8,
			"community_name": "Trust & generative toys",
			"contributor": "Grok Bot",
			"description": "Web technology observed in the live sites or the repos made for him.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "canvas 2d",
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "WT",
				"label": "Tech probe of sites and repos",
				"file": "sources/web-tech-probe.md",
				"url": null
			}]
		},
		{
			"id": "skill_web_audio_api",
			"label": "Web Audio API",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 8,
			"community_name": "Trust & generative toys",
			"contributor": "Grok Bot",
			"description": "Web technology observed in the live sites or the repos made for him.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "web audio api",
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "WT",
				"label": "Tech probe of sites and repos",
				"file": "sources/web-tech-probe.md",
				"url": null
			}]
		},
		{
			"id": "skill_web_speech_api",
			"label": "Web Speech API",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 8,
			"community_name": "Trust & generative toys",
			"contributor": "Grok Bot",
			"description": "Web technology observed in the live sites or the repos made for him.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "web speech api",
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "WT",
				"label": "Tech probe of sites and repos",
				"file": "sources/web-tech-probe.md",
				"url": null
			}]
		},
		{
			"id": "resonance",
			"label": "Resonance",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 9,
			"community_name": "Where I play",
			"contributor": "Grok Bot",
			"description": "A dark music desk: visualize a loop, a track or the mic, then play along on the synth. Live on Vercel.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "resonance",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": "https://resonance-delta-three.vercel.app",
			"sources": [
				{
					"key": "LS",
					"label": "Live-site scrape (projects.json)",
					"file": "sources/live-sites-scrape.json",
					"url": null
				},
				{
					"key": "SR",
					"label": "Showreel draft config",
					"file": "sources/showreel-config.json",
					"url": null
				},
				{
					"key": "LT",
					"label": "Linktree",
					"file": "sources/linktree.md",
					"url": "https://linktr.ee/shreeraj301"
				}
			]
		},
		{
			"id": "paper_trail",
			"label": "Paper Trail",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 9,
			"community_name": "Where I play",
			"contributor": "Grok Bot",
			"description": "A draggable pinboard wall of his poems; filter by mood, search, shuffle. Live on Vercel.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "paper trail",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": "https://paper-trail-lime-seven.vercel.app",
			"sources": [
				{
					"key": "LS",
					"label": "Live-site scrape (projects.json)",
					"file": "sources/live-sites-scrape.json",
					"url": null
				},
				{
					"key": "SR",
					"label": "Showreel draft config",
					"file": "sources/showreel-config.json",
					"url": null
				},
				{
					"key": "LT",
					"label": "Linktree",
					"file": "sources/linktree.md",
					"url": "https://linktr.ee/shreeraj301"
				}
			]
		},
		{
			"id": "hold",
			"label": "Hold",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 9,
			"community_name": "Where I play",
			"contributor": "Grok Bot",
			"description": "A tower defense game.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "hold",
			"source_file": "linktree.md",
			"source_location": null,
			"source_url": "https://hold-six.vercel.app",
			"sources": [{
				"key": "LT",
				"label": "Linktree",
				"file": "sources/linktree.md",
				"url": "https://linktr.ee/shreeraj301"
			}]
		},
		{
			"id": "ashline",
			"label": "Ashline",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 9,
			"community_name": "Where I play",
			"contributor": "Grok Bot",
			"description": "Endless ridge-runner game: jump the stone, slide the wire, keep the combo alive. Live on Vercel.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "ashline",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": "https://ashline-liard.vercel.app",
			"sources": [
				{
					"key": "LS",
					"label": "Live-site scrape (projects.json)",
					"file": "sources/live-sites-scrape.json",
					"url": null
				},
				{
					"key": "SR",
					"label": "Showreel draft config",
					"file": "sources/showreel-config.json",
					"url": null
				},
				{
					"key": "LT",
					"label": "Linktree",
					"file": "sources/linktree.md",
					"url": "https://linktr.ee/shreeraj301"
				}
			]
		},
		{
			"id": "orbital",
			"label": "Orbital",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 9,
			"community_name": "Where I play",
			"contributor": "Grok Bot",
			"description": "Gravity / galaxy sandbox: fling bodies, scenes like Binary, Figure-8, Trojans. Live on Vercel.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "orbital",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": "https://orbital-livid-five.vercel.app",
			"sources": [
				{
					"key": "LS",
					"label": "Live-site scrape (projects.json)",
					"file": "sources/live-sites-scrape.json",
					"url": null
				},
				{
					"key": "SR",
					"label": "Showreel draft config",
					"file": "sources/showreel-config.json",
					"url": null
				},
				{
					"key": "LT",
					"label": "Linktree",
					"file": "sources/linktree.md",
					"url": "https://linktr.ee/shreeraj301"
				}
			]
		},
		{
			"id": "skill_prototyping",
			"label": "Prototyping",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 9,
			"community_name": "Where I play",
			"contributor": "Grok Bot",
			"description": "Research / practice method listed on his resume.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "prototyping",
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"source_url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf",
			"sources": [{
				"key": "RP",
				"label": "Product Design resume (PDF)",
				"file": "sources/resume-product-design.txt",
				"url": "https://ugc.production.linktr.ee/30365649-c571-4cdc-8b1e-13647ae6afef_Resume-SAN.pdf"
			}]
		},
		{
			"id": "codelingo",
			"label": "CodeLingo",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 9,
			"community_name": "Where I play",
			"contributor": "Grok Bot",
			"description": "Short lessons that teach the CSS behind buttons, cards and calls to action, for people who approve buttons every day. Live on Vercel.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "codelingo",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": "https://codelingo-studio.vercel.app",
			"sources": [
				{
					"key": "LS",
					"label": "Live-site scrape (projects.json)",
					"file": "sources/live-sites-scrape.json",
					"url": null
				},
				{
					"key": "SR",
					"label": "Showreel draft config",
					"file": "sources/showreel-config.json",
					"url": null
				},
				{
					"key": "LT",
					"label": "Linktree",
					"file": "sources/linktree.md",
					"url": "https://linktr.ee/shreeraj301"
				}
			]
		},
		{
			"id": "site_reels",
			"label": "Eight site reels",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 9,
			"community_name": "Where I play",
			"contributor": "Grok Bot",
			"description": "Short promo reels for each live site, ending \"Made by Shreeraj Narwade\".",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "eight site reels",
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"source_url": null,
			"sources": [
				{
					"key": "WT",
					"label": "Tech probe of sites and repos",
					"file": "sources/web-tech-probe.md",
					"url": null
				},
				{
					"key": "BC",
					"label": "Bench reel captions",
					"file": "sources/site-reel-bench-captions.txt",
					"url": null
				},
				{
					"key": "CC",
					"label": "CodeLingo reel captions",
					"file": "sources/site-reel-codelingo-captions.txt",
					"url": null
				},
				{
					"key": "LC",
					"label": "Ledger reel captions",
					"file": "sources/site-reel-ledger-captions.txt",
					"url": null
				},
				{
					"key": "PTC",
					"label": "Paper Trail reel copy",
					"file": "sources/paper-trail-reel-copy.json",
					"url": null
				}
			]
		},
		{
			"id": "warp",
			"label": "Warp",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 9,
			"community_name": "Where I play",
			"contributor": "Grok Bot",
			"description": "Steerable 3D warp-speed starfield. \"The dark, at speed.\" Live on Vercel.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "warp",
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"source_url": "https://warp-gamma-ashen.vercel.app",
			"sources": [
				{
					"key": "LS",
					"label": "Live-site scrape (projects.json)",
					"file": "sources/live-sites-scrape.json",
					"url": null
				},
				{
					"key": "SR",
					"label": "Showreel draft config",
					"file": "sources/showreel-config.json",
					"url": null
				},
				{
					"key": "LT",
					"label": "Linktree",
					"file": "sources/linktree.md",
					"url": "https://linktr.ee/shreeraj301"
				}
			]
		},
		{
			"id": "skill_vite",
			"label": "Vite",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 9,
			"community_name": "Where I play",
			"contributor": "Grok Bot",
			"description": "Web technology observed in the live sites or the repos made for him.",
			"file_type": "document",
			"kind": "Skill/Tool",
			"norm_label": "vite",
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "WT",
				"label": "Tech probe of sites and repos",
				"file": "sources/web-tech-probe.md",
				"url": null
			}]
		},
		{
			"id": "showreel",
			"label": "Showreel draft \"REEL 2026\"",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 9,
			"community_name": "Where I play",
			"contributor": "Grok Bot",
			"description": "\"Hey, I'm Shreeraj. Product designer.\" Kid with sketchbooks, then an architect, now a designer of spaces people feel. Process: Observe, Sketch, Generate, Judge, Ship. Marked DRAFT, demo data.",
			"file_type": "document",
			"kind": "Project",
			"norm_label": "showreel draft \"reel 2026\"",
			"source_file": "showreel-config.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "SR",
				"label": "Showreel draft config",
				"file": "sources/showreel-config.json",
				"url": null
			}]
		},
		{
			"id": "pref_music_games",
			"label": "Singing, piano, video games",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 9,
			"community_name": "Where I play",
			"contributor": "Grok Bot",
			"description": "\"Outside of design, I enjoy singing, playing the piano, and exploring the world of video games, both playing them and understanding the experiences behind them.\" Tenor in the school choir 2009-2018.",
			"file_type": "concept",
			"kind": "Preference/Value",
			"norm_label": "singing, piano, video games",
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"source_url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view",
			"sources": [{
				"key": "P26",
				"label": "Portfolio 2026 (Drive PDF)",
				"file": "sources/portfolio-2026.txt",
				"url": "https://drive.google.com/file/d/1GkhD5-IPe08Z_VPguGilvkyL2Guwmvc-/view"
			}]
		},
		{
			"id": "th_play",
			"label": "Play",
			"_origin": "semantic",
			"author": "Shreeraj Narwade",
			"captured_at": "2026-10-17",
			"community": 9,
			"community_name": "Where I play",
			"contributor": "Grok Bot",
			"description": "\"Where I play\": the vibe-coded toys and games.",
			"file_type": "concept",
			"kind": "Theme",
			"norm_label": "play",
			"source_file": "showreel-config.json",
			"source_location": null,
			"source_url": null,
			"sources": [{
				"key": "SR",
				"label": "Showreel draft config",
				"file": "sources/showreel-config.json",
				"url": null
			}]
		}
	],
	links: [
		{
			"source": "pranay",
			"target": "barch_sea",
			"relation": "alumnus_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "pranay-kotadia-about.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "voice_garden",
			"target": "th_privacy",
			"relation": "analyses_on_device",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "voice-garden-README.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "syntax_of_behavior",
			"target": "th_behavior_making",
			"relation": "argues",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "thesis-manual-1-the-kit.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "delta_printer",
			"target": "th_tools_shape_form",
			"relation": "asks",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "between_the_edges",
			"relation": "authored",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "thesis-manual-0-research.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "pranay",
			"target": "pl_atlanta",
			"relation": "based_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "pranay-kotadia-about.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "prakriti_school",
			"target": "ledger",
			"relation": "became_brief_for",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_masters",
			"target": "dublin_budget",
			"relation": "budget",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "bot_team",
			"relation": "built",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "delta_printer",
			"relation": "built",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "abrir_open",
			"target": "skill_enscape",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ashline",
			"target": "skill_vite",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bench",
			"target": "skill_vite",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "brb",
			"target": "skill_figma",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "codelingo",
			"target": "skill_vite",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "creative_explorations",
			"target": "skill_grasshopper",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "creative_explorations",
			"target": "skill_lumion",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "creative_explorations",
			"target": "skill_rhino",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "delta_printer",
			"target": "skill_python",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ledger",
			"target": "skill_github",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ledger",
			"target": "skill_vite",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "orbital",
			"target": "skill_vite",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "paper_trail",
			"target": "skill_vite",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "resonance",
			"target": "skill_vite",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shiatsu_pod",
			"target": "skill_rhino",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "syntax_of_behavior",
			"target": "skill_autocad",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "syntax_of_behavior",
			"target": "skill_enscape",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "syntax_of_behavior",
			"target": "skill_sketchup",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "type_city",
			"target": "skill_vite",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "type-city-README.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "type_city",
			"target": "skill_canvas_2d",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "voice_garden",
			"target": "skill_canvas_2d",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "voice_garden",
			"target": "skill_web_audio_api",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "voice_garden",
			"target": "skill_web_speech_api",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "warp",
			"target": "skill_vite",
			"relation": "built_with",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_portfolio",
			"target": "landing",
			"relation": "case_study",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_portfolio",
			"target": "spacekit",
			"relation": "case_study",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "found_it",
			"target": "th_privacy",
			"relation": "centered_on",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "google_ux_cert",
			"relation": "certified",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "aaditya_pandit",
			"target": "abrir_open",
			"relation": "collaborated_on",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "anika_pugalia",
			"target": "shiatsu_pod",
			"relation": "collaborated_on",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "chetasvi_patel",
			"target": "fortwall",
			"relation": "collaborated_on",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "gauri_shinde",
			"target": "delta_printer",
			"relation": "collaborated_on",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poetry",
			"target": "paper_trail_poems",
			"relation": "collected_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "plain_paper",
			"target": "skill_competitive_analysis",
			"relation": "compared_six_directions",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bench",
			"target": "berkeley_mims",
			"relation": "compares",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bench",
			"target": "cmu_mhci",
			"relation": "compares",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bench",
			"target": "gt_mshci",
			"relation": "compares",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bench",
			"target": "michigan_msi",
			"relation": "compares",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bench",
			"target": "ut_austin",
			"relation": "compares",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bench",
			"target": "uw_mhcid",
			"relation": "compares",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "ch_email",
			"relation": "contact",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "th_ai_native",
			"relation": "describes_self_as",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "brb",
			"relation": "designed",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "fortwall",
			"relation": "designed",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "shiatsu_pod",
			"relation": "designed",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "syntax_of_behavior",
			"relation": "designed",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "paper_trail",
			"target": "paper_trail_poems",
			"relation": "displays",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "portfolio_2024",
			"target": "anagram",
			"relation": "documents",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "internship-portfolio-2024.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "barch_sea",
			"target": "esri_storymaps",
			"relation": "during",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "pref_music_games",
			"relation": "enjoys",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_autocad",
			"relation": "expert_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_enscape",
			"relation": "expert_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_illustrator",
			"relation": "expert_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_lumion",
			"relation": "expert_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_photoshop",
			"relation": "expert_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_sketchup",
			"relation": "expert_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_v_ray",
			"relation": "expert_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_masters",
			"target": "pl_germany",
			"relation": "explored_earlier",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "portfolio_2026",
			"target": "abrir_open",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "portfolio_2026",
			"target": "brb",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "portfolio_2026",
			"target": "creative_explorations",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "portfolio_2026",
			"target": "delta_printer",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "portfolio_2026",
			"target": "fortwall",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "portfolio_2026",
			"target": "quiet_observations",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "portfolio_2026",
			"target": "shiatsu_pod",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "portfolio_2026",
			"target": "syntax_of_behavior",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "portfolio_2026",
			"target": "working_drawings",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "ashline",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "bench",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "codelingo",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "landing",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "ledger",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "orbital",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "paper_trail",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "resonance",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "spacekit",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "warp",
			"relation": "features",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "localxsociety",
			"target": "pl_europe_cities",
			"relation": "field_research_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "plain_paper",
			"target": "th_trust",
			"relation": "focused_on",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_team",
			"target": "pref_karpathy",
			"relation": "follows",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_team",
			"target": "pref_uiux_pro_max",
			"relation": "follows",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "dublin_budget",
			"target": "pl_ireland",
			"relation": "for",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "instagram_trial_reel",
			"target": "ch_instagram",
			"relation": "for",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "resume_arch",
			"target": "goal_junior_architect",
			"relation": "for",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "resume_product",
			"target": "goal_product_design",
			"relation": "for",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "syntax_of_behavior",
			"target": "th_systems",
			"relation": "framed_as",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bench",
			"target": "pl_india",
			"relation": "framed_for_move_from",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "site-reel-bench-captions.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "pl_india",
			"relation": "from",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "goal_runway",
			"relation": "has",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_allow_me_this_much",
			"target": "mood_longing",
			"relation": "has_mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_becoming_strangers",
			"target": "mood_grief",
			"relation": "has_mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_does_love_live_here",
			"target": "mood_grief",
			"relation": "has_mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_khabar_banke_milo",
			"target": "mood_longing",
			"relation": "has_mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_laapata",
			"target": "mood_grief",
			"relation": "has_mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_no_bad_blood",
			"target": "mood_grief",
			"relation": "has_mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_not_violently",
			"target": "mood_tender",
			"relation": "has_mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "paper-trail-reel-copy.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_people_who_remember_me",
			"target": "mood_wonder",
			"relation": "has_mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_three_days",
			"target": "mood_joy",
			"relation": "has_mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_three_feet_away",
			"target": "mood_wonder",
			"relation": "has_mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "paper-trail-reel-copy.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_where_i_stayed",
			"target": "mood_tender",
			"relation": "has_mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "paper-trail-reel-copy.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bench",
			"target": "skill_vercel",
			"relation": "hosted_on",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ledger",
			"target": "skill_vercel",
			"relation": "hosted_on",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "paper_trail",
			"target": "skill_vercel",
			"relation": "hosted_on",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "type_city",
			"relation": "idea_by",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_junior_architect",
			"target": "pl_bengaluru",
			"relation": "in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_junior_architect",
			"target": "pl_delhi",
			"relation": "in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_junior_architect",
			"target": "pl_mumbai",
			"relation": "in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poems_portfolio",
			"target": "portfolio_2026",
			"relation": "in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "barch_sea",
			"target": "workshops_sea",
			"relation": "includes",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "pranay",
			"target": "th_trust",
			"relation": "interested_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "pranay-kotadia-about.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "shreeraj",
			"relation": "introduces",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "ashline",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "bench",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "bitebudget",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "ch_instagram",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "ch_linkedin",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "ch_medium",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "ch_substack",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "codelingo",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "found_it",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "hold",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "lease_lens",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "ledger",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "orbital",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "paper_trail",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "pawpal",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "plain_paper",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "plainform",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "portfolio_2024",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "portfolio_2026",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "resonance",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "resume_arch",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "resume_product",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "syntax_of_behavior",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "warp",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "zoo_payment",
			"relation": "links",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ch_linktree",
			"target": "bot_team",
			"relation": "links_my_bots",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_hiring_panel",
			"target": "resume_product",
			"relation": "listed_on",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "codelingo",
			"target": "skill_prototyping",
			"relation": "live_editor",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "site-reel-codelingo-captions.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "abrir_open",
			"target": "pl_portugal",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "anagram",
			"target": "pl_delhi",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "arks_studio",
			"target": "pl_mumbai",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "barch_sea",
			"target": "pl_mumbai",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "cmu_mhci",
			"target": "pl_usa",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "fortwall",
			"target": "pl_moti_daman",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goenka_residence",
			"target": "pl_varanasi",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "gt_mshci",
			"target": "pl_usa",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "gt_mshci",
			"target": "pl_atlanta",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "pranay-kotadia-about.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "hanuman_mandir_residence",
			"target": "pl_saket",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "miglani_residence",
			"target": "pl_gurugram",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "nath_valley",
			"target": "pl_aurangabad",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "odarkhet_hotel",
			"target": "pl_uttarakhand",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "internship-portfolio-2024.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "palm_springs_iiid",
			"target": "pl_gurugram",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "prakriti_school",
			"target": "pl_greater_noida",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "tcd_idm",
			"target": "pl_ireland",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ucd_hci",
			"target": "pl_ireland",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ut_austin",
			"target": "pl_usa",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "uw_mhcid",
			"target": "pl_usa",
			"relation": "located_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "bitebudget",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "hold",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "lease_lens",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "pawpal",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "plainform",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "zoo_payment",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "paper_trail",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "creative_explorations",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "found_it",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "plain_paper",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "ashline",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "orbital",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "resonance",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "warp",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "bench",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "site-reel-bench-captions.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "codelingo",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "site-reel-codelingo-captions.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "ledger",
			"relation": "made",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "site-reel-ledger-captions.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_ai_agency",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_board_room",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_critiquito",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_designer_skills",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_figma_bro",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_garu",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_hallmark",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_hci_research_assistant",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_hci_sop_writer",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_hiring_panel",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_humanizer",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_in_hand_salary_monthly",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_last30days",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_logo_design",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_opendesign",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_product_idea_stress_test",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "bot_super_designer",
			"target": "bot_team",
			"relation": "member_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "abrir_open",
			"target": "skill_precedent_analysis",
			"relation": "method",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "between_the_edges",
			"target": "skill_behavioral_mapping",
			"relation": "method",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ledger",
			"target": "skill_information_architecture",
			"relation": "method",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "prakriti_school",
			"target": "skill_working_drawings_boq",
			"relation": "method",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "working_drawings",
			"target": "skill_working_drawings_boq",
			"relation": "method",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "paper_trail_poems",
			"target": "mood_anger",
			"relation": "mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "paper_trail_poems",
			"target": "mood_grief",
			"relation": "mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "paper_trail_poems",
			"target": "mood_joy",
			"relation": "mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "paper_trail_poems",
			"target": "mood_longing",
			"relation": "mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "paper_trail_poems",
			"target": "mood_tender",
			"relation": "mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "paper_trail_poems",
			"target": "mood_wonder",
			"relation": "mood",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poetry",
			"target": "essay_gut_feeling",
			"relation": "opens",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "writing-and-social.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "th_feel",
			"relation": "outro",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "pl_aurangabad",
			"target": "pl_india",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "pl_mumbai",
			"target": "pl_india",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "pl_saket",
			"target": "pl_delhi",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_allow_me_this_much",
			"target": "paper_trail_poems",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_becoming_strangers",
			"target": "paper_trail_poems",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_does_love_live_here",
			"target": "paper_trail_poems",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_khabar_banke_milo",
			"target": "paper_trail_poems",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_laapata",
			"target": "paper_trail_poems",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_no_bad_blood",
			"target": "paper_trail_poems",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_not_violently",
			"target": "paper_trail_poems",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "paper-trail-reel-copy.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_people_who_remember_me",
			"target": "paper_trail_poems",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_three_days",
			"target": "paper_trail_poems",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_three_feet_away",
			"target": "paper_trail_poems",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "paper-trail-reel-copy.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poem_where_i_stayed",
			"target": "paper_trail_poems",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "paper-trail-reel-copy.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "coa_registration",
			"relation": "pending",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "arks_studio",
			"target": "th_feel",
			"relation": "perceived_height",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "quiet_observations",
			"relation": "photographed",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "instagram_trial_reel",
			"relation": "planned",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "goal_masters",
			"relation": "plans",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "pref_sport",
			"relation": "played",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_precedent_analysis",
			"relation": "practises",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_working_drawings_boq",
			"relation": "practises",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_behavioral_mapping",
			"relation": "practises",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_competitive_analysis",
			"relation": "practises",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_information_architecture",
			"relation": "practises",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_journey_mapping",
			"relation": "practises",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_personas",
			"relation": "practises",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_prototyping",
			"relation": "practises",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_survey_design",
			"relation": "practises",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_user_research",
			"relation": "practises",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "barch_sea",
			"target": "coa_registration",
			"relation": "precedes",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "pref_no_ai_slop",
			"relation": "prefers",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "pref_no_synth_voice",
			"relation": "prefers",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "poetry",
			"target": "poems_portfolio",
			"relation": "printed_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "brb",
			"target": "th_restraint",
			"relation": "prioritises",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "th_ai_native",
			"relation": "process",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "ch_instagram",
			"relation": "profile",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "ch_linktree",
			"relation": "profile",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "ch_medium",
			"relation": "profile",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "ch_substack",
			"relation": "profile",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "ch_linkedin",
			"relation": "profile",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "anagram",
			"target": "odarkhet_hotel",
			"relation": "project",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "internship-portfolio-2024.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "anagram",
			"target": "arks_studio",
			"relation": "project",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "anagram",
			"target": "goenka_residence",
			"relation": "project",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "anagram",
			"target": "hanuman_mandir_residence",
			"relation": "project",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "anagram",
			"target": "miglani_residence",
			"relation": "project",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "anagram",
			"target": "palm_springs_iiid",
			"relation": "project",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "anagram",
			"target": "prakriti_school",
			"relation": "project",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "localxsociety",
			"target": "abrir_open",
			"relation": "project",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "site_reels",
			"target": "ashline",
			"relation": "promotes",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "site_reels",
			"target": "bench",
			"relation": "promotes",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "site_reels",
			"target": "codelingo",
			"relation": "promotes",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "site_reels",
			"target": "ledger",
			"relation": "promotes",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "site_reels",
			"target": "orbital",
			"relation": "promotes",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "site_reels",
			"target": "paper_trail",
			"relation": "promotes",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "site_reels",
			"target": "resonance",
			"relation": "promotes",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "site_reels",
			"target": "warp",
			"relation": "promotes",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "web-tech-probe.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "essay_gut_feeling",
			"target": "ch_medium",
			"relation": "published_on",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "writing-and-social.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "essay_gut_feeling",
			"target": "ch_substack",
			"relation": "published_on",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "writing-and-social.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "essay_understood",
			"target": "ch_medium",
			"relation": "published_on",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "writing-and-social.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "essay_understood",
			"target": "ch_substack",
			"relation": "published_on",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "writing-and-social.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "between_the_edges",
			"target": "th_transactional_capacity",
			"relation": "reads_through",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "between_the_edges",
			"target": "th_affordances",
			"relation": "reads_through",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "thesis-manual-0-research.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "essay_gut_feeling",
			"target": "pref_sport",
			"relation": "recalls_squash_final",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "writing-and-social.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "ledger",
			"target": "th_trust",
			"relation": "records_who_agreed",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "site-reel-ledger-captions.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "pranay",
			"target": "goal_portfolio",
			"relation": "reference_standard_for",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "case-study-prompt-excerpt.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "voice_garden",
			"target": "akshat",
			"relation": "remake_of_type_garden_by",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_masters",
			"target": "pl_uk",
			"relation": "ruled_out",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "pref_music_games",
			"target": "nath_valley",
			"relation": "school_choir_at",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "th_play",
			"relation": "section",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "showreel",
			"target": "th_systems",
			"relation": "section",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_masters",
			"target": "cmu_mhci",
			"relation": "shortlist",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_masters",
			"target": "fifth_tbd",
			"relation": "shortlist",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_masters",
			"target": "tcd_idm",
			"relation": "shortlist",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_masters",
			"target": "ucd_hci",
			"relation": "shortlist",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_masters",
			"target": "ut_austin",
			"relation": "shortlist",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_masters",
			"target": "uw_mhcid",
			"relation": "shortlist",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "languages",
			"relation": "speaks",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "th_space_to_interface",
			"relation": "states",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_grasshopper",
			"relation": "strong_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_rhino",
			"relation": "strong_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "barch_sea",
			"relation": "studied_at",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "nath_valley",
			"relation": "studied_at",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "between_the_edges",
			"target": "pl_aurangabad",
			"relation": "studied_streets_of",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "thesis-manual-0-research.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "pranay",
			"target": "gt_mshci",
			"relation": "studies_at",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "pranay-kotadia-about.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "barch_sea",
			"target": "brb",
			"relation": "studio",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "barch_sea",
			"target": "delta_printer",
			"relation": "studio",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "barch_sea",
			"target": "fortwall",
			"relation": "studio",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "barch_sea",
			"target": "shiatsu_pod",
			"relation": "studio",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "barch_sea",
			"target": "working_drawings",
			"relation": "studio",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "between_the_edges",
			"target": "prasad_shetty",
			"relation": "supervised_by",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "thesis-manual-0-research.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "goal_junior_architect",
			"relation": "targets",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "goal_product_design",
			"relation": "targets",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "goal_product_research",
			"relation": "targets",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "prasad_shetty",
			"target": "workshops_sea",
			"relation": "taught",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "barch_sea",
			"target": "syntax_of_behavior",
			"relation": "thesis",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_runway",
			"target": "goal_portfolio",
			"relation": "time_for",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "uiux_courses",
			"relation": "took",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "goal_masters",
			"target": "gt_mshci",
			"relation": "top_choice",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "between_the_edges",
			"target": "syntax_of_behavior",
			"relation": "turned_into",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_3ds_max",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_twinmotion",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_unreal_engine",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_blender",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_claude",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_cursor",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_davinci_resolve",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_figma",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_figma_make",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_framer",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_github",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_google_ai_studio",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_grok",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_indesign",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_premiere_pro",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_python",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_qgis",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_revit",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "skill_vercel",
			"relation": "uses",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "esri_storymaps",
			"relation": "won",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "anagram",
			"relation": "worked_at",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "localxsociety",
			"relation": "worked_at",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "localxsociety",
			"target": "pl_portugal",
			"relation": "worked_in",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "poetry",
			"relation": "writes",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "essay_gut_feeling",
			"relation": "wrote",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "writing-and-social.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "shreeraj",
			"target": "essay_understood",
			"relation": "wrote",
			"_origin": "semantic",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "writing-and-social.md",
			"source_location": null,
			"weight": 1
		},
		{
			"source": "site_reels",
			"target": "ch_instagram",
			"relation": "likely_channel",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .55,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "Short vertical reels suit Instagram, where he planned a trial reel."
		},
		{
			"source": "ut_austin",
			"target": "cmu_mhci",
			"relation": "semantically_similar_to",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .55,
			"source_file": "live-sites-scrape.json",
			"source_location": null,
			"weight": 1,
			"why": "Both on his US shortlist and both compared on Bench."
		},
		{
			"source": "ledger",
			"target": "goal_portfolio",
			"relation": "candidate_case_study",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .65,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1,
			"why": "Ledger has the strongest real-world origin story (Anagram) of all his live projects."
		},
		{
			"source": "essay_gut_feeling",
			"target": "skill_user_research",
			"relation": "curiosity_about",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .65,
			"source_file": "writing-and-social.md",
			"source_location": null,
			"weight": 1,
			"why": "Decoding \"the subconscious algorithm\" behind decisions is a researcher's question about behaviour."
		},
		{
			"source": "mood_longing",
			"target": "th_memory_longing",
			"relation": "expresses",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .65,
			"source_file": "paper-trail-reel-copy.json",
			"source_location": null,
			"weight": 1,
			"why": "Longing is the mood most tied to memory."
		},
		{
			"source": "akshat",
			"target": "type_city",
			"relation": "indirect_influence",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .65,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "Voice Garden (a remake of Akshat's Type Garden) and Type City share the \"input grows into a world\" mechanic."
		},
		{
			"source": "pref_music_games",
			"target": "hold",
			"relation": "interest_behind",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .65,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1,
			"why": "Tower defense game from a video-game fan."
		},
		{
			"source": "arks_studio",
			"target": "th_space_to_interface",
			"relation": "perception_design",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .65,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1,
			"why": "Changing how tall a room feels without changing the structure is experience design."
		},
		{
			"source": "pref_uiux_pro_max",
			"target": "bot_designer_skills",
			"relation": "related",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .65,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "Both are design-guidance skills his bots load."
		},
		{
			"source": "codelingo",
			"target": "goal_product_design",
			"relation": "self_learning",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .65,
			"source_file": "site-reel-codelingo-captions.txt",
			"source_location": null,
			"weight": 1,
			"why": "\"For people who ship the work without writing the code. Yet.\" describes his own learning curve."
		},
		{
			"source": "essay_understood",
			"target": "th_feel",
			"relation": "semantically_similar_to",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .65,
			"source_file": "writing-and-social.md",
			"source_location": null,
			"weight": 1,
			"why": "An essay that explains a feeling \"mechanically\" matches his aim to design spaces people feel."
		},
		{
			"source": "bot_in_hand_salary_monthly",
			"target": "goal_product_design",
			"relation": "serves",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .65,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "Salary maths for job offers."
		},
		{
			"source": "bot_super_designer",
			"target": "goal_portfolio",
			"relation": "serves",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .65,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "Design-production bot for portfolio work."
		},
		{
			"source": "bench",
			"target": "th_trust",
			"relation": "tone",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .65,
			"source_file": "site-reel-bench-captions.txt",
			"source_location": null,
			"weight": 1,
			"why": "\"One decision that survives the brochure\"; \"a visa prior you can argue with\": honesty over marketing."
		},
		{
			"source": "voice_garden",
			"target": "pref_music_games",
			"relation": "voice_as_input",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .65,
			"source_file": "voice-garden-README.md",
			"source_location": null,
			"weight": 1,
			"why": "A singer's project: pitch and loudness drive the garden."
		},
		{
			"source": "barch_sea",
			"target": "type_city",
			"relation": "architecture_to",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "His own idea of letters growing into architecture draws directly on five years of architectural training."
		},
		{
			"source": "ledger",
			"target": "goal_junior_architect",
			"relation": "bridges",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1,
			"why": "A product built for architects keeps both career paths connected."
		},
		{
			"source": "pref_no_synth_voice",
			"target": "site_reels",
			"relation": "constrains",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "Reels made for him use music and captions, not synthesized voice."
		},
		{
			"source": "th_tools_shape_form",
			"target": "th_ai_native",
			"relation": "echoes",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1,
			"why": "His Semester 3 question about how tools shape form is the same question his AI-built work answers now."
		},
		{
			"source": "lease_lens",
			"target": "th_plain_language",
			"relation": "embodies",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1,
			"why": "Lease clause analysis makes legal text readable."
		},
		{
			"source": "plainform",
			"target": "th_plain_language",
			"relation": "embodies",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1,
			"why": "Form simplification."
		},
		{
			"source": "abrir_open",
			"target": "goal_junior_architect",
			"relation": "evidence_for",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1,
			"why": "Public adaptive-reuse work matches the target."
		},
		{
			"source": "between_the_edges",
			"target": "goal_junior_architect",
			"relation": "evidence_for",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1,
			"why": "Urban research matches the \"urban\" target."
		},
		{
			"source": "working_drawings",
			"target": "goal_junior_architect",
			"relation": "evidence_for",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1,
			"why": "Construction documentation is core junior-architect work."
		},
		{
			"source": "pref_music_games",
			"target": "ashline",
			"relation": "interest_behind",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1,
			"why": "He enjoys \"understanding the experiences behind\" video games; Ashline, Hold, Warp and Orbital are game-like."
		},
		{
			"source": "goal_product_design",
			"target": "goal_masters",
			"relation": "leads_to",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "The master's is the longer route into product design."
		},
		{
			"source": "th_systems",
			"target": "th_space_to_interface",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1,
			"why": "Systems thinking is the shared layer between buildings and products in his story."
		},
		{
			"source": "goal_runway",
			"target": "goal_masters",
			"relation": "precedes",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "The 6-7 months from Oct 2026 run up to 2027 applications."
		},
		{
			"source": "skill_rhino",
			"target": "th_space_to_interface",
			"relation": "spatial_thinking_feeds",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "Rhino/Grasshopper and SketchUp are the spatial modelling base he carries into interface work."
		},
		{
			"source": "bot_figma_bro",
			"target": "skill_figma",
			"relation": "specialises_in",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "Named for Figma."
		},
		{
			"source": "th_memory_longing",
			"target": "paper_trail_poems",
			"relation": "subject_of",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "paper-trail-reel-copy.json",
			"source_location": null,
			"weight": 1,
			"why": "Remembering, strangers and staying run through the visible poems."
		},
		{
			"source": "found_it",
			"target": "th_trust",
			"relation": "supports",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1,
			"why": "Privacy-conscious data handling is a trust decision."
		},
		{
			"source": "th_plain_language",
			"target": "th_trust",
			"relation": "supports",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1,
			"why": "Comprehension is how his tools earn trust."
		},
		{
			"source": "th_restraint",
			"target": "paper_trail",
			"relation": "tone_of",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "paper-trail-reel-copy.json",
			"source_location": null,
			"weight": 1,
			"why": "A quiet, drag-to-wander wall \"for thoughts that don't fit in a feed\"."
		},
		{
			"source": "th_behavior_making",
			"target": "goal_product_research",
			"relation": "transfers_to",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "thesis-manual-1-the-kit.txt",
			"source_location": null,
			"weight": 1,
			"why": "Designing for observed behaviour is the core of product research."
		},
		{
			"source": "pref_no_ai_slop",
			"target": "th_restraint",
			"relation": "value_behind",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .75,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "His taste rule and his design theme are the same instinct."
		},
		{
			"source": "bench",
			"target": "skill_competitive_analysis",
			"relation": "applies",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "site-reel-bench-captions.txt",
			"source_location": null,
			"weight": 1,
			"why": "Side-by-side comparison of six programs on the same fields is competitive analysis applied to his own decision."
		},
		{
			"source": "th_affordances",
			"target": "th_space_to_interface",
			"relation": "bridges",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "thesis-manual-0-research.txt",
			"source_location": null,
			"weight": 1,
			"why": "Affordances are a core HCI concept too; his thesis lens transfers directly to interface design."
		},
		{
			"source": "th_ai_native",
			"target": "paper_trail",
			"relation": "built_by",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1,
			"why": "The eight live sites are \"vibe-coded\"."
		},
		{
			"source": "showreel",
			"target": "goal_portfolio",
			"relation": "draft_for",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1,
			"why": "The reel is a portfolio piece in progress."
		},
		{
			"source": "fortwall",
			"target": "th_affordances",
			"relation": "early_instance",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1,
			"why": "\"The different sizes of modules afford different activities\", years before the thesis named affordances."
		},
		{
			"source": "codelingo",
			"target": "th_plain_language",
			"relation": "embodies",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "site-reel-codelingo-captions.txt",
			"source_location": null,
			"weight": 1,
			"why": "Teaches the words behind the buttons people already approve."
		},
		{
			"source": "hold",
			"target": "th_play",
			"relation": "embodies",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1,
			"why": "A game among his vibe-coded projects."
		},
		{
			"source": "pref_no_ai_slop",
			"target": "bot_hallmark",
			"relation": "enforced_by",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "Hallmark is an anti-AI-slop design skill in his bot team."
		},
		{
			"source": "pref_no_ai_slop",
			"target": "bot_humanizer",
			"relation": "enforced_by",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "Humanizer de-AIs writing."
		},
		{
			"source": "prakriti_school",
			"target": "goal_junior_architect",
			"relation": "evidence_for",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1,
			"why": "Institutional work matches the \"public, urban, institutional\" target."
		},
		{
			"source": "th_ai_native",
			"target": "bot_team",
			"relation": "expressed_in",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "A 17-bot team is his AI-native practice made concrete."
		},
		{
			"source": "th_space_to_interface",
			"target": "type_city",
			"relation": "expressed_in",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "type-city-README.md",
			"source_location": null,
			"weight": 1,
			"why": "Type City makes typed letters grow into buildings: architecture rendered as an interface."
		},
		{
			"source": "localxsociety",
			"target": "skill_user_research",
			"relation": "field_research",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1,
			"why": "Field research in four cities."
		},
		{
			"source": "pref_music_games",
			"target": "resonance",
			"relation": "interest_behind",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1,
			"why": "A singer and pianist building a playable synth."
		},
		{
			"source": "between_the_edges",
			"target": "skill_user_research",
			"relation": "is_a_form_of",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1,
			"why": "50+ hours of behavioural mapping per street is field user research in an urban setting."
		},
		{
			"source": "prasad_shetty",
			"target": "th_transactional_capacity",
			"relation": "likely_co_author",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "resume-architecture.txt",
			"source_location": null,
			"weight": 1,
			"why": "The resume cites \"Gupte and Shetty\"; his supervisor Prasad Shetty is the likely Shetty, but the source does not say so."
		},
		{
			"source": "th_space_to_interface",
			"target": "goal_product_design",
			"relation": "motivates",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1,
			"why": "The physical-to-digital interest is why he is switching."
		},
		{
			"source": "prakriti_school",
			"target": "th_trust",
			"relation": "pain_point",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1,
			"why": "Repeated client changes and scattered approvals on Prakriti School taught him why explicit agreement matters, which Ledger encodes."
		},
		{
			"source": "th_feel",
			"target": "th_space_to_interface",
			"relation": "part_of",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1,
			"why": "\"Spaces people feel\" applies to rooms and screens alike in the showreel."
		},
		{
			"source": "fortwall",
			"target": "syntax_of_behavior",
			"relation": "precursor",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "portfolio-2026.txt",
			"source_location": null,
			"weight": 1,
			"why": "Both use modules sized to afford activities."
		},
		{
			"source": "pranay",
			"target": "goal_masters",
			"relation": "role_model_for",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "pranay-kotadia-about.txt",
			"source_location": null,
			"weight": 1,
			"why": "Same school (SEA Mumbai), same B.Arch to product design switch, now at Georgia Tech MS-HCI, his top choice."
		},
		{
			"source": "brb",
			"target": "paper_trail",
			"relation": "semantically_similar_to",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "paper-trail-reel-copy.json",
			"source_location": null,
			"weight": 1,
			"why": "Both are anti-feed: BRB says \"the feed can wait\"; Paper Trail is for \"thoughts that don't fit in a feed\"."
		},
		{
			"source": "voice_garden",
			"target": "type_city",
			"relation": "semantically_similar_to",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "Both turn a person's input (voice, typed letters) into a growing generative world."
		},
		{
			"source": "bot_hci_research_assistant",
			"target": "goal_masters",
			"relation": "serves",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "Researches HCI programs."
		},
		{
			"source": "bot_hiring_panel",
			"target": "goal_product_design",
			"relation": "serves",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1,
			"why": "Critiques his resume for job applications."
		},
		{
			"source": "th_ai_native",
			"target": "skill_claude",
			"relation": "via",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1,
			"why": "AI-assisted build tools."
		},
		{
			"source": "th_ai_native",
			"target": "skill_cursor",
			"relation": "via",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1,
			"why": "AI-assisted build tools."
		},
		{
			"source": "syntax_of_behavior",
			"target": "goal_product_design",
			"relation": "bridge_project",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .95,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1,
			"why": "He frames The Kit \"exactly like a design system\" on the product resume, using the thesis as a bridge into product design."
		},
		{
			"source": "th_behavior_making",
			"target": "th_affordances",
			"relation": "built_on",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .95,
			"source_file": "thesis-manual-1-the-kit.txt",
			"source_location": null,
			"weight": 1,
			"why": "The Kit operationalises affordances as modules."
		},
		{
			"source": "ashline",
			"target": "th_play",
			"relation": "embodies",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .95,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1,
			"why": "Listed under \"Where I play\"."
		},
		{
			"source": "orbital",
			"target": "th_play",
			"relation": "embodies",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .95,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1,
			"why": "Listed under \"Where I play\"."
		},
		{
			"source": "plain_paper",
			"target": "th_plain_language",
			"relation": "embodies",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .95,
			"source_file": "resume-product-design.txt",
			"source_location": null,
			"weight": 1,
			"why": "Explains terminology while keeping the original text."
		},
		{
			"source": "resonance",
			"target": "th_play",
			"relation": "embodies",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .95,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1,
			"why": "Listed under \"Where I play\"."
		},
		{
			"source": "warp",
			"target": "th_play",
			"relation": "embodies",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .95,
			"source_file": "showreel-config.json",
			"source_location": null,
			"weight": 1,
			"why": "Listed under \"Where I play\"."
		},
		{
			"source": "paper_trail",
			"target": "poetry",
			"relation": "gives_a_home_to",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .95,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "Paper Trail turns his signed poems into an explorable wall."
		},
		{
			"source": "bot_logo_design",
			"target": "ch_linktree",
			"relation": "public_on",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .95,
			"source_file": "linktree.md",
			"source_location": null,
			"weight": 1,
			"why": "Linked publicly."
		},
		{
			"source": "bench",
			"target": "goal_masters",
			"relation": "research_tool_for",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .95,
			"source_file": "site-reel-bench-captions.txt",
			"source_location": null,
			"weight": 1,
			"why": "Bench compares the same programs as his master's shortlist and is \"a working rank, for a product-design move from India\", i.e. his own move."
		},
		{
			"source": "bot_hci_sop_writer",
			"target": "goal_masters",
			"relation": "serves",
			"_origin": "semantic",
			"confidence": "INFERRED",
			"confidence_score": .95,
			"source_file": "memory-facts.md",
			"source_location": null,
			"weight": 1,
			"why": "Writes statements of purpose for HCI applications."
		}
	],
	hyperedges: [
		{
			"id": "thesis_arc",
			"label": "Thesis arc: streets to kit",
			"nodes": [
				"between_the_edges",
				"th_affordances",
				"syntax_of_behavior",
				"th_behavior_making"
			],
			"relation": "form",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "thesis-manual-1-the-kit.txt"
		},
		{
			"id": "where_i_play",
			"label": "Where I play",
			"nodes": [
				"orbital",
				"warp",
				"ashline",
				"resonance",
				"th_play"
			],
			"relation": "form",
			"confidence": "EXTRACTED",
			"confidence_score": 1,
			"source_file": "showreel-config.json"
		},
		{
			"id": "trust_tools",
			"label": "Tools that earn trust",
			"nodes": [
				"ledger",
				"plain_paper",
				"found_it",
				"th_trust"
			],
			"relation": "participate_in",
			"confidence": "INFERRED",
			"confidence_score": .85,
			"source_file": "resume-product-design.txt"
		}
	]
};
var layout_default = {
	seed: 20261017,
	ticks: 420,
	hub: "shreeraj",
	radius: 19.487,
	positions: {
		"arks_studio": [
			9.3355,
			.4972,
			5.2328
		],
		"goal_product_research": [
			7.9377,
			-7.0327,
			-2.8724
		],
		"workshops_sea": [
			6.6693,
			-12.5439,
			1.2373
		],
		"syntax_of_behavior": [
			2.4836,
			-3.4708,
			-.2286
		],
		"bot_hiring_panel": [
			1.8645,
			11.1518,
			-3.0787
		],
		"bot_in_hand_salary_monthly": [
			1.3171,
			10.5951,
			-.0573
		],
		"nath_valley": [
			4.5944,
			-5.9066,
			-4.7432
		],
		"chetasvi_patel": [
			4.2167,
			-13.9388,
			2.202
		],
		"esri_storymaps": [
			3.8822,
			-6.3816,
			-2.7497
		],
		"barch_sea": [
			2.5564,
			-5.7221,
			-1.376
		],
		"skill_autocad": [
			2.5056,
			-5.0079,
			1.7448
		],
		"skill_sketchup": [
			.381,
			-3.3845,
			1.4045
		],
		"coa_registration": [
			1.7521,
			-8.4942,
			-2.3205
		],
		"th_affordances": [
			6.8113,
			-8.9668,
			.2414
		],
		"th_transactional_capacity": [
			8.0501,
			-10.1873,
			7.0189
		],
		"pl_aurangabad": [
			9.8593,
			-6.2843,
			.9685
		],
		"pl_india": [
			7.6523,
			-.762,
			.2375
		],
		"pl_moti_daman": [
			2.887,
			-13.6126,
			-2.0082
		],
		"pl_mumbai": [
			8.7204,
			-3.9052,
			3.9764
		],
		"skill_behavioral_mapping": [
			5.7867,
			-4.957,
			2.0777
		],
		"fortwall": [
			2.0405,
			-7.9474,
			.5709
		],
		"th_feel": [
			6.8088,
			1.9381,
			-.6771
		],
		"goal_product_design": [
			3.7424,
			3.7801,
			-.554
		],
		"prasad_shetty": [
			7.1299,
			-11.6271,
			5.099
		],
		"resume_product": [
			2.4329,
			7.8598,
			-1.9274
		],
		"th_space_to_interface": [
			5.6223,
			-2.8398,
			-1.301
		],
		"between_the_edges": [
			4.0317,
			-5.247,
			3.6221
		],
		"th_behavior_making": [
			8.7149,
			-9.9865,
			-2.722
		],
		"th_systems": [
			7.1238,
			-3.7384,
			-4.1576
		],
		"shreeraj": [
			0,
			0,
			0
		],
		"skill_figma_make": [
			4.2894,
			5.0991,
			6.2427
		],
		"skill_framer": [
			3.6282,
			-1.1373,
			7.5374
		],
		"skill_google_ai_studio": [
			7.212,
			-3.2468,
			5.8588
		],
		"skill_grok": [
			8.8975,
			.3815,
			3.289
		],
		"pref_no_synth_voice": [
			2.8332,
			4.2763,
			-8.3172
		],
		"skill_illustrator": [
			2.605,
			-6.2487,
			7.4575
		],
		"skill_photoshop": [
			.4318,
			-3.8629,
			9.1081
		],
		"skill_v_ray": [
			-1.9295,
			-1.0205,
			7.9932
		],
		"google_ux_cert": [
			-3.0496,
			5.0627,
			7.054
		],
		"languages": [
			-.9853,
			8.2925,
			-2.7954
		],
		"skill_3ds_max": [
			5.7757,
			1.029,
			7.1086
		],
		"skill_blender": [
			5.7657,
			-1.2239,
			6.28
		],
		"skill_davinci_resolve": [
			-.0077,
			3.5539,
			6.8466
		],
		"skill_indesign": [
			5.2064,
			-5.6781,
			7.7953
		],
		"skill_premiere_pro": [
			7.3014,
			-4.303,
			-6.9555
		],
		"skill_qgis": [
			8.9792,
			-1.5882,
			-3.0591
		],
		"skill_revit": [
			9.241,
			-2.5181,
			1.6589
		],
		"skill_twinmotion": [
			6.3094,
			1.9893,
			1.6352
		],
		"skill_unreal_engine": [
			4.6779,
			1.9979,
			4.1379
		],
		"skill_journey_mapping": [
			1.1679,
			-3.5695,
			6.6817
		],
		"skill_personas": [
			2.9531,
			4.0309,
			1.7046
		],
		"skill_survey_design": [
			.0957,
			7.7036,
			2.8405
		],
		"uiux_courses": [
			6.9259,
			3.5057,
			5.6699
		],
		"ch_email": [
			-2.4766,
			2.5015,
			8.6195
		],
		"ledger": [
			2.316,
			1.3369,
			-3.1055
		],
		"bot_super_designer": [
			.9903,
			10.0289,
			-7.8236
		],
		"goal_portfolio": [
			6.7707,
			3.2936,
			-8.4404
		],
		"skill_github": [
			5.5903,
			1.2126,
			-4.0624
		],
		"skill_vercel": [
			2.0769,
			-.5267,
			-2.3265
		],
		"spacekit": [
			7.7166,
			.8261,
			-10.2067
		],
		"landing": [
			4.9763,
			3.8849,
			-11.5801
		],
		"skill_information_architecture": [
			6.3867,
			-.6817,
			-6.5503
		],
		"goal_runway": [
			6.7803,
			3.9738,
			-3.8812
		],
		"ch_instagram": [
			-3.2611,
			2.9082,
			-6.6721
		],
		"bitebudget": [
			.232,
			2.6118,
			-1.3398
		],
		"pawpal": [
			.0694,
			-3.5342,
			-3.5368
		],
		"zoo_payment": [
			.4499,
			2.1432,
			1.0806
		],
		"instagram_trial_reel": [
			-3.021,
			4.999,
			-8.901
		],
		"ch_linktree": [
			-1.4839,
			1.6125,
			-3.0521
		],
		"ch_linkedin": [
			-1.9082,
			4.3854,
			-.8153
		],
		"pref_uiux_pro_max": [
			-.824,
			15.0623,
			-2.5832
		],
		"bot_designer_skills": [
			-1.721,
			12.7094,
			-4.0871
		],
		"bot_hci_research_assistant": [
			4.0993,
			11.3838,
			2.1397
		],
		"bot_hci_sop_writer": [
			2.2398,
			10.7469,
			2.6847
		],
		"berkeley_mims": [
			7.6783,
			8.2781,
			-7.6606
		],
		"michigan_msi": [
			4.4959,
			10.8675,
			-7.0254
		],
		"tcd_idm": [
			10.5059,
			9.4779,
			4.8137
		],
		"ucd_hci": [
			9.4676,
			6.5773,
			7.009
		],
		"dublin_budget": [
			12.3252,
			5.9699,
			5.9083
		],
		"fifth_tbd": [
			13.6876,
			3.0607,
			1.5012
		],
		"uw_mhcid": [
			9.1305,
			8.0482,
			-2.3719
		],
		"cmu_mhci": [
			7.1526,
			9.9371,
			-1.0861
		],
		"ut_austin": [
			7.253,
			9.5124,
			-3.1306
		],
		"pl_atlanta": [
			13.6212,
			3.1225,
			-3.5882
		],
		"pl_germany": [
			9.8659,
			11.6688,
			2.129
		],
		"pl_ireland": [
			12.2845,
			9.0893,
			8.0916
		],
		"pl_uk": [
			7.6285,
			10.4646,
			4.307
		],
		"pl_usa": [
			10.2836,
			11.9669,
			-3.0834
		],
		"bench": [
			3.6521,
			3.6513,
			-3.649
		],
		"goal_masters": [
			7.0401,
			5.4316,
			.1622
		],
		"gt_mshci": [
			9.4829,
			5.6265,
			-3.3701
		],
		"pranay": [
			8.9605,
			2.0192,
			-4.0701
		],
		"miglani_residence": [
			4.5237,
			8.4113,
			13.3301
		],
		"goenka_residence": [
			2.9264,
			12.205,
			8.6922
		],
		"portfolio_2024": [
			.6994,
			6.7236,
			4.8885
		],
		"hanuman_mandir_residence": [
			5.6736,
			3.3856,
			13.4438
		],
		"palm_springs_iiid": [
			4.8706,
			10.5361,
			10.8518
		],
		"goal_junior_architect": [
			1.6937,
			-1.7574,
			4.7708
		],
		"prakriti_school": [
			2.1004,
			3.0771,
			4.1515
		],
		"odarkhet_hotel": [
			-.9004,
			7.3708,
			12.6992
		],
		"anagram": [
			2.6871,
			5.0669,
			8.385
		],
		"pl_bengaluru": [
			1.2059,
			-5.0624,
			11.9248
		],
		"pl_delhi": [
			2.3379,
			1.464,
			11.8042
		],
		"pl_greater_noida": [
			.6435,
			8.8305,
			6.9134
		],
		"pl_gurugram": [
			4.9051,
			12.2724,
			13.739
		],
		"pl_saket": [
			4.2889,
			.1102,
			14.8552
		],
		"pl_uttarakhand": [
			-4.3767,
			8.1935,
			14.332
		],
		"pl_varanasi": [
			1.6011,
			16.8166,
			8.3589
		],
		"skill_working_drawings_boq": [
			.0097,
			.0322,
			5.45
		],
		"working_drawings": [
			.3506,
			-6.6661,
			5.4196
		],
		"resume_arch": [
			-2.6256,
			2.4128,
			4.8335
		],
		"paper_trail_poems": [
			-6.4964,
			-10.88,
			4.4763
		],
		"th_memory_longing": [
			-5.4012,
			-11.7257,
			10.281
		],
		"mood_anger": [
			-3.6833,
			-14.2458,
			2.1379
		],
		"mood_grief": [
			-9.635,
			-13.6582,
			1.103
		],
		"mood_joy": [
			-5.7022,
			-16.6914,
			7.2615
		],
		"mood_longing": [
			-4.2472,
			-10.279,
			8.0739
		],
		"mood_tender": [
			-9.6999,
			-7.4034,
			8.3613
		],
		"mood_wonder": [
			-1.3634,
			-12.5895,
			6.0704
		],
		"poem_laapata": [
			-7.4124,
			-15.9764,
			1.5791
		],
		"poem_does_love_live_here": [
			-6.7433,
			-12.6873,
			.3526
		],
		"poem_no_bad_blood": [
			-9.9573,
			-11.4584,
			.6067
		],
		"poem_becoming_strangers": [
			-10.9627,
			-12.9202,
			3.5798
		],
		"poem_three_days": [
			-7.9397,
			-15.5123,
			8.7217
		],
		"poem_allow_me_this_much": [
			-2.1611,
			-11.5675,
			9.2823
		],
		"poem_khabar_banke_milo": [
			-6.4357,
			-7.8773,
			8.9211
		],
		"poem_not_violently": [
			-10.7387,
			-7.6337,
			5.9758
		],
		"poem_where_i_stayed": [
			-10.8617,
			-10.1338,
			8.7938
		],
		"poem_three_feet_away": [
			-1.0462,
			-14.0029,
			4.2596
		],
		"poem_people_who_remember_me": [
			-1.6044,
			-13.8621,
			8.125
		],
		"pref_karpathy": [
			-7.0797,
			10.5394,
			5.3674
		],
		"th_restraint": [
			-8.9854,
			-1.1821,
			-1.254
		],
		"bot_ai_agency": [
			-8.5859,
			11.2166,
			2.4918
		],
		"bot_board_room": [
			-6.965,
			12.8109,
			-.6892
		],
		"bot_logo_design": [
			-6.6616,
			7.132,
			-2.7136
		],
		"bot_critiquito": [
			-4.6086,
			11.271,
			2.3232
		],
		"bot_figma_bro": [
			-6.9649,
			6.7939,
			4.6851
		],
		"bot_garu": [
			-6.7413,
			11.8156,
			-3.9303
		],
		"bot_hallmark": [
			-8.8156,
			7.1113,
			-.2852
		],
		"bot_humanizer": [
			-8.3492,
			6.962,
			2.0449
		],
		"bot_last30days": [
			-5.294,
			11.9122,
			5.4722
		],
		"bot_opendesign": [
			-1.6194,
			12.7608,
			3.7891
		],
		"bot_product_idea_stress_test": [
			-3.9415,
			15.8906,
			.4718
		],
		"skill_figma": [
			-5.4359,
			2.3653,
			2.3888
		],
		"bot_team": [
			-3.2506,
			8.3402,
			-.6084
		],
		"brb": [
			-2.7949,
			-3.6908,
			-.1238
		],
		"pref_no_ai_slop": [
			-9.3154,
			2.7023,
			2.0433
		],
		"localxsociety": [
			-6.5517,
			-2.6648,
			6.0736
		],
		"aaditya_pandit": [
			-5.282,
			-3.398,
			13.2109
		],
		"pref_sport": [
			-6.7196,
			2.6397,
			6.1967
		],
		"essay_understood": [
			.2521,
			4.2296,
			1.855
		],
		"essay_gut_feeling": [
			-6.1468,
			.7269,
			4.1108
		],
		"skill_enscape": [
			-.9566,
			-4.6952,
			4.4238
		],
		"ch_medium": [
			-3.2462,
			1.1894,
			1.8803
		],
		"pl_europe_cities": [
			-11.0474,
			.5113,
			7.5542
		],
		"pl_portugal": [
			-8.0636,
			-2.2878,
			9.1638
		],
		"poems_portfolio": [
			-9.7321,
			-6.2622,
			1.0101
		],
		"abrir_open": [
			-3.2664,
			-3.9582,
			8.5557
		],
		"ch_substack": [
			-2.9194,
			3.7595,
			1.8758
		],
		"skill_precedent_analysis": [
			-4.1971,
			-1.008,
			7.1426
		],
		"skill_user_research": [
			-3.1276,
			-3.9622,
			5.4086
		],
		"poetry": [
			-5.88,
			-4.3546,
			2.5018
		],
		"portfolio_2026": [
			-2.1261,
			-5.7385,
			1.7335
		],
		"anika_pugalia": [
			-2.2904,
			-13.0107,
			-3.0367
		],
		"gauri_shinde": [
			-7.1015,
			-10.5194,
			-5.5379
		],
		"skill_python": [
			-4.7341,
			-5.6351,
			-3.3383
		],
		"skill_claude": [
			-8.8616,
			2.5987,
			-2.5748
		],
		"skill_cursor": [
			-7.2311,
			1.5252,
			-.3934
		],
		"skill_lumion": [
			-8.1231,
			-2.0563,
			1.7188
		],
		"creative_explorations": [
			-6.1944,
			-4.946,
			-.8533
		],
		"quiet_observations": [
			-4.505,
			-5.9489,
			.4321
		],
		"delta_printer": [
			-2.1536,
			-6.803,
			-2.8275
		],
		"shiatsu_pod": [
			-1.5627,
			-7.7926,
			.1425
		],
		"th_ai_native": [
			-4.9693,
			2.5656,
			-2.3452
		],
		"skill_grasshopper": [
			-7.6033,
			-3.3663,
			-2.3411
		],
		"skill_rhino": [
			-.8228,
			-5.1872,
			-1.0243
		],
		"th_tools_shape_form": [
			-8.5733,
			-2.5496,
			-4.9278
		],
		"plainform": [
			-6.3624,
			4.657,
			-5.3974
		],
		"lease_lens": [
			-5.974,
			3.2413,
			-6.7753
		],
		"plain_paper": [
			-2.2443,
			4.5492,
			-4.1789
		],
		"akshat": [
			1.2742,
			-10.9189,
			-9.0305
		],
		"th_privacy": [
			-6.5416,
			-5.3178,
			-8.3085
		],
		"type_city": [
			2.076,
			-5.7388,
			-5.961
		],
		"found_it": [
			-4.0888,
			.8163,
			-3.3474
		],
		"th_trust": [
			.7855,
			4.4466,
			-3.3123
		],
		"skill_competitive_analysis": [
			.3901,
			6.1805,
			-5.8252
		],
		"voice_garden": [
			-1.3231,
			-8.2798,
			-10.2293
		],
		"th_plain_language": [
			-4.5915,
			6.9774,
			-8.7115
		],
		"skill_canvas_2d": [
			2.8976,
			-8.1346,
			-9.9504
		],
		"skill_web_audio_api": [
			-4.7884,
			-7.036,
			-12.3865
		],
		"skill_web_speech_api": [
			-4.1612,
			-12.051,
			-8.9706
		],
		"resonance": [
			.1111,
			-1.7886,
			-7.0297
		],
		"paper_trail": [
			-2.4082,
			-2.3172,
			-2.7892
		],
		"hold": [
			-3.3402,
			-2.3472,
			-7.6722
		],
		"ashline": [
			1.105,
			-1.3496,
			-8.0621
		],
		"orbital": [
			-2.1601,
			.5532,
			-8.4542
		],
		"skill_prototyping": [
			-6.0788,
			-.0358,
			-6.6681
		],
		"codelingo": [
			-1.06,
			2.8497,
			-6.259
		],
		"site_reels": [
			.1756,
			1.8979,
			-8.883
		],
		"warp": [
			-.89,
			.4301,
			-7.0844
		],
		"skill_vite": [
			2.5182,
			-.585,
			-8.9763
		],
		"showreel": [
			1.7658,
			.711,
			-6.1506
		],
		"pref_music_games": [
			.0751,
			-4.733,
			-7.6609
		],
		"th_play": [
			-1.2891,
			-1.1899,
			-10.8344
		]
	}
};
var data = graph_default;
var NODES = data.nodes;
var LINKS = data.links;
var HYPEREDGES = data.hyperedges ?? [];
var POSITIONS = layout_default.positions;
var LAYOUT_RADIUS = layout_default.radius;
var NODE_COUNT = NODES.length;
var EDGE_COUNT = LINKS.length;
var nodeById = new Map(NODES.map((n) => [n.id, n]));
function getNode(id) {
	return nodeById.get(id);
}
var DEGREE = /* @__PURE__ */ new Map();
for (const n of NODES) DEGREE.set(n.id, 0);
for (const l of LINKS) {
	DEGREE.set(l.source, (DEGREE.get(l.source) || 0) + 1);
	DEGREE.set(l.target, (DEGREE.get(l.target) || 0) + 1);
}
var MAX_DEGREE = Math.max(...DEGREE.values());
var commMap = /* @__PURE__ */ new Map();
for (const n of NODES) {
	const existing = commMap.get(n.community);
	if (existing) existing.count += 1;
	else commMap.set(n.community, {
		id: n.community,
		name: n.community_name,
		count: 1
	});
}
var COMMUNITIES = [...commMap.values()].sort((a, b) => a.id - b.id);
var KINDS$1 = [...new Set(NODES.map((n) => n.kind))].sort();
function relationLabel(relation) {
	return relation.replaceAll("_", " ");
}
var ADJACENCY = /* @__PURE__ */ new Map();
for (const n of NODES) ADJACENCY.set(n.id, []);
LINKS.forEach((l, i) => {
	ADJACENCY.get(l.source)?.push({
		to: l.target,
		linkIndex: i
	});
	ADJACENCY.get(l.target)?.push({
		to: l.source,
		linkIndex: i
	});
});
/** Undirected shortest path. Returns node ids from start to end, or null. */
function shortestPath(start, end) {
	if (start === end) return [start];
	if (!nodeById.has(start) || !nodeById.has(end)) return null;
	const prev = /* @__PURE__ */ new Map();
	const q = [start];
	prev.set(start, null);
	while (q.length) {
		const cur = q.shift();
		const next = ADJACENCY.get(cur) || [];
		for (const { to } of next) {
			if (prev.has(to)) continue;
			prev.set(to, cur);
			if (to === end) {
				const path = [end];
				let p = cur;
				while (p) {
					path.push(p);
					p = prev.get(p) ?? null;
				}
				path.reverse();
				return path;
			}
			q.push(to);
		}
	}
	return null;
}
function linksBetween(path) {
	const indexes = [];
	for (let i = 0; i < path.length - 1; i++) {
		const a = path[i];
		const b = path[i + 1];
		const hit = LINKS.findIndex((l) => l.source === a && l.target === b || l.source === b && l.target === a);
		if (hit >= 0) indexes.push(hit);
	}
	return indexes;
}
function neighborsOf(id) {
	const set = /* @__PURE__ */ new Set();
	for (const { to } of ADJACENCY.get(id) || []) set.add(to);
	return [...set];
}
var kindsOn = Object.fromEntries(KINDS$1.map((k) => [k, true]));
var useGraphStore = create((set, get) => ({
	selectedId: null,
	hoveredId: null,
	history: [],
	historyIndex: -1,
	kinds: kindsOn,
	showExtracted: true,
	showInferred: true,
	minConfidence: 0,
	view: "perspective",
	focus: {
		id: 0,
		nodeId: null
	},
	focusSeq: 0,
	communityFocus: null,
	reducedMotion: false,
	introDone: false,
	idle: false,
	paletteOpen: false,
	filtersOpen: false,
	toursOpen: false,
	legendOpen: false,
	pathFrom: null,
	pathTo: null,
	pathNodes: null,
	pathHop: 0,
	tourId: null,
	tourStep: 0,
	tourPlaying: false,
	soundOn: false,
	mobile: false,
	motionTick: 0,
	lastActivity: 0,
	select: (id, opts) => {
		const push = opts?.push !== false;
		const state = get();
		let history = state.history;
		let historyIndex = state.historyIndex;
		if (push && id && id !== state.selectedId) {
			history = history.slice(0, historyIndex + 1);
			history.push(id);
			if (history.length > 40) history = history.slice(history.length - 40);
			historyIndex = history.length - 1;
		}
		const seq = state.focusSeq + 1;
		set({
			selectedId: id,
			history,
			historyIndex,
			focusSeq: seq,
			focus: {
				id: seq,
				nodeId: id,
				frameIds: opts?.frameIds
			},
			idle: false,
			lastActivity: performance.now()
		});
	},
	hover: (id) => set({ hoveredId: id }),
	historyBack: () => {
		const { history, historyIndex } = get();
		if (historyIndex <= 0) return;
		const next = historyIndex - 1;
		const id = history[next] ?? null;
		const seq = get().focusSeq + 1;
		set({
			historyIndex: next,
			selectedId: id,
			focusSeq: seq,
			focus: {
				id: seq,
				nodeId: id
			}
		});
	},
	historyForward: () => {
		const { history, historyIndex } = get();
		if (historyIndex >= history.length - 1) return;
		const next = historyIndex + 1;
		const id = history[next] ?? null;
		const seq = get().focusSeq + 1;
		set({
			historyIndex: next,
			selectedId: id,
			focusSeq: seq,
			focus: {
				id: seq,
				nodeId: id
			}
		});
	},
	toggleKind: (kind) => set((s) => ({
		kinds: {
			...s.kinds,
			[kind]: !s.kinds[kind]
		},
		lastActivity: performance.now()
	})),
	setShowExtracted: (v) => set({ showExtracted: v }),
	setShowInferred: (v) => set({ showInferred: v }),
	setMinConfidence: (v) => set({ minConfidence: v }),
	setView: (view) => {
		const seq = get().focusSeq + 1;
		set({
			view,
			focusSeq: seq,
			focus: {
				...get().focus,
				id: seq,
				view
			},
			idle: false,
			lastActivity: performance.now()
		});
	},
	requestFocus: (nodeId, frameIds) => {
		const seq = get().focusSeq + 1;
		set({
			focusSeq: seq,
			focus: {
				id: seq,
				nodeId,
				frameIds
			},
			idle: false
		});
	},
	setCommunityFocus: (id) => set({
		communityFocus: id,
		idle: false,
		lastActivity: performance.now()
	}),
	setReducedMotion: (v) => set({
		reducedMotion: v,
		introDone: v ? true : get().introDone
	}),
	setIntroDone: (v) => set({ introDone: v }),
	setIdle: (v) => set({ idle: v }),
	setPaletteOpen: (v) => set({
		paletteOpen: v,
		...v ? {
			filtersOpen: false,
			toursOpen: false
		} : {}
	}),
	setFiltersOpen: (v) => set({ filtersOpen: v }),
	setToursOpen: (v) => set({ toursOpen: v }),
	setLegendOpen: (v) => set({ legendOpen: v }),
	setPathFrom: (id) => set({ pathFrom: id }),
	setPathTo: (id) => set({ pathTo: id }),
	setPath: (nodes) => set({
		pathNodes: nodes,
		pathHop: 0
	}),
	setPathHop: (i) => set({ pathHop: i }),
	startTour: (id) => set({
		tourId: id,
		tourStep: 0,
		tourPlaying: true,
		toursOpen: false,
		communityFocus: null,
		idle: false,
		lastActivity: performance.now()
	}),
	setTourStep: (i) => set({
		tourStep: i,
		tourPlaying: true
	}),
	setTourPlaying: (v) => set({ tourPlaying: v }),
	stopTour: () => set({
		tourId: null,
		tourStep: 0,
		tourPlaying: false
	}),
	setSoundOn: (v) => set({ soundOn: v }),
	setMobile: (v) => set({ mobile: v }),
	bumpMotion: () => set((s) => ({ motionTick: (s.motionTick + 1) % 1e5 })),
	touchActivity: () => set({
		idle: false,
		lastActivity: performance.now()
	})
}));
var KINDS = [
	"Project",
	"Skill/Tool",
	"Poem/Writing",
	"Person",
	"Place",
	"Program/University",
	"Bot/Agent",
	"Theme",
	"Goal/Career path",
	"Channel",
	"Education",
	"Preference/Value",
	"Experience"
];
function geometryFor(kind) {
	switch (kind) {
		case "Project": return new BoxGeometry(1, 1, 1);
		case "Skill/Tool": return new OctahedronGeometry(.72, 0);
		case "Poem/Writing": return new CylinderGeometry(.85, .85, .08, 20);
		case "Person": return new SphereGeometry(.62, 18, 14);
		case "Place": return new ConeGeometry(.55, 1.15, 6);
		case "Program/University": return new BoxGeometry(.55, 1.45, .55);
		case "Bot/Agent": return new TorusGeometry(.48, .16, 8, 16);
		case "Theme": return new IcosahedronGeometry(.62, 0);
		case "Goal/Career path": return new DodecahedronGeometry(.58, 0);
		default: return new BoxGeometry(.9, .62, .9);
	}
}
var dummy$1 = new Object3D();
var colorScratch = new Color();
var livePositions = NODES.map((n) => {
	const p = POSITIONS[n.id] ?? [
		0,
		0,
		0
	];
	return {
		x: p[0],
		y: p[1],
		z: p[2],
		tx: p[0],
		ty: p[1],
		tz: p[2],
		s: 1,
		ts: 1,
		lift: 0
	};
});
function nodeWorld(index) {
	const l = livePositions[index];
	return [
		l?.x ?? 0,
		(l?.y ?? 0) + (l?.lift ?? 0),
		l?.z ?? 0
	];
}
var indexById = new Map(NODES.map((n, i) => [n.id, i]));
function indexOf(id) {
	return indexById.get(id) ?? -1;
}
/** Which node indexes are hidden by the current filters. Written each frame by Nodes. */
var hiddenFlags = new Uint8Array(NODES.length);
function kindHidden(kind, kinds) {
	return kinds[kind] === false;
}
function Nodes() {
	const groups = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		NODES.forEach((n, i) => {
			const k = KINDS.includes(n.kind) ? n.kind : "Experience";
			const list = map.get(k) ?? [];
			list.push(i);
			map.set(k, list);
		});
		return map;
	}, []);
	const meshes = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const hovered = useGraphStore((s) => s.hoveredId);
	const selected = useGraphStore((s) => s.selectedId);
	const communityFocus = useGraphStore((s) => s.communityFocus);
	const kinds = useGraphStore((s) => s.kinds);
	const introDone = useGraphStore((s) => s.introDone);
	const reduced = useGraphStore((s) => s.reducedMotion);
	const neighborSet = (0, import_react.useMemo)(() => {
		const focus = hovered || selected;
		const set = /* @__PURE__ */ new Set();
		if (!focus) return set;
		const i = indexOf(focus);
		if (i >= 0) set.add(i);
		for (const l of LINKS) if (l.source === focus) {
			const j = indexOf(l.target);
			if (j >= 0) set.add(j);
		} else if (l.target === focus) {
			const j = indexOf(l.source);
			if (j >= 0) set.add(j);
		}
		return set;
	}, [hovered, selected]);
	const geos = (0, import_react.useMemo)(() => {
		const g = /* @__PURE__ */ new Map();
		for (const k of groups.keys()) g.set(k, geometryFor(k));
		return g;
	}, [groups]);
	(0, import_react.useEffect)(() => {
		return () => {
			for (const g of geos.values()) g.dispose();
		};
	}, [geos]);
	(0, import_react.useLayoutEffect)(() => {
		if (communityFocus == null) {
			NODES.forEach((n, i) => {
				const p = POSITIONS[n.id] ?? [
					0,
					0,
					0
				];
				const live = livePositions[i];
				if (!live) return;
				live.tx = p[0];
				live.ty = p[1];
				live.tz = p[2];
			});
			return;
		}
		const members = [];
		NODES.forEach((n, i) => {
			if (n.community === communityFocus) members.push(i);
		});
		const cx = members.reduce((a, i) => a + (POSITIONS[NODES[i].id]?.[0] ?? 0), 0) / Math.max(1, members.length);
		const cz = members.reduce((a, i) => a + (POSITIONS[NODES[i].id]?.[2] ?? 0), 0) / Math.max(1, members.length);
		members.forEach((i, k) => {
			const ang = k / members.length * Math.PI * 2;
			const rad = 1.15 + k % 5 * .18;
			const live = livePositions[i];
			if (!live) return;
			live.tx = cx * .25 + Math.cos(ang) * rad;
			live.ty = .15;
			live.tz = cz * .25 + Math.sin(ang) * rad;
		});
		NODES.forEach((n, i) => {
			if (n.community === communityFocus) return;
			const p = POSITIONS[n.id] ?? [
				0,
				0,
				0
			];
			const live = livePositions[i];
			if (!live) return;
			live.tx = p[0];
			live.ty = p[1] - .35;
			live.tz = p[2];
		});
	}, [communityFocus]);
	const colors = (0, import_react.useMemo)(() => NODES.map((n) => communityColor(n.community)), []);
	const baseScale = (0, import_react.useMemo)(() => NODES.map((n) => nodeRadius(DEGREE.get(n.id) || 1, MAX_DEGREE) / .18), []);
	const introT = (0, import_react.useRef)(reduced ? 1 : 0);
	useFrame((_, delta) => {
		const dt = Math.min(delta, .05);
		if (!reduced && !introDone) introT.current = Math.min(1, introT.current + dt * .55);
		else introT.current = 1;
		const hasFocus = Boolean(hovered || selected);
		const kSpring = communityFocus == null ? 10 : 7;
		for (let i = 0; i < NODES.length; i++) {
			const n = NODES[i];
			const live = livePositions[i];
			if (!n || !live) continue;
			const hidden = kindHidden(n.kind, kinds);
			hiddenFlags[i] = hidden ? 1 : 0;
			const dimCommunity = communityFocus != null && n.community !== communityFocus;
			const inRing = !hasFocus || neighborSet.has(i);
			live.ts = (hidden ? .001 : inRing && !dimCommunity ? neighborSet.has(i) && hasFocus ? 1.12 : 1 : .72) * (hovered === n.id ? 1.15 : selected === n.id ? 1.08 : 1);
			live.s += (live.ts - live.s) * (1 - Math.exp(-dt * 14));
			const liftTarget = hovered === n.id || selected === n.id ? .22 : 0;
			live.lift += (liftTarget - live.lift) * (1 - Math.exp(-dt * 10));
			live.x += (live.tx - live.x) * (1 - Math.exp(-dt * kSpring));
			live.y += (live.ty - live.y) * (1 - Math.exp(-dt * kSpring));
			live.z += (live.tz - live.z) * (1 - Math.exp(-dt * kSpring));
		}
		for (const [kind, indexes] of groups) {
			const mesh = meshes.current.get(kind);
			if (!mesh) continue;
			indexes.forEach((nodeIndex, instance) => {
				const n = NODES[nodeIndex];
				const live = livePositions[nodeIndex];
				if (!n || !live) return;
				const hidden = hiddenFlags[nodeIndex] === 1;
				const hasFocus = Boolean(hovered || selected);
				const inRing = !hasFocus || neighborSet.has(nodeIndex);
				const dimCommunity = communityFocus != null && n.community !== communityFocus;
				let intro = 1;
				if (introT.current < 1 && n.id !== "shreeraj") {
					const delay = n.community / 13 * .45;
					intro = Math.max(0, Math.min(1, (introT.current - delay) / .4));
				}
				const sc = baseScale[nodeIndex] * live.s * (hidden ? 0 : intro);
				const yLift = introT.current < 1 && n.id !== "shreeraj" ? (intro - 1) * 1.4 : 0;
				dummy$1.position.set(live.x, live.y + live.lift + yLift + .02, live.z);
				dummy$1.scale.setScalar(Math.max(1e-4, sc));
				dummy$1.rotation.set(0, 0, 0);
				dummy$1.updateMatrix();
				mesh.setMatrixAt(instance, dummy$1.matrix);
				const dim = hidden || hasFocus && !inRing || dimCommunity ? .28 : 1;
				mesh.setColorAt(instance, colorScratch.set(colors[nodeIndex]).multiplyScalar(.55 + .45 * dim));
			});
			mesh.instanceMatrix.needsUpdate = true;
			if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [[...groups.entries()].map(([kind, indexes]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("instancedMesh", {
		ref: (el) => {
			if (el) meshes.current.set(kind, el);
		},
		args: [
			geos.get(kind),
			void 0,
			indexes.length
		],
		frustumCulled: false,
		castShadow: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			roughness: .92,
			metalness: 0
		})
	}, kind)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HitProxies, {})] });
}
/** Invisible pick spheres so hover stays accurate when the visible mesh is thin. */
function HitProxies() {
	const ref = (0, import_react.useRef)(null);
	const geo = (0, import_react.useMemo)(() => new SphereGeometry(.34, 8, 6), []);
	(0, import_react.useLayoutEffect)(() => {
		const mesh = ref.current;
		if (!mesh) return;
		NODES.forEach((n, i) => {
			const p = POSITIONS[n.id] ?? [
				0,
				0,
				0
			];
			dummy$1.position.set(p[0], p[1] + .05, p[2]);
			dummy$1.scale.setScalar(1);
			dummy$1.updateMatrix();
			mesh.setMatrixAt(i, dummy$1.matrix);
		});
		mesh.instanceMatrix.needsUpdate = true;
	}, []);
	useFrame(() => {
		const mesh = ref.current;
		if (!mesh) return;
		for (let i = 0; i < NODES.length; i++) {
			const live = livePositions[i];
			if (!live) continue;
			const hidden = hiddenFlags[i] === 1;
			dummy$1.position.set(live.x, live.y + live.lift + .05, live.z);
			dummy$1.scale.setScalar(hidden ? 1e-4 : 1);
			dummy$1.updateMatrix();
			mesh.setMatrixAt(i, dummy$1.matrix);
		}
		mesh.instanceMatrix.needsUpdate = true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("instancedMesh", {
		ref,
		args: [
			geo,
			void 0,
			NODES.length
		],
		frustumCulled: false,
		onClick: (e) => {
			e.stopPropagation();
			const id = e.instanceId;
			if (id == null) return;
			const node = NODES[id];
			if (!node || hiddenFlags[id] === 1) return;
			useGraphStore.getState().select(node.id);
		},
		onPointerOver: (e) => {
			e.stopPropagation();
			const id = e.instanceId;
			if (id == null) return;
			const node = NODES[id];
			if (!node || hiddenFlags[id] === 1) return;
			document.body.style.cursor = "pointer";
			useGraphStore.getState().hover(node.id);
		},
		onPointerOut: () => {
			document.body.style.cursor = "";
			useGraphStore.getState().hover(null);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
			transparent: true,
			opacity: 0,
			depthWrite: false
		})
	});
}
var _spherical = new Spherical();
var _offset = new Vector3();
var flight = {
	active: false,
	fromPos: new Vector3(),
	fromTarget: new Vector3(),
	toPos: new Vector3(0, 8, 16),
	toTarget: new Vector3(),
	t: 1,
	duration: .9
};
function expoInOut(t) {
	if (t <= 0) return 0;
	if (t >= 1) return 1;
	return t < .5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
}
function frameFor(ids, view) {
	const pts = [];
	for (const id of ids) {
		const i = indexOf(id);
		if (i < 0) continue;
		const p = nodeWorld(i);
		pts.push(new Vector3(p[0], p[1], p[2]));
	}
	if (pts.length === 0) pts.push(new Vector3());
	const target = new Vector3();
	for (const p of pts) target.add(p);
	target.multiplyScalar(1 / pts.length);
	let r = .6;
	for (const p of pts) r = Math.max(r, p.distanceTo(target));
	const dist = Math.max(3.2, r * 3.1 + 1.6);
	if (view === "plan") return {
		pos: new Vector3(target.x, target.y + dist * 1.7, target.z + .01),
		target
	};
	if (view === "elevation") return {
		pos: new Vector3(target.x, target.y + r * .35, target.z + dist * 1.35),
		target
	};
	if (view === "axonometric") {
		const s = dist * 1.15;
		return {
			pos: new Vector3(target.x + s, target.y + s, target.z + s),
			target
		};
	}
	return {
		pos: new Vector3(target.x + dist * .72, target.y + dist * .48, target.z + dist * .72),
		target
	};
}
function overview(view) {
	const target = new Vector3(0, 0, 0);
	const d = Math.max(14, LAYOUT_RADIUS * .95);
	if (view === "plan") return {
		pos: new Vector3(0, d * 1.55, .02),
		target
	};
	if (view === "elevation") return {
		pos: new Vector3(0, d * .22, d * 1.35),
		target
	};
	if (view === "axonometric") return {
		pos: new Vector3(d, d * .92, d),
		target
	};
	return {
		pos: new Vector3(d * .55, d * .42, d * .72),
		target
	};
}
function CameraRig() {
	const controls = (0, import_react.useRef)(null);
	const { camera } = useThree();
	const focus = useGraphStore((s) => s.focus);
	const view = useGraphStore((s) => s.view);
	const reduced = useGraphStore((s) => s.reducedMotion);
	const introDone = useGraphStore((s) => s.introDone);
	const idle = useGraphStore((s) => s.idle);
	const mobile = useGraphStore((s) => s.mobile);
	const setIdle = useGraphStore((s) => s.setIdle);
	const touch = useGraphStore((s) => s.touchActivity);
	const fly = (0, import_react.useRef)(false);
	const yaw = (0, import_react.useRef)(0);
	const pitch = (0, import_react.useRef)(-.25);
	const keys = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const lookQueue = (0, import_react.useRef)({
		dx: 0,
		dy: 0
	});
	const lastBearing = (0, import_react.useRef)(999);
	(0, import_react.useEffect)(() => {
		const onLook = (e) => {
			const d = e.detail;
			if (!d) return;
			lookQueue.current.dx += d.dx;
			lookQueue.current.dy += d.dy;
		};
		window.addEventListener("sn-fly-look", onLook);
		return () => window.removeEventListener("sn-fly-look", onLook);
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (isTyping(e)) return;
			if (e.code === "KeyF" && !e.metaKey && !e.ctrlKey && !mobile) {
				e.preventDefault();
				fly.current = !fly.current;
				if (fly.current) {
					const dir = new Vector3();
					camera.getWorldDirection(dir);
					yaw.current = Math.atan2(-dir.x, -dir.z);
					pitch.current = Math.asin(MathUtils.clamp(dir.y, -.95, .95));
					flight.active = false;
					touch();
				}
				window.dispatchEvent(new CustomEvent("sn-fly", { detail: fly.current }));
			}
			if (e.code === "Escape" && fly.current) {
				fly.current = false;
				window.dispatchEvent(new CustomEvent("sn-fly", { detail: false }));
			}
			if (fly.current) keys.current.add(e.code);
		};
		const onUp = (e) => keys.current.delete(e.code);
		const onBlur = () => keys.current.clear();
		window.addEventListener("keydown", onKey);
		window.addEventListener("keyup", onUp);
		window.addEventListener("blur", onBlur);
		return () => {
			window.removeEventListener("keydown", onKey);
			window.removeEventListener("keyup", onUp);
			window.removeEventListener("blur", onBlur);
		};
	}, [
		camera,
		mobile,
		touch
	]);
	(0, import_react.useEffect)(() => {
		const reducedNow = useGraphStore.getState().reducedMotion;
		const intro = useGraphStore.getState().introDone;
		const nodeId = focus.nodeId;
		let ids = [];
		if (nodeId) ids = focus.frameIds && focus.frameIds.length ? focus.frameIds : [nodeId, ...neighborsOf(nodeId)];
		const shot = !intro && !nodeId ? {
			pos: new Vector3(0, 26, .4),
			target: new Vector3(0, 0, 0)
		} : ids.length ? frameFor(ids, view) : overview(view);
		const ctrl = controls.current;
		const curTarget = ctrl ? ctrl.target.clone() : new Vector3();
		if (reducedNow) {
			camera.position.copy(shot.pos);
			if (ctrl) {
				ctrl.target.copy(shot.target);
				ctrl.update();
			}
			flight.active = false;
			return;
		}
		flight.fromPos.copy(camera.position);
		flight.fromTarget.copy(curTarget);
		flight.toPos.copy(shot.pos);
		flight.toTarget.copy(shot.target);
		flight.t = 0;
		flight.duration = introDone ? .9 : 1.6;
		flight.active = true;
	}, [
		focus,
		view,
		camera,
		introDone
	]);
	useFrame((_, delta) => {
		const dt = Math.min(delta, .05);
		const ctrl = controls.current;
		const lookDir = new Vector3();
		camera.getWorldDirection(lookDir);
		const bearing = Math.atan2(lookDir.x, lookDir.z) * (180 / Math.PI);
		if (Math.abs(bearing - lastBearing.current) > .6) {
			lastBearing.current = bearing;
			window.dispatchEvent(new CustomEvent("sn-bearing", { detail: -bearing }));
		}
		if (!ctrl) return;
		if (fly.current && !mobile) {
			const look = lookQueue.current;
			yaw.current -= look.dx;
			pitch.current = MathUtils.clamp(pitch.current - look.dy, -1.2, 1.2);
			look.dx = 0;
			look.dy = 0;
			const speed = (keys.current.has("ShiftLeft") || keys.current.has("ShiftRight") ? 9 : 4.2) * dt;
			const forward = new Vector3(-Math.sin(yaw.current), 0, -Math.cos(yaw.current));
			const right = new Vector3(Math.cos(yaw.current), 0, -Math.sin(yaw.current));
			const move = new Vector3();
			if (keys.current.has("KeyW")) move.add(forward);
			if (keys.current.has("KeyS")) move.sub(forward);
			if (keys.current.has("KeyD")) move.add(right);
			if (keys.current.has("KeyA")) move.sub(right);
			if (keys.current.has("KeyE") || keys.current.has("Space")) move.y += 1;
			if (keys.current.has("KeyQ") || keys.current.has("ControlLeft")) move.y -= 1;
			if (move.lengthSq() > 0) {
				move.normalize().multiplyScalar(speed);
				camera.position.add(move);
				touch();
			}
			const aim = new Vector3(camera.position.x - Math.sin(yaw.current) * Math.cos(pitch.current), camera.position.y + Math.sin(pitch.current), camera.position.z - Math.cos(yaw.current) * Math.cos(pitch.current));
			camera.lookAt(aim);
			ctrl.target.copy(aim);
			ctrl.enabled = false;
			return;
		}
		ctrl.enabled = true;
		if (flight.active) {
			flight.t += dt / flight.duration;
			const t = reduced ? 1 : expoInOut(Math.min(1, flight.t));
			camera.position.lerpVectors(flight.fromPos, flight.toPos, t);
			ctrl.target.lerpVectors(flight.fromTarget, flight.toTarget, t);
			ctrl.update();
			if (flight.t >= 1) flight.active = false;
			return;
		}
		const now = performance.now();
		const store = useGraphStore.getState();
		if (!store.introDone || store.paletteOpen || store.selectedId || store.tourPlaying || store.reducedMotion) {
			if (idle) setIdle(false);
			return;
		}
		if (now - store.lastActivity > 12e3) {
			if (!idle) setIdle(true);
			const ang = dt / 240 * Math.PI * 2;
			_offset.copy(camera.position).sub(ctrl.target);
			_spherical.setFromVector3(_offset);
			_spherical.theta += ang;
			_offset.setFromSpherical(_spherical);
			camera.position.copy(ctrl.target).add(_offset);
			ctrl.update();
		}
	});
	(0, import_react.useEffect)(() => {
		const onPointer = () => {
			if (flight.active) flight.active = false;
			useGraphStore.getState().touchActivity();
		};
		const el = document.querySelector("canvas");
		el?.addEventListener("pointerdown", onPointer);
		el?.addEventListener("wheel", onPointer, { passive: true });
		return () => {
			el?.removeEventListener("pointerdown", onPointer);
			el?.removeEventListener("wheel", onPointer);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
		ref: controls,
		makeDefault: true,
		enableDamping: true,
		dampingFactor: .12,
		zoomToCursor: true,
		maxDistance: 70,
		minDistance: 1.2,
		maxPolarAngle: view === "axonometric" || view === "plan" || view === "elevation" ? Math.PI * .92 : Math.PI * .49,
		enablePan: true,
		screenSpacePanning: true,
		mouseButtons: {
			LEFT: 0,
			MIDDLE: 2,
			RIGHT: 2
		},
		onStart: () => {
			flight.active = false;
			useGraphStore.getState().touchActivity();
		}
	});
}
function isTyping(e) {
	const t = e.target;
	if (!t) return false;
	const tag = t.tagName;
	return tag === "INPUT" || tag === "TEXTAREA" || t.isContentEditable;
}
/** Drafting rules on the sheet. Fog, not a solid plane, dissolves the edges. */
function DraftingGrid() {
	const minor = (0, import_react.useMemo)(() => {
		return {
			size: 80,
			divisions: 80
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			0,
			-.02,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("gridHelper", {
			args: [
				minor.size,
				minor.divisions,
				TRACE,
				TRACE
			],
			position: [
				0,
				0,
				0
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("gridHelper", {
			args: [
				80,
				16,
				"#848D8B",
				"#848D8B"
			],
			position: [
				0,
				.001,
				0
			]
		})]
	});
}
var ROUTE = "#8A5A12";
/**
* Three line-segment batches: ink, redline dashes, and the hot or route set.
* Positions update in place. No NaN breaks, no per-edge objects.
*/
function Edges() {
	const showExtracted = useGraphStore((s) => s.showExtracted);
	const showInferred = useGraphStore((s) => s.showInferred);
	const minConfidence = useGraphStore((s) => s.minConfidence);
	const hovered = useGraphStore((s) => s.hoveredId);
	const selected = useGraphStore((s) => s.selectedId);
	const pathNodes = useGraphStore((s) => s.pathNodes);
	const focus = hovered || selected;
	const pathSet = (0, import_react.useMemo)(() => {
		const s = /* @__PURE__ */ new Set();
		if (!pathNodes) return s;
		for (let i = 0; i < pathNodes.length - 1; i++) {
			const a = pathNodes[i];
			const b = pathNodes[i + 1];
			if (!a || !b) continue;
			s.add(`${a}|${b}`);
			s.add(`${b}|${a}`);
		}
		return s;
	}, [pathNodes]);
	const inkGeo = (0, import_react.useMemo)(() => new BufferGeometry(), []);
	const dashGeo = (0, import_react.useMemo)(() => new BufferGeometry(), []);
	const hotGeo = (0, import_react.useMemo)(() => new BufferGeometry(), []);
	const inkPos = (0, import_react.useMemo)(() => new Float32Array(LINKS.length * 6), []);
	const dashPos = (0, import_react.useMemo)(() => new Float32Array(LINKS.length * 6), []);
	const hotPos = (0, import_react.useMemo)(() => new Float32Array(LINKS.length * 6), []);
	(0, import_react.useLayoutEffect)(() => {
		inkGeo.setAttribute("position", new Float32BufferAttribute(inkPos, 3));
		dashGeo.setAttribute("position", new Float32BufferAttribute(dashPos, 3));
		hotGeo.setAttribute("position", new Float32BufferAttribute(hotPos, 3));
		inkGeo.setDrawRange(0, 0);
		dashGeo.setDrawRange(0, 0);
		hotGeo.setDrawRange(0, 0);
	}, [
		inkGeo,
		dashGeo,
		hotGeo,
		inkPos,
		dashPos,
		hotPos
	]);
	const dashRef = (0, import_react.useRef)(null);
	useFrame(() => {
		let ni = 0;
		let nd = 0;
		let nh = 0;
		const write = (buf, cursor, ax, ay, az, bx, by, bz) => {
			const o = cursor * 6;
			buf[o] = ax;
			buf[o + 1] = ay;
			buf[o + 2] = az;
			buf[o + 3] = bx;
			buf[o + 4] = by;
			buf[o + 5] = bz;
			return cursor + 1;
		};
		for (let i = 0; i < LINKS.length; i++) {
			const l = LINKS[i];
			if (!l) continue;
			const inferred = l.confidence === "INFERRED";
			if (inferred && !showInferred) continue;
			if (!inferred && !showExtracted) continue;
			if (inferred && (l.confidence_score ?? 1) < minConfidence) continue;
			const ia = indexOf(l.source);
			const ib = indexOf(l.target);
			if (ia < 0 || ib < 0) continue;
			if (hiddenFlags[ia] || hiddenFlags[ib]) continue;
			const pa = livePositions[ia];
			const pb = livePositions[ib];
			if (!pa || !pb) continue;
			const ax = pa.x;
			const ay = pa.y + pa.lift + .03;
			const az = pa.z;
			const bx = pb.x;
			const by = pb.y + pb.lift + .03;
			const bz = pb.z;
			const onPath = pathSet.has(`${l.source}|${l.target}`);
			const isHot = Boolean(focus) && (l.source === focus || l.target === focus);
			if (onPath || isHot) nh = write(hotPos, nh, ax, ay, az, bx, by, bz);
			else if (inferred) nd = write(dashPos, nd, ax, ay, az, bx, by, bz);
			else ni = write(inkPos, ni, ax, ay, az, bx, by, bz);
		}
		const commit = (geo, count) => {
			const attr = geo.getAttribute("position");
			attr.needsUpdate = true;
			geo.setDrawRange(0, count * 2);
			geo.computeBoundingSphere();
		};
		commit(inkGeo, ni);
		commit(dashGeo, nd);
		commit(hotGeo, nh);
		dashRef.current?.computeLineDistances();
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineSegments", {
			geometry: inkGeo,
			frustumCulled: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineBasicMaterial", {
				color: INK,
				transparent: true,
				opacity: .32
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineSegments", {
			ref: dashRef,
			geometry: dashGeo,
			frustumCulled: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineDashedMaterial", {
				color: REDLINE,
				transparent: true,
				opacity: .85,
				dashSize: .16,
				gapSize: .1
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineSegments", {
			geometry: hotGeo,
			frustumCulled: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("lineBasicMaterial", {
				color: focus && pathNodes ? ROUTE : PATINA,
				transparent: true,
				opacity: .95
			})
		}),
		selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Travelers, { nodeId: selected }) : null
	] });
}
var dummy = new Object3D();
function Travelers({ nodeId }) {
	const edges = (0, import_react.useMemo)(() => {
		const list = [];
		for (const l of LINKS) if (l.source === nodeId) list.push({
			a: indexOf(l.source),
			b: indexOf(l.target)
		});
		else if (l.target === nodeId) list.push({
			a: indexOf(l.target),
			b: indexOf(l.source)
		});
		return list.slice(0, 16);
	}, [nodeId]);
	const ref = (0, import_react.useRef)(null);
	useFrame(({ clock }) => {
		const mesh = ref.current;
		if (!mesh) return;
		const t = clock.elapsedTime;
		edges.forEach((e, i) => {
			const pa = nodeWorld(e.a);
			const pb = nodeWorld(e.b);
			const u = (t * .15 + i * .11) % 1;
			dummy.position.set(pa[0] + (pb[0] - pa[0]) * u, pa[1] + (pb[1] - pa[1]) * u + .05, pa[2] + (pb[2] - pa[2]) * u);
			dummy.updateMatrix();
			mesh.setMatrixAt(i, dummy.matrix);
		});
		mesh.instanceMatrix.needsUpdate = true;
	});
	if (edges.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("instancedMesh", {
		ref,
		args: [
			void 0,
			void 0,
			edges.length
		],
		frustumCulled: false,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			.03,
			8,
			6
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: PATINA })]
	});
}
/** Light film grain and a soft vignette. No bloom. Skipped on phones. */
function Effects() {
	if (useGraphStore((s) => s.mobile)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: null,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EffectComposer, {
			multisampling: 0,
			enableNormalPass: false,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SMAA, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Noise, { opacity: .035 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vignette, {
					eskil: false,
					offset: .18,
					darkness: .42
				})
			]
		})
	});
}
/** Pointer drag yaws and pitches while fly mode is on. A is strafe left. */
function FlyLook() {
	const { gl, camera } = useThree();
	(0, import_react.useEffect)(() => {
		let flying = false;
		let dragging = false;
		let lastX = 0;
		let lastY = 0;
		const onFly = (e) => {
			flying = Boolean(e.detail);
		};
		const down = (e) => {
			if (!flying || e.button !== 0) return;
			dragging = true;
			lastX = e.clientX;
			lastY = e.clientY;
		};
		const up = () => {
			dragging = false;
		};
		const move = (e) => {
			if (!flying || !dragging) return;
			const dx = e.clientX - lastX;
			const dy = e.clientY - lastY;
			lastX = e.clientX;
			lastY = e.clientY;
			const detail = {
				dx: dx * .004,
				dy: dy * .003
			};
			window.dispatchEvent(new CustomEvent("sn-fly-look", { detail }));
		};
		window.addEventListener("sn-fly", onFly);
		gl.domElement.addEventListener("pointerdown", down);
		window.addEventListener("pointerup", up);
		window.addEventListener("pointermove", move);
		return () => {
			window.removeEventListener("sn-fly", onFly);
			gl.domElement.removeEventListener("pointerdown", down);
			window.removeEventListener("pointerup", up);
			window.removeEventListener("pointermove", move);
		};
	}, [gl, camera]);
	return null;
}
var HULL_COLORS = [
	PATINA,
	"#8A5A12",
	REDLINE
];
/** Dotted loop around each hyperedge, drawn just above the sheet. */
function Hulls() {
	const tick = useGraphStore((s) => s.motionTick);
	const loops = (0, import_react.useMemo)(() => {
		return HYPEREDGES.map((h) => {
			const pts = [];
			for (const id of h.nodes) {
				const i = indexOf(id);
				const live = i >= 0 ? livePositions[i] : void 0;
				const p = live ? [
					live.x,
					live.y,
					live.z
				] : POSITIONS[id] ?? [
					0,
					0,
					0
				];
				pts.push([
					p[0],
					.04,
					p[2]
				]);
			}
			if (pts.length < 3) return null;
			const c = pts.reduce((a, p) => [
				a[0] + p[0],
				0,
				a[2] + p[2]
			], [
				0,
				0,
				0
			]);
			c[0] /= pts.length;
			c[2] /= pts.length;
			const expanded = pts.map((p) => {
				const dx = p[0] - c[0];
				const dz = p[2] - c[2];
				const len = Math.hypot(dx, dz) || 1;
				return [
					p[0] + dx / len * .55,
					.05,
					p[2] + dz / len * .55
				];
			}).sort((a, b) => Math.atan2(a[2] - c[2], a[0] - c[0]) - Math.atan2(b[2] - c[2], b[0] - c[0]));
			expanded.push(expanded[0]);
			return {
				id: h.id,
				label: h.label,
				points: expanded,
				center: c
			};
		}).filter((x) => Boolean(x));
	}, [tick]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", { children: loops.map((loop, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
		points: loop.points,
		color: HULL_COLORS[i % HULL_COLORS.length],
		lineWidth: 1,
		dashed: true,
		dashSize: .12,
		gapSize: .1,
		transparent: true,
		opacity: .55
	}, loop.id)) });
}
var MAX_LABELS = 32;
var v = new Vector3();
/**
* Screen-space labels for the nearest important nodes.
* A simple overlap test keeps callouts from stacking.
*/
function Labels() {
	const { camera, size } = useThree();
	const mobile = useGraphStore((s) => s.mobile);
	const hovered = useGraphStore((s) => s.hoveredId);
	const selected = useGraphStore((s) => s.selectedId);
	const cap = mobile ? 14 : MAX_LABELS;
	const [spots, setSpots] = (0, import_react.useState)([]);
	const last = (0, import_react.useRef)("");
	const ranked = (0, import_react.useMemo)(() => {
		return NODES.map((n, i) => ({
			i,
			deg: DEGREE.get(n.id) || 0,
			id: n.id
		})).sort((a, b) => b.deg - a.deg);
	}, []);
	useFrame(() => {
		const w = size.width;
		const h = size.height;
		const placed = [];
		const next = [];
		const focus = hovered || selected;
		const consider = (index, force) => {
			if (hiddenFlags[index]) return;
			const n = NODES[index];
			if (!n) return;
			const p = nodeWorld(index);
			v.set(p[0], p[1] + .28, p[2]);
			const projected = v.clone().project(camera);
			if (!force && (projected.z < -1 || projected.z > 1)) return;
			const sx = (projected.x * .5 + .5) * w;
			const sy = (-projected.y * .5 + .5) * h;
			if (!force && (sx < -40 || sy < -20 || sx > w + 40 || sy > h + 20)) return;
			v.set(p[0], p[1], p[2]);
			const dist = camera.position.distanceTo(v);
			for (const o of placed) if (Math.abs(o.x - sx) < 78 && Math.abs(o.y - sy) < 16) return;
			if (!force && dist > (mobile ? 16 : 26) && (DEGREE.get(n.id) || 0) < 6) return;
			placed.push({
				x: sx,
				y: sy
			});
			next.push({
				key: n.id,
				label: n.label,
				x: Math.round(sx),
				y: Math.round(sy),
				hot: n.id === focus
			});
		};
		if (focus) {
			const i = NODES.findIndex((n) => n.id === focus);
			if (i >= 0) consider(i, true);
		}
		for (const r of ranked) {
			if (next.length >= cap) break;
			if (r.id === focus) continue;
			consider(r.i, false);
		}
		const sig = next.map((s) => s.key + s.x + "," + s.y + (s.hot ? "!" : "")).join("|");
		if (sig !== last.current) {
			last.current = sig;
			setSpots(next);
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Html, {
		fullscreen: true,
		zIndexRange: [10, 0],
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sn-label-layer",
			children: spots.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: s.hot ? "sn-label is-hot" : "sn-label",
				style: { transform: "translate(" + s.x + "px," + s.y + "px)" },
				children: s.label
			}, s.key))
		})
	});
}
function GraphScene() {
	const mobile = useGraphStore((s) => s.mobile);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		className: "sn-canvas",
		dpr: mobile ? [1, 1.25] : [1, 1.6],
		camera: {
			position: [
				0,
				22,
				.4
			],
			fov: 42,
			near: .1,
			far: 180
		},
		gl: {
			antialias: true,
			alpha: false,
			powerPreference: "high-performance"
		},
		onPointerMissed: (e) => {
			if (e.type !== "dblclick" && e.detail < 2) return;
			const s = useGraphStore.getState();
			s.select(null, { push: false });
			s.setCommunityFocus(null);
			s.setPath(null);
			s.stopTour();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
				attach: "background",
				args: [VELLUM]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
				attach: "fog",
				args: [
					VELLUM,
					28,
					72
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
				"#f7f6f2",
				"#c9c3b4",
				.85
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .45 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					12,
					22,
					8
				],
				intensity: 1.15,
				castShadow: true,
				"shadow-mapSize-width": 1024,
				"shadow-mapSize-height": 1024
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
				fallback: null,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DraftingGrid, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Edges, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hulls, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nodes, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Labels, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraRig, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlyLook, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Effects, {})
				]
			})
		]
	});
}
var VIEWS$1 = [
	"perspective",
	"plan",
	"elevation",
	"axonometric"
];
function readHash(hash) {
	const raw = hash.startsWith("#") ? hash.slice(1) : hash;
	const params = new URLSearchParams(raw);
	const out = {};
	const node = params.get("node");
	if (node) out.node = node;
	const view = params.get("view");
	if (view && VIEWS$1.includes(view)) out.view = view;
	const kinds = params.get("kinds");
	if (kinds) {
		const off = kinds.split(",").map((s) => s.trim()).filter((s) => KINDS$1.includes(s));
		if (off.length) out.kindsOff = off;
	}
	if (params.get("inferred") === "0") out.inferred = false;
	if (params.get("extracted") === "0") out.extracted = false;
	const conf = params.get("confidence");
	if (conf != null && conf !== "") {
		const n = Number(conf);
		if (!Number.isNaN(n)) out.confidence = Math.min(1, Math.max(0, n));
	}
	const tour = params.get("tour");
	if (tour) out.tour = tour;
	const path = params.get("path");
	if (path && path.includes(",")) {
		const [a, b] = path.split(",");
		if (a && b) out.path = [a, b];
	}
	return out;
}
function writeHash(state) {
	const params = new URLSearchParams();
	if (state.node) params.set("node", state.node);
	if (state.view && state.view !== "perspective") params.set("view", state.view);
	if (state.kindsOff && state.kindsOff.length) params.set("kinds", state.kindsOff.join(","));
	if (state.inferred === false) params.set("inferred", "0");
	if (state.extracted === false) params.set("extracted", "0");
	if (state.confidence != null && state.confidence > 0) params.set("confidence", String(Math.round(state.confidence * 100) / 100));
	if (state.tour) params.set("tour", state.tour);
	if (state.path) params.set("path", `${state.path[0]},${state.path[1]}`);
	const s = params.toString();
	return s ? `#${s}` : "";
}
function stop(nodeId, caption) {
	return caption ? {
		nodeId,
		caption
	} : { nodeId };
}
/**
* Camera paths through nodes that exist in the graph.
* Captions quote the node's own description, never invented biography.
*/
var TOURS = [
	{
		id: "pivot",
		title: "The pivot",
		blurb: "Architecture school, the thesis, then the turn toward product and HCI.",
		stops: [
			stop("shreeraj"),
			stop("barch_sea"),
			stop("between_the_edges"),
			stop("syntax_of_behavior"),
			stop("th_affordances"),
			stop("goal_product_design"),
			stop("goal_masters")
		].filter((s) => getNode(s.nodeId))
	},
	{
		id: "play",
		title: "Where I play",
		blurb: "The Linktree sites and the work that lives beside the portfolio.",
		stops: [
			stop("ch_linktree"),
			stop("orbital"),
			stop("warp"),
			stop("ashline"),
			stop("resonance"),
			stop("th_play"),
			stop("showreel")
		].filter((s) => getNode(s.nodeId))
	},
	{
		id: "gatech",
		title: "The road to Georgia Tech",
		blurb: "The 2027 HCI shortlist, with Georgia Tech as a named stop.",
		stops: [
			stop("goal_masters"),
			stop("gt_mshci"),
			stop("cmu_mhci"),
			stop("bench"),
			stop("ut_austin"),
			stop("uw_mhcid")
		].filter((s) => getNode(s.nodeId))
	},
	{
		id: "poems",
		title: "Paper Trail poems",
		blurb: "Writing collected under Paper Trail.",
		stops: [
			stop("paper_trail_poems"),
			stop("paper_trail"),
			stop("mood_longing"),
			stop("mood_wonder"),
			stop("th_memory_longing")
		].filter((s) => getNode(s.nodeId))
	},
	{
		id: "inferred",
		title: "Surprising connections",
		blurb: "Links the graph marked as inferred, with the reason written on each edge.",
		stops: [
			stop("site_reels"),
			stop("ch_instagram"),
			stop("ut_austin"),
			stop("ledger"),
			stop("plain_paper")
		].filter((s) => getNode(s.nodeId))
	}
];
function tourById(id) {
	return TOURS.find((t) => t.id === id);
}
function norm(s) {
	return s.toLowerCase().normalize("NFKD");
}
/** Lightweight fuzzy rank: substring, then token overlap, then character gaps. */
function searchNodes(query, limit = 12) {
	const q = norm(query.trim());
	if (!q) return [];
	const tokens = q.split(/\s+/).filter(Boolean);
	const hits = [];
	for (const n of NODES) {
		const label = norm(n.label);
		const desc = norm(n.description || "");
		const kind = norm(n.kind);
		const comm = norm(n.community_name);
		const id = norm(n.id);
		let score = 0;
		if (label === q) score += 120;
		else if (label.startsWith(q)) score += 80;
		else if (label.includes(q)) score += 55;
		else if (id.includes(q)) score += 40;
		if (desc.includes(q)) score += 22;
		if (kind.includes(q)) score += 14;
		if (comm.includes(q)) score += 12;
		let tokenHits = 0;
		for (const t of tokens) if (label.includes(t)) tokenHits += 2;
		else if (desc.includes(t) || id.includes(t) || comm.includes(t)) tokenHits += 1;
		if (tokens.length > 1 && tokenHits > 0) score += tokenHits * 8;
		if (score <= 0 && q.length >= 3) {
			let i = 0;
			for (const ch of label) {
				if (ch === q[i]) i += 1;
				if (i === q.length) break;
			}
			if (i === q.length) score += 8;
		}
		if (score > 0) hits.push({
			id: n.id,
			label: n.label,
			kind: n.kind,
			community: n.community_name,
			description: n.description,
			score
		});
	}
	hits.sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
	return hits.slice(0, limit);
}
var MAP = {
	Project: Box,
	"Skill/Tool": Diamond,
	"Poem/Writing": Circle,
	Person: UserRound,
	Place: MapPin,
	"Program/University": GraduationCap,
	"Bot/Agent": Bot,
	Theme: Hexagon,
	"Goal/Career path": Compass,
	Channel: Radio,
	Education: GraduationCap,
	"Preference/Value": Sparkles,
	Experience: Shapes
};
function KindIcon({ kind, className }) {
	const Icon = MAP[kind] ?? Cone;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className,
		strokeWidth: 1.5,
		"aria-hidden": true
	});
}
function CommandPalette() {
	const open = useGraphStore((s) => s.paletteOpen);
	const setOpen = useGraphStore((s) => s.setPaletteOpen);
	const select = useGraphStore((s) => s.select);
	const [q, setQ] = (0, import_react.useState)("");
	const [cursor, setCursor] = (0, import_react.useState)(0);
	const input = (0, import_react.useRef)(null);
	const hits = (0, import_react.useMemo)(() => searchNodes(q, 10), [q]);
	(0, import_react.useEffect)(() => {
		if (open) {
			setQ("");
			setCursor(0);
			const t = window.setTimeout(() => input.current?.focus(), 20);
			return () => window.clearTimeout(t);
		}
	}, [open]);
	(0, import_react.useEffect)(() => {
		setCursor(0);
	}, [q]);
	if (!open) return null;
	const go = (id) => {
		select(id);
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sn-palette-back",
		role: "presentation",
		onMouseDown: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sn-palette",
			role: "dialog",
			"aria-label": "Search the graph",
			onMouseDown: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "sn-palette-search",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { "aria-hidden": true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: input,
					value: q,
					placeholder: "Search labels and descriptions",
					"aria-label": "Search labels and descriptions",
					onChange: (e) => setQ(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "ArrowDown") {
							e.preventDefault();
							setCursor((c) => Math.min(hits.length - 1, c + 1));
						} else if (e.key === "ArrowUp") {
							e.preventDefault();
							setCursor((c) => Math.max(0, c - 1));
						} else if (e.key === "Enter") {
							e.preventDefault();
							const hit = hits[cursor];
							if (hit) go(hit.id);
						} else if (e.key === "Escape") {
							e.preventDefault();
							setOpen(false);
						}
					}
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				role: "listbox",
				"aria-label": "Results",
				children: hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "sn-palette-empty",
					children: q ? "Nothing matches." : "Type to search the drawing."
				}) : hits.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					role: "option",
					"aria-selected": i === cursor,
					className: i === cursor ? "is-active" : "",
					onMouseEnter: () => setCursor(i),
					onClick: () => go(h.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KindIcon, {
						kind: h.kind,
						className: "sn-kind-icon"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: h.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: [
						h.kind,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							children: " · "
						}),
						h.community
					] })] })]
				}) }, h.id))
			})]
		})
	});
}
function DetailPanel() {
	const id = useGraphStore((s) => s.selectedId);
	const mobile = useGraphStore((s) => s.mobile);
	const select = useGraphStore((s) => s.select);
	const back = useGraphStore((s) => s.historyBack);
	const forward = useGraphStore((s) => s.historyForward);
	const historyIndex = useGraphStore((s) => s.historyIndex);
	const history = useGraphStore((s) => s.history);
	const node = id ? getNode(id) : void 0;
	if (!node) return null;
	const links = (ADJACENCY.get(node.id) || []).map(({ to, linkIndex }) => {
		const link = LINKS[linkIndex];
		const other = getNode(to);
		if (!link || !other) return null;
		return {
			to,
			other,
			link
		};
	}).filter((x) => Boolean(x));
	const groups = /* @__PURE__ */ new Map();
	for (const row of links) {
		const key = row.link.relation;
		const list = groups.get(key) ?? [];
		list.push(row);
		groups.set(key, list);
	}
	const sources = uniqueSources(node);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: mobile ? "sn-sheet sn-sheet-mobile" : "sn-sheet",
		role: "dialog",
		"aria-label": node.label,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sn-sheet-head",
				children: [
					mobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sn-handle",
						"aria-hidden": true
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sn-tags",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "sn-tag",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KindIcon, {
								kind: node.kind,
								className: "sn-kind-icon"
							}), node.kind]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sn-tag sn-tag-quiet",
							children: node.community_name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sn-sheet-nav",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: back,
								disabled: historyIndex <= 0,
								"aria-label": "Previous selection",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: forward,
								disabled: historyIndex >= history.length - 1,
								"aria-label": "Next selection",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => select(null, { push: false }),
								"aria-label": "Close detail",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "sn-sheet-title",
				children: node.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sn-id",
				children: node.id
			}),
			node.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sn-prose",
				children: node.description
			}) : null,
			sources.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Sources" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "sn-sources",
				children: sources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: s.url,
					target: "_blank",
					rel: "noreferrer",
					children: [s.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { "aria-hidden": true })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.label }) }, s.key))
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Connections" }), [...groups.entries()].map(([relation, rows]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sn-rel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sn-rel-name",
					children: relationLabel(relation)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => select(row.other.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.other.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sn-rel-kind",
						children: row.other.kind
					})]
				}), row.link.confidence === "INFERRED" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "sn-why",
					children: [
						row.link.why ? row.link.why : "Inferred.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular",
							children: [Math.round((row.link.confidence_score ?? 0) * 100), "%"]
						})
					]
				}) : null] }, row.link.source + row.link.target + relation)) })]
			}, relation))] })
		]
	});
}
function uniqueSources(node) {
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	const push = (label, url, file) => {
		const name = label || file || url;
		if (!name) return;
		const key = `${name}|${url ?? ""}`;
		if (seen.has(key)) return;
		seen.add(key);
		out.push({
			key,
			label: name,
			url: url || void 0
		});
	};
	if (node.sources) for (const s of node.sources) push(s.label || s.file, s.url, s.file);
	push(node.source_file, node.source_url, node.source_file);
	return out;
}
function Filters() {
	const open = useGraphStore((s) => s.filtersOpen);
	const kinds = useGraphStore((s) => s.kinds);
	const toggleKind = useGraphStore((s) => s.toggleKind);
	const showExtracted = useGraphStore((s) => s.showExtracted);
	const showInferred = useGraphStore((s) => s.showInferred);
	const minConfidence = useGraphStore((s) => s.minConfidence);
	const setShowExtracted = useGraphStore((s) => s.setShowExtracted);
	const setShowInferred = useGraphStore((s) => s.setShowInferred);
	const setMinConfidence = useGraphStore((s) => s.setMinConfidence);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "sn-panel sn-filters",
		"aria-label": "Filters",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Kinds" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: KINDS$1.map((kind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"aria-pressed": kinds[kind] !== false,
				className: kinds[kind] === false ? "is-off" : "",
				onClick: () => toggleKind(kind),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KindIcon, {
					kind,
					className: "sn-kind-icon"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: kind })]
			}) }, kind)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Edges" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sn-edge-toggles",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": showExtracted,
					onClick: () => setShowExtracted(!showExtracted),
					children: "Extracted"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": showInferred,
					className: "is-redline",
					onClick: () => setShowInferred(!showInferred),
					children: "Inferred"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "sn-slider",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Hide inferred below ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular",
					children: Math.round(minConfidence * 100)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 0,
					max: 100,
					value: Math.round(minConfidence * 100),
					onChange: (e) => setMinConfidence(Number(e.target.value) / 100),
					"aria-valuemin": 0,
					"aria-valuemax": 100,
					"aria-valuenow": Math.round(minConfidence * 100)
				})]
			})
		]
	});
}
/**
* Plan-to-perspective title. The camera flight lives in CameraRig.
* Any key or click skips it. Reduced motion skips entirely.
*/
function Intro() {
	const done = useGraphStore((s) => s.introDone);
	const reduced = useGraphStore((s) => s.reducedMotion);
	const setDone = useGraphStore((s) => s.setIntroDone);
	const [phase, setPhase] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (useGraphStore.getState().introDone || reduced) {
			setDone(true);
			return;
		}
		const timers = [
			window.setTimeout(() => setPhase(1), 400),
			window.setTimeout(() => setPhase(2), 1600),
			window.setTimeout(() => setPhase(3), 2800),
			window.setTimeout(() => setDone(true), 2600)
		];
		const skip = () => {
			timers.forEach((t) => window.clearTimeout(t));
			setDone(true);
		};
		window.addEventListener("pointerdown", skip, { once: true });
		window.addEventListener("keydown", skip, { once: true });
		return () => {
			timers.forEach((t) => window.clearTimeout(t));
			window.removeEventListener("pointerdown", skip);
			window.removeEventListener("keydown", skip);
		};
	}, [reduced, setDone]);
	if (done) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sn-intro",
		"aria-hidden": phase < 2,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `sn-intro-line ${phase >= 1 ? "is-on" : ""}`,
				children: "A drawing of one person"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: phase >= 2 ? "is-on" : "",
				children: "Shreeraj Narwade, drawn to measure"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `sn-intro-skip ${phase >= 1 ? "is-on" : ""}`,
				children: "Click or press any key to skip"
			})
		]
	});
}
function Legend() {
	const open = useGraphStore((s) => s.legendOpen);
	const focus = useGraphStore((s) => s.communityFocus);
	const setFocus = useGraphStore((s) => s.setCommunityFocus);
	const mobile = useGraphStore((s) => s.mobile);
	if (!open && !mobile) return null;
	if (mobile && !open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "sn-panel sn-legend",
		"aria-label": "Communities",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Communities" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: COMMUNITIES.map((c) => {
			const on = focus === c.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"aria-pressed": on,
				className: on ? "is-on" : "",
				onClick: () => setFocus(on ? null : c.id),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
						style: { background: communityColor(c.id) },
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "tabular",
						children: c.count
					})
				]
			}) }, c.id);
		}) })]
	});
}
function PathFinder() {
	const open = useGraphStore((s) => s.filtersOpen);
	const from = useGraphStore((s) => s.pathFrom);
	const to = useGraphStore((s) => s.pathTo);
	const path = useGraphStore((s) => s.pathNodes);
	const hop = useGraphStore((s) => s.pathHop);
	const setFrom = useGraphStore((s) => s.setPathFrom);
	const setTo = useGraphStore((s) => s.setPathTo);
	const setPath = useGraphStore((s) => s.setPath);
	const setHop = useGraphStore((s) => s.setPathHop);
	const select = useGraphStore((s) => s.select);
	if (!open) return null;
	const run = (a, b) => {
		if (!a || !b) {
			setPath(null);
			return;
		}
		const found = shortestPath(a, b);
		setPath(found);
		if (found && found[0]) select(found[0]);
	};
	const narrate = (0, import_react.useMemo)(() => {
		if (!path || path.length < 2) return [];
		return linksBetween(path).map((idx, i) => {
			const link = LINKS[idx];
			const a = path[i];
			const b = path[i + 1];
			return {
				from: a ? getNode(a) : void 0,
				to: b ? getNode(b) : void 0,
				link
			};
		});
	}, [path]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "sn-panel sn-path",
		"aria-label": "Path finder",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Path" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeField, {
				label: "From",
				value: from,
				onPick: (id) => {
					setFrom(id);
					run(id, to);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeField, {
				label: "To",
				value: to,
				onPick: (id) => {
					setTo(id);
					run(from, id);
				}
			}),
			path && path.length === 0 ? null : null,
			from && to && path == null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sn-muted",
				children: "No path between these two."
			}) : null,
			path && path.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "sn-hops",
				children: narrate.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: i === hop ? "is-on" : "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setHop(i);
							if (row.to) select(row.to.id);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							row.from?.label,
							" to ",
							row.to?.label
						] }), row.link ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", { children: [relationLabel(row.link.relation), row.link.confidence === "INFERRED" && row.link.why ? `. ${row.link.why}` : ""] }) : null]
					})
				}, i))
			}) : null,
			path ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "sn-text-btn",
				onClick: () => setPath(null),
				children: "Clear path"
			}) : null
		]
	});
}
function NodeField({ label, value, onPick }) {
	const [q, setQ] = (0, import_react.useState)("");
	const hits = q.trim().length > 0 ? searchNodes(q, 5) : [];
	const node = value ? getNode(value) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "sn-field",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q || node?.label || "",
				placeholder: "Search a node",
				onChange: (e) => {
					setQ(e.target.value);
					if (!e.target.value) onPick(null);
				},
				onFocus: () => {
					if (node && !q) setQ("");
				}
			}),
			hits.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "sn-suggest",
				children: hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						onPick(h.id);
						setQ("");
					},
					children: h.label
				}) }, h.id))
			}) : null
		]
	});
}
var VIEW_LABEL = {
	perspective: "Perspective",
	plan: "Plan",
	elevation: "Elevation",
	axonometric: "Axonometric"
};
function TitleBlock() {
	const view = useGraphStore((s) => s.view);
	const [bearing, setBearing] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const on = (e) => {
			const deg = e.detail;
			if (typeof deg === "number") setBearing(deg);
		};
		window.addEventListener("sn-bearing", on);
		return () => window.removeEventListener("sn-bearing", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "sn-titleblock",
		"aria-label": "Drawing title block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sn-titleblock-north",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 32 40",
				className: "sn-north",
				style: { transform: `rotate(${bearing}deg)` },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M16 2 L20 16 L16 13 L12 16 Z",
						fill: "currentColor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M16 38 L12 24 L16 27 L20 24 Z",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "16",
						y: "21",
						textAnchor: "middle",
						fontSize: "6",
						fill: "currentColor",
						children: "N"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sn-titleblock-body",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sn-kicker",
					children: "Drawn to Measure"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sn-titleblock-name",
					children: "Shreeraj Narwade"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Sheet" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "01 of 01" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Nodes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "tabular",
						children: NODE_COUNT
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Edges" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "tabular",
						children: EDGE_COUNT
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "View" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: VIEW_LABEL[view] ?? view })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "2026.10.17" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Scale" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "1 : graph" })] })
				] })
			]
		})]
	});
}
var VIEWS = [
	{
		id: "plan",
		label: "Plan",
		key: "1",
		icon: Square
	},
	{
		id: "elevation",
		label: "Elevation",
		key: "2",
		icon: Layers
	},
	{
		id: "axonometric",
		label: "Axonometric",
		key: "3",
		icon: Box
	},
	{
		id: "perspective",
		label: "Perspective",
		key: "4",
		icon: Compass
	}
];
function Toolbar() {
	const view = useGraphStore((s) => s.view);
	const setView = useGraphStore((s) => s.setView);
	const setPalette = useGraphStore((s) => s.setPaletteOpen);
	const filtersOpen = useGraphStore((s) => s.filtersOpen);
	const setFilters = useGraphStore((s) => s.setFiltersOpen);
	const toursOpen = useGraphStore((s) => s.toursOpen);
	const setTours = useGraphStore((s) => s.setToursOpen);
	const legendOpen = useGraphStore((s) => s.legendOpen);
	const setLegend = useGraphStore((s) => s.setLegendOpen);
	const sound = useGraphStore((s) => s.soundOn);
	const setSound = useGraphStore((s) => s.setSoundOn);
	const mobile = useGraphStore((s) => s.mobile);
	const [flying, setFlying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onFly = (e) => setFlying(Boolean(e.detail));
		window.addEventListener("sn-fly", onFly);
		return () => window.removeEventListener("sn-fly", onFly);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sn-toolbar",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sn-brand",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sn-mark",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sn-kicker",
					children: "Sheet 01"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sn-brand-name",
					children: "Drawn to Measure"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "View presets",
				children: VIEWS.map((v) => {
					const Icon = v.icon;
					const on = view === v.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": on,
						className: on ? "is-on" : "",
						onClick: () => setView(v.id),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": true }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: v.label }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: v.key })
						]
					}, v.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sn-toolbar-actions",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPalette(true),
						"aria-keyshortcuts": "/ Meta+K",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { "aria-hidden": true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Search" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": filtersOpen,
						onClick: () => setFilters(!filtersOpen),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { "aria-hidden": true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Filters" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": toursOpen,
						onClick: () => setTours(!toursOpen),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, { "aria-hidden": true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tours" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": legendOpen,
						onClick: () => setLegend(!legendOpen),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { "aria-hidden": true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Legend" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": sound,
						onClick: () => setSound(!sound),
						"aria-label": sound ? "Sound on" : "Sound off",
						children: sound ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioLines, { "aria-hidden": true }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioWaveform, { "aria-hidden": true })
					}),
					!mobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sn-fly-hint",
						"data-on": flying ? "1" : "0",
						children: flying ? "Fly: WASD, Shift, Esc" : "F to fly"
					}) : null
				]
			})
		]
	});
}
function ToursMenu() {
	const open = useGraphStore((s) => s.toursOpen);
	const start = useGraphStore((s) => s.startTour);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "sn-panel sn-tours",
		"aria-label": "Guided tours",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Tours" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: TOURS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => start(t.id),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.blurb }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", {
					className: "tabular",
					children: [t.stops.length, " stops"]
				})
			]
		}) }, t.id)) })]
	});
}
function TourCaption() {
	const tourId = useGraphStore((s) => s.tourId);
	const step = useGraphStore((s) => s.tourStep);
	const playing = useGraphStore((s) => s.tourPlaying);
	const setPlaying = useGraphStore((s) => s.setTourPlaying);
	const setStep = useGraphStore((s) => s.setTourStep);
	const stop = useGraphStore((s) => s.stopTour);
	const tour = tourId ? tourById(tourId) : void 0;
	if (!tour) return null;
	const stopData = tour.stops[step];
	const node = stopData ? getNode(stopData.nodeId) : void 0;
	const caption = stopData?.caption || node?.description || "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sn-tour",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "sn-kicker",
				children: [tour.title, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular",
					children: [
						" ",
						step + 1,
						" / ",
						tour.stops.length
					]
				})]
			}),
			node ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: node.label }) : null,
			caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sn-prose",
				children: caption
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sn-tour-actions",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setStep(Math.max(0, step - 1)),
						disabled: step <= 0,
						children: "Back"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPlaying(!playing),
						"aria-pressed": playing,
						children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}), playing ? "Pause" : "Play"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setStep(Math.min(tour.stops.length - 1, step + 1)),
						disabled: step >= tour.stops.length - 1,
						children: "Next"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: stop,
						"aria-label": "End tour",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
					})
				]
			})
		]
	});
}
var ctx = null;
function ac() {
	if (typeof window === "undefined") return null;
	if (!ctx) {
		const Ctor = window.AudioContext || window.webkitAudioContext;
		if (!Ctor) return null;
		ctx = new Ctor();
	}
	return ctx;
}
function blip(freq, dur, type, gain) {
	const audio = ac();
	if (!audio) return;
	if (audio.state === "suspended") audio.resume();
	const t = audio.currentTime;
	const osc = audio.createOscillator();
	const g = audio.createGain();
	osc.type = type;
	osc.frequency.setValueAtTime(freq, t);
	g.gain.setValueAtTime(1e-4, t);
	g.gain.exponentialRampToValueAtTime(gain, t + .01);
	g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
	osc.connect(g);
	g.connect(audio.destination);
	osc.start(t);
	osc.stop(t + dur + .02);
}
function playHover(on) {
	if (!on) return;
	blip(880, .04, "triangle", .03);
}
function playSelect(on) {
	if (!on) return;
	blip(220, .12, "sine", .05);
}
function AppShell() {
	const select = useGraphStore((s) => s.select);
	const setView = useGraphStore((s) => s.setView);
	const setReduced = useGraphStore((s) => s.setReducedMotion);
	const setMobile = useGraphStore((s) => s.setMobile);
	const setPalette = useGraphStore((s) => s.setPaletteOpen);
	const paletteOpen = useGraphStore((s) => s.paletteOpen);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const apply = () => setReduced(mq.matches);
		apply();
		mq.addEventListener("change", apply);
		const mobileMq = window.matchMedia("(max-width: 760px)");
		const applyM = () => setMobile(mobileMq.matches);
		applyM();
		mobileMq.addEventListener("change", applyM);
		const hash = readHash(window.location.hash);
		if (hash.view) setView(hash.view);
		if (hash.kindsOff) for (const k of hash.kindsOff) useGraphStore.getState().toggleKind(k);
		if (hash.inferred === false) useGraphStore.getState().setShowInferred(false);
		if (hash.extracted === false) useGraphStore.getState().setShowExtracted(false);
		if (hash.confidence != null) useGraphStore.getState().setMinConfidence(hash.confidence);
		if (hash.path) {
			useGraphStore.getState().setPathFrom(hash.path[0]);
			useGraphStore.getState().setPathTo(hash.path[1]);
		}
		if (hash.node && getNode(hash.node)) {
			useGraphStore.getState().setIntroDone(true);
			useGraphStore.getState().select(hash.node);
		}
		if (hash.tour && tourById(hash.tour)) {
			useGraphStore.getState().setIntroDone(true);
			useGraphStore.getState().startTour(hash.tour);
		}
		return () => {
			mq.removeEventListener("change", apply);
			mobileMq.removeEventListener("change", applyM);
		};
	}, [
		select,
		setMobile,
		setReduced,
		setView
	]);
	(0, import_react.useEffect)(() => {
		let last = window.location.hash;
		let primed = false;
		const timer = window.setTimeout(() => {
			primed = true;
		}, 400);
		const unsub = useGraphStore.subscribe((s) => {
			if (!primed) return;
			const kindsOff = Object.entries(s.kinds).filter(([, on]) => !on).map(([k]) => k);
			const next = writeHash({
				node: s.selectedId ?? void 0,
				view: s.view,
				kindsOff,
				inferred: s.showInferred,
				extracted: s.showExtracted,
				confidence: s.minConfidence,
				tour: s.tourId ?? void 0,
				path: s.pathFrom && s.pathTo ? [s.pathFrom, s.pathTo] : void 0
			});
			if (next !== last) {
				last = next;
				const url = `${window.location.pathname}${window.location.search}${next}`;
				window.history.replaceState(null, "", url);
			}
		});
		return () => {
			window.clearTimeout(timer);
			unsub();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const t = e.target;
			const typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
			if ((e.key === "/" || (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") && !typing) {
				e.preventDefault();
				setPalette(!useGraphStore.getState().paletteOpen);
				return;
			}
			if (paletteOpen) return;
			if (typing) return;
			const viewKeys = {
				Digit1: "plan",
				Digit2: "elevation",
				Digit3: "axonometric",
				Digit4: "perspective"
			};
			if (viewKeys[e.code]) {
				useGraphStore.getState().setView(viewKeys[e.code]);
				return;
			}
			const s = useGraphStore.getState();
			if (s.tourId && (e.code === "Space" || e.key === " ")) {
				e.preventDefault();
				s.setTourPlaying(!s.tourPlaying);
			}
			if (s.tourId && e.code === "ArrowRight") {
				const tour = tourById(s.tourId);
				if (tour) s.setTourStep(Math.min(tour.stops.length - 1, s.tourStep + 1));
			}
			if (s.tourId && e.code === "ArrowLeft") s.setTourStep(Math.max(0, s.tourStep - 1));
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [paletteOpen, setPalette]);
	(0, import_react.useEffect)(() => {
		let prevHover = null;
		let prevSel = null;
		return useGraphStore.subscribe((s) => {
			if (s.hoveredId && s.hoveredId !== prevHover) playHover(s.soundOn);
			if (s.selectedId && s.selectedId !== prevSel) playSelect(s.soundOn);
			prevHover = s.hoveredId;
			prevSel = s.selectedId;
		});
	}, []);
	useTourDriver();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sn-app",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphScene, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toolbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filters, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathFinder, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToursMenu, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailPanel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleBlock, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TourCaption, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {})
		]
	});
}
function useTourDriver() {
	const tourId = useGraphStore((s) => s.tourId);
	const step = useGraphStore((s) => s.tourStep);
	const playing = useGraphStore((s) => s.tourPlaying);
	const select = useGraphStore((s) => s.select);
	(0, import_react.useEffect)(() => {
		if (!tourId) return;
		const stop = tourById(tourId)?.stops[step];
		if (!stop) return;
		const ids = [stop.nodeId, ...neighborsOf(stop.nodeId).slice(0, 8)];
		select(stop.nodeId, { frameIds: ids });
	}, [
		tourId,
		step,
		select
	]);
	(0, import_react.useEffect)(() => {
		if (!tourId || !playing) return;
		if (useGraphStore.getState().reducedMotion) return;
		const tour = tourById(tourId);
		if (!tour) return;
		const timer = window.setInterval(() => {
			const s = useGraphStore.getState();
			if (!s.tourPlaying || s.tourId !== tourId) return;
			if (s.tourStep >= tour.stops.length - 1) {
				s.setTourPlaying(false);
				return;
			}
			s.setTourStep(s.tourStep + 1);
		}, 4600);
		return () => window.clearInterval(timer);
	}, [
		tourId,
		playing,
		step
	]);
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "sn-root",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "sr-only",
			children: "Shreeraj Narwade, drawn to measure"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {})]
	});
}
//#endregion
export { Home as component };
