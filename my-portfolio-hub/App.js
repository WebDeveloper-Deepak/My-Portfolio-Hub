import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Moon, Sun, FileDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

function App() {
  const [theme, setTheme] = useState("light");
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("/posts/mastering-framer-motion.md")
      .then(res => res.text())
      .then(text => {
        const { content } = matter(text);
        setPost(content);
      });
  }, []);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="p-4 shadow-md sticky top-0 z-50 bg-inherit flex justify-between items-center">
        <motion.h1 className="text-3xl font-bold" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          My Portfolio Hub
        </motion.h1>
        <Button variant="ghost" onClick={toggleTheme}>
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </Button>
      </header>

      <main className="p-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Blog</h2>
          <div className="prose">
            {post ? <ReactMarkdown>{post}</ReactMarkdown> : "Loading..."}
          </div>
        </section>
      </main>

      <footer className="text-center text-sm pt-10 text-muted-foreground">
        © {new Date().getFullYear()} My Portfolio Hub — Built with 💖 by Big Daddy
      </footer>
    </div>
  );
}

export default App;
