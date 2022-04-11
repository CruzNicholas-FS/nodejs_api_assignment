const allUniversities = () => {
  console.log("Mock universities");
  return Promise.resolve([
    {
      "state-province": null,
      country: "United States",
      name: "Marywood University",
      web_pages: ["http://www.marywood.edu"],
      domains: ["marywood.edu"],
      alpha_two_code: "US",
    },
    {
      "state-province": "Dehradun",
      country: "India",
      name: "University of Petroleum and Energy Studies",
      web_pages: ["https://www.upes.ac.in/"],
      domains: ["upes.ac.in"],
      alpha_two_code: "IN",
    },
    {
      "state-province": null,
      country: "Canada",
      name: "Cégep de Saint-Jérôme",
      web_pages: [
        "https://www.cstj.qc.ca",
        "https://ccmt.cstj.qc.ca",
        "https://ccml.cstj.qc.ca",
      ],
      domains: ["cstj.qc.ca"],
      alpha_two_code: "CA",
    },
    {
      "state-province": null,
      country: "United States",
      name: "Lindenwood University",
      web_pages: ["http://www.lindenwood.edu/"],
      domains: ["lindenwood.edu"],
      alpha_two_code: "US",
    },
    {
      "state-province": "Punjab",
      country: "India",
      name: "DAV Institute of Engineering & Technology",
      web_pages: ["http://www.davietjal.org/"],
      domains: ["davietjal.org"],
      alpha_two_code: "IN",
    },
    {
      "state-province": "Punjab",
      country: "India",
      name: "Lovely Professional University",
      web_pages: ["http://www.lpu.in/"],
      domains: ["lpu.in"],
      alpha_two_code: "IN",
    },
    {
      "state-province": null,
      country: "United States",
      name: "Sullivan University",
      web_pages: ["https://sullivan.edu/"],
      domains: ["sullivan.edu"],
      alpha_two_code: "US",
    },
    {
      "state-province": null,
      country: "United States",
      name: "Florida State College at Jacksonville",
      web_pages: ["https://www.fscj.edu/"],
      domains: ["fscj.edu"],
      alpha_two_code: "US",
    },
    {
      "state-province": null,
      country: "United States",
      name: "Xavier University",
      web_pages: ["https://www.xavier.edu/"],
      domains: ["xavier.edu"],
      alpha_two_code: "US",
    },
    {
      "state-province": null,
      country: "United States",
      name: "Tusculum College",
      web_pages: ["https://home.tusculum.edu/"],
      domains: ["tusculum.edu"],
      alpha_two_code: "US",
    },
  ]);
};

const universitiesByName = (name) => {
  console.log("Mock university by name");
  return Promise.resolve([
    {
      "state-province": null,
      country: "United States",
      name: "Tusculum College",
      web_pages: ["https://home.tusculum.edu/"],
      domains: ["tusculum.edu"],
      alpha_two_code: "US",
    },
  ]);
};

module.exports = {
  allUniversities,
  universitiesByName,
};
