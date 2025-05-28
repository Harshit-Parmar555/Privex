import { axiosInstance } from "@/utils/axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useSecretStore = create((set) => ({
  generatingLink: false,
  generatedLink: null,
  expireAt: null,
  fetchingSecret: false,
  secretData: null,

  generateLink: async (secretText, expireAt, viewOnce) => {
    try {
      set({ generatingLink: true });
      const response = await axiosInstance.post("/secret/create-secret", {
        secretText,
        expireAt,
        viewOnce,
      });
      set({
        generatedLink: response.data.url,
        expireAt: response.data.expireAt,
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while generating the link."
      );
    } finally {
      set({ generatingLink: false });
    }
  },

  resetLink: () => set({ generatedLink: null, expireAt: null }),

  watchSecret: async (uuid) => {
    set({ fetchingSecret: true });
    try {
      const response = await axiosInstance.get(`/secret/get-secret/${uuid}`);
      set({ secretData: response.data.secretText });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while fetching the secret."
      );
    } finally {
      set({ fetchingSecret: false });
    }
  },

  resetSecret: () => set({ secretData: null }),
}));
