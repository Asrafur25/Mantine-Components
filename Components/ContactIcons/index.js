import { Box, Grid, Text, Stack } from "@mantine/core";
import React from "react";
import { Sun, Phone, MapPin, At } from "tabler-icons-react";

const MOCKDATA = [
  { title: "Email", description: "hello@mantine.dev", icon: At },
  { title: "Phone", description: "+49 (800) 335 35 35", icon: Phone },
  { title: "Address", description: "844 Morris Park avenue", icon: MapPin },
  { title: "Working hours", description: "8 a.m. – 11 p.m.", icon: Sun },
];
const index = () => {
  return (
    <Box>
      <Grid>
        {MOCKDATA.map((item) => (
          <>
            <Grid.Col
              span={12}
              key={item.title}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >  <Box>
            <Text
              sx={{
                fontSize: "12px",
                lineHeight: "1.55",
                color: "#DBD0E7",
              }}
            >
              {item.icon}
            </Text>
          </Box>
            
              <Box>
                <Text
                  sx={{
                    fontSize: "12px",
                    lineHeight: "1.55",
                    color: "#DBD0E7",
                  }}
                >
                  {item.title}
                </Text>
              </Box>

              <Box>
                <Text
                  sx={{
                    fontSize: "16px",
                    lineHeight: "1.55",
                    color: "#FDF2F2",
                  }}
                >
                  {item.description}
                </Text>
              </Box>
            </Grid.Col>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default index;
