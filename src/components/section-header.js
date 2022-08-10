import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite, forWorkflow }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'white' : 'heading',
          background: forWorkflow ? "" : "-webkit-linear-gradient(left, #FF1E00, #00D7FF, #FF1E00, #00D7FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
