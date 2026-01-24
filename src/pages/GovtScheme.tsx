import { useState } from "react";
import { FaRegFileAlt, FaInfoCircle, FaLink } from "react-icons/fa";

// TypeScript interface for a Govt Scheme
interface GovtScheme {
  name: string;
  description: string;
  eligibility: string;
  benefits: string;
  link: string;
}

// Sample schemes (aap real API se fetch kar sakte ho)
const schemesData: GovtScheme[] = [
  {
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description: "Crop insurance scheme to protect farmers against crop loss.",
    eligibility: "All farmers growing insured crops.",
    benefits: "Financial support in case of crop failure due to natural calamities.",
    link: "https://pmfby.gov.in/",
  },
  {
    name: "Kisan Credit Card (KCC)",
    description: "Provides short-term credit to farmers at low interest rates.",
    eligibility: "All farmers and cultivators.",
    benefits: "Credit for crop cultivation, post-harvest expenses, and more.",
    link: "https://www.kisancreditcard.com/",
  },
  {
    name: "Soil Health Card Scheme",
    description: "Provides farmers with soil quality information and fertilizer recommendations.",
    eligibility: "All farmers owning cultivable land.",
    benefits: "Optimizes fertilizer use, increases yield, and reduces cost.",
    link: "https://soilhealth.dac.gov.in/",
  },
  {
    name: "PM Kisan Samman Nidhi",
    description: "Direct income support scheme for small and marginal farmers.",
    eligibility: "Small and marginal farmers with cultivable land.",
    benefits: "₹6,000/year in 3 equal installments.",
    link: "https://pmkisan.gov.in/",
  },
  {
    name: "National Agriculture Market (eNAM)",
    description: "Digital trading platform for agricultural commodities.",
    eligibility: "All farmers registered on eNAM platform.",
    benefits: "Better price discovery, transparent trading, and wider market access.",
    link: "https://enam.gov.in/",
  },
];

const GovtSchemes: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  // Filter schemes by search term
  const filteredSchemes = schemesData.filter(
    (scheme) =>
      scheme.name.toLowerCase().includes(search.toLowerCase()) ||
      scheme.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 text-center">
          Govt Schemes 🏛️
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Latest government schemes for farmers.
        </p>

        {/* Search */}
        <div className="mt-6 flex justify-center gap-3">
          <input
            type="text"
            placeholder="Search schemes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 rounded w-64"
          />
        </div>

        {/* Schemes Cards */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {filteredSchemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold text-green-700 mb-2 flex items-center gap-2">
                <FaRegFileAlt /> {scheme.name}
              </h2>
              <p className="text-gray-700 mb-2 flex items-center gap-1">
                <FaInfoCircle /> {scheme.description}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Eligibility:</strong> {scheme.eligibility}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Benefits:</strong> {scheme.benefits}
              </p>
              <a
                href={scheme.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 font-semibold flex items-center gap-1 hover:underline"
              >
                <FaLink /> More Info
              </a>
            </div>
          ))}
        </div>

        {filteredSchemes.length === 0 && (
          <p className="text-center text-gray-600 mt-6">
            No schemes found for your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default GovtSchemes;
