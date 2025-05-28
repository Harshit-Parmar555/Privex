import React from "react";
import { Button } from "@/components/ui/button";
import { FaCopy, FaRedo } from "react-icons/fa";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Success = ({}) => {
  const [copied, setCopied] = useState(false);

  const link = "https://app.emergent.sh/";
  const expireAt = "2023-10-31T12:00:00Z"; // Example expiration date

  const navigate = useNavigate();

  // Format expiration note
  const formatExpireNote = (expireAt) => {
    const date = new Date(expireAt);
    return `This link will expire on ${date.toLocaleString()}`;
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full min-h-screen bg-[#0f0f10] flex items-center justify-center font-sans">
      <div className="w-full max-w-xl flex flex-col gap-6">
        {/* Success Card */}
        <section className="w-full bg-zinc-950 rounded-2xl border border-zinc-800 flex flex-col items-center gap-7 p-8 shadow-2xl">
          <h2 className="font-[Work_sans] text-2xl font-semibold bg-gradient-to-r from-[#a0f0ff] via-[#d3fbe8] to-[#f2eada] text-transparent bg-clip-text mb-2">
            Your secret link is ready!
          </h2>
          <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full flex flex-col items-center gap-2">
              <span className="text-zinc-400 text-xs">Share this link:</span>
              <div className="flex items-center w-full gap-2 bg-[#18181b] rounded-lg border border-zinc-800">
                <input
                  className="w-full bg-[#18181b] text-zinc-200 px-4 py-2 rounded-lg border-none font-[Inter] text-sm outline-none"
                  value={link}
                  readOnly
                />
                <Button
                  onClick={handleCopy}
                  className={`rounded-md px-3 py-2 flex items-center gap-2 font-[Inter] text-sm shadow-md
                    ${copied ? " text-blue-200" : " text-white/40 "}
                  `}
                >
                  <FaCopy />
                </Button>
              </div>
            </div>
            <div className="text-xs text-zinc-400 mt-2 text-center">
              {formatExpireNote(expireAt)}
            </div>
          </div>
        </section>

        {/* Generate New Link Button */}
        <Button
          className="w-full rounded-md px-5 py-3 flex items-center justify-center gap-2 font-[Inter] text-sm to-[#f2eada] bg-white text-black shadow-lg"
          onClick={() => navigate("/")}
        >
          <FaRedo />
          Generate One More Link
        </Button>
      </div>
    </div>
  );
};

export default Success;
