import React, { useEffect, useState } from "react";
import { OscillatorControls } from "./components/OscillatorControls";
import { FilterControls } from "./components/FilterControls";
import { useSynthEngine } from "./hooks/useSynthEngine";
import { Keyboard } from "./components/Keyboard";
import { MainControls } from "./components/MainControls";
import { EQVisualizer } from "./components/EQVisualizer";
import { useFontStore } from "./store/fontStore";
import { useMIDI } from './hooks/useMidi';
import logoImg from "./styles/SynthPuttyLogo.png";
import styles from "./App.module.css";

export const App: React.FC = () => {
    useSynthEngine(); // audio engine responds to state
    useMIDI();         // optional for now — no-op if not implemented yet

	const {
		updateFontSize,
		vw,
		layout
	} = useFontStore();

    useEffect(() => {
        updateFontSize();
        window.addEventListener("resize", updateFontSize);
        return () => window.removeEventListener("resize", updateFontSize);
    }, [updateFontSize, layout, vw]);

    return (
        <div className={styles.app}>


            <div className={styles.panel}>
				<div className={styles.allControlPanels}>


					<div className={styles.topPanelsContainer}>
						
						<div className={styles.titleContainer}>
							<img src={logoImg} className={styles.logo} alt="" />
							<a className={styles.link} href="https://evanczako.github.io/DoughLab2/" target="_blank">More by Evan Czako HERE</a>
						</div>
						<MainControls />
					</div>



					<div className={styles.pianoEQwrapper}>
						<EQVisualizer />
						<Keyboard />
					</div>

					<div className={styles.mainControlPanel}>
						<OscillatorControls />
						<FilterControls />
					</div>
				</div>



            </div>
        </div>
    );
};
