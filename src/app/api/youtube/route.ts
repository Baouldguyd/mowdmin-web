import { NextResponse } from "next/server";

let cachedVideos: any[] = [];
let lastFetched = 0;
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export async function GET() {
  const now = Date.now();

  if (cachedVideos.length > 0 && now - lastFetched < CACHE_DURATION) {
    console.log("Returning cached videos");
    return NextResponse.json(cachedVideos);
  }

  console.log("Fetching new videos from YouTube API");

  const API_KEY = process.env.YOUTUBE_DATA_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;
  if (!API_KEY || !CHANNEL_ID) {
    console.error("API key or Channel ID is missing");
    return NextResponse.json({ error: "API key or Channel ID is missing" });
  }
  
  const maxResults = 10;

  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}`;

  const res = await fetch(url);
  const data = await res.json();

  cachedVideos = data.items;
  lastFetched = now;

  return NextResponse.json(cachedVideos);
}
