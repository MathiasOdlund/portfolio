export async function get() {
	return {
		headers: {
			'Content-Type': 'application/xml'
		},
		body: `
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>http://www.odlund.tech</loc>
          <lastmod>2022-07-12</lastmod>
        </url>
        <url>
        <loc>http://www.odlund.tech/about</loc>
        <lastmod>2022-07-12</lastmod>
      </url>
      <url>
      <loc>http://www.odlund.tech/projects</loc>
      <lastmod>2022-07-12</lastmod>
    </url>
    <url>
    <loc>http://www.odlund.tech/contact</loc>
    <lastmod>2022-07-12</lastmod>
  </url>
      </urlset>
      `.trim()
	};
}
