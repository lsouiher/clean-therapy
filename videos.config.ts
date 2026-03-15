// videos.config.ts
// -----------------------------------------------
// HOW TO ADD A VIDEO:
// 1. Add a new object to the array below
// 2. Set "type" to: "youtube" | "tiktok" | "mp4" | "instagram"
// 3. Paste the full URL in "src"
// 4. Add a short caption describing the work
// 5. Set featured: true for the one video to show large at the top
// -----------------------------------------------

export type VideoType = "youtube" | "tiktok" | "mp4" | "instagram";

export interface VideoItem {
  id: string;
  type: VideoType;
  src: string;
  thumbnail?: string;
  caption: string;
  featured?: boolean;
}

export const videos: VideoItem[] = [
  // Example entries (uncomment and update when ready):
  //
  // {
  //   id: "1",
  //   type: "youtube",
  //   src: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  //   thumbnail: "",
  //   caption: "Kitchen deep clean — Cleveland Heights, OH",
  //   featured: true,
  // },
  // {
  //   id: "2",
  //   type: "mp4",
  //   src: "/videos/bathroom-before-after.mp4",
  //   thumbnail: "/videos/bathroom-thumb.jpg",
  //   caption: "Bathroom transformation — Westlake, OH",
  //   featured: false,
  // },
];
