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
            <Button href="#tool">Tool</Button>
            <Button href="#library">Library</Button>
            <Button href="#devops">DevOps</Button>
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
    <h2>{props.category}</h2>
    <Block id={props.id} layout="threeColumn">
      {props.products}
    </Block>
  </div>
)

class Index extends React.Component {
  render() {
    const products = (category) => (siteConfig.products || [])
      .filter((product) => product.category === category)
      .map((product, i) => {
        return {
          content: `${product.description}<br/>[repo](${product.repository})`,
          title: product.name,
        }
      })
    return (
      <div>
        <HomeSplash />
        <div className="mainContainer">
          <Showcase id="tool" category="Tool" products={products('tool')} />
          <Showcase id="library" category="Library" products={products('library')} />
          <Showcase id="devops" category="DevOps" products={products('devops')} />
          <Showcase id="misc" category="Misc" products={products('misc')} />
        </div>
      </div>
    )
  }
}

module.exports = Index
