"use client";

import { EmailThread } from "@/components/EmailThread";
import { EmailsProvider } from "@/lib/hooks/use-emails";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-textarea/styles.css";

export default function Home() {
  const publicApiKey = process.env.NEXT_PUBLIC_COPILOT_CLOUD_PUBLIC_API_KEY;

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex-1">
          <CopilotKit publicApiKey={(publicApiKey as string)}>
            <EmailsProvider>
              <EmailThread />
            </EmailsProvider>
          </CopilotKit>
        </div>
      </div>
    </>
  );
}
