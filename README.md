# Privex Frontend

Privex is a privacy-first web app for sharing secrets via self-destructing links. This frontend is built with **React**, **Vite**, **Tailwind CSS**, and **Zustand**, providing a modern, responsive, and user-friendly interface for secure secret sharing.

---

## 🚀 Features

- **Create Secret Links:** Instantly generate a private, self-destructing link for your secret.
- **View Once or Expire:** Choose between "view once" or set a custom expiration time.
- **Copy to Clipboard:** One-click copy with animated feedback.
- **Responsive Design:** Works beautifully on desktop and mobile.
- **Modern UI:** Built with Tailwind CSS, Radix UI, and Lucide icons.
- **State Management:** Uses Zustand for clean, scalable state logic.
- **User Feedback:** Toast notifications and animated loaders for a smooth experience.

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/)
- [React Hot Toast](https://react-hot-toast.com/)

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/privex-frontend.git
   cd privex-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory (if needed):

   ```env
   VITE_MODE= development
   VITE_BACKEND_URL= your backend url
   ```

   Adjust the API URL to match your backend deployment.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 🏗️ Project Structure

```
client/
├── src/
│   ├── components/
│   ├── custom/
│   │   └── Loader.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Success.jsx
│   │   └── ReadSecret.jsx
│   ├── store/
│   │   └── useSecretStore.js
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
└── package.json
```

---

## 🔐 Usage

1. **Create a Secret:**  
   Enter your secret, select expiration, and click "Generate".  
   Copy the generated link and share it securely.

2. **Read a Secret:**  
   Open a received link to view the secret.  
   If "view once" is enabled, the secret will self-destruct after viewing.

---

## 🧑‍💻 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'feat: add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

---

> Made with ❤️ by HARSHIT X CODE
