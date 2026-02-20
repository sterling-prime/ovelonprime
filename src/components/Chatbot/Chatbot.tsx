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
  | "support_firstName"
  | "support_lastName"
  | "support_businessName"
  | "support_email"
  | "support_details"
  | "demo"
  | "pricing"
  | "contact"
  | "simulation"
  | "compliance"
  | "fallback";

type SupportFormData = {
  firstName: string;
  lastName: string;
  businessName: string;
  businessEmail: string;
  requestDetails: string;
};

export const Chatbot = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentPath, setCurrentPath] = useState<ConversationPath>("initial");
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isSendingSupport, setIsSendingSupport] = useState(false);
  const [supportForm, setSupportForm] = useState<SupportFormData>({
    firstName: "",
    lastName: "",
    businessName: "",
    businessEmail: "",
    requestDetails: "",
  });
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
          "We help organizations navigate complex regulatory landscapes:\n\n🛡️ NIS2 Directive — Network and Information Security compliance readiness for critical infrastructure.\n\n📋 ISO 27001 — Information security management system implementation and audit preparation.\n\n🔒 SOC 2 — Service Organization Control audits (Type I & Type II) for trust services criteria.\n\n📑 Operational Governance — Policy frameworks, audit trails, and compliance dashboards for full visibility.\n\nAsk me any question about these frameworks, or explore the articles below!"
        )
      );
      setCurrentPath("compliance");
    }, 500);
  };

  const handleComplianceAI = async (question: string) => {
    addBotMessage(t("chatbot.responses.complianceThinking", "Let me look into that for you..."));
    try {
      const { data, error } = await supabase.functions.invoke("compliance-chat", {
        body: { question, language: i18n.language },
      });
      if (error) throw error;
      // Remove the "thinking" message and add the real answer
      setMessages((prev) => [...prev.slice(0, -1)]);
      addBotMessage(data?.answer || t("chatbot.responses.complianceError", "I couldn't find an answer right now. Please check our compliance articles or contact info@ovelon-prime.com."));
    } catch {
      setMessages((prev) => [...prev.slice(0, -1)]);
      addBotMessage(t("chatbot.responses.complianceError", "I couldn't find an answer right now. Please check our compliance articles or contact info@ovelon-prime.com."));
    }
    setCurrentPath("compliance");
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
    setSupportForm({ firstName: "", lastName: "", businessName: "", businessEmail: "", requestDetails: "" });
    setTimeout(() => {
      addBotMessage(t("chatbot.responses.askFirstName", "What is your first name?"));
      setCurrentPath("support_firstName");
    }, 500);
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSupportStep = async (text: string) => {
    switch (currentPath) {
      case "support_firstName":
        setSupportForm(prev => ({ ...prev, firstName: text }));
        setTimeout(() => {
          addBotMessage(t("chatbot.responses.askLastName", "And your last name?"));
          setCurrentPath("support_lastName");
        }, 300);
        break;
      case "support_lastName":
        setSupportForm(prev => ({ ...prev, lastName: text }));
        setTimeout(() => {
          addBotMessage(t("chatbot.responses.askBusinessName", "What is your company name?"));
          setCurrentPath("support_businessName");
        }, 300);
        break;
      case "support_businessName":
        setSupportForm(prev => ({ ...prev, businessName: text }));
        setTimeout(() => {
          addBotMessage(t("chatbot.responses.askEmail", "What is your business email?"));
          setCurrentPath("support_email");
        }, 300);
        break;
      case "support_email":
        if (!validateEmail(text)) {
          addBotMessage(t("chatbot.responses.invalidEmail", "Please enter a valid email address (e.g. name@company.com)"));
          return;
        }
        setSupportForm(prev => ({ ...prev, businessEmail: text }));
        setTimeout(() => {
          addBotMessage(t("chatbot.responses.askDetails", "Please describe your request or message:"));
          setCurrentPath("support_details");
        }, 300);
        break;
      case "support_details": {
        const finalForm = {
          ...supportForm,
          firstName: supportForm.firstName || text,
          requestDetails: text,
        };
        // Update state for reference
        setSupportForm(finalForm);
        setIsSendingSupport(true);
        try {
          const { data, error } = await supabase.functions.invoke("submit-contact", {
            body: finalForm,
          });
          if (error) throw error;
          addBotMessage(
            t("chatbot.responses.supportSentWithEmail", `✅ Your message has been sent successfully!\n\n📧 A confirmation email has been sent to ${finalForm.businessEmail}\n📋 Reference: ${data?.referenceId || "Pending"}\n\nOur team at info@ovelon-prime.com will review your request and get back to you shortly.`)
          );
        } catch {
          addBotMessage(
            t("chatbot.responses.supportError", "❌ Sorry, I couldn't send your message right now. Please try the contact form or email us directly at info@ovelon-prime.com.")
          );
        } finally {
          setIsSendingSupport(false);
          setCurrentPath("initial");
        }
        break;
      }
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

    // If we're in a support form step, handle it
    if (currentPath.startsWith("support_")) {
      handleSupportStep(userText);
      return;
    }

    // If we're in compliance mode, send to AI
    if (currentPath === "compliance") {
      handleComplianceAI(userText);
      return;
    }

    const lower = userText.toLowerCase();

    // Check if user is asking a compliance-related question from any context
    const complianceKeywords = ["compliance", "govern", "nis2", "nis 2", "iso", "iso27001", "iso 27001", "soc2", "soc 2", "gdpr", "audit", "certification", "directive", "annex"];
    const isComplianceQuestion = complianceKeywords.some(kw => lower.includes(kw));

    if (isComplianceQuestion) {
      handleComplianceAI(userText);
      return;
    }

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
      case "support_firstName":
      case "support_lastName":
      case "support_businessName":
      case "support_email":
      case "support_details":
        return (
          <div className="flex flex-wrap gap-2 p-3 border-t border-border/50">
            <p className="text-xs text-muted-foreground w-full text-center">
              {isSendingSupport
                ? t("chatbot.sending", "Sending...")
                : t("chatbot.typeBelow", "Type your answer below and press Enter ↵")}
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
            <p className="text-xs text-muted-foreground w-full text-center mb-1">
              {t("chatbot.complianceHint", "Ask me anything about SOC 2, ISO 27001, or NIS2 ↵")}
            </p>
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
              currentPath.startsWith("support_")
                ? currentPath === "support_email"
                  ? t("chatbot.emailPlaceholder", "name@company.com")
                  : currentPath === "support_details"
                    ? t("chatbot.supportPlaceholder", "Describe your request...")
                    : t("chatbot.inputPlaceholder", "Type your answer...")
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
