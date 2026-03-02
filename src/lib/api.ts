const API_URL = import.meta.env.VITE_API_URL || "";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  published: boolean;
  publishedAt: string | null;
  author: {
    name: string | null;
    email: string;
  };
  image?: string | null;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface BlogListResponse {
  posts: BlogPost[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const blogApi = {
  async getPosts(params?: {
    page?: number;
    limit?: number;
    category?: string;
  }): Promise<BlogListResponse> {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set("page", params.page.toString());
    if (params?.limit) searchParams.set("limit", params.limit.toString());
    if (params?.category) searchParams.set("category", params.category);

    const url = `${API_URL}/api/blog${searchParams.toString() ? `?${searchParams}` : ""}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }

    return res.json();
  },

  async getPost(id: string): Promise<BlogPost> {
    const res = await fetch(`${API_URL}/api/blog/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch post: ${res.statusText}`);
    }

    return res.json();
  },
};
