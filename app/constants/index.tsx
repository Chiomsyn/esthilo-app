import FastShippingIcon from "@/icons/fast-shipping-icon";
import SafePaymentIcon from "@/icons/safe-payment-icon";
import EasyReturnIcon from "@/icons/easy-return-icon";
import CustomerServiceIcon from "@/icons/customer-service-icon";

export const navLinks: NavLinksProps = {
  links: [
    {
      name: "Home",
      route: "/",
    },

    {
      name: "Products",
      route: "/products",
    },
    {
      name: "About Us",
      route: "/about-us",
    },

    {
      name: "Contact Us",
      route: "/contact-us",
    },
  ],
};

export const services: ServicesProps[] = [
  {
    title: "Free Shipping",
    description: "No need to worry about cost",
   icon: <FastShippingIcon className="hover:text-secondary-color"/>,
  },
  
  {
    title: "Secured Payments",
    description: "Easy free online transaction",
    icon: <SafePaymentIcon size={32} className="hover:text-secondary-color"/>,
  },
  {
    title: "Easy Returns",
    description: "Return easily with warranty",
    icon: <EasyReturnIcon size={32} className="hover:text-secondary-color"/>,
  },

  {
    title: "24/7 Support",
    description: "24Hrs a day, 7days a week",
    icon: <CustomerServiceIcon size={32} className="hover:text-secondary-color"/>,
  },
];
