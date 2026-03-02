import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

interface BlogPostData {
  id: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

const blogPostsData: Record<string, BlogPostData> = {
  "1": {
    id: "1",
    title: "Welcome to OverGuild: The Future of Web3 Collaboration",
    content: `
# Welcome to OverGuild

OverGuild is revolutionizing how builders connect, contribute, and earn in the Web3 ecosystem. We're creating a Meet-to-Earn platform where your networking and contributions are tracked on-chain.

## What is OverGuild?

OverGuild is the ultimate quest board for Web3 builders. Think of it as a gamified ecosystem where:

- **Connect**: Meet fellow builders at IRL events and online communities
- **Contribute**: Participate in hackathons, workshops, and collaborative projects
- **Conquer**: Earn rewards and level up your reputation on-chain

## The Vision

We believe that the future of work is collaborative, decentralized, and rewarding. OverGuild transforms traditional networking into a legendary farm simulation where every interaction counts.

## Getting Started

1. Join our waitlist to get early access
2. Connect with The Valley platform
3. Start attending events and contributing to projects
4. Watch your on-chain reputation grow

## What's Next?

Season 1 is now live on The Valley. This is your chance to be among the first builders to shape the future of Web3 collaboration.

Stay tuned for more updates, and welcome to the guild!
    `,
    date: "2026-03-01",
    readTime: "5 min",
    category: "Announcement",
    author: "OverGuild Team",
  },
  "2": {
    id: "2",
    title: "Season 1 is Live: Your Guide to Getting Started",
    content: `
# Season 1 Guide

Season 1 of OverGuild is officially live! Here's everything you need to know to maximize your participation.

## How to Participate

### Step 1: Access The Valley
Visit [The Valley](https://www.the-valley.xyz/) and connect your wallet.

### Step 2: Complete Your Profile
Set up your builder profile with your skills, interests, and Web3 experience.

### Step 3: Join Quests
Browse available quests and start contributing to blockchain foundations.

## Quest Types

- **IRL Meetups**: Attend local Web3 events
- **Hackathons**: Build and ship projects
- **Workshops**: Learn and teach new skills
- **Community Contributions**: Help grow the ecosystem

## Rewards System

Your contributions are tracked on-chain and converted into:
- Reputation points
- Achievement badges
- Exclusive access to future opportunities

## Tips for Success

1. Be consistent - regular participation matters
2. Quality over quantity - meaningful contributions are rewarded
3. Network actively - connections are valuable
4. Document your work - make your contributions visible

Ready to start your journey? The portal is open!
    `,
    date: "2026-02-28",
    readTime: "8 min",
    category: "Guide",
    author: "OverGuild Team",
  },
  "3": {
    id: "3",
    title: "Meet-to-Earn: How Networking Becomes Your Farm",
    content: `
# Meet-to-Earn Explained

OverGuild introduces a revolutionary concept: Meet-to-Earn. Let's explore how your networking activities become valuable on-chain assets.

## The Concept

Traditional networking is valuable but hard to quantify. OverGuild changes this by:

1. **Tracking Interactions**: Every meetup, collaboration, and contribution is recorded
2. **On-Chain Verification**: Your activities are verified and stored on the blockchain
3. **Reputation Building**: Your network becomes your verifiable reputation

## How It Works

### IRL Events
Attend Web3 meetups, conferences, and hackathons. Check in using The Valley platform to record your participation.

### Online Contributions
Participate in online workshops, code reviews, and community discussions. Your contributions are automatically tracked.

### Collaborative Projects
Work with other builders on real projects. Your role and impact are documented on-chain.

## The Farm Simulation

Think of your network as a farm:
- **Seeds**: Initial connections and introductions
- **Growth**: Nurturing relationships through collaboration
- **Harvest**: Earning rewards from your established network

## Benefits

- **Verifiable Reputation**: Your network history is transparent and trustworthy
- **Passive Opportunities**: Strong reputation attracts new opportunities
- **Community Recognition**: Stand out in the Web3 ecosystem

## Getting Started

1. Join OverGuild and complete your profile
2. Attend your first event or join an online quest
3. Connect with other builders
4. Watch your farm grow!

The future of networking is here. Start farming today!
    `,
    date: "2026-02-25",
    readTime: "6 min",
    category: "Feature",
    author: "OverGuild Team",
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPostsData[id] : null;

  if (!post) {
    return (
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden scanlines">
        <Navbar />
        <div className="relative pt-24 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link to="/blog" className="btn-pixel inline-block">
              Back to Blog
            </Link>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden scanlines">
      <Navbar />

      <article className="relative pt-24 pb-20">
        <div className="absolute inset-0 bg-grid opacity-10" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Blog</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-4">
              <span className="font-pixel text-[8px] text-primary">
                {post.category.toUpperCase()}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} read
              </span>
              <span>By {post.author}</span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 hover:text-primary transition-colors ml-auto"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="card-pixel p-8 md:p-12">
              {post.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("# ")) {
                  return (
                    <h1
                      key={index}
                      className="text-3xl font-bold mb-6 text-primary"
                    >
                      {paragraph.replace("# ", "")}
                    </h1>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <li key={index} className="ml-6 mb-2">
                      {paragraph.replace("- ", "")}
                    </li>
                  );
                }
                if (paragraph.match(/^\d+\. /)) {
                  return (
                    <li key={index} className="ml-6 mb-2 list-decimal">
                      {paragraph.replace(/^\d+\. /, "")}
                    </li>
                  );
                }
                if (paragraph.trim() === "") {
                  return <br key={index} />;
                }
                return (
                  <p
                    key={index}
                    className="mb-4 leading-relaxed text-foreground/90"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="card-pixel p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
              <p className="text-muted-foreground mb-6">
                Start your journey with OverGuild today.
              </p>
              <Link to="/" className="btn-pixel inline-block">
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <FooterSection />
    </div>
  );
};

export default BlogPost;
