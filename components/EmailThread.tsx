import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEmails } from "@/lib/hooks/use-email";
import { useState } from "react";

export function EmailThread() {
  const [input, setInput] = useState("");
  const { emails, addEmail } = useEmails();

  const handleReply = () => {
    console.log(input);
    addEmail({
      from: "me",
      to: "John Doe <john@acme.com>",
      body: input,
      timestamp: new Date().toISOString(),
    });
    setInput("");
  };

  return (
    <main className="flex h-full flex-col items-center justify-between">
      <div className="flex h-full w-full flex-col">
        <header className="border-b px-6 py-4">
          <h2 className="text-2xl font-semibold">
            Email Thread: Project Kickoff Meeting
          </h2>
        </header>
        <div className="flex flex-1">
          <div className="flex w-full flex-col border-r bg-muted">
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {emails.map((email) => (
                  <div
                    key={`${email.from}-${email.timestamp}`}
                    className="rounded-md border bg-background p-4 space-y-1"
                  >
                    <p className="text-sm text-muted-foreground">
                      {new Date(email.timestamp).toLocaleDateString()}{" "}
                      {new Date(email.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">
                          <span className="text-muted-foreground">From:</span>{" "}
                          {email.from}
                        </p>
                        <p className="text-sm font-medium">
                          <span className="text-muted-foreground">To:</span>{" "}
                          {email.to}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {email.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <hr className="my-2" />

                <div className="mt-4 pt-4 space-y-2 bg-background p-4 rounded-md border">
                  <Textarea
                    className="min-h-40"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Write your reply..."
                  />
                  <Button disabled={!input} onClick={handleReply}>
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
