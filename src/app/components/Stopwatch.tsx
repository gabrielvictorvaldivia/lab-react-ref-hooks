'use client'

import React from "react";
import {Play, RotateCcw} from 'lucide-react';

function Stopwatch() {
    return (
        <div className="flex flex-col items-center gap-8">

            {/* Display do Tempo - Usando fonte mono para evitar Layout Shift */}
            <h1 className="text-8xl font-light tracking-tighter sm:text-9xl font-mono">
                00:00:00
            </h1>

            {/* Container de Botões */}
            <div className="flex gap-4">
                {/* Botão Iniciar - Flexbox para alinhar ícone + texto */}
                <button
                    className="flex items-center gap-2 min-w-[140px] justify-center rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-neutral-200 active:scale-95"
                >
                    <Play size={18} strokeWidth={2} fill="currentColor"/>
                    <span>Iniciar</span>
                </button>

                {/* Botão Resetar - Variante Outline */}
                <button
                    className="flex items-center gap-2 min-w-[140px] justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
                >
                    <RotateCcw size={18} strokeWidth={2}/>
                    <span>Resetar</span>
                </button>
            </div>

        </div>
    );
}

export default Stopwatch;