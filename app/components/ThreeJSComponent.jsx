"use client"; // ← Ajoute cette ligne

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeJSComponent = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Création de la scène, de la caméra et du rendu
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Configurer les ombres
    renderer.shadowMap.enabled = true;

    // Créer un dodécaèdre avec une géométrie et un matériau
    const geometry = new THREE.DodecahedronGeometry(5); // Remplacez SphereGeometry par DodecahedronGeometry
    const textureLoader = new THREE.TextureLoader();
    const asteroidTexture = textureLoader.load('/path/to/your/asteroid-texture.jpg'); // Chemin de la texture
    const material = new THREE.MeshStandardMaterial({
        map: asteroidTexture,
        roughness: 0.5, // Ajustez la rugosité pour un meilleur effet
        metalness: 0.1, // Ajustez la métallisation si nécessaire
    });

    const dodecahedron = new THREE.Mesh(geometry, material);
    dodecahedron.castShadow = true; // Permet au dodécaèdre de projeter des ombres
    dodecahedron.receiveShadow = true; // Permet au dodécaèdre de recevoir des ombres
    scene.add(dodecahedron);

    // Ajouter une lumière ambiante
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Lumière ambiante douce
    scene.add(ambientLight);

    // Ajouter une lumière directionnelle
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10); // Positionner la lumière directionnelle
    directionalLight.castShadow = true; // Permet à la lumière directionnelle de projeter des ombres
    scene.add(directionalLight);

    // Configurer les ombres de la lumière directionnelle
    directionalLight.shadow.mapSize.width = 1024; // Ajustez la taille de la carte d'ombre
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5; // Ajustez les paramètres de la caméra d'ombre
    directionalLight.shadow.camera.far = 50;

    camera.position.z = 7;

    const animate = () => {
      requestAnimationFrame(animate);
      dodecahedron.rotation.x += 0.005; // Animation de la rotation sur l'axe X
      dodecahedron.rotation.y += 0.005; // Animation de la rotation sur l'axe Y
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup à la destruction du composant
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="three-js-container"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        pointerEvents: "none",
      }}
    />
  );
};

export default ThreeJSComponent;
