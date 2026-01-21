import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp?: Date;
}

export const ChatMessage = ({ message, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn("flex w-full mb-3", isBot ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed",
          isBot
            ? "bg-muted text-foreground rounded-bl-md"
            : "bg-primary text-primary-foreground rounded-br-md"
        )}
      >
        <p className="whitespace-pre-wrap">{message}</p>
        {timestamp && (
          <span className="text-[10px] opacity-60 mt-1 block">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        )}
      </div>
    </div>
  );
};
