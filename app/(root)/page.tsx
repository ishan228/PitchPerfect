import SearchForm from "../../components/ui/SearchForm";
import StartupCard from "../../components/ui/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "Yesterday",
      views: 55,
      author: { _id: 1 },
      _id: 1,
      description: "This is a description",
      category: "robots",
      title: "We robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h2 className="heading">
          Pitch Your Starup,
          <br /> Get Funding
        </h2>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vouce Your Startup, Grow Your Business
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results For ${query}` : "All Startup"}
        </p>

        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startup Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
