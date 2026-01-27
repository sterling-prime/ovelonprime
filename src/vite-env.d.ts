/// <reference types="vite/client" />

// Type declarations for vite-imagetools query imports
declare module '*?format=webp&quality=80' {
  const src: string;
  export default src;
}

declare module '*.png?format=webp&quality=80' {
  const src: string;
  export default src;
}

declare module '*.jpg?format=webp&quality=80' {
  const src: string;
  export default src;
}
