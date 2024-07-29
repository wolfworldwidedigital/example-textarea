import { createContext, useContext, useState, ReactNode } from "react";
import { Email } from "../emails.types";
import emailHistory from "./email-history.json";

type EmailsContextType = {
  emails: Email[];
  addEmail: (email: Email) => void;
};

const EmailsContext = createContext<EmailsContextType | undefined>(undefined);

export const EmailsProvider = ({ children }: { children: ReactNode }) => {
  const [emails, setEmails] = useState<Email[]>(emailHistory);

  const addEmail = (email: Email) => {
    setEmails([...emails, email]);
  };
  
  return (
    <EmailsContext.Provider
      value={{ emails, addEmail }}
    >
      {children}
    </EmailsContext.Provider>
  );
};

export const useEmails = () => {
  const context = useContext(EmailsContext);
  if (context === undefined) {
    throw new Error("useEmails must be used within a EmailsProvider");
  }
  return context;
};
