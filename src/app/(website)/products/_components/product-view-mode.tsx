import React from "react";
import { Grid, List } from "lucide-react";

const ProductViewMode = ({
  viewMode,
  setViewMode,
}: {
  viewMode: "grid" | "list";
  setViewMode: (viewMode: "grid" | "list") => void;
}) => {
  return (
    <div className="flex items-center gap-4">
      <p>View</p>
      <div className="flex border p-2 rounded-lg">
        <button
          // variant={viewMode === "grid" ? "primary" : "ghost"}
          // size="sm"
          onClick={() => setViewMode("grid")}
          className={
            viewMode === "grid" ? "text-sec-main hover:text-sec-main/90" : ""
          }
        >
          <Grid className="h-4 w-4" />
        </button>
        <button
          // variant={viewMode === "list" ? "primary" : "ghost"}
          // size="sm"
          onClick={() => setViewMode("list")}
          className={
            viewMode === "list" ? "text-sec-main hover:text-sec-main/90" : ""
          }
        >
          <List className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductViewMode;
