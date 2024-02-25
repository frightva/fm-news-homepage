import './App.css';
import logo from './assets/images/logo.svg'
import primaryImg from './assets/images/image-web-3-desktop.jpg'
import listImg1 from './assets/images/image-retro-pcs.jpg'
import listImg2 from './assets/images/image-top-laptops.jpg'
import listImg3 from './assets/images/image-gaming-growth.jpg'
import iconMenu from './assets/images/icon-menu.svg'
import iconMenuClose from './assets/images/icon-menu-close.svg'
import { useState } from 'react';


function App() {
  const [menu, setMenu] = useState(false)

  const handleMenu = (e) => {
    const primaryNav = document.querySelector('.primary-navigation')
    primaryNav.toggleAttribute("data-visible")
    setMenu(!menu)
  }


  return (
    <>
      <header className='primary-header'>
        <section className='padding-top-900'>
          <div className="container">
            <div className='nav-wrapper'>
              <a href=""><img src={logo} alt="Logo" /></a>
              <button
                onClick={(e) => handleMenu(e)}
               className='menu-btn' aria-controls='primary-navigations' aria-expanded={menu}>
                <img className={!menu ? 'menu-hamburger' : 'menu-hamburger-closed'} src={iconMenu} alt="" />
                <img className={menu ? 'menu-close' : 'menu-close-closed'} src={iconMenuClose} alt="" />
              </button>
              <nav className='primary-navigation'>
                <ul role='list' className='nav-list'>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">New</a></li>
                  <li><a href="/">Popular</a></li>
                  <li><a href="/">Trending</a></li>
                  <li><a href="/">Categories</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className='padding-block-900'>
          <div className="container">
            <div className="uneven-columns">
              <div className='flow'>
                <img className='hero-img' src={primaryImg} alt="" />
                <div className='even-columns'>
                  <div className='subhead'>
                    <h1 className='fs-primary-heading fw-extra-bold text-primary-900'>The Bright Future of Web 3.0?</h1>
                  </div>
                  <div className='subbody'>
                    <p className='text-neutral-300 fs-500' >
                      We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                    </p>
                    <button className='button'>
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>

              <div className='new-items | bg-primary-900 flow'>
                <h1 className='fs-primary-heading fw-bold text-accent-300'>New</h1>
                <ul role='list'>
                  <li>
                    <div className='flow' style={{'--flow-spacer': '.4rem'}}>
                      <h3 className='new-lis-item | fs-secondary-heading fw-bold text-neutral-100'>Hydrogen VS Electric Cars</h3>
                      <p className='text-neutral-300 fs-500'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                  </li>
                  <li>
                    <div className='flow' style={{'--flow-spacer': '.4rem'}}>
                      <h3 className='new-lis-item | fs-secondary-heading fw-bold text-neutral-100'>The Downsides of AI Artistry</h3>
                      <p className='text-neutral-300 fs-500'>What are the possible adverse effect of on-demand AI image generation?</p>
                    </div>
                  </li>
                  <li>
                    <div className='flow' style={{'--flow-spacer': '.4rem'}}>
                      <h3 className='new-lis-item | fs-secondary-heading fw-bold text-neutral-100'>Is VC Funding Drying Up?</h3>
                      <p className='text-neutral-300 fs-500'>Prvate funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section className='padding-block-900'>
          <div className="container">
            <div className="even-columns">
              <div className='flex-box'>
                <img className='listImg' src={listImg1} alt="" />
                <div>
                  <h2 className='fs-secondary-heading text-neutral-300 fw-bold'>01</h2>
                  <h3 className='num-lis-item | fs-600 text-primary-900 fw-extra-bold'>Reviving Retro PCs</h3>
                  <p className='fs-500 fw-bold text-neutral-300'>
                    What happens when old PCs are given modern upgrades?
                  </p>
                </div>
              </div>
              <div className='flex-box'>
                <img className='listImg' src={listImg2} alt="" />
                <div>
                  <h2 className='fs-secondary-heading text-neutral-300 fw-bold'>02</h2>
                  <h3 className='num-lis-item | fs-600 text-primary-900 fw-extra-bold'>Top 10 Laptops of 2022</h3>
                  <p className='fs-500 fw-bold text-neutral-300'>
                    Our best picks for various needs and budgets.
                  </p>
                </div>
              </div>
              <div className='flex-box'>
                <img className='listImg' src={listImg3} alt="" />
                <div>
                  <h2 className='fs-secondary-heading text-neutral-300 fw-bold'>03</h2>
                  <h3 className='num-lis-item | fs-600 text-primary-900 fw-extra-bold'>The Growth of Gaming</h3>
                  <p className='fs-500 fw-bold text-neutral-300'>
                    How the pandemic has sparked fresh opportunities.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
