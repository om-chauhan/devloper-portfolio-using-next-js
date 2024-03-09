import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#E5F1FF",
        }}>
        <div tw=" flex bg-black rounded-full h-80 w-80 items-center justify-center">
          <p tw="text-white text-50">O</p>
        </div>

        <h1 tw="text-20 font-extrabold leading-none tracking-tight">
          Omprakash Chauhan
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
