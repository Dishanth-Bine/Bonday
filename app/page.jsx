import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Roars</span>
    </h1>
    <p className='desc text-center'>
      Bonday is for the modern world to
      discover, create and share creative Roars
    </p>

    <Feed />
  </section>
);

export default Home;
