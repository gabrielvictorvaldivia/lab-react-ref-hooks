// app/page.tsx
import React, {JSX} from 'react';
import Stopwatch from "@/app/components/Stopwatch";

export default function Home(): JSX.Element {
    return (
        <main className="flex h-screen w-full flex-col items-center justify-center bg-black text-white antialiased">
            <Stopwatch/>
            {/* Marca d'água ou Label sutil (Opcional) */
            }
            <footer className="absolute bottom-8 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                Minimalist Timer v1.0
            </footer>
        </main>
    );
}