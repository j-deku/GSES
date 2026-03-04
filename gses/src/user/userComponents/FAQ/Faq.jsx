import React from 'react'
import './Faq.css'
import { FaArrowUp } from 'react-icons/fa'

const Faq = () => {
  return (
    <div className='faq'>
        <h1 id='first'>Frequently Asked Question (FAQ)</h1>
      <div className="inform">
        <div className="question active" >What is the process of creating a balloon-decorated gift?</div>
        <div className="answer">The process involves gathering materials, choosing your favorite design, and gathering the necessary supplies. Once everything is ready, you'll need to assemble your balloon-decorated gift. This may involve cutting, sewing, and gluing your design onto various surfaces.</div>
        <div className="question active">What are some of the best balloon-decorated gift ideas for my birthday?</div>
        <div className="answer">Some great ideas for your birthday include a balloon-decorated birthday cake, a balloon-decorated birthday cupcake, a balloon-decorated birthday balloon, and a balloon-decorated birthday party hat. You can also create a custom balloon-decorated gift by choosing a design, adding your own message, and purchasing the necessary supplies.</div>
        <div className="question active">What are some of the best balloon-decorated gift ideas for my anniversary?</div>
        <div className="answer">Some great ideas for your anniversary include a balloon-decorated anniversary cake, a balloon-decorated anniversary cupcake, a balloon-decorated anniversary balloon, and a balloon-decorated anniversary party hat. You can also create a custom balloon-decorated gift by choosing a design, adding your own message, and purchasing the necessary supplies.</div>
        <div className="question active">What are some of the best balloon-decorated gift ideas for my wedding?</div>
        <div className="answer">Some great ideas for your wedding include a balloon-decorated wedding cake, a balloon-decorated wedding cupcake, a balloon-decorated wedding balloon, and a balloon-decorated wedding party hat. You can also create a custom balloon-decorated gift by choosing a design, adding your own message, and purchasing the necessary supplies.</div>
        <div className="question">Where can I find balloon-decorated gift ideas for other occasions?</div>
        <div className="answer">We have a wide variety of balloon-decorated gift ideas for all occasions, including birthday, anniversary, wedding, and more. You can explore our <a href="#products">Products</a> page to see our offerings.</div>
        <div className="question">How can I make sure my balloon-decorated gift looks and feels perfect?</div>
        <div className="answer">To ensure your balloon-decorated gift looks and feels perfect, follow these tips: choose a high-quality balloon, seal the designs with a sealant, and use a balloon-safe sealant to seal your balloons. Make sure your designs are clean, free of any gaps or cuts, and have a smooth finish. Additionally, consider using a balloon-safe sealant for your balloons. </div>
        <div className="question">What are the shipping and delivery options for my balloon-decorated gift?</div>
        <div className="answer">We offer free shipping on all orders over $100. To make a purchase, please visit our <a href="#contact">Contact Us</a> page or contact our customer support team at <br /> <a href="mailto:jdeku573@gmail.com">info@balloonandfloraldecor.com</a>. Please note that we may require additional payment methods for international shipping. </div><br />
        <div className="question">How can i login into the website?</div>
        <div className="answer">To login into the website, simply click on the SIGN IN button at the top or click on the hamburger icon at the right side and hover to "Sign Up" link at the bottom of the form</div>
        <div className="question">How can i place an order of the items?</div>
        <div className="answer">To place an order, please visit our <a href="#products">Products</a> page, select the items you'd like to purchase, and fill out the necessary information. Once your order is complete, you can choose to pay online using your credit card or Mobile Money. </div>
        <p>
        <div className="text">
          <form action="mailto:jdeku573@gamil.com" method="post">
            <b><p>Tell us your reason or feedback</p></b>
            <textarea name="text" id="text" cols="50" rows="10" placeholder='Write your reason or feedback here...'></textarea><br /><br />
            <input type="submit" value={"Submit"} />
            <input type="reset" value={"Clear"}/>
          </form>
        </div>
        For more information about balloon-decorated gift ideas, please visit our <a href="#contact">Contact Us</a> page or contact our customer support team at <br /> <a href="mailto:jdeku573@gmail.com">info@balloonandfloraldecor.com</a>.
        </p>
      </div>
      <a href="#first" className="back-to-top">
        <FaArrowUp/>
      </a>
    </div>
  )
}

export default Faq
