export const officeData = {
  Asia: {
    mapCenter: { lat: 20.5937, lng: 78.9629 },
    locations: [
      { name: "China", lat: 31.2304, lng: 121.4737 },
      { name: "India", lat: 28.6139, lng: 77.209 },
      { name: "Singapore", lat: 1.3521, lng: 103.8198 },
    ],
    offices: [
      {
        country: "China",
        addresses: [
          {
            name: "Shanghai",
            address:
              "2301, Huai Hai Zhong Hua Building, 885 Ren Min Rd., Shanghai, China",
          },
          {
            name: "JingAn",
            address:
              "13A, Jing An New Century Plaza | 881 West Nanjing Road | JingAn District Shanghai, China",
          },
        ],
        link: "/countries/china/",
      },
      {
        country: "India",
        addresses: [
          {
            name: "",
            address:
              "Office No. 306- 307, 3rd Floor, Tower-B, Emaar Digital Greens, Golf Course Extension Road, Sector-61, Gurgaon-122102, Haryana, India.",
          },
        ],
        link: "/countries/india",
      },
      {
        country: "Singapore",
        addresses: [
          {
            name: "",
            address:
              "8 Marina View, #43*01 Asia Square Tower 1, Singapore 018960",
          },
        ],
        link: "/countries/singapore",
      },
    ],
  },
  Europe: {
    mapCenter: { lat: 50.1109, lng: 8.6821 },
    locations: [
      { name: "Bulgaria", lat: 42.7339, lng: 25.4858 },
      { name: "Denmark", lat: 56.2639, lng: 9.5018 },
      { name: "Finland", lat: 61.9241, lng: 25.7482 },
      { name: "France", lat: 46.6034, lng: 1.8883 },
      { name: "Germany", lat: 51.1657, lng: 10.4515 },
      { name: "Italy", lat: 41.8719, lng: 12.5674 },
      { name: "Norway", lat: 60.472, lng: 8.4689 },
      { name: "Spain", lat: 40.4637, lng: -3.7492 },
      { name: "Sweden", lat: 60.1282, lng: 18.6435 },
      { name: "UK", lat: 51.5099, lng: -0.1181 },
    ],
    offices: [
      {
        country: "Bulgaria",
        addresses: [
          {
            name: "",
            address: "Petar Parchevich 9 Str.1000, Sofia, Bulgaria",
          },
        ],
        link: "/countries/bulgaria",
      },
      {
        country: "Denmark",
        addresses: [
          {
            name: "",
            address: "Slotsmarken 11,  2970  Hørsholm, Denmark",
          },
        ],
        link: "/countries/denmark",
      },
      {
        country: "Finland",
        addresses: [
          {
            name: "",
            address:
              "Mannerheimintie 113, Aitio Business Park, 00280 Helsinki, Finland",
          },
        ],
        link: "/countries/finland",
      },
      {
        country: "France",
        addresses: [
          {
            name: "",
            address: "19 rue Maurice Bouchor, 69007 Lyon, France",
          },
        ],
        link: "/countries/france",
      },
      {
        country: "Germany",
        addresses: [
          {
            name: "Frankfurt ",
            address:
              "Taplow Executive Search, Opernplatz 14, 60313 Frankfurt, Germany",
          },
          {
            name: "Hamburg ",
            address:
              "Taplow Executive Search, Warburgstr. 32, 20354 Hamburg, Germany",
          },
        ],
        link: "/countries/germany",
      },
      {
        country: "Italy",

        addresses: [
          {
            name: "",
            address: "Galleria San Babila 4C, Milan, Italy",
          },
        ],
        link: "/countries/italy",
      },
      {
        country: "Norway",
        addresses: [
          {
            name: "",
            address: "Henrik Ibsens gate 90,  0255 Oslo, Norway",
          },
        ],
        link: "/countries/norway",
      },
      {
        country: "Spain",
        addresses: [
          {
            name: "",
            address: "Fernando el Santo 25-28010 Madrid-Spain",
          },
        ],
        link: "/countries/spain",
      },
      {
        country: "Sweden",
        addresses: [
          {
            name: "Stockholm",
            address: "Landsvägen 57, 172 65 Sundbyberg",
          },
          {
            name: "Halmstad",
            address: "Storgatan 52, 302 43 Halmstad",
          },
          {
            name: "Göteborg",
            address: "Nya Tingstadsgatan 1, 422 44 Hisings Backa",
          },
        ],
        link: "/countries/sweden",
      },
      {
        country: "UK",
        addresses: [
          {
            name: "",
            address: "33, St James Square, London, SW1Y 4JS, UK",
          },
        ],
        link: "/countries/uk",
      },
    ],
  },
  Oceania: {
    mapCenter: { lat: -25.2744, lng: 133.7751 },
    locations: [
      { name: "Australia", lat: -33.8688, lng: 151.2093 },
      { name: "New Zealand", lat: -36.8485, lng: 174.7633 },
    ],
    offices: [
      {
        country: "Australia",
        addresses: [
          {
            name: "",
            address:
              "Melbourne Quarter, Building Two, Level 3, #309, 697 Collins Street, Melbourne, Victoria, Australia, 3008",
          },
        ],
        link: "/countries/australia",
      },
      {
        country: "New Zealand",
        addresses: [
          {
            name: "Auckland",
            address: "Level 10, 11 Britomart Place, Auckland 1010",
          },
          {
            name: "Wellington",
            address:
              "L14, Equinox House, The Terrace, Wellington 6011, New Zealand",
          },
        ],
        link: "/countries/new-zealand",
      },
    ],
  },
  "North America": {
    mapCenter: { lat: 39.8283, lng: -98.5795 },
    locations: [
      { name: "Canada", lat: 45.4215, lng: -75.6993 },
      { name: "US", lat: 37.7749, lng: -122.4194 },
    ],
    offices: [
      {
        country: "US",
        addresses: [
          {
            name: "",
            address: "Post Office Box 20108. Fountain Hills, AZ 85269, USA",
          },
        ],
        link: "/countries/us",
      },
      {
        country: "Canada",
        addresses: [
          {
            name: "Vancouver",
            address:
              "Suite 720, 475 West Georgia Street, Vancouver, BC V6B 4M9",
          },
          {
            name: "Calgary",
            address: "Suite 503, 2303 4th Street SW., Calgary, AB T2S 2S7",
          },
          {
            name: "Toronto",
            address: "Suite 300, 5100 Orbitor Drive, Mississauga, ON L4W 4Z4",
          },
          {
            name: "Halifax",
            address: "Suite 301, 168 Hobsons Lake Drive Halifax, NS B3S 0G4",
          },
          {
            name: "Edmonton",
            address:
              "Suite 2020-Tower One, 10060 Jasper Avenue, Edmonton, AB T5J 3R8",
          },
          {
            name: "Montreal",
            address: "Suite 1800, 500 Place d’Armes, Montréal, QC H2Y 2W2",
          },
          {
            name: "Ottawa",
            address: "Unit 6, 430 Hazeldean Road, Ottawa, ON K2L 1T9",
          },
          {
            name: "Moncton",
            address: "Suite 300, 795 Main Street, Moncton, NB E1C 1E9",
          },
        ],
        link: "/countries/canada",
      },
    ],
  },
};
