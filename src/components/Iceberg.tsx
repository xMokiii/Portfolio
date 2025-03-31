import { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";


// Props du composant Iceberg
interface IcebergProps {
  scaleFactor?: number;
  positionX?: number;
  positionY?: number;
}

const Iceberg = forwardRef<THREE.Object3D, IcebergProps>(
  ({ scaleFactor = 1, positionX = 0, positionY = 0 }, ref) => {
    const { scene } = useGLTF("/Iceberg.glb");

    return (
      <primitive
        ref={ref} 
        object={scene}
        position={[positionX, positionY, 0]}
        scale={[scaleFactor, scaleFactor, scaleFactor]}
      />
    );
  }
);

export default Iceberg;
