// Tells TS how to interpret files with glsl extension
// In our case we want its values to be interpreted as strings
declare module '*.glsl' {
  const value: string;
  export default value;
}
