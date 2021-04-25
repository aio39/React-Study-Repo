import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css'; // _app 에서 글로버 css 선언 가능
import Top from '../src/component/Top';
import Footer from '../src/component/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div styles={{ width: 1000, margin: '0 auto' }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
