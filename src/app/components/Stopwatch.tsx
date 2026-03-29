'use client'

import React, {RefObject, useEffect, useRef, useState} from "react";
import {Pause, Play, RotateCcw} from 'lucide-react';


type StopwatchStatus = "idle" | "running" | "paused"
type StopwatchActionByStatus = {
    "idle": () => void,
    "running": () => void,
    "paused": () => void,
}

function timeFormatter(totalSeconds: number) {
    const hours: number = Math.floor(totalSeconds / 3600);
    const minutes: number = Math.floor(totalSeconds / 60);
    const seconds: number = totalSeconds % 60;

    return [
        String(hours).padStart(2, "0"),
        String(minutes).padStart(2, "0"),
        String(seconds).padStart(2, "0"),
    ].join(":");
}

function Stopwatch() {


    const [totalSeconds, setTotalSeconds] = useState(0)
    const [status, setStatus] = useState<StopwatchStatus>("idle");
    const timerRef: RefObject<number | null> = useRef<number>(null)
    const buttonReference: RefObject<HTMLButtonElement | null> = useRef<HTMLButtonElement>(null)

    function startWatch(): void {
        if (timerRef.current === null) {
            timerRef.current = window.setInterval(
                () => {
                    // console.log(timeFormatter(totalSeconds))
                    setTotalSeconds(prev => prev + 1)

                }, 1000)

            setStatus("running");

        }
        return;
    }

    function pauseStopwatch(): void {
        if (timerRef.current !== null) {
            clearInterval(timerRef.current)
            setStatus("paused");
        }
    }

    function resumeStopwatch(): void {
        if (status === "paused") {
            timerRef.current = window.setInterval(() => setTotalSeconds(prev => prev + 1), 1000);
        }
        setStatus("running");
    }

    function resetStopwatch(): void {
        if (timerRef.current !== null) {
            clearInterval(timerRef.current)
            setTotalSeconds(0)
            timerRef.current = null
            setStatus("idle");
        }
    }

    const actions: StopwatchActionByStatus = {
        'idle': () => {
            startWatch();
        },
        'running': () => {
            pauseStopwatch();
        },
        'paused': () => {
            resumeStopwatch();
        }
    };

    // "Gancho" para o react saber quando o componente foi renderizado na tela
    useEffect(() => {
        buttonReference.current?.focus()
    }, []);

    return (
        <div className="flex flex-col items-center gap-8">

            {/* Display do Tempo - Usando fonte mono para evitar Layout Shift */}
            <h1 className="text-8xl font-light tracking-tighter sm:text-9xl font-mono">
                {timeFormatter(totalSeconds)}
            </h1>

            {/* Container de Botões */}
            <div className="flex gap-4">
                {/* Botão Iniciar - Flexbox para alinhar ícone + texto */}
                <button
                    onClick={actions[status]}
                    className="flex items-center gap-2 min-w-[140px] justify-center rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-neutral-200 active:scale-95"
                >
                    {status === "idle" ? (
                        <>
                            <Play size={18} strokeWidth={2} fill="currentColor"/>
                            <span>Iniciar</span>
                        </>
                    ) : status === "running" ?
                        <>
                            <Pause size={18} strokeWidth={2} fill="currentColor"/>
                            <span>Pausar</span>
                        </> : <>
                            <Play size={18} strokeWidth={2} fill="currentColor"/>
                            <span>Continuar</span>
                        </>}

                </button>

                {/* Botão Resetar - Variante Outline */}
                <button
                    onClick={resetStopwatch}
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