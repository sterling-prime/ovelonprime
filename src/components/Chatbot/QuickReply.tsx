import { Button } from "@/components/ui/button";

interface QuickReplyProps {
  label: string;
  onClick: () => void;
}

export const QuickReply = ({ label, onClick }: QuickReplyProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className="text-xs px-3 py-2 h-auto rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
    >
      {label}
    </Button>
  );
};
