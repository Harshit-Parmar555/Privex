import React, { useState } from "react";

// Components
import { Input } from "@/components/ui/input";
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

// Assets
import { FaArrowRight } from "react-icons/fa";

const EXPIRE_OPTIONS = [
  { label: "5 minutes", value: "5m" },
  { label: "10 minutes", value: "10m" },
  { label: "15 minutes", value: "15m" },
  { label: "30 minutes", value: "30m" },
  { label: "1 hour", value: "1h" },
];

const Home = () => {
  const [secret, setSecret] = useState("");
  const [viewOnce, setViewOnce] = useState(false);
  const [expire, setExpire] = useState("");

  // Handler for sending the secret (implement API call here)
  const handleSend = () => {
    // TODO: Implement send logic
    // Example: send { secret, viewOnce, expire }
  };

  return (
    <div className="w-full h-screen bg-[#0f0f10] flex justify-center ">
      <div className="w-full max-w-3xl  flex flex-col gap-8 mt-48">
        {/* Header */}
        <div className="p-2">
          <h1 className="font-[Work_sans] text-4xl font-medium text-[#858585]">
            Welcome
          </h1>
          <h2 className="font-[Work_sans] text-4xl font-medium bg-gradient-to-r from-[#a0f0ff] via-[#d3fbe8] to-[#f2eada] text-transparent bg-clip-text">
            Share your secret privately
          </h2>
        </div>

        {/* Secret Input Card */}
        <div className="w-full min-h-44 bg-zinc-950 rounded-xl border border-zinc-800 flex flex-col justify-between gap-6 p-6 shadow-lg">
          <Input
            className="text-zinc-400 flex rounded-md border-input ring-offset-background placeholder:text-white/20 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-t-[18px] text-[16px] resize-none border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 caret-[#80FFF9] font-[Inter] overflow-auto"
            placeholder="Enter your secret here . . . ."
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />

          <div className="flex items-center justify-between gap-8">
            {/* Left: View Once Toggle & Expire Select */}
            <div className="flex items-center gap-4">
              <Toggle
                pressed={viewOnce}
                onPressedChange={setViewOnce}
                className={`px-4 py-2 font-[Inter] text-[12px] rounded-full transition-colors
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
                <SelectTrigger className="w-[180px] bg-[#1f1f1e] text-zinc-400 font-[Inter] text-[12px] rounded-full border-none">
                  <SelectValue placeholder="Select Expire Time" />
                </SelectTrigger>
                <SelectContent className="bg-[#1f1f1e] text-white border-none rounded-md shadow-lg">
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
              <FaArrowRight />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-4 ">
          {/* Left dots */}
          <div className="flex gap-4 opacity-40">
            {[...Array(7)].map((_, i) => (
              <span
                key={`left-dot-${i}`}
                className={`w-1.5 h-1.5 rounded-full bg-cyan-400`}
                style={{ opacity: i / 7 }}
              />
            ))}
          </div>

          {/* Title */}
          <h2 className="mx-4 text-xs font-[JetBrains_Mono]  text-zinc-200 whitespace-nowrap">
            Made with ❤️ HARSHIT X CODE
          </h2>

          {/* Right dots */}
          <div className="flex gap-4 opacity-40">
            {[...Array(7)].map((_, i) => (
              <span
                key={`right-dot-${i}`}
                className={`w-1.5 h-1.5 rounded-full bg-cyan-400`}
                style={{ opacity: (7 - i) / 7 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
