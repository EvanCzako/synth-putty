import React from "react";
import { useSynthStore } from "../store/synthStore";
import { useFontStore } from "../store/fontStore";
import styles from "../styles/Keyboard.module.css";

const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
const blackKeys = ["C#", "D#", "Y#", "F#", "G#", "A#", "Z#"];

export const Keyboard: React.FC = () => {
    const { noteOn, noteOff, activeNotes } = useSynthStore();
	const { octaves } = useFontStore();

    const playNote = (note: number) => {
        noteOn(note, 100);
    };

    const stopNote = (note: number) => {
        noteOff(note);
    };

    const noteClicked = (note: number) => {
        if (activeNotes[note]) {
            stopNote(note);
        } else {
            playNote(note);
        }
    };

    return (
        <div className={styles.keyboard}>
			
            <div>
                {octaves.map((octaveIdx) =>
                    blackKeys.map((keyNote) => {
                        const noteLabel = keyNote + octaveIdx;
                        let label;
                        if (keyNote === "C") {
                            label = noteLabel;
                        } else {
                            label = keyNote;
                        }
                        const note = freqArr.indexOf(noteLabel);

                        let classNames = `${styles.blackKey}`;
                        if (note < 0) {
                            classNames = `${styles.blackKey} ${styles.invisibleKey}`;
                        } else if (activeNotes[note]) {
                            classNames = `${styles.blackKey} ${styles.blackKeyPressed}`;
                        }

                        return (
                            <div
                                key={`black-${keyNote}-${octaveIdx}`}
                                className={classNames}
                                onClick={() => noteClicked(note)}
                            >
                                {label}
                            </div>
                        );
                    }),
                )}
            </div>

            <div>
                {octaves.map((octaveIdx) =>
                    whiteKeys.map((keyNote) => {
                        const noteLabel = keyNote + octaveIdx;
                        let label;
                        if (keyNote === "C") {
                            label = noteLabel;
                        } else {
                            label = keyNote;
                        }
                        const note = freqArr.indexOf(noteLabel);
                        let classNames = `${styles.whiteKey}`;
                        if (activeNotes[note]) {
                            classNames = `${styles.whiteKey} ${styles.whiteKeyPressed}`;
                        }

                        return (
                            <div
                                key={`white-${keyNote}-${octaveIdx}`}
                                className={classNames}
                                onClick={() => noteClicked(note)}
                            >
                                {label}
                            </div>
                        );
                    }),
                )}
            </div>
        </div>
    );
};

const freqMap: any = {
    C0: 16.35,
    "C#0": 17.32,
    D0: 18.35,
    "D#0": 19.45,
    E0: 20.6,
    F0: 21.83,
    "F#0": 23.12,
    G0: 24.5,
    "G#0": 25.96,
    A0: 27.5,
    "A#0": 29.14,
    B0: 30.87,
    C1: 32.7,
    "C#1": 34.65,
    D1: 36.71,
    "D#1": 38.89,
    E1: 41.2,
    F1: 43.65,
    "F#1": 46.25,
    G1: 49,
    "G#1": 51.91,
    A1: 55,
    "A#1": 58.27,
    B1: 61.74,
    C2: 65.41,
    "C#2": 69.3,
    D2: 73.42,
    "D#2": 77.78,
    E2: 82.41,
    F2: 87.31,
    "F#2": 92.5,
    G2: 98,
    "G#2": 103.83,
    A2: 110,
    "A#2": 116.54,
    B2: 123.47,
    C3: 130.81,
    "C#3": 138.59,
    D3: 146.83,
    "D#3": 155.56,
    E3: 164.81,
    F3: 174.61,
    "F#3": 185.0,
    G3: 196.0,
    "G#3": 207.65,
    A3: 220.0,
    "A#3": 233.08,
    B3: 246.94,
    C4: 261.63,
    "C#4": 277.18,
    D4: 293.66,
    "D#4": 311.13,
    E4: 329.63,
    F4: 349.23,
    "F#4": 369.99,
    G4: 392.0,
    "G#4": 415.3,
    A4: 440.0,
    "A#4": 466.16,
    B4: 493.88,
    C5: 523.25,
    "C#5": 554.37,
    D5: 587.33,
    "D#5": 622.25,
    E5: 659.26,
    F5: 698.46,
    "F#5": 739.99,
    G5: 783.99,
    "G#5": 830.61,
    A5: 880.0,
    "A#5": 932.33,
    B5: 987.77,
    C6: 1046.5,
    "C#6": 1108.73,
    D6: 1174.66,
    "D#6": 1244.51,
    E6: 1318.51,
    F6: 1396.91,
    "F#6": 1479.98,
    G6: 1567.98,
    "G#6": 1661.22,
    A6: 1760,
    "A#6": 1864.66,
    B6: 1975.53,
    C7: 2093,
    "C#7": 2217.46,
    D7: 2349.32,
    "D#7": 2489,
    E7: 2637,
    F7: 2793.83,
    "F#7": 2959.96,
    G7: 3135.96,
    "G#7": 3322.44,
    A7: 3520,
    "A#7": 3729.31,
    B7: 3951,
    C8: 4186,
    "C#8": 4434.92,
    D8: 4698.63,
    "D#8": 4978,
    E8: 5274,
    F8: 5587.65,
    "F#8": 5919.91,
    G8: 6271.93,
    "G#8": 6644.88,
    A8: 7040.0,
    "A#8": 7458.62,
    B8: 7902.13,
};

const freqArr = Object.keys(freqMap);
