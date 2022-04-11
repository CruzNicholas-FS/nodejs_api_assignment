const { allUniversities, universitiesByName } = require("./universities.js");

jest.mock("./universities.js");

describe("Universities List Tests", () => {
  test("Should return maximum amount of universities", async () => {
    const result = await allUniversities();
    expect(result).toHaveLength(10);
    expect(result[9].name).toEqual("Tusculum College");
    expect(result[1].country).toEqual("India");
  });

  test("Should return Tusculum University", async () => {
    const result = await universitiesByName("Tusculum");
    expect(result.name).toEqual("Tusculum College");
    expect(result.country).toEqual("United States");
    expect(result.alpha_two_code).toEqual("US");
  });
});
