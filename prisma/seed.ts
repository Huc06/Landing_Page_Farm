import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create categories
  const categories = [
    { name: "Announcement", slug: "announcement", color: "#00ff00" },
    { name: "Guide", slug: "guide", color: "#00ffff" },
    { name: "Feature", slug: "feature", color: "#ff00ff" },
    { name: "Tutorial", slug: "tutorial", color: "#ffff00" },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  console.log("✅ Categories created");

  // Create a default user for posts
  const defaultUser = await prisma.user.upsert({
    where: { email: "team@overguild.com" },
    update: {},
    create: {
      email: "team@overguild.com",
      name: "OverGuild Team",
      password: "not-used", // Will implement auth later
      role: "ADMIN",
    },
  });

  console.log("✅ Default user created");

  // Create sample posts
  const samplePosts = [
    {
      title: "Welcome to OverGuild: The Future of Web3 Collaboration",
      slug: "welcome-to-overguild",
      excerpt:
        "Discover how OverGuild is revolutionizing the way builders connect, contribute, and earn in the Web3 ecosystem.",
      content: `# Welcome to OverGuild

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

Stay tuned for more updates, and welcome to the guild!`,
      category: "Announcement",
      readTime: "5 min",
      published: true,
      publishedAt: new Date("2026-03-01"),
      authorId: defaultUser.id,
      tags: ["announcement", "web3", "collaboration"],
    },
    {
      title: "Season 1 is Live: Your Guide to Getting Started",
      slug: "season-1-guide",
      excerpt:
        "Everything you need to know about participating in OverGuild Season 1 and maximizing your contributions.",
      content: `# Season 1 Guide

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

Ready to start your journey? The portal is open!`,
      category: "Guide",
      readTime: "8 min",
      published: true,
      publishedAt: new Date("2026-02-28"),
      authorId: defaultUser.id,
      tags: ["guide", "season-1", "tutorial"],
    },
    {
      title: "Meet-to-Earn: How Networking Becomes Your Farm",
      slug: "meet-to-earn-explained",
      excerpt:
        "Learn how OverGuild tracks your IRL meetups and hackathon contributions on-chain.",
      content: `# Meet-to-Earn Explained

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

The future of networking is here. Start farming today!`,
      category: "Feature",
      readTime: "6 min",
      published: true,
      publishedAt: new Date("2026-02-25"),
      authorId: defaultUser.id,
      tags: ["feature", "meet-to-earn", "networking"],
    },
  ];

  for (const post of samplePosts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
  }

  console.log("✅ Sample posts created");
  console.log("\n🎉 Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
