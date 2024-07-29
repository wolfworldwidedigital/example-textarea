import { useEmails } from "@/lib/hooks/use-email";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Button } from "./ui/button";

export function Reply() {
  const { sendEmail, emails } = useEmails();
  const [input, setInput] = useState("");

  const handleReply = () => {
    console.log(input);
    sendEmail({
      body: input,
    });
    setInput("");
  };

  return (
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
  );
}
