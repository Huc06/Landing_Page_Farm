import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Welcome to OverGuild: The Future of Web3 Collaboration",
    excerpt:
      "Discover how OverGuild is revolutionizing the way builders connect, contribute, and earn in the Web3 ecosystem.",
    date: "2026-03-01",
    readTime: "5 min",
    category: "Announcement",
  },
  {
    id: "2",
    title: "Season 1 is Live: Your Guide to Getting Started",
    excerpt:
      "Everything you need to know about participating in OverGuild Season 1 and maximizing your contributions.",
    date: "2026-02-28",
    readTime: "8 min",
    category: "Guide",
  },
  {
    id: "3",
    title: "Meet-to-Earn: How Networking Becomes Your Farm",
    excerpt:
      "Learn how OverGuild tracks your IRL meetups and hackathon contributions on-chain.",
    date: "2026-02-25",
    readTime: "6 min",
    category: "Feature",
  },
];

const Blog = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden scanlines">
      <Navbar />

      <main className="relative pt-24 pb-20">
        <div className="absolute inset-0 bg-grid opacity-10" />

        <div className="relative z-10 container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-glow-cyan text-primary">BLOG</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Latest updates, guides, and insights from the OverGuild ecosystem.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="card-pixel h-full overflow-hidden hover:glow-border transition-all duration-300 group">
                    {/* Image placeholder */}
                    <div className="relative aspect-video bg-surface-darker overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-pixel text-xs text-primary/50">
                          {post.category.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Empty State for more posts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground font-pixel text-xs">
              MORE QUESTS COMING SOON...
            </p>
          </motion.div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Blog;
