import CustomerServiceIcon from "../../../icons/customer-service-icon";
import EasyReturnIcon from "../../../icons/easy-return-icon";
import FastShippingIcon from "../../../icons/fast-shipping-icon";
import SafePaymentIcon from "../../../icons/safe-payment-icon";

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
    // {
    //   name: "About Us",
    //   route: "/about-us",
    // },

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
    icon: <FastShippingIcon className="group-hover:text-sec-main" />,
  },

  {
    title: "Secured Payments",
    description: "Easy free online transaction",
    icon: <SafePaymentIcon size={32} className="group-hover:text-sec-main" />,
  },
  {
    title: "Easy Returns",
    description: "Return easily with warranty",
    icon: <EasyReturnIcon size={32} className="group-hover:text-sec-main" />,
  },

  {
    title: "24/7 Support",
    description: "24Hrs a day, 7days a week",
    icon: (
      <CustomerServiceIcon size={32} className="group-hover:text-sec-main" />
    ),
  },
];

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Prostore";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "A modern ecommerce store built with Next.js";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
  email: "admin@example.com",
  password: "123456",
};

export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const shippingAddressDefaultValues = {
  fullName: "",
  streetAddress: "",
  city: "",
  postalCode: "",
  country: "",
};

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(", ")
  : ["Paystack", "CashOnDelivery"];
export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || "Paystack";

export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 12;

export const productDefaultValues = {
  name: "",
  slug: "",
  category: "",
  images: [],
  brand: "",
  description: "",
  price: "0",
  stock: 0,
  rating: "0",
  numReviews: "0",
  isFeatured: false,
  banner: null,
};

export const USER_ROLES = process.env.USER_ROLES
  ? process.env.USER_ROLES.split(", ")
  : ["admin", "user"];

export const reviewFormDefaultValues = {
  title: "",
  comment: "",
  rating: 0,
};

export const SENDER_EMAIL = process.env.SENDER_EMAIL || "onboarding@resend.dev";
