import CreatePost from "../components/CreatePost";

const CreatePostPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-900 text-white py-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-slate-800/80 border border-white/5 rounded-lg p-6 shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Create new post</h2>
              <p className="text-sm text-white/80 mt-1">
                Write something interesting and share it with the community.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <CreatePost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
