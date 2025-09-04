"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, PhoneIcon } from "lucide-react";
import React from "react";

const ContactForm = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gray-100"
    >
      <div className="wrapper gap-10 py-20 flex flex-col md:flex-row   ">
        {/* Contact info card */}
        <motion.div
          className="space-y-3.5 w-full flex flex-col rounded-tl-3xl rounded-br-[24px] shadow-2xl justify-center bg-sec-main max-w-[300px] p-4"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          {/* phone */}
          <div className="rounded-lg p-3 flex items-center gap-4">
            <div className="rounded-full bg-black/10 text-base-color p-5">
              <PhoneIcon className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-pretty">Phone Number</strong>
              <p className="text-sm text-gray-500">+234 812 345 6789</p>
            </div>
          </div>
          {/* Email */}
          <div className="rounded-lg p-3 flex items-center gap-4">
            <div className="rounded-full bg-black/10 text-base-color p-5">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-pretty">Email Address</strong>
              <p className="text-sm text-gray-500">lawson@gmail.com</p>
            </div>
          </div>
          {/* Location */}
          <div className="rounded-lg p-3 flex items-center gap-4">
            <div className="rounded-full bg-black/10 text-base-color p-5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-pretty">Location</strong>
              <p className="text-sm text-gray-500">No 6 Ezeala Str.</p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="w-full"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <Card>
            <CardContent>
              <strong className="text-pretty text-3xl">Send a Message</strong>
              <p className="text-sm text-gray-500">
                Send us a message and we'll get back to you as soon as possible.
              </p>
              <form action="" className="mt-20 space-y-3">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="FullName"
                    className="h-12"
                    required
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="h-12"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    className="h-12"
                    required
                  />
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="h-12 shadow-none"
                    required
                  />
                </div>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="h-24 shadow-none"
                  required
                />
                <Button
                  size="lg"
                  type="submit"
                  className="bg-base-color w-[200px] px-5 text-white "
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
