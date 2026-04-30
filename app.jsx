// app.jsx — top-level composition

function App(){
  return (
    <>
      <Nav logoSrc="assets/logo.png" />
      <Hero heroSrc="assets/hero.png" />
      <Technology />
      <Specs />
      <CTA />
      <Footer logoSrc="assets/logo.png" />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
