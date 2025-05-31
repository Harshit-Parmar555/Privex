// Importing necessary modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Button } from "@/components/ui/button";

// Assets
import { FaCopy, FaRedo, FaArrowLeft, FaCheck } from "react-icons/fa";

// Importing Zustand store for managing secret generation
import { useSecretStore } from "@/store/useSecretStore";

// Main Success component
const Success = ({}) => {
  const [copied, setCopied] = useState(false);

  const { generatedLink, resetLink, expireAt } = useSecretStore();

  const navigate = useNavigate();

  // Format expiration note
  const formatExpireNote = (expireAt) => {
    const date = new Date(expireAt);
    return `This link will expire on ${date.toLocaleString()}`;
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  React.useEffect(() => {
    if (!generatedLink) {
      navigate("/");
    }
  }, [generatedLink, navigate]);

  return (
    <div className="w-full min-h-screen bg-[#0f0f10] flex items-center justify-center font-sans overflow-hidden">
      <div className="w-full max-w-xl px-4 flex flex-col gap-6">
        <header className="px-2 mb-2 flex items-center gap-2">
          <Button
            className="rounded-full p-2 bg-[#18181b] text-zinc-400 hover:bg-zinc-900"
            onClick={() => navigate("/")}
            aria-label="Back"
          >
            <FaArrowLeft />
          </Button>
          <h2 className="font-[Work_sans] text-[24px] md:text-[30px] font-semibold bg-gradient-to-r from-[#a0f0ff] via-[#d3fbe8] to-[#f2eada] text-transparent bg-clip-text ml-2">
            Your Secret Link is Ready!
          </h2>
        </header>
        {/* Success Card */}
        <section className="w-full bg-zinc-950 rounded-2xl border border-zinc-800 flex flex-col items-center gap-7 p-8 shadow-2xl">
          <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full flex flex-col items-center gap-2">
              <span className="text-zinc-400 text-xs">Share this link:</span>
              <div className="flex items-center w-full gap-2 bg-[#18181b] rounded-lg border border-zinc-800">
                <input
                  className="w-full bg-[#18181b] text-zinc-200 px-4 py-2 rounded-lg border-none font-[Inter] text-sm outline-none"
                  value={generatedLink}
                  readOnly
                />
                <Button
                  onClick={handleCopy}
                  className={`rounded-md px-3 py-2 flex items-center gap-2 font-[Inter] text-sm shadow-md
                    ${copied ? " text-green-400" : " text-white/40 "}
                  `}
                  aria-label={copied ? "Copied" : "Copy link"}
                >
                  {copied ? <FaCheck className="animate-scale" /> : <FaCopy />}
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
          className="w-full rounded-md px-5 py-6 flex items-center justify-center gap-2 font-[Inter] text-xs text-zinc-200 bg-zinc-900  shadow-lg"
          onClick={() => {
            resetLink();
            navigate("/");
          }}
        >
      
          Generate One More Link
        </Button>
      </div>
    </div>
  );
};

export default Success;
