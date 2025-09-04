"use client";

import React from "react";
import { useState } from "react";
import { Truck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Shipping = () => {
  const [settings, setSettings] = useState({
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
          <Truck className="w-5 h-5 mr-2" />
          Shipping Options
        </CardTitle>
        <CardDescription>Configure shipping rates and options</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="freeShipping">Free Shipping Threshold</Label>
            <div className="flex items-center space-x-2">
              <span className="text-sm">$</span>
              <Input
                id="freeShipping"
                type="number"
                value={settings.freeShippingThreshold}
                onChange={(e) =>
                  handleSettingChange(
                    "freeShippingThreshold",
                    Number.parseFloat(e.target.value)
                  )
                }
              />
            </div>
            <p className="text-xs text-gray-600">
              Orders above this amount get free shipping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="standardShipping">Standard Shipping Rate</Label>
              <div className="flex items-center space-x-2">
                <span className="text-sm">$</span>
                <Input
                  id="standardShipping"
                  type="number"
                  step="0.01"
                  value={settings.standardShippingRate}
                  onChange={(e) =>
                    handleSettingChange(
                      "standardShippingRate",
                      Number.parseFloat(e.target.value)
                    )
                  }
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="expressShipping">Express Shipping Rate</Label>
              <div className="flex items-center space-x-2">
                <span className="text-sm">$</span>
                <Input
                  id="expressShipping"
                  type="number"
                  step="0.01"
                  value={settings.expressShippingRate}
                  onChange={(e) =>
                    handleSettingChange(
                      "expressShippingRate",
                      Number.parseFloat(e.target.value)
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Shipping;
