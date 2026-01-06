import { useState, useRef, useEffect, useCallback } from "react";
import { MapPin, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LocationAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onSelect?: (value: string) => void;
  suggestions: string[];
  placeholder?: string;
  label: string;
  required?: boolean;
  isPrefilled?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  hasError?: boolean;
}

export const LocationAutocomplete = ({
  value,
  onChange,
  onSelect,
  suggestions,
  placeholder,
  label,
  required,
  isPrefilled,
  isLoading,
  disabled,
  className,
  hasError,
}: LocationAutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter suggestions based on input
  const filteredSuggestions = value.length >= 2 ? suggestions : [];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen || filteredSuggestions.length === 0) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev < filteredSuggestions.length - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredSuggestions.length - 1
          );
          break;
        case "Enter":
          e.preventDefault();
          if (highlightedIndex >= 0) {
            const selected = filteredSuggestions[highlightedIndex];
            onChange(selected);
            onSelect?.(selected);
            setIsOpen(false);
          }
          break;
        case "Escape":
          setIsOpen(false);
          break;
      }
    },
    [isOpen, filteredSuggestions, highlightedIndex, onChange, onSelect]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleSelect = (suggestion: string) => {
    onChange(suggestion);
    onSelect?.(suggestion);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  return (
    <div className={cn("relative", className)}>
      <label className={cn(
        "text-sm font-medium block mb-1.5",
        hasError ? "text-destructive" : "text-foreground"
      )}>
        {label} {required && "*"}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={() => value.length >= 2 && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "w-full px-4 py-2.5 rounded-lg border bg-card text-foreground",
            "placeholder:text-muted-foreground focus:outline-none focus:ring-2",
            "transition-all duration-200",
            hasError 
              ? "border-destructive focus:ring-destructive/50" 
              : isPrefilled && value 
                ? "border-accent/30 bg-accent/5 focus:ring-accent/50" 
                : "border-border focus:ring-accent/50",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        />
        
        {/* Indicator icons */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {isLoading && (
            <Loader2 className="w-4 h-4 text-muted-foreground animate-spin" />
          )}
          {isPrefilled && value && !isLoading && (
            <div className="flex items-center gap-1 text-accent/70">
              <MapPin className="w-3.5 h-3.5" />
            </div>
          )}
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && filteredSuggestions.length > 0 && (
        <div
          ref={dropdownRef}
          className={cn(
            "absolute z-50 w-full mt-1 py-1 rounded-lg border border-border",
            "bg-card shadow-lg max-h-60 overflow-y-auto"
          )}
        >
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => handleSelect(suggestion)}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={cn(
                "w-full px-4 py-2 text-left text-sm transition-colors",
                "hover:bg-muted focus:bg-muted focus:outline-none",
                highlightedIndex === index && "bg-muted",
                value === suggestion && "text-accent font-medium"
              )}
            >
              <div className="flex items-center justify-between">
                <span>{suggestion}</span>
                {value === suggestion && (
                  <Check className="w-4 h-4 text-accent" />
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
