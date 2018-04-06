const React = require('react')

const CompLibrary = require('../core/CompLibrary.js')
const MarkdownBlock = CompLibrary.MarkdownBlock
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const siteConfig = require(`${process.cwd()}/siteConfig.js`)

const imgUrl = (img) => `${siteConfig.baseUrl}img/${img}`
const docUrl = (doc) => `${siteConfig.baseUrl}docs/${doc}`
const pageUrl = (page) => `${siteConfig.baseUrl}${page}`

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    )
  }
}

Button.defaultProps = {
  target: '_self',
}

const SplashContainer = (props) => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
)

const ProjectTitle = (props) => (
  <h2 className="projectTitle">
    {siteConfig.title}
  </h2>
)

const PromoSection = (props) => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
)

class HomeSplash extends React.Component {
  render() {
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="#golang">Go</Button>
            <Button href="#python">Python</Button>
            <Button href="#java">Java</Button>
            <Button href="#javascript">JavaScript</Button>
            <Button href="#haskell">Haskell</Button>
            <Button href="#misc">Misc</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

const Block = (props) => (
  <Container
    padding={['bottom']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
)

const Showcase = (props) => (
  <div className="productShowcaseSection" style={{ textAlign: 'center' }}>
    <h2>{props.languageName} products</h2>
    <Block id={props.id} layout="fourColumn">
      {props.products}
    </Block>
  </div>
)

class Index extends React.Component {
  render() {
    const products = (language) => (siteConfig.products || [])
      .filter((product) => product.language === language)
      .map((product, i) => {
        return { content: 'TODO', title: product.caption }
      })
    return (
      <div>
        <HomeSplash />
        <div className="mainContainer">
          <Showcase id="golang" languageName="Go" products={products('go')} />
          <Showcase id="python" languageName="Python" products={products('python')} />
          <Showcase id="java" languageName="Java" products={products('java')} />
          <Showcase id="javascript" languageName="JavaScript" products={products('javascript')} />
          <Showcase id="haskell" languageName="Haskell" products={products('haskell')} />
          <Showcase id="misc" languageName="Misc" products={products('misc')} />
        </div>
      </div>
    )
  }
}

module.exports = Index
