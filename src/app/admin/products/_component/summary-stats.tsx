"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCounts } from "@/lib/types/type";

const SummaryStats = ({ counts }: { counts: ProductCounts }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-charcoal">
            {counts.totalCount}
          </p>
          <p className="text-sm text-gray-600">Total Products</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-green-600">
            {counts.activeCount}
          </p>
          <p className="text-sm text-gray-600">Active Products</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-yellow-600">
            {counts.lowCount}
          </p>
          <p className="text-sm text-gray-600">Low Stock</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-2xl font-bold text-red-600">{counts.outCount}</p>
          <p className="text-sm text-gray-600">Out of Stock</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SummaryStats;
