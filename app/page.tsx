"use client";

import { EmailThread } from "@/components/EmailThread";
import { EmailsProvider } from "@/lib/hooks/use-emails";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex-1">
          <EmailsProvider>
            <EmailThread />
          </EmailsProvider>
        </div>
      </div>
    </>
  );
}
