function Footer() {
  return <footer>footer is here</footer>;
}

function Page() {
  return (
    <div class="page">
      <h1>Yay it works!</h1>
      <p>here is some cool content</p>
      <Footer />
    </div>
  );
}

Deno.serve(() => {
  const html = `<!DOCTYPE html>${<Page />}`;
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
});
