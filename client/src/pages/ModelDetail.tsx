/**
 * FULI Bearing — Single Model Detail Page
 * Design: Light content area, dark inquiry panel, orange accent
 * URL: /products/:category/:model  e.g. /products/motorcycle/6301-2RS
 */

import { useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Send, CheckCircle2, ShieldCheck, Package, Truck, Star } from "lucide-react";

/* ─── Full model database ──────────────────────────────────── */
type ModelData = {
  model: string;
  category: string;
  categoryLabel: string;
  type: string;
  d: string;
  D: string;
  B: string;
  Cr?: string;
  C0r?: string;
  weight?: string;
  seal?: string;
  material?: string;
  precision?: string;
  cage?: string;
  clearance?: string;
  application: string;
  priority: number;
  description: string;
  features: string[];
  applications: string[];
  relatedModels: string[];
};

const allModels: Record<string, ModelData> = {
  /* ── Motorcycle ── */
  "6201-2RS": {
    model: "6201-2RS", category: "motorcycle", categoryLabel: "Motorcycle Bearings",
    type: "Deep Groove Ball Bearing", d: "12 mm", D: "32 mm", B: "10 mm",
    Cr: "5.1 kN", C0r: "2.38 kN", weight: "0.022 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C0 / C3",
    application: "Engine gearbox", priority: 4,
    description: "6201-2RS is a compact deep groove ball bearing widely used in motorcycle engine gearboxes and small electric motors. The double rubber seal (2RS) keeps grease in and dust out — essential for dusty African road conditions.",
    features: [
      "Double rubber seal (2RS) — prevents dust and mud ingress on unpaved roads",
      "GCr15 chrome steel — extended service life under high-frequency replacement conditions",
      "Pre-filled with high-temperature grease — ready to install",
      "P6 precision grade — smooth rotation, low vibration",
      "Available in C3 clearance for higher-temperature applications",
    ],
    applications: ["Motorcycle engine gearbox", "Small electric motor", "Portable fan motor", "Power tool spindle"],
    relatedModels: ["6202-2RS", "6301-2RS", "6203-2RS"],
  },
  "6202-2RS": {
    model: "6202-2RS", category: "motorcycle", categoryLabel: "Motorcycle Bearings",
    type: "Deep Groove Ball Bearing", d: "15 mm", D: "35 mm", B: "11 mm",
    Cr: "5.58 kN", C0r: "2.85 kN", weight: "0.030 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C0 / C3",
    application: "Engine end cover", priority: 5,
    description: "6202-2RS is one of the highest-demand motorcycle bearings in East Africa, used in engine end covers and alternator shafts. High repeat purchase rate — a core SKU for every bearing distributor.",
    features: [
      "Most common engine end cover bearing for 100–150cc motorcycles",
      "Double rubber seal (2RS) — dust and moisture protection",
      "GCr15 chrome steel — 2–3× longer life than standard carbon steel",
      "Pre-filled grease — no maintenance required during service life",
      "Neutral or OEM-branded packaging available",
    ],
    applications: ["Motorcycle engine end cover", "Alternator shaft", "Small water pump", "Electric motor"],
    relatedModels: ["6201-2RS", "6203-2RS", "6301-2RS"],
  },
  "6203-2RS": {
    model: "6203-2RS", category: "motorcycle", categoryLabel: "Motorcycle Bearings",
    type: "Deep Groove Ball Bearing", d: "17 mm", D: "40 mm", B: "12 mm",
    Cr: "6.82 kN", C0r: "3.40 kN", weight: "0.040 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C0 / C3",
    application: "Engine / small pump", priority: 4,
    description: "6203-2RS covers engine shaft and small pump applications. The 17mm bore is a standard size across many motorcycle brands and small water pump models in East Africa.",
    features: [
      "17mm bore — fits most 100–175cc motorcycle engine shafts",
      "Double rubber seal — suitable for wet and dusty environments",
      "GCr15 chrome steel construction",
      "Suitable for both C0 and C3 clearance applications",
      "Compact design — fits tight engine compartments",
    ],
    applications: ["Motorcycle engine shaft", "Small centrifugal pump", "Lawn mower engine", "Small generator"],
    relatedModels: ["6202-2RS", "6204-2RS", "6302-2RS"],
  },
  "6204-2RS": {
    model: "6204-2RS", category: "motorcycle", categoryLabel: "Motorcycle Bearings",
    type: "Deep Groove Ball Bearing", d: "20 mm", D: "47 mm", B: "14 mm",
    Cr: "9.95 kN", C0r: "5.00 kN", weight: "0.060 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C0 / C3",
    application: "Rear wheel / small pump", priority: 4,
    description: "6204-2RS is used in motorcycle rear wheel hubs and small pump motors. The 20mm bore and higher load rating (9.95 kN) make it suitable for rear axle applications on commercial Boda-Boda motorcycles.",
    features: [
      "20mm bore — standard for rear wheel hub on 125–150cc motorcycles",
      "9.95 kN dynamic load rating — handles road shock loads",
      "Double rubber seal — mud and water resistant",
      "GCr15 chrome steel for extended life on rough roads",
      "Available in bulk carton or individual retail packaging",
    ],
    applications: ["Motorcycle rear wheel hub", "Small water pump motor", "Agricultural sprayer pump", "Light-duty conveyor"],
    relatedModels: ["6205-2RS", "6203-2RS", "6304-2RS"],
  },
  "6205-2RS": {
    model: "6205-2RS", category: "motorcycle", categoryLabel: "Motorcycle Bearings",
    type: "Deep Groove Ball Bearing", d: "25 mm", D: "52 mm", B: "15 mm",
    Cr: "11.2 kN", C0r: "6.55 kN", weight: "0.075 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C0 / C3",
    application: "Rear wheel / generator", priority: 5,
    description: "6205-2RS is a high-demand bearing used in both motorcycle rear wheels and small generators. The 25mm bore is the most common shaft size for portable generators and water pumps across Africa.",
    features: [
      "25mm bore — most common generator and pump shaft size",
      "11.2 kN dynamic load rating — suitable for rear wheel and pump loads",
      "Double rubber seal — dust and moisture protection",
      "Available in C3 clearance for motor applications",
      "High stock availability — fast dispatch within 24 hours",
    ],
    applications: ["Motorcycle rear wheel", "Portable generator", "Water pump motor", "Small electric motor"],
    relatedModels: ["6206-2RS", "6204-2RS", "6205-2RS C3"],
  },
  "6206-2RS": {
    model: "6206-2RS", category: "motorcycle", categoryLabel: "Motorcycle Bearings",
    type: "Deep Groove Ball Bearing", d: "30 mm", D: "62 mm", B: "16 mm",
    Cr: "15.3 kN", C0r: "10.0 kN", weight: "0.115 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C0 / C3",
    application: "Motorcycle / light motor", priority: 4,
    description: "6206-2RS is used in larger motorcycle applications and light industrial motors. The 30mm bore and 15.3 kN load rating make it suitable for higher-load motorcycle components and small industrial equipment.",
    features: [
      "30mm bore — fits larger motorcycle components and light motors",
      "15.3 kN dynamic load rating — handles higher loads",
      "Double rubber seal construction",
      "GCr15 chrome steel",
      "Compatible with C3 clearance for motor applications",
    ],
    applications: ["Motorcycle transmission", "Light industrial motor", "Small compressor", "Agricultural equipment"],
    relatedModels: ["6205-2RS", "6207-2RS", "6206-2RS C3"],
  },
  "6301-2RS": {
    model: "6301-2RS", category: "motorcycle", categoryLabel: "Motorcycle Bearings",
    type: "Deep Groove Ball Bearing", d: "12 mm", D: "37 mm", B: "12 mm",
    Cr: "7.28 kN", C0r: "3.35 kN", weight: "0.035 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C0 / C3",
    application: "Front wheel hub — most common", priority: 5,
    description: "6301-2RS is the #1 most common motorcycle front wheel hub bearing in East Africa. Every Boda-Boda and Okada motorcycle uses this bearing. High repeat purchase, simple SKU verification — the first bearing every distributor should stock.",
    features: [
      "#1 most common front wheel hub bearing for 100–150cc motorcycles",
      "12mm bore × 37mm OD — standard across Honda, Yamaha, Bajaj, TVS, Hero",
      "Double rubber seal (2RS) — critical for mud and water on unpaved roads",
      "GCr15 chrome steel — 2–3× longer life than OEM replacement parts",
      "P6 precision grade — smooth rotation, low noise",
      "Pre-filled with high-temperature grease — ready to install",
    ],
    applications: ["Motorcycle front wheel hub (Boda-Boda / Okada)", "Front fork lower bearing", "Small motor shaft", "Portable equipment"],
    relatedModels: ["6302-2RS", "6201-2RS", "6303-2RS"],
  },
  "6302-2RS": {
    model: "6302-2RS", category: "motorcycle", categoryLabel: "Motorcycle Bearings",
    type: "Deep Groove Ball Bearing", d: "15 mm", D: "42 mm", B: "13 mm",
    Cr: "9.15 kN", C0r: "4.50 kN", weight: "0.050 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C0 / C3",
    application: "Front wheel / small motor", priority: 5,
    description: "6302-2RS is the second most common motorcycle front wheel bearing, used across a wide range of 125–200cc motorcycles. Also widely used in small motors and portable equipment.",
    features: [
      "15mm bore — fits 125–200cc motorcycle front wheel hubs",
      "9.15 kN dynamic load rating — handles road shock and vibration",
      "Double rubber seal — dust and water protection",
      "GCr15 chrome steel construction",
      "High stock availability — fast dispatch",
    ],
    applications: ["Motorcycle front wheel hub", "Small electric motor", "Portable generator shaft", "Light-duty equipment"],
    relatedModels: ["6301-2RS", "6303-2RS", "6202-2RS"],
  },
  "6303-2RS": {
    model: "6303-2RS", category: "motorcycle", categoryLabel: "Motorcycle Bearings",
    type: "Deep Groove Ball Bearing", d: "17 mm", D: "47 mm", B: "14 mm",
    Cr: "11.4 kN", C0r: "5.85 kN", weight: "0.065 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C0 / C3",
    application: "Front & rear wheel", priority: 4,
    description: "6303-2RS is used in both front and rear wheel hubs of larger 150–200cc motorcycles. The 17mm bore and 11.4 kN load rating make it suitable for higher-load wheel hub applications.",
    features: [
      "17mm bore — fits 150–200cc motorcycle wheel hubs",
      "11.4 kN dynamic load rating — suitable for both front and rear wheel",
      "Double rubber seal — mud and water resistant",
      "GCr15 chrome steel",
      "Compatible with both C0 and C3 clearance",
    ],
    applications: ["Motorcycle front wheel hub", "Motorcycle rear wheel hub", "Small motor shaft", "Agricultural equipment"],
    relatedModels: ["6302-2RS", "6304-2RS", "6203-2RS"],
  },
  "6305-2RS": {
    model: "6305-2RS", category: "motorcycle", categoryLabel: "Motorcycle Bearings",
    type: "Deep Groove Ball Bearing", d: "25 mm", D: "62 mm", B: "17 mm",
    Cr: "17.0 kN", C0r: "9.30 kN", weight: "0.120 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C0 / C3",
    application: "Motorcycle / small generator", priority: 3,
    description: "6305-2RS is used in larger motorcycle components and small generators. The 25mm bore and higher load rating (17 kN) make it suitable for generator shaft and heavier motorcycle applications.",
    features: [
      "25mm bore — generator shaft and larger motorcycle components",
      "17.0 kN dynamic load rating — higher load capacity",
      "Double rubber seal construction",
      "GCr15 chrome steel",
      "Suitable for C3 clearance motor applications",
    ],
    applications: ["Motorcycle transmission shaft", "Small generator", "Light industrial motor", "Water pump"],
    relatedModels: ["6205-2RS", "6206-2RS", "6304-2RS"],
  },

  /* ── Motor & Pump ── */
  "6205-2RS C3": {
    model: "6205-2RS C3", category: "motor", categoryLabel: "Motor & Pump Bearings",
    type: "Deep Groove Ball Bearing", d: "25 mm", D: "52 mm", B: "15 mm",
    Cr: "11.2 kN", C0r: "6.55 kN", weight: "0.075 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C3 (Thermal Expansion)",
    application: "Water pump motor — core model", priority: 5,
    description: "6205-2RS C3 is the most common water pump motor bearing in Africa. The C3 internal clearance is critical — standard C0 bearings will seize under thermal expansion in running motors. This is the first bearing every motor repair shop needs.",
    features: [
      "C3 internal clearance — accommodates thermal expansion in motors running at 60–120°C",
      "Prevents premature seizure — standard C0 bearings fail in hot motor applications",
      "25mm bore — fits most 0.37–1.5 kW water pump motors",
      "Double rubber seal — keeps grease in and contaminants out",
      "Compatible with IEC standard motor frame sizes",
    ],
    applications: ["Water pump motor (0.37–1.5 kW)", "Single-phase electric motor", "Fan motor", "Small compressor"],
    relatedModels: ["6206-2RS C3", "6207-2RS C3", "6205-2RS"],
  },
  "6206-2RS C3": {
    model: "6206-2RS C3", category: "motor", categoryLabel: "Motor & Pump Bearings",
    type: "Deep Groove Ball Bearing", d: "30 mm", D: "62 mm", B: "16 mm",
    Cr: "15.3 kN", C0r: "10.0 kN", weight: "0.115 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C3 (Thermal Expansion)",
    application: "Medium motor / water pump", priority: 5,
    description: "6206-2RS C3 covers medium-sized electric motors and water pumps (1.5–5.5 kW). The 30mm bore is the most common shaft size for mid-range motors used in irrigation and light industry across Africa.",
    features: [
      "30mm bore — most common shaft size for 1.5–5.5 kW motors",
      "C3 clearance — essential for thermal expansion in running motors",
      "15.3 kN dynamic load rating — handles motor and pump loads",
      "Double rubber seal construction",
      "High stock availability",
    ],
    applications: ["Medium electric motor (1.5–5.5 kW)", "Irrigation pump", "Industrial fan", "Conveyor drive motor"],
    relatedModels: ["6205-2RS C3", "6207-2RS C3", "6206-2RS"],
  },
  "6207-2RS C3": {
    model: "6207-2RS C3", category: "motor", categoryLabel: "Motor & Pump Bearings",
    type: "Deep Groove Ball Bearing", d: "35 mm", D: "72 mm", B: "17 mm",
    Cr: "20.1 kN", C0r: "13.2 kN", weight: "0.160 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C3 (Thermal Expansion)",
    application: "Larger motor", priority: 4,
    description: "6207-2RS C3 is used in larger electric motors (5.5–15 kW) and industrial pumps. The 35mm bore and 20.1 kN load rating cover the mid-to-large motor segment.",
    features: [
      "35mm bore — fits 5.5–15 kW motor frames",
      "C3 clearance for thermal expansion",
      "20.1 kN dynamic load rating",
      "Double rubber seal",
      "GCr15 chrome steel",
    ],
    applications: ["Large electric motor (5.5–15 kW)", "Industrial water pump", "Compressor", "Industrial fan"],
    relatedModels: ["6206-2RS C3", "6208-2RS C3", "6307-2RS"],
  },
  "6208-2RS C3": {
    model: "6208-2RS C3", category: "motor", categoryLabel: "Motor & Pump Bearings",
    type: "Deep Groove Ball Bearing", d: "40 mm", D: "80 mm", B: "18 mm",
    Cr: "22.9 kN", C0r: "15.3 kN", weight: "0.210 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C3 (Thermal Expansion)",
    application: "Large motor / generator", priority: 4,
    description: "6208-2RS C3 covers large motors and generators (11–22 kW). The 40mm bore is standard for larger IEC motor frames used in heavy pumping and industrial applications.",
    features: [
      "40mm bore — standard for 11–22 kW IEC motor frames",
      "C3 clearance — critical for large motors with high operating temperatures",
      "22.9 kN dynamic load rating",
      "Double rubber seal",
      "GCr15 chrome steel",
    ],
    applications: ["Large electric motor (11–22 kW)", "Generator", "Heavy-duty pump", "Industrial compressor"],
    relatedModels: ["6207-2RS C3", "6308-2RS", "6308-2RS"],
  },
  "6307-2RS": {
    model: "6307-2RS", category: "motor", categoryLabel: "Motor & Pump Bearings",
    type: "Deep Groove Ball Bearing", d: "35 mm", D: "80 mm", B: "21 mm",
    Cr: "26.5 kN", C0r: "17.0 kN", weight: "0.250 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C0 / C3",
    application: "High-power water pump", priority: 3,
    description: "6307-2RS is used in high-power water pumps and larger industrial equipment. The wider cross-section (21mm) provides higher load capacity compared to the 6207 series.",
    features: [
      "35mm bore with wider 21mm width — higher load capacity than 6207",
      "26.5 kN dynamic load rating",
      "Double rubber seal",
      "GCr15 chrome steel",
      "Available in C3 clearance",
    ],
    applications: ["High-power water pump", "Industrial motor", "Compressor", "Heavy-duty fan"],
    relatedModels: ["6207-2RS C3", "6308-2RS", "6206-2RS C3"],
  },
  "6308-2RS": {
    model: "6308-2RS", category: "motor", categoryLabel: "Motor & Pump Bearings",
    type: "Deep Groove Ball Bearing", d: "40 mm", D: "90 mm", B: "23 mm",
    Cr: "32.0 kN", C0r: "21.2 kN", weight: "0.340 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C0 / C3",
    application: "Heavy-duty motor", priority: 3,
    description: "6308-2RS is a heavy-duty bearing for large motors and industrial equipment. The 40mm bore and 32 kN load rating make it suitable for demanding industrial applications.",
    features: [
      "40mm bore — heavy-duty motor and industrial applications",
      "32.0 kN dynamic load rating — high load capacity",
      "Double rubber seal",
      "GCr15 chrome steel",
      "Available in C3 clearance for motor applications",
    ],
    applications: ["Heavy-duty electric motor", "Large industrial pump", "Compressor", "Mining equipment"],
    relatedModels: ["6208-2RS C3", "6307-2RS", "22213"],
  },

  /* ── Agricultural ── */
  "UCP205": {
    model: "UCP205", category: "agricultural", categoryLabel: "Agricultural Bearings",
    type: "Pillow Block Bearing Unit", d: "25 mm", D: "—", B: "—",
    weight: "0.52 kg",
    seal: "UC205 Insert (2RS)", material: "Cast Iron Housing + GCr15 Insert", precision: "P0",
    cage: "Steel", clearance: "C0",
    application: "Drive shaft, conveyor", priority: 5,
    description: "UCP205 is the most common pillow block bearing unit in Africa. The round flange housing mounts to any flat surface, and the UC205 insert bearing is self-aligning to handle shaft misalignment. Used in conveyors, drive shafts, and agricultural machinery across East Africa.",
    features: [
      "Round flange (P-type) housing — most versatile mounting option",
      "UC205 insert bearing — self-aligning up to 2° to handle shaft deflection",
      "Set-screw locking — easy field installation without special tools",
      "Cast iron housing — durable in agricultural and industrial environments",
      "Grease nipple fitting — allows in-service re-lubrication",
      "25mm bore — most common shaft size for conveyors and agricultural equipment",
    ],
    applications: ["Grain conveyor drive shaft", "Agricultural machinery shaft", "Bucket elevator", "Belt conveyor idler"],
    relatedModels: ["UCP206", "UCF205", "UCFL205"],
  },
  "UCP206": {
    model: "UCP206", category: "agricultural", categoryLabel: "Agricultural Bearings",
    type: "Pillow Block Bearing Unit", d: "30 mm", D: "—", B: "—",
    weight: "0.65 kg",
    seal: "UC206 Insert (2RS)", material: "Cast Iron Housing + GCr15 Insert", precision: "P0",
    cage: "Steel", clearance: "C0",
    application: "Agricultural drive shaft", priority: 5,
    description: "UCP206 is the 30mm version of the most popular pillow block bearing. The 30mm bore covers a wide range of agricultural drive shafts and conveyor systems. High demand across East Africa and Latin America.",
    features: [
      "30mm bore — standard for agricultural drive shafts",
      "Round flange housing — versatile mounting",
      "UC206 insert — self-aligning",
      "Set-screw locking",
      "Cast iron housing",
      "Grease nipple for re-lubrication",
    ],
    applications: ["Agricultural drive shaft", "Conveyor system", "PTO shaft support", "Grain elevator"],
    relatedModels: ["UCP205", "UCP207", "UCF206"],
  },
  "UCP207": {
    model: "UCP207", category: "agricultural", categoryLabel: "Agricultural Bearings",
    type: "Pillow Block Bearing Unit", d: "35 mm", D: "—", B: "—",
    weight: "0.85 kg",
    seal: "UC207 Insert (2RS)", material: "Cast Iron Housing + GCr15 Insert", precision: "P0",
    cage: "Steel", clearance: "C0",
    application: "Agricultural PTO shaft", priority: 4,
    description: "UCP207 covers 35mm PTO (power take-off) shafts and larger agricultural drive systems. The heavier housing and UC207 insert provide higher load capacity for demanding agricultural applications.",
    features: [
      "35mm bore — PTO shaft and larger agricultural drives",
      "Higher load capacity than UCP205/206",
      "Round flange housing",
      "Self-aligning UC207 insert",
      "Cast iron housing",
    ],
    applications: ["PTO drive shaft", "Agricultural machinery", "Conveyor drive", "Seed drill shaft"],
    relatedModels: ["UCP206", "UCP208", "UCF207"],
  },
  "UCP208": {
    model: "UCP208", category: "agricultural", categoryLabel: "Agricultural Bearings",
    type: "Pillow Block Bearing Unit", d: "40 mm", D: "—", B: "—",
    weight: "1.10 kg",
    seal: "UC208 Insert (2RS)", material: "Cast Iron Housing + GCr15 Insert", precision: "P0",
    cage: "Steel", clearance: "C0",
    application: "Medium conveyor", priority: 4,
    description: "UCP208 is used in medium-duty conveyors and agricultural machinery with 40mm shafts. The heavier cast iron housing and UC208 insert handle higher loads in demanding environments.",
    features: [
      "40mm bore — medium-duty conveyor and agricultural applications",
      "Heavy cast iron housing",
      "UC208 self-aligning insert",
      "Set-screw locking",
      "Grease nipple",
    ],
    applications: ["Medium conveyor drive shaft", "Agricultural machinery", "Industrial equipment", "Grain processing"],
    relatedModels: ["UCP207", "UCP209", "30208"],
  },
  "UCP209": {
    model: "UCP209", category: "agricultural", categoryLabel: "Agricultural Bearings",
    type: "Pillow Block Bearing Unit", d: "45 mm", D: "—", B: "—",
    weight: "1.40 kg",
    seal: "UC209 Insert (2RS)", material: "Cast Iron Housing + GCr15 Insert", precision: "P0",
    cage: "Steel", clearance: "C0",
    application: "Heavy agricultural machinery", priority: 3,
    description: "UCP209 is a heavy-duty pillow block for 45mm shafts in demanding agricultural and industrial applications. Used in heavy conveyors, large agricultural machinery, and industrial drive systems.",
    features: [
      "45mm bore — heavy-duty applications",
      "Heavy cast iron housing",
      "UC209 self-aligning insert",
      "High load capacity",
      "Grease nipple for re-lubrication",
    ],
    applications: ["Heavy agricultural machinery", "Large conveyor", "Industrial drive shaft", "Mining conveyor"],
    relatedModels: ["UCP208", "30210", "32210"],
  },
  "UCF205": {
    model: "UCF205", category: "agricultural", categoryLabel: "Agricultural Bearings",
    type: "Flange Bearing Unit (Square)", d: "25 mm", D: "—", B: "—",
    weight: "0.55 kg",
    seal: "UC205 Insert (2RS)", material: "Cast Iron Housing + GCr15 Insert", precision: "P0",
    cage: "Steel", clearance: "C0",
    application: "Square flange, compact fit", priority: 4,
    description: "UCF205 uses a square flange housing for compact flat-surface mounting. The 4-bolt square flange provides more secure mounting than the 2-bolt round flange UCP series, preferred where vibration is high.",
    features: [
      "Square flange (F-type) — 4-bolt mounting for secure installation",
      "More stable than round flange under vibration",
      "UC205 self-aligning insert",
      "25mm bore",
      "Cast iron housing",
    ],
    applications: ["Compact flat-surface mounting", "Agricultural equipment", "Conveyor system", "Industrial machinery"],
    relatedModels: ["UCP205", "UCF206", "UCFL205"],
  },
  "UCF206": {
    model: "UCF206", category: "agricultural", categoryLabel: "Agricultural Bearings",
    type: "Flange Bearing Unit (Square)", d: "30 mm", D: "—", B: "—",
    weight: "0.70 kg",
    seal: "UC206 Insert (2RS)", material: "Cast Iron Housing + GCr15 Insert", precision: "P0",
    cage: "Steel", clearance: "C0",
    application: "Square flange, agricultural", priority: 4,
    description: "UCF206 is the 30mm square flange version, widely used in agricultural machinery and conveyor systems where secure 4-bolt mounting is required.",
    features: [
      "30mm bore — agricultural and industrial standard",
      "Square flange 4-bolt mounting",
      "UC206 self-aligning insert",
      "Cast iron housing",
      "Grease nipple",
    ],
    applications: ["Agricultural machinery", "Conveyor system", "Industrial equipment", "Drive shaft support"],
    relatedModels: ["UCF205", "UCP206", "UCFL206"],
  },
  "UCFL205": {
    model: "UCFL205", category: "agricultural", categoryLabel: "Agricultural Bearings",
    type: "Flange Bearing Unit (Oval)", d: "25 mm", D: "—", B: "—",
    weight: "0.48 kg",
    seal: "UC205 Insert (2RS)", material: "Cast Iron Housing + GCr15 Insert", precision: "P0",
    cage: "Steel", clearance: "C0",
    application: "Oval flange, low-profile mount", priority: 3,
    description: "UCFL205 uses an oval 2-bolt flange housing — the lowest-profile pillow block option. Ideal for space-constrained installations where the round or square flange won't fit.",
    features: [
      "Oval flange (FL-type) — lowest profile housing",
      "2-bolt mounting — easy installation in tight spaces",
      "UC205 self-aligning insert",
      "25mm bore",
      "Cast iron housing",
    ],
    applications: ["Space-constrained installations", "Agricultural equipment", "Light conveyor", "Industrial machinery"],
    relatedModels: ["UCP205", "UCF205", "UCFL206"],
  },
  "UCFL206": {
    model: "UCFL206", category: "agricultural", categoryLabel: "Agricultural Bearings",
    type: "Flange Bearing Unit (Oval)", d: "30 mm", D: "—", B: "—",
    weight: "0.60 kg",
    seal: "UC206 Insert (2RS)", material: "Cast Iron Housing + GCr15 Insert", precision: "P0",
    cage: "Steel", clearance: "C0",
    application: "Oval flange", priority: 3,
    description: "UCFL206 is the 30mm oval flange version for low-profile installations with 30mm shafts.",
    features: [
      "30mm bore — oval flange low-profile",
      "2-bolt mounting",
      "UC206 self-aligning insert",
      "Cast iron housing",
    ],
    applications: ["Low-profile installation", "Agricultural equipment", "Conveyor system"],
    relatedModels: ["UCFL205", "UCP206", "UCF206"],
  },
  "UCT205": {
    model: "UCT205", category: "agricultural", categoryLabel: "Agricultural Bearings",
    type: "Take-Up Bearing Unit", d: "25 mm", D: "—", B: "—",
    weight: "0.50 kg",
    seal: "UC205 Insert (2RS)", material: "Cast Iron Housing + GCr15 Insert", precision: "P0",
    cage: "Steel", clearance: "C0",
    application: "T-type housing (conveyor)", priority: 3,
    description: "UCT205 is a take-up bearing unit with T-type housing, used in conveyor tensioning systems. The adjustable housing allows belt tension adjustment without dismounting the bearing.",
    features: [
      "T-type housing — adjustable for conveyor belt tensioning",
      "UC205 self-aligning insert",
      "25mm bore",
      "Cast iron housing",
      "Easy tension adjustment",
    ],
    applications: ["Conveyor belt tensioning", "Agricultural conveyor", "Industrial belt system"],
    relatedModels: ["UCP205", "UCF205", "UCP206"],
  },
  "30206": {
    model: "30206", category: "agricultural", categoryLabel: "Agricultural Bearings",
    type: "Tapered Roller Bearing", d: "30 mm", D: "62 mm", B: "17.25 mm",
    Cr: "43.2 kN", C0r: "48.0 kN", weight: "0.22 kg",
    seal: "Open", material: "GCr15 Chrome Steel", precision: "P0 / P6",
    cage: "Steel",
    application: "Tractor front wheel, truck differential", priority: 5,
    description: "30206 is the most common tapered roller bearing for tractor front wheel hubs and truck differentials in Africa. Tapered roller bearings handle combined radial and axial loads — essential for wheel hub applications.",
    features: [
      "Tapered roller design — handles combined radial + axial loads",
      "43.2 kN dynamic load rating — suitable for tractor and truck wheel hubs",
      "30mm bore — standard for light tractor and truck differentials",
      "Open design — requires periodic re-lubrication",
      "GCr15 chrome steel",
      "ISO 9001 certified",
    ],
    applications: ["Tractor front wheel hub", "Truck differential", "Agricultural trailer wheel", "Light vehicle wheel hub"],
    relatedModels: ["30208", "30210", "32210"],
  },
  "30208": {
    model: "30208", category: "agricultural", categoryLabel: "Agricultural Bearings",
    type: "Tapered Roller Bearing", d: "40 mm", D: "80 mm", B: "19.75 mm",
    Cr: "63.0 kN", C0r: "74.0 kN", weight: "0.45 kg",
    seal: "Open", material: "GCr15 Chrome Steel", precision: "P0 / P6",
    cage: "Steel",
    application: "Tractor / truck wheel hub", priority: 5,
    description: "30208 is the standard tapered roller bearing for tractor and truck wheel hubs. The 40mm bore and 63 kN load rating cover the majority of medium-duty agricultural and commercial vehicle applications.",
    features: [
      "40mm bore — standard for medium tractor and truck wheel hubs",
      "63.0 kN dynamic load rating — handles heavy wheel loads",
      "Tapered roller design — combined radial and axial load capacity",
      "Open design — field re-lubrication possible",
      "GCr15 chrome steel",
    ],
    applications: ["Tractor wheel hub", "Truck wheel hub", "Agricultural trailer", "Commercial vehicle differential"],
    relatedModels: ["30206", "30210", "32210"],
  },
  "30210": {
    model: "30210", category: "agricultural", categoryLabel: "Agricultural Bearings",
    type: "Tapered Roller Bearing", d: "50 mm", D: "90 mm", B: "21.75 mm",
    Cr: "72.8 kN", C0r: "92.0 kN", weight: "0.60 kg",
    seal: "Open", material: "GCr15 Chrome Steel", precision: "P0 / P6",
    cage: "Steel",
    application: "Medium truck", priority: 4,
    description: "30210 is used in medium truck wheel hubs and heavy agricultural equipment. The 50mm bore and 72.8 kN load rating cover medium-duty commercial vehicle applications.",
    features: [
      "50mm bore — medium truck and heavy agricultural equipment",
      "72.8 kN dynamic load rating",
      "Tapered roller design",
      "Open design",
      "GCr15 chrome steel",
    ],
    applications: ["Medium truck wheel hub", "Heavy agricultural machinery", "Commercial vehicle differential"],
    relatedModels: ["30208", "32210", "UCP209"],
  },
  "32210": {
    model: "32210", category: "agricultural", categoryLabel: "Agricultural Bearings",
    type: "Tapered Roller Bearing", d: "50 mm", D: "90 mm", B: "24.75 mm",
    Cr: "90.0 kN", C0r: "108 kN", weight: "0.70 kg",
    seal: "Open", material: "GCr15 Chrome Steel", precision: "P0 / P6",
    cage: "Steel",
    application: "Heavy tractor differential", priority: 3,
    description: "32210 is a heavy-duty tapered roller bearing for tractor differentials and heavy commercial vehicle applications. The wider cross-section (24.75mm) provides higher load capacity than the 30210.",
    features: [
      "50mm bore with wider 24.75mm width — higher load capacity",
      "90.0 kN dynamic load rating — heavy-duty applications",
      "Tapered roller design",
      "GCr15 chrome steel",
      "Open design for field re-lubrication",
    ],
    applications: ["Heavy tractor differential", "Heavy truck wheel hub", "Mining vehicle", "Heavy industrial equipment"],
    relatedModels: ["30210", "30208", "22213"],
  },

  /* ── Industrial ── */
  "22213": {
    model: "22213", category: "industrial", categoryLabel: "Industrial Bearings",
    type: "Spherical Roller Bearing", d: "65 mm", D: "120 mm", B: "31 mm",
    Cr: "138 kN", C0r: "160 kN", weight: "1.45 kg",
    seal: "Open / W33", material: "GCr15 / GCr15SiMn Chrome Steel", precision: "P0 / P6",
    cage: "Steel / Brass",
    application: "Vibrating screen, crusher", priority: 4,
    description: "22213 is a spherical roller bearing for vibrating screens and jaw crushers in mining operations. The double-row spherical design self-aligns to shaft deflection — critical for vibrating equipment where shaft misalignment is unavoidable.",
    features: [
      "Double-row spherical design — self-aligns up to 1.5° misalignment",
      "138 kN dynamic load rating — handles heavy vibrating loads",
      "W33 groove and holes — allows pressurized lubrication to rolling elements",
      "65mm bore — standard for vibrating screen shaft",
      "Brass cage option for high-speed applications",
      "GCr15SiMn option for extreme temperature environments",
    ],
    applications: ["Mining vibrating screen", "Jaw crusher", "Conveyor drive shaft", "Cement mill auxiliary"],
    relatedModels: ["22215", "22217", "22220"],
  },
  "22215": {
    model: "22215", category: "industrial", categoryLabel: "Industrial Bearings",
    type: "Spherical Roller Bearing", d: "75 mm", D: "130 mm", B: "31 mm",
    Cr: "150 kN", C0r: "180 kN", weight: "1.75 kg",
    seal: "Open / W33", material: "GCr15 / GCr15SiMn Chrome Steel", precision: "P0 / P6",
    cage: "Steel / Brass",
    application: "Cement mill, reducer", priority: 4,
    description: "22215 is used in cement mills and industrial reducers. The 75mm bore and 150 kN load rating cover medium-duty industrial applications in cement, mining, and heavy manufacturing.",
    features: [
      "75mm bore — cement mill and industrial reducer standard",
      "150 kN dynamic load rating",
      "Self-aligning spherical design",
      "W33 pressurized lubrication option",
      "GCr15SiMn for high-temperature environments",
    ],
    applications: ["Cement ball mill", "Industrial reducer", "Mining conveyor", "Heavy industrial fan"],
    relatedModels: ["22213", "22217", "22220"],
  },
  "22217": {
    model: "22217", category: "industrial", categoryLabel: "Industrial Bearings",
    type: "Spherical Roller Bearing", d: "85 mm", D: "150 mm", B: "36 mm",
    Cr: "195 kN", C0r: "240 kN", weight: "2.70 kg",
    seal: "Open / W33", material: "GCr15 / GCr15SiMn Chrome Steel", precision: "P0 / P6",
    cage: "Steel / Brass",
    application: "Heavy reducer", priority: 3,
    description: "22217 is a heavy-duty spherical roller bearing for large industrial reducers and mining equipment. The 85mm bore and 195 kN load rating handle demanding heavy industrial applications.",
    features: [
      "85mm bore — large industrial reducer and mining equipment",
      "195 kN dynamic load rating",
      "Self-aligning spherical design",
      "W33 lubrication groove",
      "Brass cage option",
    ],
    applications: ["Heavy industrial reducer", "Mining equipment", "Cement mill", "Large industrial fan"],
    relatedModels: ["22215", "22220", "23022"],
  },
  "22220": {
    model: "22220", category: "industrial", categoryLabel: "Industrial Bearings",
    type: "Spherical Roller Bearing", d: "100 mm", D: "180 mm", B: "46 mm",
    Cr: "285 kN", C0r: "360 kN", weight: "5.20 kg",
    seal: "Open / W33", material: "GCr15 / GCr15SiMn Chrome Steel", precision: "P0 / P6",
    cage: "Steel / Brass",
    application: "Mining equipment — high value", priority: 4,
    description: "22220 is a high-value spherical roller bearing for mining and heavy industrial equipment. The 100mm bore and 285 kN load rating make it suitable for the most demanding mining and cement applications. High unit value — professional buyers, stable repeat orders.",
    features: [
      "100mm bore — mining and heavy industrial standard",
      "285 kN dynamic load rating — handles extreme loads",
      "Self-aligning up to 2° misalignment",
      "W33 pressurized lubrication",
      "Material certificates and inspection reports available",
      "GCr15SiMn option for extreme temperature",
    ],
    applications: ["Mining vibrating screen", "Cone crusher", "Cement ball mill", "Heavy industrial reducer"],
    relatedModels: ["22217", "23022", "22215"],
  },
  "23022": {
    model: "23022", category: "industrial", categoryLabel: "Industrial Bearings",
    type: "Spherical Roller Bearing", d: "110 mm", D: "170 mm", B: "45 mm",
    Cr: "310 kN", C0r: "400 kN", weight: "4.22 kg",
    seal: "Open / W33", material: "GCr15 / GCr15SiMn Chrome Steel", precision: "P0 / P6",
    cage: "Steel / Brass",
    application: "Pulp machinery, heavy conveyor", priority: 3,
    description: "23022 is a heavy-duty spherical roller bearing for paper pulp machinery and heavy conveyors. The 23000 series has a larger roller complement than the 22000 series — higher load capacity in the same envelope.",
    features: [
      "110mm bore — pulp machinery and heavy conveyor standard",
      "310 kN dynamic load rating — highest in our range",
      "23000 series: more rollers than 22000 — higher load in same size",
      "Self-aligning spherical design",
      "W33 lubrication groove",
      "Material certificates available",
    ],
    applications: ["Paper pulp machinery", "Heavy conveyor drive shaft", "Mining equipment", "Cement mill"],
    relatedModels: ["22220", "22217", "22215"],
  },
  "6209-2RS": {
    model: "6209-2RS", category: "industrial", categoryLabel: "Industrial Bearings",
    type: "Deep Groove Ball Bearing", d: "45 mm", D: "85 mm", B: "19 mm",
    Cr: "25.5 kN", C0r: "17.8 kN", weight: "0.280 kg",
    seal: "2RS (Double Rubber Seal)", material: "GCr15 Chrome Steel", precision: "P6 / P0",
    cage: "Steel / Nylon", clearance: "C0 / C3",
    application: "General industrial", priority: 3,
    description: "6209-2RS is a general industrial bearing for 45mm shaft applications. Used across a wide range of industrial equipment as a standard replacement bearing.",
    features: [
      "45mm bore — general industrial standard",
      "25.5 kN dynamic load rating",
      "Double rubber seal",
      "GCr15 chrome steel",
      "Available in C3 clearance",
    ],
    applications: ["General industrial equipment", "Electric motor", "Pump", "Fan"],
    relatedModels: ["6208-2RS C3", "22213", "6307-2RS"],
  },
};

/* ─── Priority Stars ─────────────────────────────────────────── */
function PriorityStars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={12}
          fill={i <= count ? "#f97316" : "none"}
          stroke={i <= count ? "#f97316" : "#d1d5db"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
export default function ModelDetail() {
  const params = useParams<{ category: string; model: string }>();
  const modelKey = decodeURIComponent(params.model || "");
  const data = allModels[modelKey];

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!data) {
    return (
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "5rem" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "oklch(0.20 0.010 260)", marginBottom: "1rem" }}>
            Model not found
          </div>
          <Link href={`/products/${params.category}`}>
            <span style={{ color: "#f97316", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", cursor: "pointer" }}>
              ← Back to {params.category} bearings
            </span>
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/sales@fulibearings.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Bearing Inquiry: ${data.model} from ${form.name}`,
          model: data.model,
          name: form.name,
          email: form.email,
          phone: form.phone || "—",
          message: form.message,
          _captcha: "false",
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const specRows = [
    { label: "Model", value: data.model },
    { label: "Type", value: data.type },
    { label: "Bore (d)", value: data.d },
    { label: "OD (D)", value: data.D },
    { label: "Width (B)", value: data.B },
    ...(data.Cr ? [{ label: "Dynamic Load (Cr)", value: data.Cr }] : []),
    ...(data.C0r ? [{ label: "Static Load (C0r)", value: data.C0r }] : []),
    ...(data.weight ? [{ label: "Weight", value: data.weight }] : []),
    ...(data.seal ? [{ label: "Seal", value: data.seal }] : []),
    ...(data.material ? [{ label: "Material", value: data.material }] : []),
    ...(data.precision ? [{ label: "Precision", value: data.precision }] : []),
    ...(data.cage ? [{ label: "Cage", value: data.cage }] : []),
    ...(data.clearance ? [{ label: "Clearance", value: data.clearance }] : []),
    { label: "Min. Order", value: "1 Carton (negotiable)" },
    { label: "Dispatch", value: "24 – 72 hours" },
    { label: "Packaging", value: "Neutral / OEM branded" },
    { label: "Payment", value: "T/T, L/C, PayPal" },
  ];

  return (
    <div style={{ paddingTop: "4rem", background: "oklch(0.97 0.002 260)", minHeight: "100vh" }}>

      {/* ── Breadcrumb ── */}
      <div style={{ background: "oklch(0.14 0.018 255)", padding: "0.75rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.55 0.008 260)" }}>
            <Link href="/"><span style={{ cursor: "pointer", color: "oklch(0.55 0.008 260)" }}>Home</span></Link>
            <ChevronRight size={12} />
            <Link href="/products"><span style={{ cursor: "pointer", color: "oklch(0.55 0.008 260)" }}>Products</span></Link>
            <ChevronRight size={12} />
            <Link href={`/products/${data.category}`}><span style={{ cursor: "pointer", color: "oklch(0.55 0.008 260)" }}>{data.categoryLabel}</span></Link>
            <ChevronRight size={12} />
            <span style={{ color: "#f97316", fontWeight: 700 }}>{data.model}</span>
          </div>
        </div>
      </div>

      {/* ── Hero: Model name + quick info ── */}
      <section style={{ background: "oklch(0.14 0.018 255)", paddingTop: "3rem", paddingBottom: "3.5rem" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "0.75rem" }}>
            <Link href={`/products/${data.category}`}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.55 0.008 260)", cursor: "pointer" }}>
                <ArrowLeft size={12} /> {data.categoryLabel}
              </span>
            </Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "1.5rem" }}>
            <div>
              <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "oklch(0.97 0.002 260)", lineHeight: 1, marginBottom: "0.5rem" }}>
                {data.model}
              </h1>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "oklch(0.60 0.008 260)", marginBottom: "0.75rem" }}>
                {data.type} · {data.d} bore · {data.D !== "—" ? `${data.D} OD` : "Pillow Block Unit"}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                <PriorityStars count={data.priority} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.55 0.008 260)" }}>
                  {data.application}
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/8615263521305?text=Hello%2C%20I%20need%20a%20price%20for%20${encodeURIComponent(data.model)}.%20Please%20send%20me%20FOB%20price%20and%20MOQ.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", background: "#25D366", color: "white", fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content: Specs + Inquiry ── */}
      <section style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "2.5rem", alignItems: "start" }}>

            {/* Left: Specs + Description + Features + Applications */}
            <div>
              {/* Description */}
              <div style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.004 260)", padding: "2rem", marginBottom: "1.5rem" }}>
                <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", fontWeight: 800, letterSpacing: "-0.01em", color: "oklch(0.15 0.010 260)", marginBottom: "1rem" }}>
                  Product Overview
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", color: "oklch(0.35 0.008 260)", lineHeight: 1.8 }}>
                  {data.description}
                </p>
              </div>

              {/* Spec table */}
              <div style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.004 260)", marginBottom: "1.5rem", overflow: "hidden" }}>
                <div style={{ padding: "1.25rem 2rem", borderBottom: "1px solid oklch(0.92 0.003 260)", background: "oklch(0.97 0.002 260)" }}>
                  <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.40 0.008 260)", margin: 0 }}>
                    Technical Specifications
                  </h2>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {specRows.map((row, i) => (
                      <tr key={row.label} style={{ borderBottom: i < specRows.length - 1 ? "1px solid oklch(0.93 0.003 260)" : "none" }}>
                        <td style={{ padding: "0.75rem 2rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(0.50 0.008 260)", width: "40%", background: "oklch(0.985 0.001 260)" }}>
                          {row.label}
                        </td>
                        <td style={{ padding: "0.75rem 2rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: 600, color: "oklch(0.18 0.010 260)" }}>
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Features */}
              <div style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.004 260)", padding: "2rem", marginBottom: "1.5rem" }}>
                <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.40 0.008 260)", marginBottom: "1.25rem" }}>
                  Key Features
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {data.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <ShieldCheck size={15} style={{ color: "#f97316", flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "oklch(0.30 0.008 260)", lineHeight: 1.6 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.004 260)", padding: "2rem" }}>
                <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.40 0.008 260)", marginBottom: "1.25rem" }}>
                  Applications
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {data.applications.map((app, i) => (
                    <span key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "oklch(0.25 0.010 260)", background: "oklch(0.94 0.003 260)", padding: "0.35rem 0.85rem", border: "1px solid oklch(0.86 0.005 260)" }}>
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Inquiry form (sticky) */}
            <div style={{ position: "sticky", top: "5.5rem" }}>
              <div style={{ background: "oklch(0.14 0.018 255)", border: "1px solid oklch(0.22 0.015 255)" }}>
                {/* Form header */}
                <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid oklch(0.22 0.015 255)", background: "oklch(0.18 0.022 255)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.3rem" }}>
                    <div style={{ width: "1.6rem", height: "1.6rem", background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.58rem", fontWeight: 700, color: "oklch(0.10 0.008 260)" }}>FL</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 700, color: "oklch(0.95 0.002 260)", lineHeight: 1.1 }}>FULI Bearing</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.60rem", color: "#4ade80" }}>● Online · Reply within 24hrs</div>
                    </div>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.55 0.008 260)", lineHeight: 1.5, margin: 0 }}>
                    Get FOB price for <strong style={{ color: "#f97316" }}>{data.model}</strong> — tell us quantity and destination.
                  </p>
                </div>

                {/* Form body */}
                <div style={{ padding: "1.5rem" }}>
                  {submitted ? (
                    <div style={{ textAlign: "center", padding: "2rem 0" }}>
                      <CheckCircle2 size={36} style={{ color: "#f97316", margin: "0 auto 0.75rem" }} />
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", fontWeight: 700, color: "oklch(0.95 0.002 260)", marginBottom: "0.4rem" }}>Inquiry Sent!</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.55 0.008 260)", lineHeight: 1.6 }}>We'll reply within 24 hours.</div>
                      <button onClick={() => setSubmitted(false)} style={{ marginTop: "1.25rem", padding: "0.55rem 1.25rem", background: "#f97316", color: "oklch(0.10 0.008 260)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", border: "none", cursor: "pointer" }}>
                        New Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {[
                        { name: "name", label: "Your Name *", placeholder: "e.g. Ahmed Hassan", type: "text", required: true },
                        { name: "email", label: "Email *", placeholder: "your@email.com", type: "email", required: true },
                        { name: "phone", label: "Phone / WhatsApp", placeholder: "+254 700 000 000", type: "text", required: false },
                      ].map((field) => (
                        <div key={field.name}>
                          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "oklch(0.48 0.008 260)", display: "block", marginBottom: "0.3rem" }}>{field.label}</label>
                          <input
                            name={field.name}
                            type={field.type}
                            required={field.required}
                            placeholder={field.placeholder}
                            value={form[field.name as keyof typeof form]}
                            onChange={(e) => setForm(p => ({ ...p, [field.name]: e.target.value }))}
                            style={{ width: "100%", background: "oklch(0.20 0.016 255)", border: "1px solid oklch(0.28 0.015 255)", color: "oklch(0.90 0.003 260)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", padding: "0.6rem 0.85rem", outline: "none", boxSizing: "border-box" as const }}
                            onFocus={(e) => { e.currentTarget.style.borderColor = "#f97316"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(0.28 0.015 255)"; }}
                          />
                        </div>
                      ))}
                      <div>
                        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.60rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "oklch(0.48 0.008 260)", display: "block", marginBottom: "0.3rem" }}>Inquiry *</label>
                        <textarea
                          name="message"
                          required
                          rows={3}
                          placeholder={`${data.model} — quantity, destination, delivery terms…`}
                          value={form.message}
                          onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                          style={{ width: "100%", background: "oklch(0.20 0.016 255)", border: "1px solid oklch(0.28 0.015 255)", color: "oklch(0.90 0.003 260)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", padding: "0.6rem 0.85rem", outline: "none", resize: "vertical", minHeight: "72px", boxSizing: "border-box" as const }}
                          onFocus={(e) => { e.currentTarget.style.borderColor = "#f97316"; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "oklch(0.28 0.015 255)"; }}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={submitting}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", padding: "0.75rem", background: submitting ? "oklch(0.50 0.15 45)" : "#f97316", color: "oklch(0.10 0.008 260)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", border: "none", cursor: submitting ? "not-allowed" : "pointer" }}
                      >
                        {submitting ? "Sending…" : <><Send size={13} /> Send Inquiry</>}
                      </button>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.60rem", color: "oklch(0.40 0.006 260)", textAlign: "center", lineHeight: 1.5 }}>
                        Reply within 24 hrs · sales@fulibearings.com
                      </p>
                    </form>
                  )}
                </div>

                {/* Trust badges */}
                <div style={{ padding: "1rem 1.5rem", borderTop: "1px solid oklch(0.22 0.015 255)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    { icon: ShieldCheck, text: "ISO 9001 Certified" },
                    { icon: Package, text: "MOQ from 50 pcs" },
                    { icon: Truck, text: "Dispatch within 72 hours" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Icon size={13} style={{ color: "#f97316", flexShrink: 0 }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.52 0.008 260)" }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related models ── */}
      <section style={{ paddingBottom: "4rem" }}>
        <div className="container">
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.45 0.008 260)", marginBottom: "1.25rem" }}>
            Related Models
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {data.relatedModels.map((m) => {
              const rel = allModels[m];
              if (!rel) return null;
              return (
                <Link key={m} href={`/products/${rel.category}/${encodeURIComponent(m)}`}>
                  <div style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.004 260)", padding: "1rem 1.5rem", cursor: "pointer", transition: "border-color 0.2s, box-shadow 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#f97316"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(249,115,22,0.12)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.88 0.004 260)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                  >
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", fontWeight: 700, color: "oklch(0.15 0.010 260)", marginBottom: "0.25rem" }}>{m}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.50 0.008 260)" }}>{rel.application}</div>
                    <div style={{ marginTop: "0.4rem" }}><PriorityStars count={rel.priority} /></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

/* Need ChevronRight */
function ChevronRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
