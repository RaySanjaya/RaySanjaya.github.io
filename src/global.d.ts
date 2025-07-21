 // declare module "*.glb" {
//   const value: string; // Tipe untuk file .glb adalah string (URL dari file yang dimuat)
//   export default value;
// }

export { };

declare module '*.glb';
declare module '*.png';

declare module "meshline" {
  export const MeshLineMaterial: any;
  export const MeshLineGeometry: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}