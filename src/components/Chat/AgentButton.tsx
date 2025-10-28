import { useState, useEffect } from "react";
import AnimatedBgCircle from "./AnimatedBgCircle";
import AnimatedBgRectangle from "./AnimatedBgRectangle";
import Typo from "../Typo";

export interface AgentButtonProps {
  /** Callback when agent button is clicked */
  onOpenChat: () => void;
  /** Whether there's a new notification */
  hasNotification?: boolean;
  /** The notification message to display */
  notificationMessage?: string;
  /** Logo source for the agent */
  logoSrc?: string;
  /** Alt text for the logo */
  logoAlt?: string;
  /** Custom animation colors */
  animationColors?: string[];
  /** Whether the button is disabled (greyscale, no animations) */
  disabled?: boolean;
}

const AgentButton = ({
  onOpenChat,
  hasNotification = false,
  notificationMessage = "",
  logoSrc,
  logoAlt = "Agent",
  animationColors = ["#7DADB9", "#3864F5", "#55468D", "#479A8D"],
  disabled = false,
}: AgentButtonProps) => {
  const [showText, setShowText] = useState(false);
  const [delayedHasNotification, setDelayedHasNotification] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 250);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hasNotification) {
      const textTimer = setTimeout(() => setShowText(true), 500);
      setDelayedHasNotification(true);
      return () => clearTimeout(textTimer);
    } else {
      const textHideTimer = setTimeout(() => setShowText(false), 250);
      const backgroundTimer = setTimeout(
        () => setDelayedHasNotification(false),
        350
      );
      return () => {
        clearTimeout(textHideTimer);
        clearTimeout(backgroundTimer);
      };
    }
  }, [hasNotification]);

  const circleAnimations = [
    { delay: 0, style: "left-0 top-0" },
    { delay: 0.75, style: "right-0 top-0" },
    { delay: 1, style: "bottom-0 left-0" },
    { delay: 0.25, style: "bottom-0 right-0" },
  ];
  const rectAnimations = [
    { delay: 0, style: "left-0 top-0" },
    { delay: 0.75, style: "right-0 top-0" },
    { delay: 1, style: "bottom-0 left-0" },
    { delay: 0.25, style: "bottom-0 right-0" },
  ];

  return (
    <div
      className={`flex justify-end items-center fixed bottom-3 right-8 z-40 h-24 transition-all duration-1000 ease-in-out ${
        delayedHasNotification ? "w-[432px]" : "w-24"
      } ${isMounted ? "opacity-100" : "opacity-0"}`}
      style={{
        filter: disabled ? "grayscale(100%)" : "grayscale(0%)",
        opacity: disabled ? 0.3 : 1,
        transition: "filter 1s ease-in-out, opacity 1s ease-in-out",
      }}
    >
      {circleAnimations.map((circle, index) => (
        <div
          key={`circle-${index}`}
          className={`absolute ${circle.style} h-20 min-w-20 w-20 overflow-visible flex justify-between transition-opacity duration-1000 ease-in-out`}
          style={{ opacity: disabled ? 0 : 1 }}
        >
          <AnimatedBgCircle
            colors={animationColors}
            delay={circle.delay}
            stretch={delayedHasNotification}
          />
        </div>
      ))}
      {rectAnimations.map((rect, index) => (
        <div
          key={`rect-${index}`}
          className={`absolute ${rect.style} h-20 transition-all ease-in-out ${
            delayedHasNotification
              ? "w-[324px] px-0"
              : "w-20 px-10"
          } overflow-visible flex justify-between`}
          style={{
            opacity: disabled ? 0 : delayedHasNotification ? 1 : 0,
            transitionDuration: "1s",
          }}
        >
          <AnimatedBgRectangle colors={animationColors} delay={rect.delay} />
        </div>
      ))}
      {isMounted && (
        <button
          onClick={onOpenChat}
          disabled={disabled}
          className={`flex flex-row-reverse items-center gap-1.5 fixed p-3 rounded-full shadow-md h-16 mr-4 transition-all duration-600 ease-in-out border-2 border-[var(--border)] ${
            delayedHasNotification ? "w-[400px]" : "w-16"
          } ${disabled ? "cursor-default" : "cursor-pointer"}`}
          style={{
            background: "var(--chat-button-gradient)",
          }}
          aria-label={hasNotification ? notificationMessage : "Open chat"}
        >
          {logoSrc && (
            <img
              src={logoSrc}
              alt={logoAlt}
              className="w-10 h-10 object-contain"
            />
          )}
          <Typo
            variant="label-lg"
            className={`pl-2 w-80 line-clamp-2 overflow-hidden text-ellipsis text-left transition-opacity duration-300 ${
              showText ? "opacity-100" : "opacity-0"
            }`}
          >
            {notificationMessage}
          </Typo>
        </button>
      )}
    </div>
  );
};

export default AgentButton;

