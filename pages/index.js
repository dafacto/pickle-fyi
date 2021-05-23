import Footer from '../components/Footer';
import { getReasons } from '../lib/api';
import Reasons from '../components/Reasons';

const Home = ({ reasons }) => {
  return (
    <>
      <header className='bg'>
        <div className='container narrow'>
          <img src='/images/logo.png' />
          <strong>Get started with Pickle</strong>
          <h1>Pickle Finance</h1>
          <p>The Future of Finance is Green!</p>
        </div>
      </header>
      <main>
        <section className='bg'>
          <div className='container'>
            <Reasons reasons={reasons} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const reasons = getReasons(['number', 'slug', 'title', 'intro']);

  return {
    props: { reasons },
  };
}
