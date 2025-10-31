import React from "react";
import BlogListCard from "@/components/BlogListCard";
import api from "@/services/api";
const HomePage = () => {
  const [posts, setPosts] = React.useState([]);
  const [filtered, setFiltered] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [query, setQuery] = React.useState("");
  const fetchPosts = async () => {
    setLoading(true);
    const res = await api.get("/posts");
    const items = res?.data?.items || [];
    console.log("items", items);
    setPosts(items);
    setFiltered(items);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const SearchBlog = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setFiltered(posts);
      return;
    }
    const q = query.trim().toLowerCase();
    const result = posts.filter((p) =>
      (p.title || "").toLowerCase().includes(q)
    );
    setFiltered(result);
  };

  return (
    <div>
      <div className="text-center mt-10 mb-8">
        <h1 className="text-3xl! sm:text-6xl! font-semibold! sm:leading-16! text-gray-700 m-0!">
          Your own <span className="text-primary">blogging</span>
          <br />
          platform.
        </h1>

        <p className="my-6 sm:my-8 max-w-2xl mx-auto max-sm:text-xs text-gray-500">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, your story
          starts right here.
        </p>

        <form
          onSubmit={SearchBlog}
          className="flex bg-card justify-between items-center max-w-lg max-sm:scale-75 mx-auto border border-gray-300 rounded overflow-hidden"
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter search title..."
            className="w-full pl-4 h-9 bg-transparent outline-none border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground text-base md:text-sm"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-9 bg-primary text-white px-8 py-2 m-1.5 rounded transition-all cursor-pointer hover:bg-primary/90 focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            Search
          </button>
        </form>
      </div>
      <BlogListCard posts={filtered} loading={loading} />
    </div>
  );
};

export default HomePage;
