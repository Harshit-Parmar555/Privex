// Importing necessary modules
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Components
import { Button } from "@/components/ui/button";
import Loader from "@/custom/Loader";

// Assets
import { FaArrowLeft } from "react-icons/fa";

// Importing Zustand store for managing secret retrieval
import { useSecretStore } from "@/store/useSecretStore";

// Main component for reading a secret
const ReadSecret = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();

  const { fetchingSecret, secretData, watchSecret, resetSecret } =
    useSecretStore();

  React.useEffect(() => {
    if (uuid) watchSecret(uuid);
    return () => {
      resetSecret();
    };
  }, [uuid, watchSecret, resetSecret]);

  return (
    <div className="w-full min-h-screen bg-[#0f0f10] flex items-center justify-center font-sans overflow-hidden">
      <div className="w-full max-w-xl flex flex-col gap-6 px-4">
        {/* Header */}
        <header className="px-2 mb-2 flex items-center gap-2">
          <Button
            className="rounded-full p-2 bg-[#18181b] text-zinc-400 hover:bg-zinc-900"
            onClick={() => navigate("/")}
            aria-label="Back"
          >
            <FaArrowLeft />
          </Button>
          <h2 className="font-[Work_sans] text-[24px] md:text-[30px] font-semibold bg-gradient-to-r from-[#a0f0ff] via-[#d3fbe8] to-[#f2eada] text-transparent bg-clip-text ml-2">
            Secret Message
          </h2>
        </header>

        {/* Secret Display Card */}
        <section className="w-full bg-zinc-950 rounded-2xl border border-zinc-800 flex flex-col items-center gap-7 p-6 sm:p-8 shadow-2xl">
          <div className="w-full flex flex-col items-center gap-4">
            <span className="text-zinc-400 text-xs mb-2">
              Here is your secret:
            </span>
            <div className="w-full max-h-[200px] bg-[#18181b] text-zinc-200 font-[JetBrains_Mono] px-4 sm:px-6 py-4 sm:py-6 rounded-xl border-none text-xs sm:text-sm text-left break-words shadow-inner overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
              {fetchingSecret ? (
                <div className="flex items-center justify-center min-h-[120px]">
                  <Loader color="white" />
                </div>
              ) : (
                secretData
              )}
            </div>
          </div>
        </section>

        {/* Footer Dots & Signature */}
        <div className="flex items-center justify-center w-full mt-4">
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
        </div>
      </div>
    </div>
  );
};

export default ReadSecret;
