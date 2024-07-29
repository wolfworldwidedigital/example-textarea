"use client";

import { EmailThread } from "@/components/EmailThread";
import { ProvideApiKeyDialog } from "@/components/ProvideApiKeyDialog";
import { EmailsProvider } from "@/lib/hooks/use-emails";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const publicApiKey = searchParams.get("publicApiKey");

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex-[0_0_auto]">
          <ProvideApiKeyDialog />
        </div>
        <div className="flex-1">
          <CopilotKit publicApiKey={(publicApiKey as string) || "undefined"}>
            <EmailsProvider>
              <EmailThread />
            </EmailsProvider>
          </CopilotKit>
        </div>
      </div>
    </>
  );
}
