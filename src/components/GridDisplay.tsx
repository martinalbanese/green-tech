import { SimpleGrid } from "@chakra-ui/react";
import type { ReactNode } from "react";

type GridDisplayProps = {
  children: ReactNode;
  columns?: { base: number; md: number; lg: number };
  gap?: number | string;
}

export const GridDisplay = ({
  children,
  columns = { base: 1, md: 1, lg: 3 },
  gap }: GridDisplayProps
) => {
  return (
    <SimpleGrid
      columns={columns}
      gap={gap}
      width="100%"
      maxW="1200px"
      mx="auto"
      p={4}
      justifyItems="center"
    >
      {children}
    </SimpleGrid>
  )
}