// Importing necessary modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Toggle } from "@radix-ui/react-toggle";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Loader from "@/custom/Loader";
import { Button as Btn } from "@/components/ui/moving-border";

// Assets
import { FaArrowRight } from "react-icons/fa";

// Importing Zustand store for managing secret generation
import { useSecretStore } from "@/store/useSecretStore";

// Importing toast for notifications
import toast from "react-hot-toast";

// Constants for expiration options
const EXPIRE_OPTIONS = [
  { label: "5 minutes", value: "5m" },
  { label: "10 minutes", value: "10m" },
  { label: "15 minutes", value: "15m" },
  { label: "30 minutes", value: "30m" },
  { label: "1 hour", value: "1h" },
];

// Home component for the main page
const Home = () => {
  const [secret, setSecret] = useState("");
  const [viewOnce, setViewOnce] = useState(false);
  const [expire, setExpire] = useState("");

  const { generateLink, generatingLink, generatedLink, expireAt, resetLink } =
    useSecretStore();

  const navigate = useNavigate();

  // Helper to get expireAt date string in ISO format
  const getExpireDate = (expireValue) => {
    const now = new Date();
    let ms = 0;
    if (expireValue.endsWith("m")) ms = parseInt(expireValue) * 60 * 1000;
    if (expireValue.endsWith("h")) ms = parseInt(expireValue) * 60 * 60 * 1000;
    return new Date(now.getTime() + ms).toISOString();
  };

  // Handler for sending the secret
  const handleSend = async () => {
    if (!secret.trim() || !expire) {
      toast.error("Please select an expiration time.");
      return;
    }
    if (secret.length > 1000) {
      toast.error("Secret is too long (max 1000 characters).");
      return;
    }
    const expireAt = getExpireDate(expire);
    await generateLink(secret, expireAt, viewOnce);
    // After generating, redirect to success page
    setSecret("");
    setExpire("");
    setViewOnce(false);
    navigate("/success");
  };

  return (
    <div className="w-full h-dvh bg-[#0f0f10] flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-3xl  px-4 flex flex-col gap-6">
        {/* Header */}
        <header className="p-2">
          <h1 className="text-[28px] md:text-[40px] font-[Work_sans] text-4xl font-medium text-[#858585]">
            Welcome
          </h1>
          <h2 className="text-[28px]  md:text-[40px] font-[Work_sans] text-4xl font-medium bg-gradient-to-r from-[#a0f0ff] via-[#d3fbe8] to-[#f2eada] text-transparent bg-clip-text">
            Share secret's privately
          </h2>
        </header>

        {/* Secret Input Card */}
        <Btn
          duration={8000}
          className="w-full min-h-44  bg-zinc-950 rounded-xl border border-zinc-800 flex flex-col justify-between gap-6 p-6 shadow-lg"
        >
          <Textarea
            className="text-zinc-400 max-h-36 flex font-[Inter] rounded-md border-input ring-offset-background placeholder:text-white/20 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-t-[18px] text-[14px] md:text-[16px] resize-none border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 caret-[#80FFF9] overflow-auto"
            placeholder="Enter your secret here . . . ."
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            maxLength={1000}
          />

          <div className="w-full flex items-center justify-between gap-8">
            {/* Left: View Once Toggle & Expire Select */}
            <div className="flex items-center gap-4">
              <Toggle
                pressed={viewOnce}
                onPressedChange={setViewOnce}
                className={`w-16 py-2 font-[Inter] text-[8px] md:w-20 md:text-[10px] rounded-full transition-colors cursor-pointer
                  ${
                    viewOnce
                      ? "bg-blue-800/20 text-blue-400 border border-blue-700/20"
                      : "bg-[#1f1f1e] text-zinc-400 border border-zinc-800"
                  }
                `}
                aria-label="View Once"
              >
                View Once
              </Toggle>
              <Select value={expire} onValueChange={setExpire}>
                <SelectTrigger className="w-32  bg-[#1f1f1e] text-zinc-400 font-[Inter] text-[8px] md:w-36 md:text-[10px] rounded-full border-none cursor-pointer">
                  <SelectValue placeholder="Select Expire Time" />
                </SelectTrigger>
                <SelectContent className="bg-[#090909] border-[1px] border-zinc-900 text-white rounded-md shadow-lg">
                  <SelectGroup>
                    <SelectLabel className="text-zinc-400 text-xs">
                      Expire After
                    </SelectLabel>
                    {EXPIRE_OPTIONS.map((opt) => (
                      <SelectItem
                        key={opt.value}
                        value={opt.value}
                        className="hover:bg-[#232323] text-xs text-zinc-400"
                      >
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* Right: Send Button */}
            <Button
              className={`rounded-full transition-colors px-4 py-2 flex items-center
                ${
                  secret
                    ? "bg-white hover:bg-zinc-200 text-black"
                    : "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                }
              `}
              disabled={!secret}
              onClick={handleSend}
            >
              {generatingLink ? <Loader color="black" /> : <FaArrowRight />}
            </Button>
          </div>
        </Btn>

        <footer className="flex items-center justify-center w-full mt-4">
          {/* Left dots */}
          <div className="flex gap-4 opacity-40">
            {[...Array(5)].map((_, i) => (
              <span
                key={`left-dot-${i}`}
                className={`w-1 h-1 rounded-full bg-cyan-400`}
                style={{ opacity: i / 4 }}
              />
            ))}
          </div>

          {/* Title */}
          <h2 className="mx-4 text-[10px] font-[JetBrains_Mono]  text-zinc-200 whitespace-nowrap">
            Made with ❤️ HARSHIT X CODE
          </h2>

          {/* Right dots */}
          <div className="flex gap-4 opacity-40">
            {[...Array(4)].map((_, i) => (
              <span
                key={`right-dot-${i}`}
                className={`w-1 h-1 rounded-full bg-cyan-400`}
                style={{ opacity: (4 - i) / 4 }}
              />
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
