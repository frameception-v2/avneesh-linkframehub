import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = "LinkFrameHub - Farcaster Frame";
export const size = {
  width: 1200,
  height: 630, // Standard OpenGraph image size
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-purple-900">
        <div tw="flex flex-col items-center justify-center bg-white/10 p-12 rounded-3xl">
          <h1 tw="text-7xl font-bold text-white mb-4">{PROJECT_TITLE}</h1>
          <h3 tw="text-3xl text-purple-200 text-center max-w-2xl">
            {PROJECT_DESCRIPTION}
          </h3>
          <div tw="mt-8 flex items-center">
            <span tw="text-xl text-purple-300 mr-2">Powered by</span>
            <span tw="text-2xl font-bold text-white">Farcaster Frames</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
