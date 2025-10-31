import React from "react";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/5 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between">
      <div>
        <img className="max-w-12" alt="Logo" src="/Images/logo.png" />
        <div className="max-w-[410px] mt-6 text-card-foreground text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
          quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
        </div>
      </div>

      <div className="flex flex-wrap justify-between w-full md:w-auto mt-10 md:mt-0">
        <div className="flex justify-between w-full min-w-[100%] md:min-w-[450px] gap-5 flex-col md:flex-row">
          <div>
            <h3 className="font-semibold text-base mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a className="text-foreground text-xs hover:text-primary" to="/">Home</a></li>
              <li><a className="text-foreground text-xs hover:text-primary" to="/best-sellers">Best Sellers</a></li>
              <li><a className="text-foreground text-xs hover:text-primary" to="/offers">Offers &amp; Deals</a></li>
              <li><a className="text-foreground text-xs hover:text-primary" to="/contact">Contact Us</a></li>
              <li><a className="text-foreground text-xs hover:text-primary" to="/faqs">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2">Need Help?</h3>
            <ul className="space-y-1">
              <li><a className="text-foreground text-xs hover:text-primary" to="/delivery">Delivery Information</a></li>
              <li><a className="text-foreground text-xs hover:text-primary" to="/returns">Return &amp; Refund Policy</a></li>
              <li><a className="text-foreground text-xs hover:text-primary" to="/payments">Payment Methods</a></li>
              <li><a className="text-foreground text-xs hover:text-primary" to="/track-order">Track your Order</a></li>
              <li><a className="text-foreground text-xs hover:text-primary" to="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2">Follow Us</h3>
            <ul className="space-y-1">
              <li><a className="text-foreground text-xs hover:text-primary" href="#" rel="noreferrer">Instagram</a></li>
              <li><a className="text-foreground text-xs hover:text-primary" href="#" rel="noreferrer">Twitter</a></li>
              <li><a className="text-foreground text-xs hover:text-primary" href="#" rel="noreferrer">Facebook</a></li>
              <li><a className="text-foreground text-xs hover:text-primary" href="#" rel="noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
