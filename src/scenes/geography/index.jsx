import React from "react";

import { Box, useTheme } from "@mui/material";
import { useGetGeographyQuery } from "state/api";
import Header from "components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "state/geoData";

const Geography = () => {
  const theme = useTheme();
  const { data } = useGetGeographyQuery();
  console.log("data", data);
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Subtitle"
        subtitle="Find where yours users arte located."
      />
    </Box>
  );
};

export default Geography;
