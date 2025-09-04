"use client";

import { useState } from "react";
import { Eye, EyeOff, Globe, CreditCard, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BasicInfo = () => {
  const [settings, setSettings] = useState({
    storeName: "",
    storeDescription: "",
    contactEmail: "",
    supportEmail: "",
    phone: "",
    address: "",
    currency: "USD",
    timezone: "America/New_York",
    emailNotifications: true,
    smsNotifications: false,
    orderNotifications: true,
    inventoryAlerts: true,
    marketingEmails: true,
    stripePublishableKey: "",
    stripeSecretKey: "",
    paypalClientId: "",
    freeShippingThreshold: 0,
    standardShippingRate: 0,
    expressShippingRate: 0,
    taxRate: 0,
    enableTax: false,
    enableInventoryTracking: true,
    lowStockThreshold: 10,
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Globe className="w-5 h-5 mr-2" />
          Store Information
        </CardTitle>
        <CardDescription>Basic information about your store</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="storeName">Store Name</Label>
            <Input
              id="storeName"
              value={settings.storeName}
              onChange={(e) => handleSettingChange("storeName", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactEmail">Contact Email</Label>
            <Input
              id="contactEmail"
              type="email"
              value={settings.contactEmail}
              onChange={(e) =>
                handleSettingChange("contactEmail", e.target.value)
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="storeDescription">Store Description</Label>
          <Textarea
            id="storeDescription"
            value={settings.storeDescription}
            onChange={(e) =>
              handleSettingChange("storeDescription", e.target.value)
            }
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={settings.phone}
              onChange={(e) => handleSettingChange("phone", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="supportEmail">Support Email</Label>
            <Input
              id="supportEmail"
              type="email"
              value={settings.supportEmail}
              onChange={(e) =>
                handleSettingChange("supportEmail", e.target.value)
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Business Address</Label>
          <Textarea
            id="address"
            value={settings.address}
            onChange={(e) => handleSettingChange("address", e.target.value)}
            rows={2}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInfo;
