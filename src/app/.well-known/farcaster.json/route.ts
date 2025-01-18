import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
      payload: "eyJkb21haW4iOiAiYXZuZWVzaC1saW5rZnJhbWVodWIudmVyY2VsLmFwcCJ9",
      signature: "MHg4OTgyYmI3YzI5NWVkN2Q0NTlmMDc4N2FjNTgzNDA5NzQ4ODg2NTA5NWQ5N2UxZDYxZTc3MTQxYzgwNDYwZWNhNjkzZGY2M2MxYmU3YjBjNjU5NDEyZWYwMjQ4ODlkYmQ0ODZjYzA5M2ZkMzgxODY4MjkwNjUzNWQ3YTcyNzc0ZDFj"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
