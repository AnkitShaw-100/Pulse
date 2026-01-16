import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabase-client";

type PostInput = {
  title: string;
  content: string;
};

const createPost = async (post: PostInput) => {
  const { data, error } = await supabase.from("posts").insert(post);
  if (error) throw new Error(error.message);
  return data;
};

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { mutate, isLoading, isError, isSuccess, error } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      setTitle("");
      setContent("");
    },
    onError: (err) => {
      // surface error in console for easier debugging (status/code/details)
      console.error("Create post failed:", err);
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-white/90"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          className="mt-2 block w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter a short, clear title"
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-white/90"
        >
          Content
        </label>
        <textarea
          id="content"
          rows={8}
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
          className="mt-2 block w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Share your thoughts..."
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white px-4 py-2 rounded-md"
        >
          {isLoading ? "Creating..." : "Create Post"}
        </button>
        <button
          type="button"
          onClick={() => {
            setTitle("");
            setContent("");
          }}
          className="px-3 py-2 rounded-md text-white/90 bg-white/5 hover:bg-white/10"
        >
          Reset
        </button>
      </div>

      {isError && (
        <div className="text-sm text-red-400">
          <p>Error: {(error as any)?.message ?? "Unknown error"}</p>
          <pre className="mt-2 text-xs text-red-200 whitespace-pre-wrap">
            {JSON.stringify(error, null, 2)}
          </pre>
        </div>
      )}

      {isSuccess && (
        <p className="text-sm text-green-400">Post created successfully.</p>
      )}
    </form>
  );
};

export default CreatePost;
