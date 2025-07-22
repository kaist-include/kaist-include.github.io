// Sponsor data configuration
// Add your actual sponsor information here

export interface Sponsor {
  id: number
  name: string
  logo: string
  website: string
}

export const sponsors: Sponsor[] = [
  // Example sponsors - replace with actual sponsor data
  // {
  //   id: 1,
  //   name: "Example Company",
  //   logo: "/sponsors/example-company-logo.png",
  //   website: "https://example.com"
  // },
  // {
  //   id: 2,
  //   name: "Another Sponsor",
  //   logo: "/sponsors/another-sponsor-logo.png", 
  //   website: "https://anothersponsor.com"
  // },
  
  // To add new sponsors:
  // 1. Add logo images to /public/sponsors/ folder
  // 2. Add sponsor data object to this array
  // 3. The website will automatically update
    {
    id: 1,
    name: "채널코퍼레이션",
    logo: "/sponsors/channel.png",
    website: "https://channel.io/"
  },
  {
    id: 2,
    name: "엘리스",
    logo: "/sponsors/elice.jpg",
    website: "https://elice.io/"
  }
]

export default sponsors 