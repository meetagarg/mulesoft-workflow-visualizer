import { useEffect, useRef, useState } from 'react';
import { NARRATION_SCRIPT, INTRO_NARRATION, OUTRO_NARRATION } from '../data/narrationScript';

export function useNarration() {
  const [isNarrationEnabled, setIsNarrationEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const utteranceRef = useRef(null);

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      console.log('Available voices:', availableVoices.length, availableVoices.map(v => v.name));

      if (availableVoices.length > 0) {
        setVoices(availableVoices);

        // Prioritize high-quality voices
        const defaultVoice =
          // Mac premium voices
          availableVoices.find(v => v.name === 'Samantha') ||
          availableVoices.find(v => v.name === 'Alex') ||
          availableVoices.find(v => v.name === 'Allison') ||
          availableVoices.find(v => v.name === 'Ava') ||
          // Google premium voices
          availableVoices.find(v => v.name.includes('Google US English') && !v.name.includes('Network')) ||
          // Microsoft premium voices
          availableVoices.find(v => v.name === 'Microsoft Zira Desktop') ||
          availableVoices.find(v => v.name === 'Microsoft David Desktop') ||
          // Fallback to any English voice
          availableVoices.find(v => v.lang.startsWith('en-US') && v.localService) ||
          availableVoices.find(v => v.lang.startsWith('en-US')) ||
          availableVoices.find(v => v.lang.startsWith('en')) ||
          availableVoices[0];

        console.log('Selected voice:', defaultVoice?.name, 'Quality:', defaultVoice?.localService ? 'Premium' : 'Standard');
        setSelectedVoice(defaultVoice);
        setIsReady(true);
      }
    };

    // Try loading immediately
    loadVoices();

    // Chrome loads voices asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    // Fallback: try again after a delay
    const timer = setTimeout(loadVoices, 200);
    return () => clearTimeout(timer);
  }, []);

  const speak = (text, options = {}) => {
    if (!isNarrationEnabled || !text) {
      console.log('Narration disabled or no text');
      return;
    }

    if (!isReady || voices.length === 0) {
      console.warn('Voices not loaded yet, retrying in 200ms...');
      setTimeout(() => speak(text, options), 200);
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    console.log('Speaking:', text.substring(0, 50) + '...');

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    // Configure voice
    if (selectedVoice) {
      utterance.voice = selectedVoice;
      console.log('Using voice:', selectedVoice.name);
    }

    utterance.lang = 'en-US';

    // Improved speech parameters for more natural sound
    utterance.rate = options.rate || 0.85; // Slower = more natural
    utterance.pitch = options.pitch || 1.0; // Normal pitch
    utterance.volume = options.volume || 1.0; // Full volume

    utterance.onstart = () => {
      console.log('Speech started');
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      console.log('Speech ended');
      setIsSpeaking(false);
      if (options.onComplete) {
        options.onComplete();
      }
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsSpeaking(false);
    };

    // For longer text, add pauses at sentence boundaries
    if (text.length > 100) {
      utterance.rate = 0.8; // Even slower for long text
    }

    // Ensure speech synthesis is ready
    setTimeout(() => {
      try {
        window.speechSynthesis.speak(utterance);
      } catch (error) {
        console.error('Failed to speak:', error);
        setIsSpeaking(false);
      }
    }, 100);
  };

  const speakStage = (stageId) => {
    const narration = NARRATION_SCRIPT[stageId];
    if (narration) {
      speak(narration.text);
    } else {
      console.warn('No narration found for stage:', stageId);
    }
  };

  const speakIntro = () => {
    speak(INTRO_NARRATION);
  };

  const speakOutro = () => {
    speak(OUTRO_NARRATION);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const toggleNarration = () => {
    if (isNarrationEnabled) {
      stop();
    }
    setIsNarrationEnabled(!isNarrationEnabled);
  };

  const testSpeak = () => {
    speak("Audio test. If you can hear this clearly, audio is working correctly.");
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return {
    isNarrationEnabled,
    isSpeaking,
    voices,
    selectedVoice,
    setSelectedVoice,
    isReady,
    speak,
    speakStage,
    speakIntro,
    speakOutro,
    stop,
    toggleNarration,
    testSpeak,
  };
}
