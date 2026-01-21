import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from "./ChatMessage";
import { QuickReply } from "./QuickReply";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

type ConversationPath = "initial" | "product" | "support" | "demo" | "intake" | "pricing" | "contact" | "simulation" | "fallback";

export const Chatbot = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentPath, setCurrentPath] = useState<ConversationPath>("initial");
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Get currency based on language
  const isEnglish = i18n.language === "en";
  const priceDisplay = isEnglish ? "$4,999" : "€4.999";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-greet when chat opens (uses current i18n language from header dropdown)
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      const greeting: Message = {
        id: crypto.randomUUID(),
        text: t("chatbot.greeting", "Hi! I'm Dean. How can I help you today?\n\nI can assist with Product Info, Operational Support, Schedule a Demo, run our Diagnostic Intake, try our Simulator, or answer questions about Pricing."),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([greeting]);
      setHasGreeted(true);
      setCurrentPath("initial");
    }
  }, [isOpen, hasGreeted, t]);

  // Reset greeting when language changes so Dean speaks in new language
  useEffect(() => {
    if (hasGreeted && isOpen) {
      // Update the greeting message when language changes
      setMessages((prev) => {
        if (prev.length > 0 && prev[0].isBot) {
          return [
            {
              ...prev[0],
              text: t("chatbot.greeting", "Hi! I'm Dean. How can I help you today?\n\nI can assist with Product Info, Operational Support, Schedule a Demo, run our Diagnostic Intake, try our Simulator, or answer questions about Pricing."),
            },
            ...prev.slice(1),
          ];
        }
        return prev;
      });
    }
  }, [i18n.language]);

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

  const handleIntake = () => {
    addUserMessage(t("chatbot.buttons.intake", "Diagnostic Intake"));
    setTimeout(() => {
      addBotMessage(
        t("chatbot.responses.intake", "Our 7-step Demand & Execution Intake helps diagnose your operational challenges:\n\n1️⃣ Operational Context\n2️⃣ Current Challenges\n3️⃣ Process Analysis\n4️⃣ Technology Stack\n5️⃣ Goals & Priorities\n6️⃣ Executive Analysis\n7️⃣ Contact Details\n\nYou'll receive a branded PDF summary. Ready to start?")
      );
      setCurrentPath("intake");
    }, 500);
  };

  const handlePricing = () => {
    addUserMessage(t("chatbot.buttons.pricing", "Pricing"));
    setTimeout(() => {
      addBotMessage(
        t("chatbot.responses.pricing", `Our platform starts at ${priceDisplay}/month and includes the full suite of warehouse and workflow solutions.\n\nWant to see the detailed pricing section or schedule a call to discuss your needs?`)
      );
      setCurrentPath("pricing");
    }, 500);
  };

  const handleContact = () => {
    addUserMessage(t("chatbot.buttons.contact", "Contact Us"));
    setTimeout(() => {
      addBotMessage(
        t("chatbot.responses.contact", "You can reach us at info@ovelon-prime.com or use our contact form below. Would you like me to take you there?")
      );
      setCurrentPath("contact");
    }, 500);
  };

  const handleSimulation = () => {
    addUserMessage(t("chatbot.buttons.simulation", "Project Simulator"));
    setTimeout(() => {
      addBotMessage(
        t("chatbot.responses.simulation", "Our Project Simulator helps you visualize potential improvements in your operations. Try it out!")
      );
      setCurrentPath("simulation");
    }, 500);
  };

  const handleOpenSimulator = () => {
    window.dispatchEvent(new CustomEvent("open-simulator"));
    addUserMessage(t("chatbot.buttons.openSimulator", "Open Simulator"));
    setTimeout(() => {
      addBotMessage(t("chatbot.responses.simulatorOpened", "I've opened the Project Simulator for you. Follow the steps to see your potential improvements!"));
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
    window.dispatchEvent(new CustomEvent("open-booking-modal"));
    addUserMessage(t("chatbot.buttons.bookDemo", "Book with us"));
    setTimeout(() => {
      addBotMessage(t("chatbot.responses.bookingOpened", "I've opened our booking calendar for you. Pick a time that works best!"));
    }, 500);
  };

  const handleStartIntake = () => {
    addUserMessage(t("chatbot.buttons.startIntake", "Start Intake"));
    setIsOpen(false);
    navigate(`/intake?lang=${i18n.language}`);
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
        addBotMessage(t("chatbot.responses.scheduleDemo", "I can schedule a demo for you. Click the button below to pick a time that works for you!"));
        setCurrentPath("demo");
      } else if (userText.includes("intake") || userText.includes("diagnostic") || userText.includes("analysis")) {
        addBotMessage(t("chatbot.responses.intake", "Our 7-step Demand & Execution Intake helps diagnose your operational challenges. Ready to start?"));
        setCurrentPath("intake");
      } else if (userText.includes("simulat") || userText.includes("project") || userText.includes("try")) {
        addBotMessage(t("chatbot.responses.simulation", "Our Project Simulator helps you visualize potential improvements. Want to try it?"));
        setCurrentPath("simulation");
      } else if (userText.includes("price") || userText.includes("cost") || userText.includes("pricing")) {
        addBotMessage(t("chatbot.responses.pricing", `Our platform starts at ${priceDisplay}/month. Want to see details or schedule a call?`));
        setCurrentPath("pricing");
      } else if (userText.includes("contact") || userText.includes("email") || userText.includes("reach") || userText.includes("form")) {
        addBotMessage(t("chatbot.responses.contact", "You can reach us at info@ovelon-prime.com or use our contact form. Want me to take you there?"));
        setCurrentPath("contact");
      } else if (userText.includes("support") || userText.includes("help") || userText.includes("issue") || userText.includes("problem")) {
        addBotMessage(t("chatbot.responses.operationalSupport", "Can you tell me the issue type? I can guide you or connect you with a human expert."));
        setCurrentPath("support");
      } else if (userText.includes("product") || userText.includes("warehouse") || userText.includes("workflow") || userText.includes("solution")) {
        addBotMessage(t("chatbot.responses.productInfo", "We offer warehouse and workflow solutions tailored to your operations.\n\nQuick links:\n• Warehouse Solutions\n• Workflow Solutions"));
        setCurrentPath("product");
      } else {
        addBotMessage(t("chatbot.responses.fallback", "I don't have that info, but the team can follow up with you shortly. Would you like to leave your contact details or try the contact form?"));
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
              label={t("chatbot.buttons.operationalSupport", "Support")}
              onClick={handleOperationalSupport}
            />
            <QuickReply
              label={t("chatbot.buttons.scheduleDemo", "Schedule Demo")}
              onClick={handleScheduleDemo}
            />
            <QuickReply
              label={t("chatbot.buttons.intake", "Diagnostic Intake")}
              onClick={handleIntake}
            />
            <QuickReply
              label={t("chatbot.buttons.simulation", "Simulator")}
              onClick={handleSimulation}
            />
            <QuickReply
              label={t("chatbot.buttons.pricing", "Pricing")}
              onClick={handlePricing}
            />
            <QuickReply
              label={t("chatbot.buttons.contact", "Contact")}
              onClick={handleContact}
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
              label={t("chatbot.buttons.connectSupport", "Connect to Support")}
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
      case "intake":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply
              label={t("chatbot.buttons.startIntake", "Start Intake →")}
              onClick={handleStartIntake}
            />
            <QuickReply
              label={t("chatbot.buttons.backToMain", "← Back")}
              onClick={handleBackToMain}
            />
          </div>
        );
      case "pricing":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply
              label={t("chatbot.buttons.viewPricing", "View Pricing")}
              onClick={() => handleGoToSection("pricing", "View Pricing")}
            />
            <QuickReply
              label={t("chatbot.buttons.scheduleDemo", "Schedule Demo")}
              onClick={handleScheduleDemo}
            />
            <QuickReply
              label={t("chatbot.buttons.backToMain", "← Back")}
              onClick={handleBackToMain}
            />
          </div>
        );
      case "contact":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply
              label={t("chatbot.buttons.goToForm", "Go to Contact Form")}
              onClick={() => handleGoToSection("contact", "Contact Form")}
            />
            <QuickReply
              label={t("chatbot.buttons.backToMain", "← Back")}
              onClick={handleBackToMain}
            />
          </div>
        );
      case "simulation":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply
              label={t("chatbot.buttons.openSimulator", "Open Simulator →")}
              onClick={handleOpenSimulator}
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
              label={t("chatbot.buttons.goToForm", "Contact Form")}
              onClick={() => handleGoToSection("contact", "Contact Form")}
            />
            <QuickReply
              label={t("chatbot.buttons.intake", "Try Intake")}
              onClick={handleIntake}
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
