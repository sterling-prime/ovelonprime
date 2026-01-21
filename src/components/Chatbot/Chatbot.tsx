import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from "./ChatMessage";
import { QuickReply } from "./QuickReply";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

type ConversationPath = "initial" | "product" | "support" | "demo" | "fallback";

export const Chatbot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentPath, setCurrentPath] = useState<ConversationPath>("initial");
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-greet when chat opens
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      const greeting: Message = {
        id: crypto.randomUUID(),
        text: t("chatbot.greeting", "Hi! I'm Dean. How can I help you today? Are you looking for Product Info, Operational Support, or a Demo?"),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([greeting]);
      setHasGreeted(true);
    }
  }, [isOpen, hasGreeted, t]);

  const addBotMessage = (text: string) => {
    const message: Message = {
      id: crypto.randomUUID(),
      text,
      isBot: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, message]);
  };

  const addUserMessage = (text: string) => {
    const message: Message = {
      id: crypto.randomUUID(),
      text,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, message]);
  };

  const handleProductInfo = () => {
    addUserMessage(t("chatbot.buttons.productInfo", "Product Info"));
    setTimeout(() => {
      addBotMessage(
        t("chatbot.responses.productInfo", "We offer warehouse and workflow solutions tailored to your operations.\n\nQuick links:\n• Warehouse Solutions\n• Workflow Solutions\n\nAnything specific you want to know?")
      );
      setCurrentPath("product");
    }, 500);
  };

  const handleOperationalSupport = () => {
    addUserMessage(t("chatbot.buttons.operationalSupport", "Operational Support"));
    setTimeout(() => {
      addBotMessage(
        t("chatbot.responses.operationalSupport", "Can you tell me the issue type? I can guide you or connect you with a human expert.")
      );
      setCurrentPath("support");
    }, 500);
  };

  const handleScheduleDemo = () => {
    addUserMessage(t("chatbot.buttons.scheduleDemo", "Schedule a Demo"));
    setTimeout(() => {
      addBotMessage(
        t("chatbot.responses.scheduleDemo", "I can schedule a demo for you. Click the button below to pick a time that works for you!")
      );
      setCurrentPath("demo");
    }, 500);
  };

  const handleConnectSupport = () => {
    addUserMessage(t("chatbot.buttons.connectSupport", "Connect to Support Team"));
    setTimeout(() => {
      addBotMessage(
        t("chatbot.responses.connectSupport", "I'm connecting you with our support team. You can also reach us directly at info@ovelon-prime.com")
      );
    }, 500);
  };

  const handleBookDemo = () => {
    // Trigger the booking modal
    window.dispatchEvent(new CustomEvent("open-booking-modal"));
    addUserMessage(t("chatbot.buttons.bookDemo", "Book with us"));
    setTimeout(() => {
      addBotMessage(t("chatbot.responses.bookingOpened", "I've opened our booking calendar for you. Pick a time that works best!"));
    }, 500);
  };

  const handleGoToSection = (sectionId: string, label: string) => {
    addUserMessage(label);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBackToMain = () => {
    addBotMessage(t("chatbot.responses.backToMain", "No problem! What else can I help you with?"));
    setCurrentPath("initial");
  };

  const handleUserInput = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    const userText = inputValue.toLowerCase();
    setInputValue("");

    setTimeout(() => {
      // Simple keyword matching
      if (userText.includes("demo") || userText.includes("book") || userText.includes("schedule")) {
        handleScheduleDemo();
      } else if (userText.includes("support") || userText.includes("help") || userText.includes("issue") || userText.includes("problem")) {
        addBotMessage(t("chatbot.responses.operationalSupport", "Can you tell me the issue type? I can guide you or connect you with a human expert."));
        setCurrentPath("support");
      } else if (userText.includes("product") || userText.includes("warehouse") || userText.includes("workflow") || userText.includes("solution")) {
        addBotMessage(t("chatbot.responses.productInfo", "We offer warehouse and workflow solutions tailored to your operations.\n\nQuick links:\n• Warehouse Solutions\n• Workflow Solutions\n\nAnything specific you want to know?"));
        setCurrentPath("product");
      } else if (userText.includes("price") || userText.includes("cost") || userText.includes("pricing")) {
        addBotMessage(t("chatbot.responses.pricing", "Our pricing starts at €4.999/month for the complete platform. Would you like to schedule a demo to discuss your specific needs?"));
      } else if (userText.includes("contact") || userText.includes("email") || userText.includes("reach")) {
        addBotMessage(t("chatbot.responses.contact", "You can reach us at info@ovelon-prime.com. Would you like me to connect you with our team?"));
      } else {
        addBotMessage(t("chatbot.responses.fallback", "I don't have that info, but the team can follow up with you shortly. Would you like to leave your contact details?"));
        setCurrentPath("fallback");
      }
    }, 500);
  };

  const renderQuickReplies = () => {
    switch (currentPath) {
      case "initial":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply
              label={t("chatbot.buttons.productInfo", "Product Info")}
              onClick={handleProductInfo}
            />
            <QuickReply
              label={t("chatbot.buttons.operationalSupport", "Operational Support")}
              onClick={handleOperationalSupport}
            />
            <QuickReply
              label={t("chatbot.buttons.scheduleDemo", "Schedule a Demo")}
              onClick={handleScheduleDemo}
            />
          </div>
        );
      case "product":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply
              label={t("chatbot.buttons.warehouseSolutions", "Warehouse Solutions")}
              onClick={() => handleGoToSection("services", "Warehouse Solutions")}
            />
            <QuickReply
              label={t("chatbot.buttons.workflowSolutions", "Workflow Solutions")}
              onClick={() => handleGoToSection("services", "Workflow Solutions")}
            />
            <QuickReply
              label={t("chatbot.buttons.backToMain", "← Back")}
              onClick={handleBackToMain}
            />
          </div>
        );
      case "support":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply
              label={t("chatbot.buttons.connectSupport", "Connect to Support Team")}
              onClick={handleConnectSupport}
            />
            <QuickReply
              label={t("chatbot.buttons.backToMain", "← Back")}
              onClick={handleBackToMain}
            />
          </div>
        );
      case "demo":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply
              label={t("chatbot.buttons.bookDemo", "Book with us")}
              onClick={handleBookDemo}
            />
            <QuickReply
              label={t("chatbot.buttons.backToMain", "← Back")}
              onClick={handleBackToMain}
            />
          </div>
        );
      case "fallback":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply
              label={t("chatbot.buttons.contactUs", "Contact Us")}
              onClick={() => handleGoToSection("contact", "Contact Us")}
            />
            <QuickReply
              label={t("chatbot.buttons.backToMain", "← Back")}
              onClick={handleBackToMain}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110",
          isOpen
            ? "bg-muted text-foreground"
            : "bg-primary text-primary-foreground"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-300",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <span className="text-lg font-bold">D</span>
          </div>
          <div>
            <h3 className="font-semibold">Dean</h3>
            <p className="text-xs opacity-80">{t("chatbot.subtitle", "Ovelon Prime Assistant")}</p>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[320px] overflow-y-auto p-4 bg-background">
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg.text}
              isBot={msg.isBot}
              timestamp={msg.timestamp}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {renderQuickReplies()}

        {/* Input */}
        <div className="p-3 border-t border-border/50 flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUserInput()}
            placeholder={t("chatbot.inputPlaceholder", "Type a message...")}
            className="flex-1 text-sm"
          />
          <Button
            size="icon"
            onClick={handleUserInput}
            disabled={!inputValue.trim()}
            className="shrink-0"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
};
