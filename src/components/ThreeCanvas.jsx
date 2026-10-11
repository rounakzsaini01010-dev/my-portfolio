import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Points, PointMaterial } from '@react-three/drei';
import { Layers, Maximize2, RotateCcw } from 'lucide-react';
import * as random from 'maath/random/dist/maath-random.esm';

// Golden Starfield & Space Dust
function GoldenDust() {
  const ref = useRef();
  const points = random.inSphere(new Float32Array(1600), { radius: 3.4 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.035;
      ref.current.rotation.y -= delta * 0.045;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fde047"
          size={0.024}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

// Orbiting Gold Satellite Node
function OrbitingGoldNode({ position, speed = 1, size = 0.16 }) {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.sin(t) * 0.35;
      meshRef.current.position.y = position[1] + Math.cos(t * 1.3) * 0.35;
      meshRef.current.rotation.x += 0.03;
      meshRef.current.rotation.y += 0.04;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color="#fbbf24"
        metalness={0.9}
        roughness={0.1}
        emissive="#d97706"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

// 1. Quantum Core Node (24K Champagne Gold Torus Knot + Geodesic Cage)
function QuantumCoreModel({ goldPBR, explode }) {
  const coreRef = useRef();
  const cageRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.55;
      coreRef.current.rotation.y += delta * 0.65;
    }
    if (cageRef.current) {
      cageRef.current.rotation.x -= delta * 0.35;
      cageRef.current.rotation.y -= delta * 0.45;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.4;
    }
  });

  const cageScale = explode ? 2.1 : 1.45;

  return (
    <Float speed={2.5} rotationIntensity={1.8} floatIntensity={2}>
      {/* Central 24K Liquid Champagne Gold Torus Knot */}
      <mesh ref={coreRef}>
        <torusKnotGeometry args={[0.95, 0.32, 128, 32]} />
        <meshStandardMaterial
          color={goldPBR ? "#f59e0b" : "#fbbf24"}
          metalness={goldPBR ? 0.96 : 0.4}
          roughness={goldPBR ? 0.06 : 0.4}
          wireframe={!goldPBR}
        />
      </mesh>

      {/* Geodesic Outer Cage */}
      <mesh ref={cageRef} scale={cageScale}>
        <icosahedronGeometry args={[1.25, 2]} />
        <meshStandardMaterial
          color="#fef08a"
          wireframe
          transparent
          opacity={explode ? 0.6 : 0.3}
        />
      </mesh>

      {/* Luxury Gyro Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3.5, 0, 0]} scale={explode ? 1.4 : 1}>
        <torusGeometry args={[1.75, 0.02, 16, 90]} />
        <meshBasicMaterial color="#fde047" transparent opacity={0.65} />
      </mesh>

      {/* Orbiting Gold Nodes */}
      <OrbitingGoldNode position={[1.8, 0.8, 0.4]} speed={1.1} />
      <OrbitingGoldNode position={[-1.7, -0.9, -0.5]} speed={0.9} />
      <OrbitingGoldNode position={[0.7, -1.8, 0.6]} speed={1.3} />
    </Float>
  );
}

// 2. Kisan Setu AI Model (Agritech Geodesic Telemetry Core)
function KisanSetuModel({ goldPBR, explode }) {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.8;
      meshRef.current.rotation.z += delta * 0.4;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.5;
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color="#eab308"
          metalness={goldPBR ? 0.95 : 0.4}
          roughness={0.1}
          wireframe={!goldPBR}
        />
      </mesh>
      <mesh ref={ringRef} scale={explode ? 2.0 : 1.5}>
        <torusGeometry args={[1.35, 0.025, 16, 80]} />
        <meshBasicMaterial color="#fef08a" transparent opacity={0.7} />
      </mesh>
      <OrbitingGoldNode position={[1.6, 0.5, 0.5]} speed={1.4} />
      <OrbitingGoldNode position={[-1.5, -0.6, -0.5]} speed={1.0} />
    </Float>
  );
}

// 3. Google Gen AI & LLM Model (Neural Lattice Hypercube)
function GenAIModel({ goldPBR, explode }) {
  const boxRef = useRef();
  const wireRef = useRef();

  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.x += delta * 0.6;
      boxRef.current.rotation.y += delta * 0.7;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.4;
    }
  });

  return (
    <Float speed={2.8} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={boxRef}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#d97706"
          metalness={goldPBR ? 0.95 : 0.5}
          roughness={0.08}
        />
      </mesh>
      <mesh ref={wireRef} scale={explode ? 2.2 : 1.55}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial color="#fef08a" wireframe />
      </mesh>
      <OrbitingGoldNode position={[1.5, 1.2, 0]} speed={1.2} />
      <OrbitingGoldNode position={[-1.5, -1.2, 0.4]} speed={0.9} />
    </Float>
  );
}

// 4. OmniCore ERP Model (Distributed Enterprise Data Matrix)
function ERPModel({ goldPBR, explode }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
      groupRef.current.rotation.x += delta * 0.3;
    }
  });

  const dist = explode ? 0.95 : 0.65;

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.8}>
      <group ref={groupRef}>
        {[-dist, dist].map((x, i) =>
          [-dist, dist].map((y, j) =>
            [-dist, dist].map((z, k) => (
              <mesh key={`${i}-${j}-${k}`} position={[x, y, z]}>
                <boxGeometry args={[0.38, 0.38, 0.38]} />
                <meshStandardMaterial
                  color="#b45309"
                  metalness={goldPBR ? 0.92 : 0.4}
                  roughness={0.12}
                />
              </mesh>
            ))
          )
        )}
      </group>
    </Float>
  );
}

// 5. 3D WebGL Games Model
function GamesModel({ goldPBR, explode }) {
  const knotRef = useRef();

  useFrame((state, delta) => {
    if (knotRef.current) {
      knotRef.current.rotation.x += delta * 1.1;
      knotRef.current.rotation.z += delta * 0.8;
    }
  });

  return (
    <Float speed={4} rotationIntensity={3} floatIntensity={2.5}>
      <mesh ref={knotRef} scale={explode ? 1.3 : 1}>
        <torusKnotGeometry args={[0.85, 0.22, 100, 24, 3, 5]} />
        <meshStandardMaterial
          color="#eab308"
          metalness={goldPBR ? 0.95 : 0.5}
          roughness={0.08}
          wireframe={!goldPBR}
        />
      </mesh>
      <OrbitingGoldNode position={[1.7, 0, 0]} speed={2} />
      <OrbitingGoldNode position={[-1.7, 0, 0]} speed={2} />
    </Float>
  );
}

const nodeOptions = [
  {
    id: 'quantum',
    label: '3D Gold Core',
    subtitle: 'Gyroscopic 24K Gold Knot + Geodesic Cage',
    techTag: 'Interactive 3D Sculpture · Spatial Math'
  },
  {
    id: 'kisan',
    label: 'KisanSetu Mobile',
    subtitle: 'Agritech Telemetry & On-Device ML Node',
    techTag: 'KisanSetu AI · Flutter Architecture'
  },
  {
    id: 'genai',
    label: 'GenAI Analytics',
    subtitle: 'Tata & Google Cloud Certified Analytics Node',
    techTag: 'Generative AI & Data Analytics'
  },
  {
    id: 'erp',
    label: 'OmniCore ERP',
    subtitle: 'Distributed Relational MySQL Node Matrix',
    techTag: 'OmniCore ERP · Relational Architecture'
  },
  {
    id: 'games',
    label: 'Canvas Games',
    subtitle: '60 FPS Physics Loop & Web Audio Synthesis',
    techTag: 'HTML5 Canvas · JavaScript Game Engine'
  }
];

export default function ThreeCanvas({ onSelectTab }) {
  const [selectedId, setSelectedId] = useState('quantum');
  const [goldPBR, setGoldPBR] = useState(true);
  const [explode, setExplode] = useState(false);
  const controlsRef = useRef();

  const handleSelect = (id) => {
    setSelectedId(id);
    if (onSelectTab) onSelectTab(id);
  };

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const currentNode = nodeOptions.find(n => n.id === selectedId) || nodeOptions[0];

  return (
    <div className="w-full h-full flex flex-col justify-between relative select-none">
      {/* Top Header Badge & Controls */}
      <div className="z-10 flex items-start justify-between gap-3 p-4">
        {/* Active Node Info */}
        <div className="bg-[#0c0b11]/90 border border-amber-500/20 rounded-xl px-3.5 py-2 backdrop-blur-md shadow-lg shadow-black/40">
          <div className="text-white font-semibold text-xs tracking-tight flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            {currentNode.techTag}
          </div>
          <div className="text-amber-300/80 text-[11px] font-mono mt-0.5">
            {currentNode.subtitle}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 bg-[#0c0b11]/90 border border-amber-500/20 p-1 rounded-xl backdrop-blur-md">
          <button
            onClick={() => setGoldPBR(!goldPBR)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              goldPBR
                ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                : 'text-gray-400 hover:text-white'
            }`}
            title="Toggle 24K Gold PBR Shader"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">24K Gold PBR</span>
          </button>

          <button
            onClick={() => setExplode(!explode)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
              explode
                ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                : 'text-gray-400 hover:text-white'
            }`}
            title="Toggle Explode View"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Explode</span>
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-gray-400 hover:text-amber-300 hover:bg-white/5 transition-all"
            title="Reset Rotation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive 3D Canvas Viewport */}
      <div className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 46 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[10, 10, 8]} intensity={2.6} color="#fffbeb" />
          <directionalLight position={[-10, -5, -5]} intensity={1.8} color="#f59e0b" />
          <pointLight position={[0, 4, 3]} intensity={2.0} color="#fef08a" />

          <GoldenDust />

          {selectedId === 'quantum' && <QuantumCoreModel goldPBR={goldPBR} explode={explode} />}
          {selectedId === 'kisan' && <KisanSetuModel goldPBR={goldPBR} explode={explode} />}
          {selectedId === 'genai' && <GenAIModel goldPBR={goldPBR} explode={explode} />}
          {selectedId === 'erp' && <ERPModel goldPBR={goldPBR} explode={explode} />}
          {selectedId === 'games' && <GamesModel goldPBR={goldPBR} explode={explode} />}

          <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1.5}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      {/* Bottom Switcher Dock Tabs */}
      <div className="z-10 p-3 flex items-center justify-center">
        <div className="flex items-center gap-1 bg-[#0c0b11]/90 border border-amber-500/20 p-1 rounded-xl backdrop-blur-md overflow-x-auto max-w-full no-scrollbar shadow-lg">
          {nodeOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedId === opt.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold shadow-md shadow-amber-500/30'
                  : 'text-gray-400 hover:text-amber-300 hover:bg-white/5'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
