"use client";

import { EmailThread } from "@/components/EmailThread";
import { EmailsProvider } from "@/lib/hooks/use-emails";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-textarea/styles.css";

export default function Home() {
  return (
    <div className="h-screen">
      <CopilotKit publicApiKey="ck_pub_68042cff5088605d9c8ee8ead7b09c69">
        <EmailsProvider>
          <EmailThread />
        </EmailsProvider>
      </CopilotKit>
    </div>
  );
}
