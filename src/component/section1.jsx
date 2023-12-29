import showcase1 from '../assets/img/bg-showcase-1.jpg'
import showcase2 from '../assets/img/bg-showcase-2.jpg'
import showcase3 from '../assets/img/bg-showcase-3.jpg'
import testimonials_1 from '../assets/img/testimonials-1.jpg'
import testimonials_2 from '../assets/img/testimonials-2.jpg'
import testimonials_3 from '../assets/img/testimonials-3.jpg'
import responsive from '../assets/img/responsive.png'
import bootstrap from '../assets/img/bootstrap.png'
import easy from '../assets/img/easy.png'





const Section1 = () => {
    return <>
        <div className='section1_div'>
            <h1>Generate more leads with a <br />
                professional landing page! </h1>
            <input style={{
                margin: '20px 10px',
                padding: '10px 8px',
                border: '2px solid white',
                borderRadius: '5px',
                width: '25%'
            }} type="email" placeholder='Email Address' />
            <button className='submit' style={{ padding: '10px 8px', }}>Submit</button>
        </div>
    </>
}


const Section2 = () => {
    return <>
        <div className='section2_div'>
            <div className='child_div'>
                <img src={responsive} alt="" />
                <h3 style={{ margin: "2%" }}>Fully Responsive</h3>
                <p>This theme will great on any device, no matter the size!</p>
            </div>
            <div className='child_div'>
                <img src={bootstrap} alt="" />
                <h3 style={{ margin: "2%" }}>Bootstrap 5 Ready</h3>
                <p>Featuring the latest build of the new Bootstrap 5 framework!</p>
            </div>
            <div className='child_div'>
                <img src={easy} alt="" />
                <h3 style={{ margin: "2%" }}>Easy to Use</h3>
                <p>Ready to use with your own content. or customize the source files!</p>
            </div>
        </div>
    </>
}



const Img_section = () => {

    return <>
        <div className='img_sec_div'>
            <div className='img_sec_text'>
                <h2 style={{ marginBottom: "1%" }}>Fully Responsive Design</h2>
                <p>When you use a theme created by Start Bootstrap, you know
                    that the theme will look great on any device, whether it's a
                    phone, tablet,or desktop the page will behave responsively!
                </p>
            </div>
            <div className='img_sec_img'>
                <img src={showcase1} alt="" width={"100%"} height={"350px"} srcset="" />
            </div>
        </div>

        <div className='img_sec_div'>
            <div className='img_sec_img'>
                <img src={showcase2} alt="" width={"100%"} height={"350px"} srcset="" />
            </div>
            <div className='img_sec_text'>
                <h2 style={{ marginBottom: "1%" }}>Updated For Bootstrap 5</h2>
                <p>
                    Newly improved, and full of great utility
                    classes. Bootstrap 5 is leading the way in
                    mobile responsive web development! All of the themes on
                    Start Bootstrap are now using Bootstrap 5!
                </p>
            </div>

        </div>

        <div className='img_sec_div'>
            <div className='img_sec_text'>
                <h2 style={{ marginBottom: "1%" }}>Easy to Use & Customize</h2>
                <p>
                    Landing Page is just HTML and CSS with a splash
                    of SCSS for users who demand some deeper customization
                    options. Out of the box, just add your content and images,
                    and your new landing page will be ready to go!

                </p>
            </div>
            <div className='img_sec_img'>
                <img src={showcase3} alt="" width={"100%"} height={"350px"} srcset="" />
            </div>
        </div>

    </>
}



const Review_section = () => {
    return <>
        <div className='review_div'>
            <h2 style={{ marginTop: '5%' }}>What people are saying...</h2>
            <div className='review_2div'>
                <div className='review_img_div'>
                    <img className='review_img' src={testimonials_1} alt="" />
                    <h2 style={{ margin: '1% 0%' }}>Margaret E.</h2>
                    <p>"This is fantastic! Thanks so much guys!"</p>
                </div>
                <div className='review_img_div'>
                    <img className='review_img' src={testimonials_2} alt="" />
                    <h2 style={{ margin: '1% 0%' }}>Fred S.</h2>
                    <p>"Bootstrap is amazing. I've been using it
                        to create lots of super nice landing pages."</p>
                </div>
                <div className='review_img_div'>
                    <img className='review_img' src={testimonials_3} alt="" />
                    <h2 style={{ margin: '1% 0%' }}>Sarah W.</h2>
                    <p>"Thanks so much for making these free resources
                        available to us!"</p>
                </div>
            </div>
        </div>
    </>
}


const Section1_2 = () => {
    return <>
        <div className='section1_div'>
            <h1>Ready to get started? Sign up now! </h1>
            <input style={{
                margin: '20px 10px',
                padding: '10px 8px',
                border: '2px solid white',
                borderRadius: '5px',
                width: '28%'
            }} type="email" placeholder='Email Address' />
            <button className='submit' style={{ padding: '10px 8px', }}>Submit</button>
        </div>
    </>
}


const Footer = () => {
    return <>
        <div className='footer_div'>
            <div style={{ margin: '3% 0', width: '50%' }}>
                <a style={{ marginRight: '3%' }} href="#">About</a>
                <a style={{ marginRight: '3%' }} href="#">Contact</a>
                <a style={{ marginRight: '3%' }} href="#">Terms of Use</a>
                <a style={{ marginRight: '3%' }} href="#">Privacy Policy</a>
                <p style={{ margin: '1% 0' }}>c Your Website 2023. All Rights Reserved. </p>
            </div>
            <div style={{ margin: '3% 0', width: '10%' }}>
                <i style={{ marginRight: '4%', fontSize: 'x-large', color: 'blue' }} class='fa-brands fa-facebook'></i>
                <i style={{ marginRight: '4%', fontSize: 'x-large', color: 'blue' }} class='fa-brands fa-x-twitter'></i>
                <i style={{ marginRight: '4%', fontSize: 'x-large', color: 'blue' }} class='fa-brands fa-instagram'></i>

            </div>
        </div>
    </>
}


export { Section1, Section2, Img_section, Review_section, Section1_2, Footer } 