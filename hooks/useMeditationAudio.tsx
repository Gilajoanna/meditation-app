import { Audio } from "expo-av";
import { useState } from "react";

const useMeditationAudio = (audioFileName: any) => {
  const [audioSound, setAudioSound] = useState<Audio.Sound>();
  const [isAudioPlaying, setAudioPlaying] = useState(false);

  const initializeAudioSound = async () => {
    const { sound } = await Audio.Sound.createAsync(audioFileName);

    setAudioSound(sound);
    //console.log("Here the sound is initialized:", sound);
    return sound;
  };

  const toggleAudioSound = async () => {
    const sound = audioSound ? audioSound : await initializeAudioSound();
    const status = await sound.getStatusAsync();

    if (status.isLoaded && !isAudioPlaying) {
      await sound.playAsync();
      setAudioPlaying(true);
    } else {
      await sound.pauseAsync();
      setAudioPlaying(false);
    }
  };

  return {
    toggleAudioSound,
    isAudioPlaying,
    audioSound,
    setAudioPlaying,
  };
};

export default useMeditationAudio;
