const React = require('react')

const siteConfig = require(`${process.cwd()}/siteConfig.js`)

const docUrl = (doc) => `${siteConfig.baseUrl}docs/${doc}`
const pageUrl = (page) => `${siteConfig.baseUrl}${page}`

const showcase = (language) => {
  return (siteConfig.products || [])
    .filter((product) => product.language === language)
    .map((product, i) => (
      <a href={product.infoLink} key={i}>
        {product.caption}
      </a>
    ))
}

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear()
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Go</h5>
            {showcase('go')}
          </div>
          <div>
            <h5>Python</h5>
            {showcase('python')}
          </div>
          <div>
            <h5>Java</h5>
            {showcase('java')}
          </div>
          <div>
            <h5>JavaScript</h5>
            {showcase('javascript')}
          </div>
          <div>
            <h5>Other Languages</h5>
            {showcase('others')}
          </div>
          <div>
            <h5>More</h5>
            <a href={docUrl('demo.html')}>
              Demo
            </a>
            <a href={`${siteConfig.baseUrl}blog`}>Blog</a>
            <a href="https://scrapbox.io/ohtomi/" target="_blank">
              Scrapbox
            </a>
            <a href="https://twitter.com/k_ohtomi" target="_blank">
              Twitter
            </a>
          </div>
        </section>

        <section className="copyright">
          Copyright &copy; {currentYear} Kenichi Ohtomi
        </section>
      </footer>
    );
  }
}

module.exports = Footer
