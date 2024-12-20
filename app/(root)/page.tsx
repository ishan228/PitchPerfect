import SearchForm from "../components/SearchForm";

export default function Home() {
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
        <SearchForm />
      </section>
    </>
  );
}
