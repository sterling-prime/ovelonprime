import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from "./ChatMessage";
import { QuickReply } from "./QuickReply";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import brooksAvatar from "@/assets/brooks-avatar.png";

type Message = {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

type ConversationPath =
  | "initial"
  | "product"
  | "support"
  | "support_message"
  | "demo"
  | "pricing"
  | "contact"
  | "simulation"
  | "compliance"
  | "fallback";

export const Chatbot = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentPath, setCurrentPath] = useState<ConversationPath>("initial");
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isSendingSupport, setIsSendingSupport] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isEnglish = i18n.language === "en";
  const priceDisplay = isEnglish ? "$4,999" : "€4.999";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const greetingText = t(
    "chatbot.greeting",
    "Hi! I'm Brooks. How can I help you today?\n\nI can assist with Product Info, Operational Support, Schedule a Demo, try our Simulator, Compliance & Governance, or answer questions about Pricing."
  );

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      const greeting: Message = {
        id: crypto.randomUUID(),
        text: greetingText,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([greeting]);
      setHasGreeted(true);
      setCurrentPath("initial");
    }
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    if (hasGreeted && isOpen) {
      setMessages((prev) => {
        if (prev.length > 0 && prev[0].isBot) {
          return [{ ...prev[0], text: greetingText }, ...prev.slice(1)];
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

  // ── Handlers ──

  const handleProductInfo = () => {
    addUserMessage(t("chatbot.buttons.productInfo", "Product Info"));
    setTimeout(() => {
      addBotMessage(
        t(
          "chatbot.responses.productInfo",
          "Ovelon Prime provides end-to-end operational management solutions:\n\n🏭 Facility & Warehouse Management — Real-time inventory tracking, space optimization, and automated workflows for warehouses and distribution centers.\n\n⚙️ Maintenance & Repair Operations — Predictive maintenance scheduling, work order management, and asset lifecycle tracking.\n\n📦 Supply Chain & Logistics — Demand forecasting, procurement automation, and supply chain visibility across your entire network.\n\n🔧 Workflow Automation — Custom process orchestration, task routing, and operational dashboards for full visibility.\n\nWant to explore a specific area or see a demo?"
        )
      );
      setCurrentPath("product");
    }, 500);
  };

  const handleOperationalSupport = () => {
    addUserMessage(t("chatbot.buttons.operationalSupport", "Operational Support"));
    setTimeout(() => {
      addBotMessage(
        t(
          "chatbot.responses.operationalSupport",
          "I can help connect you with our support team. Please type your issue or question below and we'll send it directly to our team. They'll follow up with you shortly."
        )
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

  const handlePricing = () => {
    addUserMessage(t("chatbot.buttons.pricing", "Pricing"));
    setTimeout(() => {
      addBotMessage(
        t(
          "chatbot.responses.pricing",
          `We offer two engagement levels:\n\n📋 Focused Program — Starting at ${priceDisplay}/month. Includes targeted operational optimization with dedicated support.\n\n🏢 Enterprise Program — Custom pricing for full-scale transformation with dedicated teams.\n\nYou can take our Engagement Assessment or talk directly to an expert.`
        )
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

  const handleCompliance = () => {
    addUserMessage(t("chatbot.buttons.compliance", "Compliance & Governance"));
    setTimeout(() => {
      addBotMessage(
        t(
          "chatbot.responses.compliance",
          "We help organizations navigate complex regulatory landscapes:\n\n🛡️ NIS2 Directive — Network and Information Security compliance readiness for critical infrastructure.\n\n📋 ISO 27001 — Information security management system implementation and audit preparation.\n\n📑 Operational Governance — Policy frameworks, audit trails, and compliance dashboards for full visibility.\n\nWant to learn more or speak with a compliance expert?"
        )
      );
      setCurrentPath("compliance");
    }, 500);
  };

  const handleOpenSimulator = () => {
    window.dispatchEvent(new CustomEvent("open-simulator"));
    addUserMessage(t("chatbot.buttons.openSimulator", "Open Simulator"));
    setTimeout(() => {
      addBotMessage(t("chatbot.responses.simulatorOpened", "I've opened the Project Simulator for you. Follow the steps to see your potential improvements!"));
    }, 500);
  };

  const handleWriteSupportMessage = () => {
    addUserMessage(t("chatbot.buttons.writeMessage", "Write a Message"));
    setTimeout(() => {
      addBotMessage(
        t("chatbot.responses.writeSupportMessage", "Please provide the following details so our team can assist you:\n\n• First Name\n• Last Name\n• Company Name\n• Business Email\n• Your message\n\nType everything below and press Enter.")
      );
      setCurrentPath("support_message");
    }, 500);
  };

  const parseSupportMessage = (text: string) => {
    const lines = text.split(/\n/).map(l => l.trim()).filter(Boolean);
    const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
    
    if (lines.length >= 3 && emailMatch) {
      return {
        firstName: lines[0].replace(/^(first\s*name[:\-]?\s*)/i, ""),
        lastName: lines.length >= 4 ? lines[1].replace(/^(last\s*name[:\-]?\s*)/i, "") : "",
        businessName: lines.length >= 5 ? lines[2].replace(/^(company[:\-]?\s*|business[:\-]?\s*)/i, "") : "",
        businessEmail: emailMatch[0],
        requestDetails: lines.slice(lines.indexOf(lines.find(l => l.includes(emailMatch![0]))!) + 1).join("\n") || text,
      };
    }

    return {
      firstName: "Brooks Chat",
      lastName: "Support Request",
      businessName: "Via Chatbot",
      businessEmail: "chatbot@ovelon-prime.com",
      requestDetails: text,
    };
  };

  const handleSendSupportMessage = async (text: string) => {
    if (isSendingSupport) return;
    setIsSendingSupport(true);

    try {
      const parsed = parseSupportMessage(text);
      
      const { data, error } = await supabase.functions.invoke("submit-contact", {
        body: parsed,
      });

      if (error) throw error;

      const hasUserEmail = parsed.businessEmail !== "chatbot@ovelon-prime.com";
      addBotMessage(
        hasUserEmail
          ? t("chatbot.responses.supportSentWithEmail", `✅ Your message has been sent successfully!\n\n📧 A confirmation email has been sent to ${parsed.businessEmail}\n📋 Reference: ${data?.referenceId || "Pending"}\n\nOur team at info@ovelon-prime.com will review your request and get back to you shortly.`)
          : t("chatbot.responses.supportSent", "✅ Your message has been sent to our support team at info@ovelon-prime.com. They'll get back to you shortly!")
      );
    } catch {
      addBotMessage(
        t("chatbot.responses.supportError", "❌ Sorry, I couldn't send your message right now. Please try the contact form or email us directly at info@ovelon-prime.com.")
      );
    } finally {
      setIsSendingSupport(false);
      setCurrentPath("initial");
    }
  };

  const handleGoToContact = () => {
    addUserMessage(t("chatbot.buttons.goToForm", "Go to Contact Form"));
    setIsOpen(false);
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookDemo = () => {
    window.dispatchEvent(new CustomEvent("open-booking-modal"));
    addUserMessage(t("chatbot.buttons.bookDemo", "Book with us"));
    setTimeout(() => {
      addBotMessage(t("chatbot.responses.bookingOpened", "I've opened our booking calendar for you. Pick a time that works best!"));
    }, 500);
  };

  const handleOpenTypeform = () => {
    window.dispatchEvent(new CustomEvent("open-typeform-modal"));
    addUserMessage(t("chatbot.buttons.engagementAssessment", "Engagement Assessment"));
    setTimeout(() => {
      addBotMessage(t("chatbot.responses.typeformOpened", "I've opened our Engagement Assessment for you. Complete it to receive a tailored recommendation!"));
    }, 500);
  };

  const handleOpenEnterprise = () => {
    window.dispatchEvent(new CustomEvent("open-enterprise-booking"));
    addUserMessage(t("chatbot.buttons.talkToExpert", "Talk to Expert"));
    setTimeout(() => {
      addBotMessage(t("chatbot.responses.enterpriseOpened", "I've opened the Enterprise booking calendar. Pick a time to speak with our team!"));
    }, 500);
  };

  const handleGoToSection = (sectionId: string, label: string) => {
    addUserMessage(label);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleBackToMain = () => {
    addBotMessage(t("chatbot.responses.backToMain", "No problem! What else can I help you with?"));
    setCurrentPath("initial");
  };

  const handleUserInput = () => {
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    addUserMessage(userText);
    setInputValue("");

    // If we're in support_message mode, send the message to support
    if (currentPath === "support_message") {
      handleSendSupportMessage(userText);
      return;
    }

    const lower = userText.toLowerCase();

    setTimeout(() => {
      if (lower.includes("demo") || lower.includes("book") || lower.includes("schedule")) {
        addBotMessage(t("chatbot.responses.scheduleDemo", "I can schedule a demo for you. Click the button below to pick a time that works for you!"));
        setCurrentPath("demo");
      } else if (lower.includes("simulat") || lower.includes("project") || lower.includes("try")) {
        addBotMessage(t("chatbot.responses.simulation", "Our Project Simulator helps you visualize potential improvements. Want to try it?"));
        setCurrentPath("simulation");
      } else if (lower.includes("price") || lower.includes("cost") || lower.includes("pricing")) {
        addBotMessage(t("chatbot.responses.pricing", `Our platform starts at ${priceDisplay}/month. Want to see details or schedule a call?`));
        setCurrentPath("pricing");
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("reach") || lower.includes("form")) {
        addBotMessage(t("chatbot.responses.contact", "You can reach us at info@ovelon-prime.com or use our contact form. Want me to take you there?"));
        setCurrentPath("contact");
      } else if (lower.includes("compliance") || lower.includes("govern") || lower.includes("nis2") || lower.includes("iso")) {
        handleCompliance();
      } else if (lower.includes("support") || lower.includes("help") || lower.includes("issue") || lower.includes("problem")) {
        addBotMessage(t("chatbot.responses.operationalSupport", "I can help connect you with our support team. Please type your issue below or use the buttons."));
        setCurrentPath("support");
      } else if (lower.includes("product") || lower.includes("warehouse") || lower.includes("workflow") || lower.includes("solution")) {
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
            <QuickReply label={t("chatbot.buttons.productInfo", "Product Info")} onClick={handleProductInfo} />
            <QuickReply label={t("chatbot.buttons.operationalSupport", "Support")} onClick={handleOperationalSupport} />
            <QuickReply label={t("chatbot.buttons.scheduleDemo", "Schedule Demo")} onClick={handleScheduleDemo} />
            <QuickReply label={t("chatbot.buttons.simulation", "Simulator")} onClick={handleSimulation} />
            <QuickReply label={t("chatbot.buttons.compliance", "Compliance")} onClick={handleCompliance} />
            <QuickReply label={t("chatbot.buttons.pricing", "Pricing")} onClick={handlePricing} />
            <QuickReply label={t("chatbot.buttons.contact", "Contact")} onClick={handleContact} />
          </div>
        );
      case "product":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply label={t("chatbot.buttons.viewServices", "View Services")} onClick={() => handleGoToSection("services", "View Services")} />
            <QuickReply label={t("chatbot.buttons.scheduleDemo", "Schedule Demo")} onClick={handleScheduleDemo} />
            <QuickReply label={t("chatbot.buttons.engagementAssessment", "Assessment")} onClick={handleOpenTypeform} />
            <QuickReply label={t("chatbot.buttons.backToMain", "← Back")} onClick={handleBackToMain} />
          </div>
        );
      case "support":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply label={t("chatbot.buttons.writeMessage", "Write a Message")} onClick={handleWriteSupportMessage} />
            <QuickReply label={t("chatbot.buttons.goToForm", "Contact Form")} onClick={handleGoToContact} />
            <QuickReply label={t("chatbot.buttons.backToMain", "← Back")} onClick={handleBackToMain} />
          </div>
        );
      case "support_message":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <p className="text-xs text-muted-foreground w-full text-center">
              {isSendingSupport
                ? t("chatbot.sending", "Sending...")
                : t("chatbot.typeBelow", "Type your message below and press Enter ↵")}
            </p>
            <QuickReply label={t("chatbot.buttons.backToMain", "← Back")} onClick={handleBackToMain} />
          </div>
        );
      case "demo":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply label={t("chatbot.buttons.bookDemo", "Book with us")} onClick={handleBookDemo} />
            <QuickReply label={t("chatbot.buttons.backToMain", "← Back")} onClick={handleBackToMain} />
          </div>
        );
      case "pricing":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply label={t("chatbot.buttons.engagementAssessment", "Engagement Assessment")} onClick={handleOpenTypeform} />
            <QuickReply label={t("chatbot.buttons.talkToExpert", "Talk to Expert")} onClick={handleOpenEnterprise} />
            <QuickReply label={t("chatbot.buttons.viewPricing", "View Pricing")} onClick={() => handleGoToSection("pricing", "View Pricing")} />
            <QuickReply label={t("chatbot.buttons.backToMain", "← Back")} onClick={handleBackToMain} />
          </div>
        );
      case "contact":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply label={t("chatbot.buttons.goToForm", "Go to Contact Form")} onClick={handleGoToContact} />
            <QuickReply label={t("chatbot.buttons.backToMain", "← Back")} onClick={handleBackToMain} />
          </div>
        );
      case "simulation":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply label={t("chatbot.buttons.openSimulator", "Open Simulator →")} onClick={handleOpenSimulator} />
            <QuickReply label={t("chatbot.buttons.backToMain", "← Back")} onClick={handleBackToMain} />
          </div>
        );
      case "compliance":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply label={t("chatbot.buttons.viewCompliance", "View Articles")} onClick={() => handleGoToSection("compliance-blog", "Compliance Articles")} />
            <QuickReply label={t("chatbot.buttons.talkToExpert", "Talk to Expert")} onClick={handleOpenEnterprise} />
            <QuickReply label={t("chatbot.buttons.backToMain", "← Back")} onClick={handleBackToMain} />
          </div>
        );
      case "fallback":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <QuickReply label={t("chatbot.buttons.goToForm", "Contact Form")} onClick={handleGoToContact} />
            <QuickReply label={t("chatbot.buttons.backToMain", "← Back")} onClick={handleBackToMain} />
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
          isOpen ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
          <div className="relative">
            <img src={brooksAvatar} alt="Brooks" className="w-10 h-10 rounded-full object-cover border-2 border-primary-foreground/30" />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-primary rounded-full" />
          </div>
          <div>
            <h3 className="font-semibold">Brooks</h3>
            <p className="text-xs opacity-80 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block" />
              {t("chatbot.subtitle", "Online · Ovelon Prime Assistant")}
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[320px] overflow-y-auto p-4 bg-background">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg.text} isBot={msg.isBot} timestamp={msg.timestamp} />
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
            placeholder={
              currentPath === "support_message"
                ? t("chatbot.supportPlaceholder", "Describe your issue + your email...")
                : t("chatbot.inputPlaceholder", "Type a message...")
            }
            className="flex-1 text-sm"
            disabled={isSendingSupport}
          />
          <Button size="icon" onClick={handleUserInput} disabled={!inputValue.trim() || isSendingSupport} className="shrink-0">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
};
